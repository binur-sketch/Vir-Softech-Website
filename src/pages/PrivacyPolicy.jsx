import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';

const PrivacyPolicy = () => {
    return (
        <div className="page-legal">
            <PageHero 
                title="Privacy Policy"
                subtitle="How we collect, use, and protect your personal data."
            />

            <section className="section legal-content">
                <div className="container">
                    <motion.div 
                        className="card legal-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <p className="last-updated">Last Updated: January 1, 2025</p>
                        
                        <div className="legal-section">
                            <h2>1. Information Collection</h2>
                            <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, or when you contact us.</p>
                            <ul>
                                <li>Personal Data: Name, email address, company name, phone number.</li>
                                <li>Technical Data: IP address, cookies, browser type, and usage patterns collected automatically.</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>2. How We Use Your Information</h2>
                            <p>We use the information we collect or receive for various purposes, including:</p>
                            <ul>
                                <li>To respond to user inquiries and provide support.</li>
                                <li>To send product updates, security alerts, and administrative information.</li>
                                <li>To personalize user experience and improve our platforms.</li>
                                <li>To analyze usage patterns and optimize our website performance.</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>3. Data Sharing and Disclosure</h2>
                            <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We share data only with trusted service providers (CRM, analytics) under strict confidentiality contracts. We never sell your data to third parties.</p>
                        </div>

                        <div className="legal-section">
                            <h2>4. Data Security</h2>
                            <p>We implement robust technical and organizational security measures designed to protect the security of any personal information we process. This includes TLS/SSL encryption for data in transit and AES-256 for data at rest. Our processes are ISO 27001-aligned.</p>
                        </div>

                        <div className="legal-section">
                            <h2>5. Your Privacy Rights</h2>
                            <p>Depending on your location, you may have the right to access, correct, or delete your personal data. You can exercise these rights by contacting us at the email provided below.</p>
                        </div>

                        <div className="legal-section">
                            <h2>6. Contact Us</h2>
                            <p>If you have questions or comments about this policy, you may email our Data Protection Officer at <strong>corp@virsoftech.com</strong>.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <style jsx>{`
                .legal-content {
                    padding: var(--spacing-xl) 0;
                    background: var(--background-alt);
                }
                .legal-card {
                    padding: 4rem;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .last-updated {
                    color: var(--text-muted);
                    font-size: 0.9rem;
                    font-weight: 600;
                    margin-bottom: 2rem;
                }
                .legal-section {
                    margin-bottom: 3rem;
                }
                .legal-section h2 {
                    font-size: 1.5rem;
                    color: var(--primary);
                    margin-bottom: 1.25rem;
                }
                .legal-section p {
                    color: var(--text-muted);
                    line-height: 1.8;
                    margin-bottom: 1rem;
                }
                .legal-section ul {
                    padding-left: 1.5rem;
                    color: var(--text-muted);
                }
                .legal-section li {
                    margin-bottom: 0.5rem;
                    line-height: 1.6;
                }
                @media (max-width: 768px) {
                    .legal-card {
                        padding: 2rem 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default PrivacyPolicy;
