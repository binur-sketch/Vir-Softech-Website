import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero-modern">
            {/* Background Elements */}
            <div className="hero-bg">
                <div className="overlay"></div>
                <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400&auto=format&fit=crop" 
                    alt="Technology background" 
                    className="bg-image"
                />
            </div>

            <div className="container hero-container">
                <div className="hero-content-wrapper">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-badge reveal"
                    >
                        <span className="badge-dot"></span>
                        <span className="badge-text">Pioneering Digital Transformation</span>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-title"
                    >
                        STRIDE to <span className="text-gradient">Success</span> <br />
                        with Vir Softech
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-subtitle"
                    >
                        We deliver superior technology for revolutionizing <strong>Imaging</strong>, 
                        <strong>Digital</strong>, and <strong>Educational</strong> transformation. 
                        Engineering robust solutions for global enterprises.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="hero-actions"
                    >
                        <Link to="/solutions" className="btn btn-primary">
                            Explore Solutions <ArrowRight size={18} />
                        </Link>
                        <Link to="/about" className="btn btn-outline-white">
                            Learn More
                        </Link>
                    </motion.div>


                </div>
            </div>



            <style jsx>{`
                .hero-modern {
                    position: relative;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    padding: 120px 0 80px;
                    overflow: hidden;
                    color: var(--white);
                    background: var(--primary);
                }

                .hero-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                }

                .bg-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.4;
                }

                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(circle at center, transparent 0%, var(--primary) 100%),
                                linear-gradient(0deg, var(--primary) 0%, transparent 50%);
                    z-index: 2;
                }

                .hero-container {
                    position: relative;
                    z-index: 10;
                }

                .hero-content-wrapper {
                    max-width: 800px;
                }

                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.75rem;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    padding: 0.5rem 1.25rem;
                    border-radius: var(--radius-full);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    margin-bottom: 2rem;
                }

                .badge-dot {
                    width: 8px;
                    height: 8px;
                    background: var(--accent);
                    border-radius: 50%;
                    box-shadow: 0 0 10px var(--accent);
                }

                .badge-text {
                    font-size: 0.85rem;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                }

                .hero-title {
                    font-size: clamp(3rem, 8vw, 4.5rem);
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    color: var(--white);
                }

                .hero-subtitle {
                    font-size: 1.25rem;
                    color: #cbd5e1;
                    line-height: 1.6;
                    margin-bottom: 3rem;
                    max-width: 650px;
                }

                .hero-actions {
                    display: flex;
                    gap: 1.5rem;
                    margin-bottom: 4rem;
                }

                .btn-outline-white {
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    color: white;
                    background: transparent;
                }

                .btn-outline-white:hover {
                    background: white;
                    color: var(--primary);
                    border-color: white;
                }





                @media (max-width: 768px) {
                    .hero-modern {
                        padding-top: 140px;
                        text-align: center;
                    }
                    .hero-content-wrapper {
                        margin: 0 auto;
                    }
                    .hero-badge {
                        margin-bottom: 1.5rem;
                    }
                    .hero-actions {
                        justify-content: center;
                        flex-direction: column;
                        gap: 1rem;
                    }

                }
            `}</style>
        </section>
    );
};

export default Hero;
