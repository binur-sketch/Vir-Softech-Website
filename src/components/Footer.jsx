import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-new">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-col brand-col">
                        <Link to="/" className="footer-logo">
                            <img src={logo} alt="Vir Softech" />
                            <div className="logo-text">
                                <span className="brand-name">VIR SOFTECH</span>
                                <span className="brand-tagline">Stride to Success</span>
                            </div>
                        </Link>
                        <p className="footer-description">
                            Engineering the future through innovative Imaging, Computer Vision, and Enterprise Content Management solutions. 
                            Global excellence from Noida to Tokyo.
                        </p>
                        <div className="social-links">
                            <a href="https://in.linkedin.com/company/virsoftech" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="https://twitter.com/virsoftech" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="https://www.facebook.com/virsoftech.official/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="https://www.instagram.com/virsoftech/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="https://www.youtube.com/c/VirSoftech" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube"><Youtube size={20} /></a>
                        </div>
                    </div>

                    {/* Solutions Column */}
                    <div className="footer-col">
                        <h4 className="footer-title">Solutions</h4>
                        <ul className="footer-links">
                            <li><Link to="/solutions/enterprise-content-management">VsDox ECM</Link></li>
                            <li><Link to="/solutions/eval-educational-solution-suite">eVAL Education Suite</Link></li>
                            <li><Link to="/solutions/print-product-engineering">Print Engineering</Link></li>
                            <li><Link to="/solutions/custom-product-engineering">Custom Software</Link></li>
                            <li><Link to="/solutions/design-artwork-automation">Design Automation</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div className="footer-col">
                        <h4 className="footer-title">Company</h4>
                        <ul className="footer-links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/blog">Our Blog</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="footer-col contact-col">
                        <h4 className="footer-title">Contact Us</h4>
                        <div className="contact-details">
                            <div className="contact-item">
                                <Mail size={18} className="contact-icon" />
                                <div>
                                    <p className="contact-label">Email</p>
                                    <a href="mailto:corp@virsoftech.com" className="contact-value">corp@virsoftech.com</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <Phone size={18} className="contact-icon" />
                                <div>
                                    <p className="contact-label">Phone</p>
                                    <div className="contact-values-row">
                                        <a href="tel:+919319275051" className="contact-value">+91-9319275051</a>
                                        <span className="separator">,</span>
                                        <a href="tel:+919871258989" className="contact-value">+91-9871258989</a>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-item">
                                <MapPin size={18} className="contact-icon" />
                                <div>
                                    <p className="contact-label">Headquarters</p>
                                    <p className="contact-value">A 306, The I Thum, Plot No. A 40, Sector 62, Noida, UP 201309</p>
                                </div>
                            </div>
                        </div>

                        <div className="footer-certifications">
                            <div className="cert-card">
                                <img src="https://upload.wikimedia.org/wikipedia/en/5/5a/Government_e_Marketplace_Logo.png" alt="GeM Logo" />
                            </div>
                            <div className="cert-card">
                                <img src="https://cmmiinstitute.com/CMMI/media/CMMIInstitute/Logos/CMMI-Appraised-ML3-RGB.png" alt="CMMI ML3 Logo" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © {currentYear} Vir Softech Pvt. Ltd. All rights reserved.
                        </p>
                        <div className="footer-bottom-links">
                            <Link to="/terms">Terms of Service</Link>
                            <Link to="/cookies">Cookie Policy</Link>
                            <Link to="/sitemap">Sitemap</Link>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .footer-new {
                    background: var(--primary);
                    color: var(--white);
                    padding: 80px 0 40px;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 0.8fr 0.8fr 1.2fr;
                    gap: 3rem;
                    margin-bottom: 60px;
                }

                .footer-logo {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 1.5rem;
                }

                .footer-logo img {
                    height: 40px;
                    filter: brightness(0) invert(1);
                }

                .footer-logo .brand-name {
                    color: white;
                    font-size: 1.25rem;
                    font-weight: 800;
                    letter-spacing: 1px;
                }

                .footer-logo .brand-tagline {
                    color: var(--accent);
                    font-size: 0.65rem;
                    letter-spacing: 1px;
                }

                .footer-description {
                    color: var(--text-light);
                    font-size: 0.95rem;
                    line-height: 1.7;
                    margin-bottom: 2rem;
                    max-width: 350px;
                }

                .social-links {
                    display: flex;
                    gap: 1rem;
                }

                .social-link {
                    width: 40px;
                    height: 40px;
                    border-radius: var(--radius-md);
                    background: rgba(255, 255, 255, 0.05);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--white);
                    transition: var(--transition-normal);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .social-link:hover {
                    background: var(--accent);
                    color: var(--white);
                    transform: translateY(-3px);
                    border-color: var(--accent);
                }

                .footer-title {
                    color: var(--white);
                    font-size: 1.125rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    position: relative;
                }

                .footer-links {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .footer-links a {
                    color: var(--text-light);
                    font-size: 0.95rem;
                    transition: var(--transition-fast);
                }

                .footer-links a:hover {
                    color: var(--accent);
                    padding-left: 5px;
                }

                .contact-details {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                    margin-bottom: 2rem;
                }

                .contact-item {
                    display: flex;
                    gap: 1rem;
                }

                .contact-icon {
                    color: var(--accent);
                    flex-shrink: 0;
                    margin-top: 0.25rem;
                }

                .contact-label {
                    font-size: 0.75rem;
                    color: var(--text-light);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 2px;
                }

                .contact-value {
                    color: var(--white);
                    font-size: 0.95rem;
                    font-weight: 500;
                }

                .contact-values-row {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }

                .separator {
                    color: var(--text-light);
                    font-weight: 500;
                }

                .footer-certifications {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1.5rem;
                }

                .cert-card {
                    background: white;
                    padding: 0.5rem;
                    border-radius: var(--radius-md);
                    width: 100px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }

                .cert-card img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }



                .footer-bottom {
                    padding-top: 2rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                }

                .footer-bottom-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 1.5rem;
                }

                .copyright {
                    font-size: 0.875rem;
                    color: var(--text-light);
                }

                .footer-bottom-links {
                    display: flex;
                    gap: 1.5rem;
                }

                .footer-bottom-links a {
                    font-size: 0.875rem;
                    color: var(--text-light);
                }

                .footer-bottom-links a:hover {
                    color: white;
                }

                @media (max-width: 1024px) {
                    .footer-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                @media (max-width: 640px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                    .footer-bottom-content {
                        flex-direction: column;
                        text-align: center;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
