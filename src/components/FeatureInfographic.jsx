import { motion } from 'framer-motion';
import { Shield, Zap, Target, BarChart3, Globe2, Cpu } from 'lucide-react';

const FeatureInfographic = () => {
    const pillars = [
        {
            icon: <Target size={32} />,
            title: "Strategic Consulting",
            desc: "We align technology with your business goals to ensure long-term scalability and success.",
            color: "var(--primary)"
        },
        {
            icon: <Zap size={32} />,
            title: "Rapid Innovation",
            desc: "Agile development cycles that turn complex requirements into functional products faster.",
            color: "var(--accent)"
        },
        {
            icon: <Shield size={32} />,
            title: "Enterprise Security",
            desc: "Robust security protocols ensuring your data remains protected and compliant with global standards.",
            color: "var(--primary)"
        },
        {
            icon: <Globe2 size={32} />,
            title: "Global Excellence",
            desc: "Leveraging synergies between our India and Japan offices to deliver world-class solutions.",
            color: "var(--accent)"
        },
        {
            icon: <Cpu size={32} />,
            title: "Advanced Tech Stack",
            desc: "Expertise in AI, Computer Vision, and Cloud-native architectures for future-ready systems.",
            color: "var(--primary)"
        },
        {
            icon: <BarChart3 size={32} />,
            title: "Data-Driven Insights",
            desc: "Transforming raw data into actionable intelligence through advanced analytics and reporting.",
            color: "var(--accent)"
        }
    ];

    return (
        <section className="advantage-section">
            <div className="container">
                <div className="section-header-new">
                    <span className="badge-accent">The Vir Softech Edge</span>
                    <h2 className="section-title">Why Global Leaders <br />Trust <span className="text-gradient">Our Expertise</span></h2>
                    <p className="section-subtitle">
                        We don't just build software; we engineer competitive advantages
                        that help you stay ahead in an ever-evolving digital landscape.
                    </p>
                </div>

                <div className="advantage-grid">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            className="advantage-card glass"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="advantage-icon-box" style={{ color: pillar.color }}>
                                {pillar.icon}
                                <div className="icon-glow" style={{ background: pillar.color }}></div>
                            </div>
                            <h3 className="advantage-title">{pillar.title}</h3>
                            <p className="advantage-desc">{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="stride-highlight">
                    <motion.div
                        className="stride-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="stride-content">
                            <h3>STRIDE to Success</h3>
                            <p>Our core philosophy of Strategic Technology Revolutionizing Imaging, Digital, and Education.</p>
                        </div>
                        <div className="stride-cta">
                            <button className="btn btn-primary">Download Corporate Brochure</button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                .advantage-section {
                    padding: var(--spacing-xl) 0;
                    background: var(--background);
                    color: var(--text);
                    position: relative;
                    overflow: hidden;
                }

                .advantage-section .section-title {
                    color: var(--text) !important;
                }

                .advantage-section .text-gradient {
                    background: var(--gradient-primary) !important;
                    -webkit-background-clip: text !important;
                    background-clip: text !important;
                    color: transparent !important;
                    display: inline !important;
                }

                .advantage-section .section-subtitle {
                    color: var(--text-muted) !important;
                    opacity: 0.95 !important;
                    font-weight: 500 !important;
                }

                .badge-accent {
                    display: inline-block;
                    padding: 0.5rem 1.25rem;
                    background: rgba(255, 183, 3, 0.15);
                    color: #FB8500;
                    border-radius: var(--radius-full);
                    font-weight: 700;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 1.5rem;
                    border: 1px solid rgba(255, 183, 3, 0.3);
                }

                .advantage-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    margin-bottom: 5rem;
                }

                .advantage-card {
                    padding: 3rem 2rem;
                    border-radius: var(--radius-xl);
                    background: var(--white);
                    border: 1px solid rgba(2, 48, 71, 0.05);
                    box-shadow: var(--shadow-md);
                    transition: var(--transition-normal);
                    text-align: center;
                }

                .advantage-card:hover {
                    transform: translateY(-10px);
                    border-color: var(--accent);
                    box-shadow: var(--shadow-xl);
                }

                .advantage-icon-box {
                    width: 80px;
                    height: 80px;
                    margin: 0 auto 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }

                .icon-glow {
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    filter: blur(25px);
                    opacity: 0.6;
                    z-index: 1;
                    border-radius: 50%;
                }

                .advantage-title {
                    color: var(--text);
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                }

                .advantage-desc {
                    color: var(--text-muted);
                    font-size: 0.95rem;
                    line-height: 1.7;
                }

                .stride-highlight {
                    margin-top: 4rem;
                }

                .stride-card {
                    background: var(--gradient-primary);
                    padding: 3rem 4rem;
                    border-radius: var(--radius-xl);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 3rem;
                    box-shadow: 0 20px 40px rgba(2, 48, 71, 0.3);
                }

                .stride-content h3 {
                    color: white;
                    font-size: 2.5rem;
                    margin-bottom: 0.5rem;
                }

                .stride-content p {
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 1.1rem;
                    margin: 0;
                }

                .stride-cta .btn {
                    background: white;
                    color: var(--secondary);
                    white-space: nowrap;
                }

                .stride-cta .btn:hover {
                    background: var(--primary);
                    color: white;
                }

                @media (max-width: 1024px) {
                    .stride-card {
                        flex-direction: column;
                        text-align: center;
                        padding: 3rem 2rem;
                    }
                }

                @media (max-width: 768px) {
                    .advantage-grid {
                        grid-template-columns: 1fr;
                    }
                    .stride-content h3 {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default FeatureInfographic;
