import { motion } from 'framer-motion';
import { Target, Users, Zap, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    const stats = [
        { label: 'Years of Innovation', value: '10+', icon: <Zap size={20} /> },
        { label: 'Global Clients', value: '100+', icon: <Users size={20} /> },
        { label: 'Solutions Delivered', value: '250+', icon: <Target size={20} /> },
        { label: 'Certifications', value: '15+', icon: <Award size={20} /> },
    ];

    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    {/* Visual Side */}
                    <motion.div 
                        className="about-visual"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="image-stack">
                            <div className="main-image-container">
                                <img 
                                    src="https://images.unsplash.com/photo-1522071823991-b99c223c7483?q=80&w=1200&auto=format&fit=crop" 
                                    alt="Team collaborating" 
                                    className="main-image"
                                />
                                <div className="image-overlay"></div>
                            </div>
                            <div className="experience-badge glass">
                                <span className="exp-number">10+</span>
                                <span className="exp-text">Years of <br />Engineering Excellence</span>
                            </div>
                        </div>
                        <div className="stats-grid-new">
                            {stats.map((stat, i) => (
                                <div key={i} className="stat-item-new">
                                    <div className="stat-icon-wrapper">{stat.icon}</div>
                                    <div className="stat-info">
                                        <h4 className="stat-val">{stat.value}</h4>
                                        <p className="stat-lab">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div 
                        className="about-content-new"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="badge-accent">Our Journey & Vision</span>
                        <h2 className="section-title">
                            Engineering Intelligence for <span className="text-gradient">Global Transformation</span>
                        </h2>
                        <p className="about-lead">
                            Vir Softech is a premier technology company specializing in Imaging, Computer Vision, 
                            and Enterprise Content Management solutions. 
                        </p>
                        <p className="about-text">
                            With dual headquarters in <strong>Noida, India</strong> and <strong>Tokyo, Japan</strong>, 
                            we bridge the gap between high-end innovation and cost-effective execution. 
                            Our team of engineers and visionaries work tirelessly to build products that 
                            revolutionize how businesses handle digital assets and assessment ecosystems.
                        </p>

                        <div className="about-checklist">
                            <div className="check-item">
                                <CheckCircle2 size={20} className="text-accent" />
                                <div>
                                    <h5>Product-First Mindset</h5>
                                    <p>We build scalable products like vsDox and eVAL from the ground up.</p>
                                </div>
                            </div>
                            <div className="check-item">
                                <CheckCircle2 size={20} className="text-accent" />
                                <div>
                                    <h5>Cross-Border Synergy</h5>
                                    <p>Harnessing the technological precision of Japan and the engineering scale of India.</p>
                                </div>
                            </div>
                        </div>

                        <div className="about-actions">
                            <Link to="/about" className="btn btn-primary">
                                More About Our Story
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                .about-section {
                    padding: var(--spacing-xl) 0;
                    background: var(--white);
                    position: relative;
                }

                .about-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 5rem;
                    align-items: center;
                }

                .about-visual {
                    position: relative;
                }

                .image-stack {
                    position: relative;
                    margin-bottom: 3rem;
                }

                .main-image-container {
                    border-radius: var(--radius-xl);
                    overflow: hidden;
                    box-shadow: var(--shadow-xl);
                    position: relative;
                }

                .main-image {
                    width: 100%;
                    height: 450px;
                    object-fit: cover;
                    display: block;
                }

                .image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to bottom, transparent, rgba(15, 23, 42, 0.4));
                }

                .experience-badge {
                    position: absolute;
                    bottom: -30px;
                    right: -30px;
                    padding: 2rem;
                    border-radius: var(--radius-lg);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    z-index: 10;
                    background: rgba(255, 255, 255, 0.9);
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                }

                .exp-number {
                    font-size: 3rem;
                    font-weight: 900;
                    color: var(--secondary);
                    line-height: 1;
                }

                .exp-text {
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: var(--primary);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-top: 0.5rem;
                }

                .stats-grid-new {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-top: 2rem;
                }

                .stat-item-new {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1.25rem;
                    border-radius: var(--radius-md);
                    background: var(--background-alt);
                    transition: var(--transition-fast);
                }

                .stat-item-new:hover {
                    background: var(--white);
                    box-shadow: var(--shadow-md);
                }

                .stat-icon-wrapper {
                    width: 44px;
                    height: 44px;
                    border-radius: var(--radius-sm);
                    background: var(--white);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--secondary);
                    box-shadow: var(--shadow-sm);
                }

                .stat-val {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--primary);
                    margin: 0;
                }

                .stat-lab {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    font-weight: 600;
                    margin: 0;
                }

                .about-lead {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: var(--primary);
                    margin-bottom: 1.5rem;
                }

                .about-text {
                    color: var(--text-muted);
                    line-height: 1.8;
                    margin-bottom: 2rem;
                }

                .about-checklist {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    margin-bottom: 3rem;
                }

                .check-item {
                    display: flex;
                    gap: 1rem;
                }

                .check-item h5 {
                    font-size: 1.1rem;
                    margin-bottom: 0.25rem;
                }

                .check-item p {
                    font-size: 0.95rem;
                    color: var(--text-light);
                    margin: 0;
                }

                .text-accent {
                    color: var(--accent);
                    flex-shrink: 0;
                }

                @media (max-width: 1024px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: 4rem;
                    }
                    .about-visual {
                        order: 2;
                    }
                    .experience-badge {
                        right: 20px;
                        bottom: -20px;
                    }
                }

                @media (max-width: 640px) {
                    .stats-grid-new {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
