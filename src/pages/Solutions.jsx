import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { solutions } from '../data/solutions';
import PageHero from '../components/PageHero';

const Solutions = () => {
    return (
        <div className="page-solutions">
            <PageHero 
                title="Our Expert Solutions"
                subtitle="Technological excellence tailored for your enterprise needs across various sectors."
                bgImage="https://images.unsplash.com/photo-1454165833467-03a669d96971?q=80&w=2400&auto=format&fit=crop"
            />

            <section className="section solutions-list">
                <div className="container">
                    <div className="solutions-grid-large">
                        {solutions.map((solution, index) => (
                            <motion.div 
                                key={solution.slug}
                                className="solution-item-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="solution-card-body">
                                    <h3 className="solution-card-title">{solution.title}</h3>
                                    <p className="solution-card-desc">{solution.description}</p>
                                    
                                    <div className="solution-features-mini">
                                        {solution.features.slice(0, 3).map((feature, i) => (
                                            <div key={i} className="mini-feature">
                                                <CheckCircle2 size={18} className="feature-icon" />
                                                <span>{feature.split(':')[0]}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="solution-card-footer">
                                        {solution.externalLink ? (
                                            <a href={solution.externalLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                                Learn More <ArrowRight size={18} />
                                            </a>
                                        ) : (
                                            <Link to={`/solutions/${solution.slug}`} className="btn btn-primary">
                                                Learn More <ArrowRight size={18} />
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                {solution.subItems && (
                                    <div className="solution-card-subitems">
                                        <h4 className="subitems-title">Comprehensive Suite Includes:</h4>
                                        <div className="subitems-list">
                                            {solution.subItems.map(sub => (
                                                sub.externalLink ? (
                                                    <a key={sub.slug} href={sub.externalLink} target="_blank" rel="noopener noreferrer" className="sub-pill">
                                                        {sub.title}
                                                    </a>
                                                ) : (
                                                    <Link key={sub.slug} to={`/solutions/${sub.slug}`} className="sub-pill">
                                                        {sub.title}
                                                    </Link>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .solutions-list {
                    background: var(--background-alt);
                    padding: var(--spacing-xl) 0;
                }

                .solutions-grid-large {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
                    gap: 4rem;
                }

                .solution-item-card {
                    display: flex;
                    flex-direction: column;
                    background: var(--white);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    height: 100%;
                    box-shadow: var(--shadow-lg);
                    border: 1px solid rgba(13, 148, 136, 0.05);
                    transition: var(--transition-normal);
                }

                .solution-item-card:hover {
                    transform: translateY(-10px);
                    box-shadow: var(--shadow-xl);
                    border-color: var(--accent);
                }

                .solution-card-body {
                    padding: 4rem;
                    flex: 1;
                }

                .solution-card-title {
                    font-size: 2.25rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    color: var(--primary);
                    font-family: var(--font-heading);
                }

                .solution-card-desc {
                    font-size: 1.2rem;
                    color: var(--text-muted);
                    margin-bottom: 2.5rem;
                    line-height: 1.7;
                }

                .solution-features-mini {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-bottom: 3rem;
                }

                .mini-feature {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--text);
                }

                .feature-icon {
                    color: var(--accent);
                }

                .solution-card-subitems {
                    padding: 3rem 4rem;
                    background: var(--background-alt);
                    border-top: 1px solid rgba(13, 148, 136, 0.1);
                }

                .subitems-title {
                    font-size: 0.95rem;
                    font-weight: 800;
                    color: var(--primary);
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    margin-bottom: 1.5rem;
                }

                .subitems-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .sub-pill {
                    padding: 0.6rem 1.25rem;
                    background: var(--white);
                    border: 1px solid rgba(13, 148, 136, 0.1);
                    border-radius: var(--radius-full);
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: var(--primary);
                    transition: var(--transition-normal);
                }

                .sub-pill:hover {
                    background: var(--accent);
                    border-color: var(--accent);
                    color: var(--primary);
                    transform: translateY(-3px);
                }

                @media (max-width: 1024px) {
                    .solutions-grid-large {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                    .solution-card-body {
                        padding: 3rem;
                    }
                    .solution-card-subitems {
                        padding: 2.5rem 3rem;
                    }
                }

                @media (max-width: 640px) {
                    .solution-card-body {
                        padding: 2rem;
                    }
                    .solution-card-subitems {
                        padding: 2rem;
                    }
                    .solution-features-mini {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Solutions;
