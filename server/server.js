import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key_change_in_production';

app.use(cors());
app.use(express.json());

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token.' });
        req.user = user;
        next();
    });
};

// --- AUTHENTICATION ROUTES ---

// Initial setup route to create the first admin (Disable in production!)
app.post('/api/setup', async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingAdmin = await prisma.admin.findUnique({ where: { email } });
        
        if (existingAdmin) {
            return res.status(400).json({ error: 'Admin already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = await prisma.admin.create({
            data: { email, password: hashedPassword }
        });

        res.status(201).json({ message: 'Admin created successfully', adminId: admin.id });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const admin = await prisma.admin.findUnique({ where: { email } });
        if (!admin) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const validPassword = await bcrypt.compare(password, admin.password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: admin.id, email: admin.email }, JWT_SECRET, { expiresIn: '24h' });
        res.json({ token, email: admin.email });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// --- BLOG ROUTES ---

// Get all blogs (Public access)
app.get('/api/blogs', async (req, res) => {
    try {
        const blogs = await prisma.blog.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch blogs' });
    }
});

// Create a new blog (Protected)
app.post('/api/blogs', authenticateToken, async (req, res) => {
    try {
        const { title, content, published, coverImage } = req.body;
        const newBlog = await prisma.blog.create({
            data: {
                title,
                content,
                coverImage,
                published: published || false
            }
        });
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create blog' });
    }
});

// Update a blog (Protected)
app.put('/api/blogs/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, published, coverImage } = req.body;
        
        const updatedBlog = await prisma.blog.update({
            where: { id: parseInt(id) },
            data: { title, content, published, coverImage }
        });
        res.json(updatedBlog);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update blog' });
    }
});

// Delete a blog (Protected)
app.delete('/api/blogs/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.blog.delete({
            where: { id: parseInt(id) }
        });
        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete blog' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
