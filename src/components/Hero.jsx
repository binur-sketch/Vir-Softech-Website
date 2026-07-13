import React from 'react';
import { ArrowRight, FileText, GraduationCap, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-premium">
            <div className="hero-grid-bg"></div>

            <div className="hero-container">
                {/* Left Content Column */}
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-badge"
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
                        STRIDE to <span className="text-gradient-hero">Success</span> <br />
                        with Vir Softech
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-subtitle"
                    >
                        We deliver superior technology for revolutionizing <strong>Imaging</strong>,
                        <strong> Digital</strong>, and <strong>Educational</strong> transformation.
                        Engineering robust solutions for global enterprises.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="hero-actions"
                    >
                        <Link to="/solutions" className="btn btn-primary btn-glow">
                            Explore Solutions <ArrowRight size={18} />
                        </Link>
                        <Link to="/about" className="btn btn-outline-light">
                            Learn More
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="hero-stats-row"
                    >
                        <div className="stat-item">
                            <h4 className="stat-num">500+</h4>
                            <p className="stat-label">Clients</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h4 className="stat-num">10+</h4>
                            <p className="stat-label">Years Exp</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h4 className="stat-num">Global</h4>
                            <p className="stat-label">Presence</p>
                        </div>
                    </motion.div>
                </div>

                {/* Right Visual Column */}
                <div className="hero-visual">
                    <div className="cards-wrapper">
                        <motion.a
                            href="solutions/print-product-engineering"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="floating-card card-1"
                        >
                            <div className="card-icon icon-purple"><Smartphone size={24} /></div>
                            <div className="card-info">
                                <h5>Print Engineering</h5>
                                <span>Innovative software solutions for the print industry.</span>
                            </div>
                        </motion.a>
                        <motion.a
                            href="https://vsdox.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="floating-card card-2"
                        >
                            <div className="card-icon icon-blue"><FileText size={24} /></div>
                            <div className="card-info">
                                <h5>VsDox ECM</h5>
                                <span>Enterprise Document Management</span>
                            </div>
                        </motion.a>

                        <motion.a
                            href="https://evalexam.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="floating-card card-3"
                        >
                            <div className="card-icon icon-teal"><GraduationCap size={24} /></div>
                            <div className="card-info">
                                <h5>eVAL Suite</h5>
                                <span>Examination Evaluation System</span>
                            </div>
                        </motion.a>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
