import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';

const Blog = () => {
    const posts = [
        {
            title: "The Future of ECM in Higher Education",
            date: "May 15, 2024",
            category: "Enterprise",
            excerpt: "Discover how intelligent content management is transforming university administration and student record keeping.",
            image: "https://images.unsplash.com/photo-1523050335392-9bc5675e0971?q=80&w=800&auto=format&fit=crop",
            slug: "future-of-ecm"
        },
        {
            title: "Artwork Automation: Scaling Your Design Operations",
            date: "April 28, 2024",
            category: "Automation",
            excerpt: "Learn how global CPG brands are reducing design cycle times by up to 70% using custom Adobe CC plugins.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
            slug: "automating-packaging-artwork"
        },
        {
            title: "Securing Digital Examinations in the AI Era",
            date: "April 10, 2024",
            category: "Education",
            excerpt: "A deep dive into the security measures that ensure integrity in high-stakes computer-based testing.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
            slug: "secure-on-screen-marking"
        }
    ];

    return (
        <div className="page-blog">
            <PageHero 
                title="Knowledge Hub"
                subtitle="Insights, trends, and innovation updates from our global engineering teams."
                bgImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2400&auto=format&fit=crop"
            />

            <section className="section blog-list-full">
                <div className="container">
                    <div className="blog-grid-modern">
                        {posts.map((post, index) => (
                            <motion.article 
                                key={index} 
                                className="blog-card-modern card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="post-thumb">
                                    <img src={post.image} alt={post.title} />
                                    <span className="post-category">{post.category}</span>
                                </div>
                                <div className="post-content-new">
                                    <div className="post-meta-new">
                                        <span className="meta-item"><Calendar size={14} /> {post.date}</span>
                                        <span className="meta-item"><User size={14} /> Vir Editor</span>
                                    </div>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <Link to={`/blog/${post.slug}`} className="blog-link-more">
                                        Read More <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .blog-list-full {
                    background: var(--background-alt);
                    padding: var(--spacing-xl) 0;
                }

                .blog-grid-modern {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 3rem;
                }

                .blog-card-modern {
                    padding: 0;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    border: none;
                    background: var(--white);
                }

                .blog-card-modern:hover {
                    transform: translateY(-10px);
                    box-shadow: var(--shadow-xl);
                }

                .post-thumb {
                    position: relative;
                    height: 240px;
                    overflow: hidden;
                }

                .post-thumb img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .blog-card-modern:hover .post-thumb img {
                    transform: scale(1.1);
                }

                .post-category {
                    position: absolute;
                    top: 1.5rem;
                    left: 1.5rem;
                    background: var(--secondary);
                    color: white;
                    padding: 0.4rem 1rem;
                    border-radius: var(--radius-sm);
                    font-size: 0.75rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .post-content-new {
                    padding: 2.5rem;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }

                .post-meta-new {
                    display: flex;
                    gap: 1.5rem;
                    margin-bottom: 1.25rem;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.85rem;
                    color: var(--text-light);
                    font-weight: 600;
                }

                .post-content-new h3 {
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                    line-height: 1.4;
                    color: var(--primary);
                }

                .post-content-new p {
                    color: var(--text-muted);
                    font-size: 1rem;
                    line-height: 1.6;
                    margin-bottom: 2rem;
                    flex: 1;
                }

                .blog-link-more {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 800;
                    color: var(--secondary);
                    font-size: 0.95rem;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                @media (max-width: 768px) {
                    .blog-grid-modern {
                        grid-template-columns: 1fr;
                        max-width: 450px;
                        margin: 0 auto;
                    }
                }
            `}</style>
        </div>
    );
};

export default Blog;
