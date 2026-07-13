import { motion } from 'framer-motion';

// Dynamically import all client logos
const logoModules = import.meta.glob('../assets/clients/*.{png,jpg,jpeg,svg,webp,avif}', { eager: true });
const clientLogos = Object.values(logoModules).map(mod => mod.default);

const Clients = () => {
    return (
        <section className="clients-section">
            <div className="container">
                <div className="clients-header">
                    <p className="clients-label">Trusted by Industry Pioneers</p>
                    <div className="clients-divider"></div>
                </div>

                <div className="slider-container">
                    <div className="logo-track">
                        {/* Double the logos for seamless infinite loop */}
                        {[...clientLogos, ...clientLogos].map((logo, index) => (
                            <div key={index} className="logo-slide">
                                <img src={logo} alt={`Client ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="trust-metrics">
                    <div className="metric-item">
                        <span className="metric-value">500+</span>
                        <span className="metric-label">Successful Deployments</span>
                    </div>
                    <div className="metric-item">
                        <span className="metric-value">250M+</span>
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
                    padding: var(--spacing-xl) 0;
                    background: var(--white);
                    position: relative;
                    overflow: hidden;
                }

                .clients-header {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    margin-bottom: 5rem;
                }

                .clients-label {
                    white-space: nowrap;
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: var(--primary);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }

                .clients-divider {
                    height: 2px;
                    background: var(--background-alt);
                    flex: 1;
                    border-radius: var(--radius-full);
                }

                /* Slider Styles */
                .slider-container {
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                    padding: 40px 0;
                    margin-bottom: 6rem;
                    mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                }

                .logo-track {
                    display: flex;
                    width: max-content;
                    animation: scroll 80s linear infinite;
                    align-items: center;
                }

                .logo-track:hover {
                    animation-play-state: paused;
                }

                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                .logo-slide {
                    flex-shrink: 0;
                    width: 200px;
                    height: 120px;
                    margin: 0 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    background: var(--background-alt);
                    border-radius: var(--radius-lg);
                    padding: 1.5rem;
                }

                .logo-slide:hover {
                    transform: scale(1.05) translateY(-5px);
                    box-shadow: var(--shadow-lg);
                    background: var(--white);
                }

                .logo-slide img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    filter: grayscale(1);
                    opacity: 0.7;
                    transition: all 0.3s ease;
                }

                .logo-slide:hover img {
                    filter: grayscale(0);
                    opacity: 1;
                }

                .trust-metrics {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 3rem;
                    text-align: center;
                    padding: 5rem 2rem;
                    background: var(--background-alt);
                    border-radius: var(--radius-xl);
                }

                .metric-value {
                    display: block;
                    font-size: 3.5rem;
                    font-weight: 700;
                    color: var(--primary);
                    font-family: var(--font-heading);
                    margin-bottom: 0.5rem;
                    letter-spacing: -1px;
                }

                .metric-label {
                    font-size: 1.1rem;
                    color: var(--text-muted);
                    font-weight: 600;
                }

                @media (max-width: 768px) {
                    .trust-metrics {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                        padding: 3rem 1.5rem;
                    }
                    .logo-slide {
                        width: 160px;
                        height: 100px;
                        margin: 0 20px;
                    }
                    .metric-value {
                        font-size: 2.75rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Clients;
