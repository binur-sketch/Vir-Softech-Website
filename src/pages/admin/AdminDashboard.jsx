import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit2, Trash2, LogOut, FileText, Image as ImageIcon } from 'lucide-react';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([
        { id: 1, title: 'The Future of ECM', published: true, date: '2026-05-20', coverImage: null },
        { id: 2, title: 'Automating Artwork Generation', published: false, date: '2026-05-22', coverImage: null }
    ]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ title: '', content: '', coverImage: null });
    const [imagePreview, setImagePreview] = useState(null);

    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/');
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, coverImage: file });
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePublish = (e) => {
        e.preventDefault();
        
        if (editingId) {
            // Update existing blog
            setBlogs(blogs.map(blog => 
                blog.id === editingId 
                    ? { ...blog, title: formData.title, content: formData.content, coverImage: imagePreview || blog.coverImage } 
                    : blog
            ));
        } else {
            // Create new blog
            const newBlog = {
                id: blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) + 1 : 1,
                title: formData.title,
                content: formData.content,
                published: true,
                date: new Date().toISOString().split('T')[0],
                coverImage: imagePreview
            };
            setBlogs([newBlog, ...blogs]);
        }

        resetForm();
    };

    const handleEdit = (blog) => {
        setFormData({ title: blog.title, content: blog.content || '', coverImage: blog.coverImage });
        setImagePreview(blog.coverImage);
        setEditingId(blog.id);
        setShowForm(true);
        window.scrollTo(0, 0);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this blog post?")) {
            setBlogs(blogs.filter(blog => blog.id !== id));
        }
    };

    const resetForm = () => {
        setShowForm(false);
        setEditingId(null);
        setFormData({ title: '', content: '', coverImage: null });
        setImagePreview(null);
    };

    return (
        <div className="dashboard-container">
            <aside className="dashboard-sidebar">
                <div className="sidebar-header">
                    <h2>Admin Panel</h2>
                </div>
                <nav className="sidebar-nav">
                    <button className="nav-item active"><FileText size={18} /> Manage Blogs</button>
                    <button className="nav-item text-danger" onClick={handleLogout}><LogOut size={18} /> Logout</button>
                </nav>
            </aside>

            <main className="dashboard-main">
                <div className="main-header">
                    <h1>Blog Posts</h1>
                    <button className="btn btn-primary" onClick={() => {
                        resetForm();
                        setShowForm(true);
                    }}>
                        <Plus size={18} /> Add New Blog
                    </button>
                </div>

                {showForm && (
                    <div className="card add-blog-form">
                        <h3>{editingId ? 'Edit Post' : 'Create New Post'}</h3>
                        <form onSubmit={handlePublish}>
                            <div className="form-group">
                                <label>Post Title</label>
                                <input 
                                    type="text" 
                                    value={formData.title}
                                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                                    required 
                                    placeholder="Enter blog title..."
                                />
                            </div>

                            <div className="form-group">
                                <label>Cover Image</label>
                                <div className="image-upload-wrapper">
                                    <input 
                                        type="file" 
                                        accept="image/*" 
                                        onChange={handleImageChange}
                                        className="file-input"
                                        id="coverImageUpload"
                                    />
                                    <label htmlFor="coverImageUpload" className="upload-label">
                                        <ImageIcon size={20} />
                                        <span>{formData.coverImage ? formData.coverImage.name : "Choose an image..."}</span>
                                    </label>
                                </div>
                                {imagePreview && (
                                    <div className="image-preview">
                                        <img src={imagePreview} alt="Preview" />
                                    </div>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Content (Markdown/HTML)</label>
                                <textarea 
                                    rows="10" 
                                    value={formData.content}
                                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                                    required
                                    placeholder="Write your blog post here..."
                                ></textarea>
                            </div>
                            <div className="form-actions">
                                <button type="button" className="btn btn-outline" onClick={resetForm}>Cancel</button>
                                <button type="submit" className="btn btn-primary">{editingId ? 'Update Post' : 'Publish Post'}</button>
                            </div>
                        </form>
                    </div>
                )}

                <div className="card blogs-table-card">
                    <table className="blogs-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map(blog => (
                                <tr key={blog.id}>
                                    <td>
                                        {blog.coverImage ? (
                                            <img src={blog.coverImage} alt="Cover" className="table-img" />
                                        ) : (
                                            <div className="table-img-placeholder"><ImageIcon size={16} /></div>
                                        )}
                                    </td>
                                    <td className="font-bold">{blog.title}</td>
                                    <td>
                                        <span className={`status-badge ${blog.published ? 'published' : 'draft'}`}>
                                            {blog.published ? 'Published' : 'Draft'}
                                        </span>
                                    </td>
                                    <td>{blog.date}</td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="icon-btn edit" onClick={() => handleEdit(blog)} title="Edit"><Edit2 size={16} /></button>
                                            <button className="icon-btn delete" onClick={() => handleDelete(blog.id)} title="Delete"><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            <style jsx>{`
                .dashboard-container {
                    display: flex;
                    min-height: 100vh;
                    background: #f8fafc;
                }

                .dashboard-sidebar {
                    width: 250px;
                    background: #0f172a;
                    color: white;
                    display: flex;
                    flex-direction: column;
                }

                .sidebar-header {
                    padding: 2rem;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                }

                .sidebar-header h2 {
                    color: white;
                    font-size: 1.5rem;
                }

                .sidebar-nav {
                    padding: 1.5rem 1rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .nav-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1rem;
                    background: transparent;
                    border: none;
                    color: rgba(255,255,255,0.7);
                    font-size: 1rem;
                    font-weight: 500;
                    cursor: pointer;
                    border-radius: var(--radius-md);
                    transition: all 0.2s;
                    text-align: left;
                }

                .nav-item:hover, .nav-item.active {
                    background: rgba(255,255,255,0.1);
                    color: white;
                }

                .nav-item.text-danger:hover {
                    background: rgba(239, 68, 68, 0.1);
                    color: #ef4444;
                }

                .dashboard-main {
                    flex: 1;
                    padding: 3rem;
                }

                .main-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2.5rem;
                }

                .main-header h1 {
                    font-size: 2rem;
                    color: #0f172a;
                }

                .add-blog-form {
                    margin-bottom: 2.5rem;
                    background: white;
                }

                .add-blog-form h3 {
                    margin-bottom: 1.5rem;
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                .form-group label {
                    display: block;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                }

                .form-group input[type="text"], .form-group textarea {
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #e2e8f0;
                    border-radius: var(--radius-md);
                    font-family: inherit;
                }

                .form-group input:focus, .form-group textarea:focus {
                    outline: none;
                    border-color: var(--primary);
                }

                .image-upload-wrapper {
                    position: relative;
                    margin-bottom: 1rem;
                }

                .file-input {
                    display: none;
                }

                .upload-label {
                    display: inline-flex !important;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.75rem 1.5rem;
                    background: #f1f5f9;
                    border: 1px dashed #cbd5e1;
                    border-radius: var(--radius-md);
                    cursor: pointer;
                    color: var(--text-muted);
                    font-weight: 500 !important;
                    transition: all 0.2s ease;
                }

                .upload-label:hover {
                    background: #e2e8f0;
                    border-color: var(--primary);
                    color: var(--primary);
                }

                .image-preview {
                    margin-top: 1rem;
                    max-width: 300px;
                    border-radius: var(--radius-md);
                    overflow: hidden;
                    border: 1px solid #e2e8f0;
                }

                .image-preview img {
                    width: 100%;
                    height: auto;
                    display: block;
                    object-fit: cover;
                }

                .form-actions {
                    display: flex;
                    gap: 1rem;
                    justify-content: flex-end;
                }

                .blogs-table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .blogs-table th, .blogs-table td {
                    padding: 1rem;
                    text-align: left;
                    border-bottom: 1px solid #e2e8f0;
                    vertical-align: middle;
                }

                .blogs-table th {
                    font-weight: 600;
                    color: var(--text-muted);
                    background: #f8fafc;
                }

                .table-img {
                    width: 48px;
                    height: 32px;
                    border-radius: 4px;
                    object-fit: cover;
                }

                .table-img-placeholder {
                    width: 48px;
                    height: 32px;
                    border-radius: 4px;
                    background: #f1f5f9;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #94a3b8;
                }

                .font-bold {
                    font-weight: 600;
                    color: var(--text);
                }

                .status-badge {
                    padding: 0.25rem 0.75rem;
                    border-radius: 50px;
                    font-size: 0.8rem;
                    font-weight: 600;
                }

                .status-badge.published {
                    background: #dcfce7;
                    color: #166534;
                }

                .status-badge.draft {
                    background: #fef9c3;
                    color: #854d0e;
                }

                .action-buttons {
                    display: flex;
                    gap: 0.5rem;
                }

                .icon-btn {
                    background: #f1f5f9;
                    border: none;
                    width: 32px;
                    height: 32px;
                    border-radius: var(--radius-sm);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .icon-btn.edit { color: #3b82f6; }
                .icon-btn.edit:hover { background: #dbeafe; }

                .icon-btn.delete { color: #ef4444; }
                .icon-btn.delete:hover { background: #fee2e2; }
            `}</style>
        </div>
    );
};

export default AdminDashboard;
