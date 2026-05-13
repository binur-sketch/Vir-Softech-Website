import { motion } from 'framer-motion';

const Clients = () => {
    // Representative clients for the UI demo
    const clients = [
        { name: "Government of India", type: "Public Sector" },
        { name: "Global Edu Corp", type: "Education" },
        { name: "PrintMaster Japan", type: "Manufacturing" },
        { name: "SecureDocs US", type: "Legal Tech" },
        { name: "TechVision Tokyo", type: "AI & CV" },
        { name: "Heritage Archives", type: "Heritage & ECM" }
    ];

    return (
        <section className="clients-section">
            <div className="container">
                <div className="clients-header">
                    <p className="clients-label">Trusted by Industry Pioneers</p>
                    <div className="clients-divider"></div>
                </div>

                <div className="clients-grid-new">
                    {clients.map((client, index) => (
                        <motion.div 
                            key={index}
                            className="client-card-new"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="client-logo-placeholder">
                                <span className="client-name-text">{client.name}</span>
                                <span className="client-type-text">{client.type}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="trust-metrics">
                    <div className="metric-item">
                        <span className="metric-value">500+</span>
                        <span className="metric-label">Successful Deployments</span>
                    </div>
                    <div className="metric-item">
                        <span className="metric-value">50M+</span>
                        <span className="metric-label">Documents Processed</span>
                    </div>
                    <div className="metric-item">
                        <span className="metric-value">99.9%</span>
                        <span className="metric-label">Client Satisfaction</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .clients-section {
                    padding: var(--spacing-lg) 0;
                    background: var(--background-alt);
                    border-top: 1px solid rgba(0, 0, 0, 0.05);
                    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                }

                .clients-header {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    margin-bottom: 3rem;
                }

                .clients-label {
                    white-space: nowrap;
                    font-size: 0.875rem;
                    font-weight: 700;
                    color: var(--text-light);
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                }

                .clients-divider {
                    height: 1px;
                    background: rgba(0, 0, 0, 0.1);
                    flex: 1;
                }

                .clients-grid-new {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 4rem;
                }

                .client-card-new {
                    background: white;
                    padding: 2rem 1.5rem;
                    border-radius: var(--radius-lg);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: var(--transition-normal);
                    border: 1px solid rgba(0, 0, 0, 0.03);
                }

                .client-card-new:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg);
                    border-color: var(--accent);
                }

                .client-logo-placeholder {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .client-name-text {
                    font-weight: 800;
                    font-size: 1.1rem;
                    color: var(--primary);
                    margin-bottom: 0.25rem;
                    font-family: var(--font-heading);
                }

                .client-type-text {
                    font-size: 0.7rem;
                    color: var(--text-light);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    font-weight: 600;
                }

                .trust-metrics {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                    text-align: center;
                    padding-top: 3rem;
                    border-top: 1px solid rgba(0, 0, 0, 0.05);
                }

                .metric-value {
                    display: block;
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: var(--secondary);
                    font-family: var(--font-heading);
                    margin-bottom: 0.5rem;
                }

                .metric-label {
                    font-size: 0.9rem;
                    color: var(--text-muted);
                    font-weight: 600;
                }

                @media (max-width: 768px) {
                    .clients-grid-new {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .trust-metrics {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Clients;
