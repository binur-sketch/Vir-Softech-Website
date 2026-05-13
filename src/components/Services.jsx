import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Monitor, BookOpen, Printer, PenTool, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { solutions } from '../data/solutions';

const Services = () => {
    // Map icons to solution slugs or titles
    const getIcon = (slug) => {
        switch (slug) {
            case 'enterprise-content-management': return <Database size={32} />;
            case 'eval-educational-solution-suite': return <BookOpen size={32} />;
            case 'print-product-engineering': return <Printer size={32} />;
            case 'custom-product-engineering': return <Monitor size={32} />;
            case 'design-artwork-automation': return <PenTool size={32} />;
            default: return <Monitor size={32} />;
        }
    };

    return (
        <section className="services-new" id="services">
            <div className="container">
                <div className="section-header-new">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="badge-accent"
                    >
                        Our Core Expertise
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="section-title"
                    >
                        Comprehensive <span className="text-gradient">Solutions</span> for <br />
                        Modern Enterprises
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="section-subtitle"
                    >
                        From intelligent content management to automated artwork generation, 
                        we engineer the tools that drive global business growth.
                    </motion.p>
                </div>

                <div className="services-grid-new">
                    {solutions.map((service, index) => (
                        <motion.div
                            key={service.slug}
                            className="service-card-new"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="card-inner">
                                <div className="card-icon-wrapper">
                                    <div className="icon-bg"></div>
                                    <div className="icon-main">{getIcon(service.slug)}</div>
                                </div>
                                
                                <div className="card-content">
                                    <h3 className="card-title">{service.title}</h3>
                                    <p className="card-description">{service.description}</p>
                                    
                                    <ul className="card-features">
                                        {service.features.slice(0, 3).map((feature, i) => (
                                            <li key={i}>
                                                <CheckCircle2 size={16} className="feature-icon" />
                                                <span>{feature.split(':')[0]}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="card-footer">
                                    <Link to={`/solutions/${service.slug}`} className="learn-more-link">
                                        Explore Solution <ArrowUpRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="services-cta">
                    <Link to="/solutions" className="btn btn-secondary">
                        View All Specialized Services
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .services-new {
                    padding: var(--spacing-xl) 0;
                    background: var(--background-alt);
                    position: relative;
                }

                .section-header-new {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .badge-accent {
                    display: inline-block;
                    padding: 0.5rem 1.25rem;
                    background: rgba(99, 102, 241, 0.1);
                    color: var(--secondary);
                    border-radius: var(--radius-full);
                    font-weight: 700;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 1.5rem;
                }

                .section-title {
                    margin-bottom: 1.5rem;
                }

                .section-subtitle {
                    max-width: 700px;
                    margin: 0 auto;
                    color: var(--text-muted);
                    font-size: 1.15rem;
                }

                .services-grid-new {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 2rem;
                    margin-bottom: 4rem;
                }

                .service-card-new {
                    background: var(--white);
                    border-radius: var(--radius-xl);
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    transition: var(--transition-normal);
                    height: 100%;
                    overflow: hidden;
                }

                .service-card-new:hover {
                    transform: translateY(-10px);
                    box-shadow: var(--shadow-xl);
                    border-color: var(--accent);
                }

                .card-inner {
                    padding: 2.5rem;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .card-icon-wrapper {
                    position: relative;
                    width: 64px;
                    height: 64px;
                    margin-bottom: 2rem;
                }

                .icon-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: var(--gradient-accent);
                    opacity: 0.1;
                    border-radius: 16px;
                    transform: rotate(-10deg);
                    transition: var(--transition-normal);
                }

                .service-card-new:hover .icon-bg {
                    transform: rotate(0deg);
                    opacity: 0.2;
                }

                .icon-main {
                    position: relative;
                    z-index: 2;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--secondary);
                }

                .card-title {
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                    color: var(--primary);
                }

                .card-description {
                    color: var(--text-muted);
                    font-size: 1rem;
                    line-height: 1.6;
                    margin-bottom: 2rem;
                }

                .card-features {
                    list-style: none;
                    margin-bottom: 2.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .card-features li {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: var(--text);
                }

                .feature-icon {
                    color: var(--success);
                }

                .card-footer {
                    margin-top: auto;
                    padding-top: 2rem;
                    border-top: 1px solid var(--background-alt);
                }

                .learn-more-link {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 700;
                    color: var(--secondary);
                    font-size: 0.95rem;
                }

                .learn-more-link:hover {
                    color: var(--accent-hover);
                }

                .services-cta {
                    text-align: center;
                }

                @media (max-width: 768px) {
                    .services-grid-new {
                        grid-template-columns: 1fr;
                    }
                    .service-card-new {
                        max-width: 450px;
                        margin: 0 auto;
                    }
                }
            `}</style>
        </section>
    );
};

export default Services;
