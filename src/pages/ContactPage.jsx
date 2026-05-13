import Contact from '../components/Contact';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import { Globe, Shield, Clock } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="page-contact-full">
            <PageHero 
                title="Let's Connect"
                subtitle="Whether you have a question about our solutions, pricing, or a custom project, our team is ready to assist you."
                bgImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2400&auto=format&fit=crop"
            />

            <div className="contact-page-wrapper">
                <Contact />
            </div>

            <section className="section bg-alt global-support">
                <div className="container">
                    <div className="section-header-new text-center">
                        <h2 className="section-title">Support & <span className="text-gradient">Presence</span></h2>
                        <p className="section-subtitle">We provide enterprise-grade support across multiple time zones.</p>
                    </div>

                    <div className="grid-3">
                        <motion.div 
                            className="support-card card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="support-icon"><Globe size={32} /></div>
                            <h3>Global Operations</h3>
                            <p>Headquartered in Noida with strategic presence in Tokyo to serve our international partners.</p>
                        </motion.div>

                        <motion.div 
                            className="support-card card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="support-icon"><Shield size={32} /></div>
                            <h3>Enterprise Security</h3>
                            <p>Your data is safe with our ISO compliant processes and high-security deployment models.</p>
                        </motion.div>

                        <motion.div 
                            className="support-card card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="support-icon"><Clock size={32} /></div>
                            <h3>Expert Support</h3>
                            <p>Dedicated account managers and technical support teams available for enterprise SLAs.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .contact-page-wrapper {
                    margin-top: -60px;
                    position: relative;
                    z-index: 20;
                }

                .bg-alt {
                    background: var(--background-alt);
                }

                .global-support {
                    padding: var(--spacing-xl) 0;
                }

                .support-card {
                    padding: 3rem 2rem;
                    text-align: center;
                }

                .support-icon {
                    color: var(--secondary);
                    margin-bottom: 1.5rem;
                    display: flex;
                    justify-content: center;
                }

                .support-card h3 {
                    font-size: 1.25rem;
                    margin-bottom: 1rem;
                    color: var(--primary);
                }

                .support-card p {
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    line-height: 1.6;
                }

                @media (max-width: 1024px) {
                    .contact-page-wrapper {
                        margin-top: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default ContactPage;
