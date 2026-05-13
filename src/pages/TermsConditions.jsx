import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';

const TermsConditions = () => {
    return (
        <div className="page-legal">
            <PageHero 
                title="Terms & Conditions"
                subtitle="Governing the use of Vir Softech platforms and services."
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
                            <h2>1. Acceptance of Terms</h2>
                            <p>By accessing or using any Vir Softech platform, website, or service (including VSDOX and eVAL), you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, do not use our services.</p>
                        </div>

                        <div className="legal-section">
                            <h2>2. Acceptable Use</h2>
                            <p>You agree not to use our services for any unlawful purpose or any purpose prohibited under this clause. You agree not to use our services in any way that could damage our platforms, services, or general business.</p>
                            <p>Prohibited actions include: reverse engineering, web scraping without authorization, uploading malicious content, or attempting to breach security protocols.</p>
                        </div>

                        <div className="legal-section">
                            <h2>3. Intellectual Property</h2>
                            <p>All software, technology, branding, and content provided through our services are the exclusive property of <strong>Vir Softech Pvt. Ltd.</strong> Customer data remains the exclusive property of the customer, and Vir Softech claims no ownership over user-provided data.</p>
                        </div>

                        <div className="legal-section">
                            <h2>4. Limitation of Liability</h2>
                            <p>To the maximum extent permitted by law, Vir Softech's cumulative liability is limited to the fees paid by the user in the 12 months preceding a claim. We shall not be liable for any indirect, incidental, or consequential damages.</p>
                        </div>

                        <div className="legal-section">
                            <h2>5. Service Level Agreement (SLA)</h2>
                            <p>We commit to a 99.9% platform uptime for our professional and enterprise tiers. Scheduled maintenance will be communicated in advance.</p>
                        </div>

                        <div className="legal-section">
                            <h2>6. Governing Law</h2>
                            <p>These terms shall be governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh.</p>
                        </div>

                        <div className="legal-section">
                            <h2>7. Contact Information</h2>
                            <p>For any questions regarding these Terms, please contact us at <strong>corp@virsoftech.com</strong>.</p>
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
                @media (max-width: 768px) {
                    .legal-card {
                        padding: 2rem 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default TermsConditions;
