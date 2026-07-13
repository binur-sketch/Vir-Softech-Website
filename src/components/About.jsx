import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award, ShieldCheck, Zap } from 'lucide-react';
import WavyDivider from './WavyDivider';

const About = () => {
    const stats = [
        { label: 'Years of Excellence', value: '10+', icon: <Award className="stat-icon" /> },
        { label: 'Global Clients', value: '200+', icon: <Users className="stat-icon" /> },
        { label: 'Projects Delivered', value: '500+', icon: <Zap className="stat-icon" /> }
    ];

    const values = [
        {
            title: "Innovation First",
            description: "We constantly push the boundaries of what's possible in imaging and digital transformation.",
            icon: <Lightbulb size={24} />
        },
        {
            title: "Integrity",
            description: "Building trust through transparency and unwavering commitment to quality.",
            icon: <ShieldCheck size={24} />
        },
        {
            title: "Customer Success",
            description: "Our solutions are engineered to ensure our partners achieve their strategic goals.",
            icon: <Users size={24} />
        }
    ];

    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="about-content"
                    >
                        <span className="badge-primary">Our Story</span>
                        <h2 className="section-title">Bridging <span className="text-accent">Technology</span> and Vision</h2>
                        <p className="about-text">
                            Founded in 2015, Vir Softech has emerged as a powerhouse in 
                            <strong> Imaging</strong>, <strong>Computer Vision</strong>, and 
                            <strong> Enterprise Content Management</strong>.
                        </p>
                        <p className="about-text">
                            With offices in India and Japan, we bridge the gap between complex 
                            engineering challenges and intuitive digital solutions, serving 
                            Fortune 500 companies and government institutions alike.
                        </p>
                        
                        <div className="stats-grid">
                            {stats.map((stat, i) => (
                                <div key={i} className="stat-card">
                                    <div className="stat-icon-wrapper">{stat.icon}</div>
                                    <div className="stat-info">
                                        <h3 className="stat-value">{stat.value}</h3>
                                        <p className="stat-label">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="about-image-container"
                    >
                        <div className="main-image-wrapper">
                            <img 
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                                alt="Team Collaboration" 
                                className="about-main-image"
                            />
                            <div className="image-accent-blob"></div>
                        </div>
                        
                        <div className="values-overlay-grid">
                            {values.map((val, i) => (
                                <div key={i} className="value-mini-card glass">
                                    <div className="value-icon">{val.icon}</div>
                                    <div>
                                        <h4>{val.title}</h4>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <WavyDivider position="bottom" color="var(--background-alt)" />

            <style jsx>{`
                .about-section {
                    padding: var(--spacing-xl) 0 160px;
                    background: var(--white);
                    position: relative;
                    overflow: hidden;
                }

                .about-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 6rem;
                    align-items: center;
                }

                .badge-primary {
                    display: inline-block;
                    padding: 0.6rem 1.5rem;
                    background: rgba(33, 158, 188, 0.1);
                    color: var(--primary-light);
                    border-radius: var(--radius-full);
                    font-weight: 700;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 2rem;
                }

                .section-title {
                    margin-bottom: 2rem;
                    color: var(--primary);
                    font-size: clamp(2.5rem, 5vw, 3.5rem);
                    line-height: 1.1;
                }

                .text-accent {
                    color: var(--accent);
                }

                .about-text {
                    font-size: 1.2rem;
                    color: var(--text-muted);
                    line-height: 1.8;
                    margin-bottom: 2rem;
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                    margin-top: 4rem;
                }

                .stat-card {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    padding: 2rem;
                    background: var(--background-alt);
                    border-radius: var(--radius-lg);
                    transition: var(--transition-normal);
                    border: 1px solid rgba(2, 48, 71, 0.05);
                }

                .stat-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg);
                    border-color: var(--accent);
                }

                .stat-icon-wrapper {
                    color: var(--primary);
                }

                .stat-value {
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--primary);
                    margin-bottom: 0.25rem;
                    font-family: var(--font-heading);
                }

                .stat-label {
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    font-weight: 600;
                }

                .about-image-container {
                    position: relative;
                }

                .main-image-wrapper {
                    position: relative;
                    z-index: 2;
                }

                .about-main-image {
                    width: 100%;
                    height: 550px;
                    object-fit: cover;
                    border-radius: var(--radius-xl);
                    box-shadow: var(--shadow-xl);
                }

                .image-accent-blob {
                    position: absolute;
                    top: -30px;
                    right: -30px;
                    width: 200px;
                    height: 200px;
                    background: var(--accent);
                    opacity: 0.2;
                    border-radius: 50%;
                    z-index: -1;
                    filter: blur(40px);
                }

                .values-overlay-grid {
                    position: absolute;
                    bottom: -40px;
                    left: -40px;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    max-width: 380px;
                    z-index: 10;
                }

                .value-mini-card {
                    display: flex;
                    gap: 1.25rem;
                    padding: 1.5rem;
                    border-radius: var(--radius-lg);
                    background: rgba(255, 255, 255, 0.85);
                    backdrop-filter: blur(20px);
                    box-shadow: var(--shadow-lg);
                    border: 1px solid rgba(255, 255, 255, 0.5);
                }

                .value-icon {
                    width: 48px;
                    height: 48px;
                    background: var(--primary);
                    color: white;
                    border-radius: var(--radius-md);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .value-mini-card h4 {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: var(--primary);
                    margin-bottom: 0.4rem;
                }

                .value-mini-card p {
                    font-size: 0.9rem;
                    color: var(--text-muted);
                    margin: 0;
                    line-height: 1.5;
                }

                @media (max-width: 1024px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: 5rem;
                    }
                    .about-image-container {
                        max-width: 600px;
                        margin: 0 auto;
                    }
                    .values-overlay-grid {
                        position: static;
                        margin-top: 3rem;
                        max-width: 100%;
                    }
                }

                @media (max-width: 640px) {
                    .stats-grid {
                        grid-template-columns: 1fr;
                    }
                    .about-main-image {
                        height: 400px;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
