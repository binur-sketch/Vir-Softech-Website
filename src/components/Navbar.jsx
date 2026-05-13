import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Globe, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { solutions } from '../data/solutions';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'Solutions',
            path: '/solutions',
            dropdown: solutions.map(s => ({
                name: s.title,
                path: `/solutions/${s.slug}`,
                subItems: s.subItems ? s.subItems.map(sub => ({
                    name: sub.title,
                    path: `/solutions/${sub.slug}`
                })) : null
            }))
        },
        { name: 'Careers', path: '/careers' },
        { name: 'Blog', path: '/blog' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav className={`navbar-new ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-wrapper">
                {/* Logo Section */}
                <Link to="/" className="nav-logo">
                    <img src={logo} alt="Vir Softech" />
                    <div className="logo-text">
                        <span className="brand-name">VIR SOFTECH</span>
                        <span className="brand-tagline">Stride to Success</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="nav-menu desktop-only">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="nav-item"
                            onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                to={link.path}
                                className={`nav-link-new ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                {link.name}
                                {link.dropdown && <ChevronDown size={14} className={`chevron ${activeDropdown === link.name ? 'rotate' : ''}`} />}
                            </Link>

                            <AnimatePresence>
                                {link.dropdown && activeDropdown === link.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="dropdown-container glass"
                                    >
                                        <div className="dropdown-grid">
                                            {link.dropdown.map((item) => (
                                                <div key={item.name} className="dropdown-item-wrapper">
                                                    <Link to={item.path} className="dropdown-item">
                                                        <div className="item-info">
                                                            <span className="item-name">{item.name}</span>
                                                        </div>
                                                        {item.subItems && <ChevronRight size={14} />}
                                                    </Link>
                                                    {item.subItems && (
                                                        <div className="dropdown-sub-menu">
                                                            {item.subItems.map(sub => (
                                                                <Link key={sub.name} to={sub.path} className="sub-item">
                                                                    {sub.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Action Buttons */}


                {/* Mobile Toggle */}
                <button className="mobile-toggle-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="mobile-sidebar glass"
                    >
                        <div className="mobile-sidebar-header">
                            <img src={logo} alt="Vir Softech" className="mobile-logo" />
                            <button onClick={() => setIsOpen(false)}><X size={24} /></button>
                        </div>
                        <div className="mobile-nav-links">
                            {navLinks.map((link) => (
                                <div key={link.name} className="mobile-nav-item">
                                    <Link to={link.path} className="mobile-nav-link">
                                        {link.name}
                                    </Link>
                                    {link.dropdown && (
                                        <div className="mobile-dropdown">
                                            {link.dropdown.map(item => (
                                                <Link key={item.name} to={item.path} className="mobile-sub-link">
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mobile-sidebar-footer">
                            <Link to="/contact" className="btn btn-primary w-full">Contact Us</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                .navbar-new {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 1000;
                    padding: 1.5rem 0;
                    transition: var(--transition-normal);
                    background: transparent;
                }

                .navbar-new.scrolled {
                    padding: 0.75rem 0;
                    background: rgba(255, 255, 255, 0.85);
                    backdrop-filter: blur(20px);
                    box-shadow: var(--shadow-md);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                }

                .nav-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .nav-logo {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .nav-logo img {
                    height: 48px;
                    width: auto;
                    transition: var(--transition-normal);
                    filter: brightness(0) invert(1);
                }

                .navbar-new.scrolled .nav-logo img {
                    height: 40px;
                    filter: none;
                }

                .logo-text {
                    display: flex;
                    flex-direction: column;
                    line-height: 1;
                }

                .brand-name {
                    font-family: var(--font-heading);
                    font-weight: 800;
                    font-size: 1.25rem;
                    color: white;
                    letter-spacing: 0.5px;
                    transition: var(--transition-normal);
                }

                .navbar-new.scrolled .brand-name {
                    color: var(--primary);
                }

                .brand-tagline {
                    font-size: 0.7rem;
                    color: var(--secondary);
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-top: 2px;
                }

                .nav-menu {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                }

                .nav-item {
                    position: relative;
                }

                .nav-link-new {
                    font-weight: 600;
                    font-size: 0.95rem;
                    color: white;
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    padding: 0.5rem 0;
                    transition: var(--transition-normal);
                }

                .navbar-new.scrolled .nav-link-new {
                    color: var(--primary);
                }

                .nav-link-new:hover, .nav-link-new.active {
                    color: var(--secondary) !important;
                }

                .chevron {
                    transition: transform 0.3s ease;
                }

                .chevron.rotate {
                    transform: rotate(180deg);
                }

                .dropdown-container {
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    min-width: 280px;
                    padding: 1.5rem;
                    border-radius: var(--radius-lg);
                    margin-top: 1rem;
                    box-shadow: var(--shadow-xl);
                }

                .dropdown-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .dropdown-item-wrapper {
                    position: relative;
                }

                .dropdown-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.75rem 1rem;
                    border-radius: var(--radius-md);
                    transition: var(--transition-fast);
                    color: var(--text);
                    font-weight: 500;
                }

                .dropdown-item:hover {
                    background: var(--background-alt);
                    color: var(--secondary);
                }

                .dropdown-sub-menu {
                    padding-left: 1rem;
                    margin-top: 0.25rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                    border-left: 2px solid var(--background-alt);
                    margin-left: 1rem;
                }

                .sub-item {
                    padding: 0.4rem 0.75rem;
                    font-size: 0.85rem;
                    color: var(--text-muted);
                    border-radius: var(--radius-sm);
                }

                .sub-item:hover {
                    color: var(--secondary);
                    background: rgba(99, 102, 241, 0.05);
                }

                .nav-actions {
                    display: flex;
                    align-items: center;
                    gap: 1.25rem;
                }

                .icon-btn {
                    background: none;
                    border: none;
                    color: var(--primary);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.5rem;
                    border-radius: var(--radius-full);
                    transition: var(--transition-fast);
                }

                .icon-btn:hover {
                    background: var(--background-alt);
                    color: var(--secondary);
                }

                .btn-sm {
                    padding: 0.5rem 1.25rem;
                    font-size: 0.875rem;
                }

                .mobile-toggle-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                    transition: var(--transition-normal);
                }

                .navbar-new.scrolled .mobile-toggle-btn {
                    color: var(--primary);
                }

                .mobile-sidebar {
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: 85%;
                    height: 100vh;
                    background: white;
                    z-index: 1001;
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                }

                .mobile-sidebar-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 3rem;
                }

                .mobile-logo {
                    height: 40px;
                }

                .mobile-nav-links {
                    flex: 1;
                    overflow-y: auto;
                }

                .mobile-nav-item {
                    margin-bottom: 1.5rem;
                }

                .mobile-nav-link {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--primary);
                    display: block;
                    margin-bottom: 0.75rem;
                }

                .mobile-dropdown {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    padding-left: 1rem;
                    border-left: 2px solid var(--background-alt);
                }

                .mobile-sub-link {
                    font-size: 0.95rem;
                    color: var(--text-muted);
                }

                .desktop-only {
                    display: flex;
                }

                @media (max-width: 1024px) {
                    .desktop-only {
                        display: none;
                    }
                    .mobile-toggle-btn {
                        display: block;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
