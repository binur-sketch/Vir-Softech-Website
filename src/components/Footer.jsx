import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';
import gemLogo from '../assets/gem.png';
import cmmiLogo from '../assets/cmmi logo.png';
import WavyDivider from './WavyDivider';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-new">
            <WavyDivider position="top" color="var(--white)" flip={true} />

            <div className="container footer-container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-col brand-col">
                        <Link to="/" className="footer-logo">
                            <img src={logo} alt="Vir Softech" />
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
                            <li><a href="https://vsdox.com" target="_blank" rel="noopener noreferrer">VsDox ECM</a></li>
                            <li><a href="https://evalexam.com" target="_blank" rel="noopener noreferrer">eVAL Education Suite</a></li>
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
                                    <div className="contact-values-col">
                                        <a href="tel:+919319275051" className="contact-value">+91-9319275051</a>
                                        <a href="tel:+919871258989" className="contact-value">+91-9871258989</a>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-item">
                                <MapPin size={18} className="contact-icon" />
                                <div>
                                    <p className="contact-label">Headquarters</p>
                                    <p className="contact-value">A 306, The I Thum, Sector 62, Noida, UP 201309</p>
                                </div>
                            </div>
                        </div>

                        <div className="footer-certifications">
                            <div className="cert-card">
                                <img src={gemLogo} alt="GeM Logo" />
                            </div>
                            <div className="cert-card">
                                <img src={cmmiLogo} alt="CMMI ML3 Logo" />
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
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/sitemap">Sitemap</Link>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .footer-new {
                    background: var(--primary);
                    color: var(--white);
                    padding: 100px 0 40px;
                    position: relative;
                }

                .footer-container {
                    position: relative;
                    z-index: 2;
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 0.8fr 0.8fr 1.2fr;
                    gap: 3rem;
                    margin-bottom: 50px;
                }

                .footer-logo img {
                    height: 50px;
                    filter: brightness(0) invert(1);
                    margin-bottom: 2rem;
                }

                .footer-description {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 1.1rem;
                    line-height: 1.7;
                    margin-bottom: 2.5rem;
                    max-width: 350px;
                }

                .social-links {
                    display: flex;
                    gap: 1.25rem;
                }

                .social-link {
                    width: 44px;
                    height: 44px;
                    border-radius: var(--radius-full);
                    background: rgba(255, 255, 255, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--white);
                    transition: var(--transition-normal);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .social-link:hover {
                    background: var(--accent);
                    color: var(--primary);
                    transform: translateY(-5px);
                    border-color: var(--accent);
                }

                .footer-title {
                    color: var(--white);
                    font-size: 1.4rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                    font-family: var(--font-heading);
                }

                .footer-links {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .footer-links a {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 1.05rem;
                    transition: var(--transition-normal);
                    font-weight: 500;
                }

                .footer-links a:hover {
                    color: var(--accent);
                    transform: translateX(8px);
                }

                .contact-details {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    margin-bottom: 2.5rem;
                }

                .contact-item {
                    display: flex;
                    gap: 1.25rem;
                }

                .contact-icon {
                    color: var(--accent);
                    flex-shrink: 0;
                    margin-top: 0.3rem;
                }

                .contact-label {
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.5);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 4px;
                    font-weight: 700;
                }

                .contact-value {
                    color: var(--white);
                    font-size: 1rem;
                    font-weight: 600;
                    white-space: nowrap;
                }

                .contact-values-col {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .footer-certifications {
                    display: flex;
                    gap: 1.25rem;
                }

                .cert-card {
                    background: rgba(255, 255, 255, 0.95);
                    padding: 0.6rem;
                    border-radius: var(--radius-md);
                    width: 110px;
                    height: 55px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                }

                .cert-card:hover {
                    transform: scale(1.05);
                }

                .cert-card img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }

                .footer-bottom {
                    padding-top: 3rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }

                .footer-bottom-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 2rem;
                }

                .copyright {
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.6);
                }

                .footer-bottom-links {
                    display: flex;
                    gap: 2.5rem;
                }

                .footer-bottom-links a {
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.6);
                    font-weight: 500;
                }

                .footer-bottom-links a:hover {
                    color: var(--accent);
                }

                @media (max-width: 1024px) {
                    .footer-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 4rem;
                    }
                }

                @media (max-width: 768px) {
                    .footer-new {
                        padding: 120px 0 40px;
                    }
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 3.5rem;
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


