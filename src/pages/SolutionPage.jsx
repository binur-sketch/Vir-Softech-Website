import { useParams, Link } from 'react-router-dom';
import { getSolutionBySlug, getAllSolutions } from '../data/solutions';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, ArrowRight, MessageSquare, Download, Share2 } from 'lucide-react';
import PageHero from '../components/PageHero';

const SolutionPage = () => {
    const { slug } = useParams();
    const solution = getSolutionBySlug(slug);

    useEffect(() => {
        if (solution && solution.externalLink) {
            window.location.href = solution.externalLink;
        }
        window.scrollTo(0, 0);
    }, [slug, solution]);

    if (!solution) {
        return (
            <div className="container section">
                <PageHero 
                    title="Solution Not Found" 
                    subtitle="The requested solution could not be located in our system."
                />
                <div className="error-actions">
                    <Link to="/solutions" className="btn btn-primary">
                        <ArrowLeft size={18} /> Back to Solutions
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="page-solution-detail">
            <PageHero 
                title={solution.title}
                subtitle={solution.description}
            />

            <section className="section solution-content">
                <div className="container">
                    <div className="solution-layout">
                        {/* Main Content Area */}
                        <div className="solution-main">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="content-block"
                            >
                                <h2 className="content-title">Overview</h2>
                                <p className="lead-text">{solution.longDescription || solution.content}</p>
                            </motion.div>

                            {solution.features && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="content-block"
                                >
                                    <h2 className="content-title">Key Capabilities</h2>
                                    <div className="features-grid-detail">
                                        {solution.features.map((feature, idx) => (
                                            <div key={idx} className="feature-detail-card glass">
                                                <div className="feature-icon-circle">
                                                    <CheckCircle2 size={20} className="text-success" />
                                                </div>
                                                <p className="feature-text">{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {solution.benefits && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="content-block"
                                >
                                    <h2 className="content-title">Business Benefits</h2>
                                    <div className="benefits-list-detail">
                                        {solution.benefits.map((benefit, idx) => (
                                            <div key={idx} className="benefit-detail-item">
                                                <div className="benefit-marker"></div>
                                                <p>{benefit}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {solution.subItems && (
                                <div className="content-block subitems-block">
                                    <h2 className="content-title">Explore the Suite</h2>
                                    <div className="subitems-grid">
                                        {solution.subItems.map(sub => (
                                            <Link key={sub.slug} to={`/solutions/${sub.slug}`} className="subitem-card-mini card">
                                                <h4>{sub.title}</h4>
                                                <p>{sub.description}</p>
                                                <div className="subitem-link">
                                                    Explore <ArrowRight size={14} />
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar Area */}
                        <aside className="solution-sidebar">
                            <div className="sidebar-card contact-cta card">
                                <div className="card-header-icon">
                                    <MessageSquare size={32} className="text-secondary" />
                                </div>
                                <h3>Interested in {solution.title}?</h3>
                                <p>Get a personalized demo tailored to your organization's needs.</p>
                                <Link to="/contact" className="btn btn-primary w-full">Request a Demo</Link>
                            </div>

                            <div className="sidebar-links card">
                                <h3>Resources</h3>
                                <ul className="resource-list">
                                    <li><a href="#"><Download size={18} /> Product Brochure</a></li>
                                    <li><a href="#"><Download size={18} /> Technical Specs</a></li>
                                    <li><a href="#"><Share2 size={18} /> Case Study</a></li>
                                </ul>
                            </div>

                            <div className="sidebar-nav card">
                                <h3>Other Solutions</h3>
                                <div className="sidebar-nav-links">
                                    {getAllSolutions().filter(s => s.slug !== slug).map(s => (
                                        s.externalLink ? (
                                            <a key={s.slug} href={s.externalLink} target="_blank" rel="noopener noreferrer">{s.title}</a>
                                        ) : (
                                            <Link key={s.slug} to={`/solutions/${s.slug}`}>{s.title}</Link>
                                        )
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .solution-layout {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 4rem;
                    align-items: start;
                }

                .content-block {
                    margin-bottom: 4rem;
                }

                .content-title {
                    font-size: 1.75rem;
                    margin-bottom: 2rem;
                    color: var(--primary);
                    position: relative;
                    padding-bottom: 1rem;
                }

                .content-title::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 50px;
                    height: 3px;
                    background: var(--gradient-accent);
                    border-radius: var(--radius-full);
                }

                .lead-text {
                    font-size: 1.15rem;
                    line-height: 1.8;
                    color: var(--text-muted);
                }

                .features-grid-detail {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }

                .feature-detail-card {
                    padding: 1.5rem;
                    border-radius: var(--radius-lg);
                    background: var(--white);
                    border: 1px solid var(--background-alt);
                    display: flex;
                    gap: 1rem;
                }

                .feature-icon-circle {
                    width: 32px;
                    height: 32px;
                    background: rgba(16, 185, 129, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .feature-text {
                    font-size: 0.95rem;
                    color: var(--text);
                    font-weight: 500;
                    line-height: 1.5;
                }

                .benefits-list-detail {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                }

                .benefit-detail-item {
                    display: flex;
                    align-items: start;
                    gap: 1.25rem;
                    padding: 1.5rem;
                    background: var(--background-alt);
                    border-radius: var(--radius-md);
                }

                .benefit-marker {
                    width: 6px;
                    height: 6px;
                    background: var(--secondary);
                    border-radius: 50%;
                    margin-top: 0.65rem;
                    flex-shrink: 0;
                }

                .benefit-detail-item p {
                    margin: 0;
                    font-size: 1rem;
                    color: var(--text);
                    font-weight: 500;
                }

                .subitems-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }

                .subitem-card-mini {
                    padding: 1.5rem;
                }

                .subitem-card-mini h4 {
                    font-size: 1.1rem;
                    margin-bottom: 0.5rem;
                    color: var(--primary);
                }

                .subitem-card-mini p {
                    font-size: 0.85rem;
                    color: var(--text-muted);
                    margin-bottom: 1rem;
                }

                .subitem-link {
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: var(--secondary);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .solution-sidebar {
                    position: sticky;
                    top: 120px;
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .sidebar-card {
                    padding: 2rem;
                }

                .contact-cta {
                    background: var(--primary);
                    color: white;
                    text-align: center;
                }

                .contact-cta h3 {
                    color: white;
                    margin-bottom: 1rem;
                }

                .contact-cta p {
                    color: rgba(255, 255, 255, 0.8);
                    margin-bottom: 2rem;
                }

                .card-header-icon {
                    margin-bottom: 1.5rem;
                }

                .sidebar-card h3 {
                    font-size: 1.25rem;
                    margin-bottom: 1.5rem;
                    color: var(--primary);
                }

                .contact-cta h3 {
                    color: white;
                }

                .resource-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .resource-list a {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    color: var(--text);
                    font-weight: 600;
                    font-size: 0.95rem;
                }

                .resource-list a:hover {
                    color: var(--secondary);
                }

                .sidebar-nav-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .sidebar-nav-links a {
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    padding-bottom: 0.5rem;
                    border-bottom: 1px solid var(--background-alt);
                }

                .sidebar-nav-links a:hover {
                    color: var(--secondary);
                }

                @media (max-width: 1024px) {
                    .solution-layout {
                        grid-template-columns: 1fr;
                    }
                    .solution-sidebar {
                        position: static;
                        order: 2;
                    }
                }

                @media (max-width: 640px) {
                    .features-grid-detail, .subitems-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default SolutionPage;
