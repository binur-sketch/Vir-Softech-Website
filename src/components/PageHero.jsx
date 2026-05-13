import { motion } from 'framer-motion';

/**
 * Shared Page Hero component for internal pages
 * @param {Object} props
 * @param {string} props.title - Main heading
 * @param {string} props.subtitle - Descriptive subtext
 * @param {string} [props.bgImage] - Optional background image URL (Unsplash)
 */
const PageHero = ({ title, subtitle, bgImage }) => {
    // Default high-quality tech background if none provided
    const defaultBg = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400&auto=format&fit=crop";
    
    return (
        <section className="internal-hero">
            <div className="hero-background">
                <div className="hero-overlay"></div>
                <img 
                    src={bgImage || defaultBg} 
                    alt={title} 
                    className="hero-img"
                />
            </div>
            
            <div className="container hero-container">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content-internal"
                >
                    <h1 className="internal-title">{title}</h1>
                    {subtitle && <p className="internal-subtitle">{subtitle}</p>}
                    <div className="hero-divider"></div>
                </motion.div>
            </div>

            <style jsx>{`
                .internal-hero {
                    position: relative;
                    padding: 180px 0 100px;
                    background: var(--primary);
                    color: white;
                    overflow: hidden;
                    min-height: 400px;
                    display: flex;
                    align-items: center;
                }

                .hero-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                }

                .hero-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.5;
                }

                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(0deg, var(--primary) 0%, rgba(15, 23, 42, 0.6) 100%);
                    z-index: 2;
                }

                .hero-container {
                    position: relative;
                    z-index: 10;
                }

                .hero-content-internal {
                    max-width: 800px;
                }

                .internal-title {
                    font-size: clamp(2.5rem, 6vw, 4rem);
                    font-weight: 900;
                    color: white;
                    margin-bottom: 1.5rem;
                    line-height: 1.1;
                    letter-spacing: -0.02em;
                }

                .internal-subtitle {
                    font-size: 1.25rem;
                    color: rgba(255, 255, 255, 0.8);
                    line-height: 1.6;
                    margin-bottom: 2rem;
                }

                .hero-divider {
                    width: 80px;
                    height: 4px;
                    background: var(--gradient-accent);
                    border-radius: var(--radius-full);
                }

                @media (max-width: 768px) {
                    .internal-hero {
                        padding: 140px 0 80px;
                        text-align: center;
                    }
                    .hero-divider {
                        margin: 0 auto;
                    }
                }
            `}</style>
        </section>
    );
};

export default PageHero;
