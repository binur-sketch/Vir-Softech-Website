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
                externalLink: s.externalLink,
                subItems: s.subItems ? s.subItems.map(sub => ({
                    name: sub.title,
                    path: `/solutions/${sub.slug}`,
                    externalLink: sub.externalLink
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
                                                    {item.externalLink ? (
                                                        <a href={item.externalLink} target="_blank" rel="noopener noreferrer" className="dropdown-item">
                                                            <div className="item-info">
                                                                <span className="item-name">{item.name}</span>
                                                            </div>
                                                            {item.subItems && <ChevronRight size={14} />}
                                                        </a>
                                                    ) : (
                                                        <Link to={item.path} className="dropdown-item">
                                                            <div className="item-info">
                                                                <span className="item-name">{item.name}</span>
                                                            </div>
                                                            {item.subItems && <ChevronRight size={14} />}
                                                        </Link>
                                                    )}
                                                    {item.subItems && (
                                                        <div className="dropdown-sub-menu">
                                                            {item.subItems.map(sub => (
                                                                sub.externalLink ? (
                                                                    <a key={sub.name} href={sub.externalLink} target="_blank" rel="noopener noreferrer" className="sub-item">
                                                                        {sub.name}
                                                                    </a>
                                                                ) : (
                                                                    <Link key={sub.name} to={sub.path} className="sub-item">
                                                                        {sub.name}
                                                                    </Link>
                                                                )
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
                                                <div className="mobile-sub-item-group" key={item.name}>
                                                    {item.externalLink ? (
                                                        <a href={item.externalLink} target="_blank" rel="noopener noreferrer" className="mobile-sub-link">
                                                            {item.name}
                                                        </a>
                                                    ) : (
                                                        <Link to={item.path} className="mobile-sub-link">
                                                            {item.name}
                                                        </Link>
                                                    )}
                                                    {item.subItems && (
                                                        <div className="mobile-nested-dropdown">
                                                            {item.subItems.map(sub => (
                                                                sub.externalLink ? (
                                                                    <a key={sub.name} href={sub.externalLink} target="_blank" rel="noopener noreferrer" className="mobile-nested-link">
                                                                        {sub.name}
                                                                    </a>
                                                                ) : (
                                                                    <Link key={sub.name} to={sub.path} className="mobile-nested-link">
                                                                        {sub.name}
                                                                    </Link>
                                                                )
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
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
                    padding: 2rem 0;
                    transition: var(--transition-normal);
                    background: transparent;
                }

                .navbar-new.scrolled {
                    padding: 1rem 0;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(25px);
                    box-shadow: var(--shadow-lg);
                    border-bottom: 1px solid rgba(2, 48, 71, 0.05);
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
                    height: 54px;
                    width: auto;
                    transition: var(--transition-normal);
                    filter: brightness(0) invert(1);
                }

                .navbar-new.scrolled .nav-logo img {
                    height: 44px;
                    filter: none;
                }

                .nav-menu {
                    display: flex;
                    align-items: center;
                    gap: 2.5rem;
                }

                .nav-item {
                    position: relative;
                }

                .nav-link-new {
                    font-weight: 600;
                    font-size: 1rem;
                    color: white;
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    padding: 0.5rem 0;
                    transition: var(--transition-normal);
                }

                .navbar-new.scrolled .nav-link-new {
                    color: var(--primary);
                }

                .nav-link-new:hover, .nav-link-new.active {
                    color: var(--accent) !important;
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
                    min-width: 350px;
                    max-height: 70vh;
                    overflow-y: auto;
                    padding: 0;
                    border-radius: var(--radius-lg);
                    margin-top: 1.5rem;
                    box-shadow: var(--shadow-xl);
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(25px);
                    border: 1px solid rgba(2, 48, 71, 0.05);
                }

                /* Custom Scrollbar for Dropdown */
                .dropdown-container::-webkit-scrollbar {
                    width: 6px;
                }
                .dropdown-container::-webkit-scrollbar-track {
                    background: transparent;
                }
                .dropdown-container::-webkit-scrollbar-thumb {
                    background: rgba(2, 48, 71, 0.2);
                    border-radius: 10px;
                }
                .dropdown-container::-webkit-scrollbar-thumb:hover {
                    background: rgba(2, 48, 71, 0.5);
                }

                .dropdown-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    padding: 1.5rem;
                }

                .dropdown-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.6rem 1rem;
                    border-radius: var(--radius-md);
                    transition: var(--transition-normal);
                    color: var(--primary);
                    font-weight: 600;
                    background: transparent;
                }

                .dropdown-item:hover {
                    background: var(--background-alt);
                    color: var(--accent-hover);
                    transform: translateX(5px);
                }

                .dropdown-sub-menu {
                    padding-left: 1.25rem;
                    margin-top: 0.2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                    border-left: 3px solid var(--background-alt);
                    margin-left: 1.25rem;
                }

                .sub-item {
                    padding: 0.4rem 1rem;
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    border-radius: var(--radius-sm);
                    font-weight: 500;
                    display: block;
                    transition: var(--transition-fast);
                }

                .sub-item:hover {
                    color: var(--primary);
                    background: var(--background-alt);
                    padding-left: 1.5rem;
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
                    background: var(--white);
                    z-index: 1001;
                    padding: 2.5rem;
                    display: flex;
                    flex-direction: column;
                    box-shadow: var(--shadow-xl);
                }

                .mobile-sidebar-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 4rem;
                }

                .mobile-logo {
                    height: 48px;
                }

                .mobile-nav-links {
                    flex: 1;
                    overflow-y: auto;
                }

                .mobile-nav-item {
                    margin-bottom: 2rem;
                }

                .mobile-nav-link {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--primary);
                    display: block;
                    margin-bottom: 1rem;
                }

                .mobile-dropdown {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    padding-left: 1.5rem;
                    border-left: 3px solid var(--background-alt);
                }

                .mobile-sub-link {
                    font-size: 1.1rem;
                    color: var(--text-muted);
                    font-weight: 600;
                    margin-bottom: 0.75rem;
                    display: block;
                }

                .mobile-nested-dropdown {
                    padding-left: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                    margin-bottom: 1.5rem;
                    border-left: 1px solid rgba(2, 48, 71, 0.1);
                }

                .mobile-nested-link {
                    font-size: 1rem;
                    color: var(--text);
padding: 0.4rem 0;
                    display: block;
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
