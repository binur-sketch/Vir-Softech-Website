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
        { 
            year: '2025', 
            event: 'Achieved CMMI Level 3 (Software Development), eVAL OMR deployed across 1000 locations in India for large-scale defence sector assessments, emerging as one of the most widely adopted OMR evaluation solutions in the country.' 
        },
        { 
            year: '2024', 
            event: 'Delivered digital repository for Indian Pharmacopoeia Commission (Ministry of Health) - https://iponline.ipc.gov.in/jspui, implemented NPS workflow for a largest POP in India, executed nationwide school leaving exam evaluation in Africa using eVAL OMR.' 
        },
        { 
            year: '2023', 
            event: 'Implemented Paperless Court solutions and Document Management solutions across multiple High Courts & District Courts, delivered Deccan Virasat digital platform - https://virasat.dcpune.ac.in , conducted large-scale school assessments (40 lakh students) in Nigeria using eVAL OMR.' 
        },
        { 
            year: '2022', 
            event: 'Delivered IIC DigiLib digital repository – https://digilib.iicdelhi.in/jspui/ , successfully evaluated 30 lakh OMR sheets for a major education board in India.' 
        },
        { 
            year: '2021', 
            event: 'Implemented headless DMS for one of India’s largest private life insurance companies, eVAL OMR used by the United Nations for successfully evaluating nationwide school assessments.' 
        },
        { 
            year: '2020', 
            event: 'Launched eVAL CBT platform, conducted CBT exams for a most prestigious Dental College in India.' 
        },
        { 
            year: '2019', 
            event: 'Implemented enterprise DMS for the world’s largest two-wheeler manufacturing company.' 
        },
        { 
            year: '2018', 
            event: 'Conducted large-scale census education survey for a major Indian state using eVAL OMR.' 
        },
        { 
            year: '2017', 
            event: 'Deployed eVAL OMR across 600+ districts in India, enabling release of NAS 2017 results within one month.' 
        },
        { 
            year: '2016', 
            event: 'Launched the eVAL product suite in the market.' 
        },
        { 
            year: '2015', 
            event: 'Company incorporated to deliver innovative software solutions.' 
        }
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

            {/* Redesigned Timeline / Milestones */}
            <section className="section about-timeline-modern">
                <div className="container">
                    <div className="section-header-new text-center">
                        <span className="badge-accent">Our Evolution</span>
                        <h2 className="section-title">Milestones of <span className="text-gradient">Impact</span></h2>
                        <p className="section-subtitle">A decade of engineering excellence and digital transformation.</p>
                    </div>

                    <div className="modern-timeline">
                        <div className="timeline-line"></div>
                        
                        {milestones.map((item, i) => (
                            <motion.div 
                                key={i} 
                                className={`timeline-block ${i % 2 === 0 ? 'left' : 'right'}`}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <div className="timeline-marker">
                                    <div className="marker-dot"></div>
                                    <div className="marker-year">{item.year}</div>
                                </div>
                                
                                <div className="timeline-card glass-card">
                                    <div className="card-year-mobile">{item.year}</div>
                                    <p dangerouslySetInnerHTML={{ 
                                        __html: item.event.replace(/(https?:\/\/[^\s,]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="timeline-link">$1</a>') 
                                    }}></p>
                                </div>
                            </motion.div>
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

                .about-timeline-modern {
                    padding: var(--spacing-xl) 0;
                    background: var(--background-alt);
                    position: relative;
                }

                .modern-timeline {
                    position: relative;
                    max-width: 1200px;
                    margin: 5rem auto 0;
                    padding: 2rem 0;
                }

                .timeline-line {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: linear-gradient(to bottom, transparent, var(--secondary) 10%, var(--secondary) 90%, transparent);
                    transform: translateX(-50%);
                    opacity: 0.3;
                }

                .timeline-block {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    margin-bottom: 4rem;
                    position: relative;
                }

                .timeline-block.left {
                    flex-direction: row-reverse;
                }

                .timeline-card {
                    width: 45%;
                    padding: 2.5rem;
                    border-radius: var(--radius-xl);
                    background: var(--white);
                    box-shadow: var(--shadow-lg);
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    position: relative;
                    transition: var(--transition-normal);
                }

                .timeline-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-xl);
                    border-color: var(--secondary);
                }

                .timeline-card p {
                    margin: 0;
                    font-size: 1rem;
                    line-height: 1.7;
                    color: var(--text);
                    font-weight: 500;
                }

                :global(.timeline-link) {
                    color: var(--secondary);
                    text-decoration: underline;
                    word-break: break-all;
                }

                .timeline-marker {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    z-index: 10;
                }

                .marker-dot {
                    width: 20px;
                    height: 20px;
                    background: var(--secondary);
                    border: 4px solid var(--white);
                    border-radius: 50%;
                    box-shadow: 0 0 15px rgba(20, 184, 166, 0.4);
                }

                .marker-year {
                    margin-top: 10px;
                    font-weight: 900;
                    font-size: 1.25rem;
                    color: var(--primary);
                    background: var(--white);
                    padding: 4px 12px;
                    border-radius: var(--radius-sm);
                    box-shadow: var(--shadow-sm);
                }

                .card-year-mobile {
                    display: none;
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

                @media (max-width: 992px) {
                    .timeline-line {
                        left: 30px;
                        transform: none;
                    }
                    .timeline-block {
                        flex-direction: row !important;
                        justify-content: flex-start;
                        padding-left: 70px;
                        margin-bottom: 3rem;
                    }
                    .timeline-card {
                        width: 100%;
                        padding: 2rem;
                    }
                    .timeline-marker {
                        left: 30px;
                        transform: translateX(-50%);
                    }
                    .marker-year {
                        display: none;
                    }
                    .card-year-mobile {
                        display: inline-block;
                        font-weight: 900;
                        font-size: 1.5rem;
                        color: var(--secondary);
                        margin-bottom: 1rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default AboutPage;
