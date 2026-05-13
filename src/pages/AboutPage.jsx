import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Users, Globe, Award } from 'lucide-react';
import PageHero from '../components/PageHero';

const AboutPage = () => {
    const values = [
        {
            icon: <Zap size={32} />,
            title: "Innovation First",
            desc: "We constantly push the boundaries of what's possible with Imaging and AI."
        },
        {
            icon: <Shield size={32} />,
            title: "Trust & Integrity",
            desc: "Building long-term partnerships through transparency and reliable engineering."
        },
        {
            icon: <Target size={32} />,
            title: "Customer Centric",
            desc: "Your business challenges are our primary focus. We engineer for your success."
        }
    ];

    const milestones = [
        { year: '2014', event: 'Company Founded in New Delhi' },
        { year: '2016', event: 'Launched vsDox ECM Platform' },
        { year: '2018', event: 'Established Japan Operations' },
        { year: '2020', event: 'Released eVAL Educational Suite' },
        { year: '2023', event: 'CMMI Level 3 Quality Standards' }
    ];

    return (
        <div className="page-about-full">
            <PageHero 
                title="Engineering the Future"
                subtitle="We are a global technology powerhouse specializing in Imaging, Computer Vision, and Digital Transformation."
                bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop"
            />

            {/* Mission & Story Section */}
            <section className="section about-story">
                <div className="container">
                    <div className="story-grid">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="story-text"
                        >
                            <span className="badge-accent">Our Story</span>
                            <h2 className="section-title">A Journey of <span className="text-gradient">Technological Excellence</span></h2>
                            <p className="lead-text">
                                Vir Softech was founded with a singular mission: to simplify complex enterprise content 
                                ecosystems through intelligent automation.
                            </p>
                            <p>
                                What started as a boutique engineering firm in New Delhi has evolved into a global 
                                innovation hub. Today, we serve institutional and enterprise clients across 
                                three continents, delivering solutions that are both high-performing and cost-efficient.
                            </p>
                            <p>
                                Our unique presence in both <strong>India</strong> and <strong>Japan</strong> allows us 
                                to combine the meticulous quality standards of Japanese engineering with the 
                                vast technological scale of the Indian software ecosystem.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="story-visual"
                        >
                            <div className="mission-card-premium card">
                                <h3>Our Mission</h3>
                                <p>To empower global enterprises with intelligent, scalable, and secure technology products that automate the complex and simplify the digital.</p>
                                <div className="mission-icon"><Target size={48} className="text-secondary" /></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section bg-alt">
                <div className="container">
                    <div className="section-header-new text-center">
                        <h2 className="section-title">Our <span className="text-gradient">Core Values</span></h2>
                        <p className="section-subtitle">The principles that guide every line of code we write.</p>
                    </div>
                    <div className="values-grid-full">
                        {values.map((val, i) => (
                            <motion.div 
                                key={i}
                                className="value-card-full card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="value-icon-box">{val.icon}</div>
                                <h3>{val.title}</h3>
                                <p>{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline / Milestones */}
            <section className="section about-timeline">
                <div className="container">
                    <div className="section-header-new text-center">
                        <h2 className="section-title">Our <span className="text-gradient">Milestones</span></h2>
                    </div>
                    <div className="timeline-wrapper">
                        {milestones.map((item, i) => (
                            <div key={i} className="timeline-item">
                                <div className="timeline-year">{item.year}</div>
                                <div className="timeline-dot"></div>
                                <div className="timeline-content card">
                                    <p>{item.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Presence */}
            <section className="section global-presence">
                <div className="container">
                    <div className="global-card glass">
                        <div className="global-content">
                            <Globe size={48} className="text-accent" />
                            <h2>Global Footprint</h2>
                            <p>From our engineering center in Noida to our strategic operations in Tokyo, we are positioned to serve the global market with localized expertise.</p>
                            <div className="presence-locations">
                                <span>Noida, India</span>
                                <span className="sep">|</span>
                                <span>Tokyo, Japan</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .story-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 5rem;
                    align-items: center;
                }

                .story-text p {
                    margin-bottom: 1.5rem;
                    color: var(--text-muted);
                    line-height: 1.8;
                }

                .mission-card-premium {
                    padding: 4rem;
                    background: var(--primary);
                    color: white;
                    position: relative;
                    overflow: hidden;
                    text-align: center;
                }

                .mission-card-premium h3 {
                    color: white;
                    font-size: 2rem;
                    margin-bottom: 1.5rem;
                }

                .mission-card-premium p {
                    font-size: 1.1rem;
                    line-height: 1.7;
                    opacity: 0.9;
                }

                .mission-icon {
                    margin-top: 2rem;
                    opacity: 0.3;
                }

                .bg-alt {
                    background: var(--background-alt);
                }

                .values-grid-full {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                }

                .value-card-full {
                    padding: 3rem;
                    text-align: center;
                }

                .value-icon-box {
                    color: var(--secondary);
                    margin-bottom: 1.5rem;
                }

                .timeline-wrapper {
                    max-width: 800px;
                    margin: 4rem auto 0;
                    position: relative;
                }

                .timeline-wrapper::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: var(--background-alt);
                    transform: translateX(-50%);
                }

                .timeline-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 3rem;
                    position: relative;
                }

                .timeline-year {
                    flex: 1;
                    text-align: right;
                    padding-right: 3rem;
                    font-weight: 900;
                    font-size: 1.5rem;
                    color: var(--primary);
                    font-family: var(--font-heading);
                }

                .timeline-dot {
                    width: 16px;
                    height: 16px;
                    background: var(--secondary);
                    border: 4px solid var(--white);
                    border-radius: 50%;
                    z-index: 2;
                    box-shadow: 0 0 0 4px var(--background-alt);
                }

                .timeline-content {
                    flex: 1;
                    margin-left: 3rem;
                    padding: 1.5rem 2rem;
                }

                .timeline-content p {
                    margin: 0;
                    font-weight: 600;
                    color: var(--text);
                }

                .global-presence {
                    padding-bottom: var(--spacing-xl);
                }

                .global-card {
                    padding: 6rem 3rem;
                    border-radius: var(--radius-xl);
                    text-align: center;
                    background: var(--gradient-primary);
                    color: white;
                }

                .global-content h2 {
                    color: white;
                    font-size: 3rem;
                    margin: 1.5rem 0;
                }

                .global-content p {
                    max-width: 600px;
                    margin: 0 auto 2rem;
                    font-size: 1.25rem;
                    opacity: 0.9;
                }

                .presence-locations {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: var(--accent);
                }

                @media (max-width: 1024px) {
                    .story-grid {
                        grid-template-columns: 1fr;
                        gap: 4rem;
                    }
                    .values-grid-full {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 768px) {
                    .timeline-wrapper::before {
                        left: 20px;
                    }
                    .timeline-item {
                        flex-direction: column;
                        align-items: flex-start;
                        padding-left: 50px;
                    }
                    .timeline-year {
                        text-align: left;
                        padding-right: 0;
                        margin-bottom: 0.5rem;
                    }
                    .timeline-dot {
                        position: absolute;
                        left: 12px;
                        top: 10px;
                    }
                    .timeline-content {
                        margin-left: 0;
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
};

export default AboutPage;
