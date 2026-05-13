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
                                className="solution-item-card card"
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
                                                <CheckCircle2 size={16} className="text-accent" />
                                                <span>{feature.split(':')[0]}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="solution-card-footer">
                                        <Link to={`/solutions/${solution.slug}`} className="btn btn-primary-outline">
                                            Learn More <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>

                                {solution.subItems && (
                                    <div className="solution-card-subitems glass">
                                        <h4 className="subitems-title">EVAL Suite Includes:</h4>
                                        <div className="subitems-list">
                                            {solution.subItems.map(sub => (
                                                <Link key={sub.slug} to={`/solutions/${sub.slug}`} className="sub-pill">
                                                    {sub.title}
                                                </Link>
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
                    gap: 3rem;
                }

                .solution-item-card {
                    display: flex;
                    flex-direction: column;
                    padding: 0;
                    border: none;
                    background: var(--white);
                    overflow: hidden;
                    height: 100%;
                }

                .solution-card-body {
                    padding: 3rem;
                    flex: 1;
                }

                .solution-card-title {
                    font-size: 2rem;
                    margin-bottom: 1.5rem;
                    color: var(--primary);
                }

                .solution-card-desc {
                    font-size: 1.1rem;
                    color: var(--text-muted);
                    margin-bottom: 2rem;
                    line-height: 1.6;
                }

                .solution-features-mini {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                    margin-bottom: 2.5rem;
                }

                .mini-feature {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--text);
                }

                .solution-card-subitems {
                    padding: 2rem 3rem;
                    background: rgba(99, 102, 241, 0.03);
                    border-top: 1px solid rgba(0, 0, 0, 0.05);
                }

                .subitems-title {
                    font-size: 0.85rem;
                    font-weight: 800;
                    color: var(--secondary);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 1rem;
                }

                .subitems-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }

                .sub-pill {
                    padding: 0.5rem 1rem;
                    background: var(--white);
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    border-radius: var(--radius-full);
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--text-muted);
                    transition: var(--transition-fast);
                }

                .sub-pill:hover {
                    border-color: var(--secondary);
                    color: var(--secondary);
                    transform: translateY(-2px);
                }

                .btn-primary-outline {
                    border: 2px solid var(--secondary);
                    color: var(--secondary);
                    background: transparent;
                    padding: 0.75rem 2rem;
                    border-radius: var(--radius-md);
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: var(--transition-normal);
                }

                .btn-primary-outline:hover {
                    background: var(--secondary);
                    color: white;
                }

                @media (max-width: 1024px) {
                    .solutions-grid-large {
                        grid-template-columns: 1fr;
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
