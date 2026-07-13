import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'sending', message: 'Sending message...' });

        try {
            const response = await fetch("https://formsubmit.co/ajax/corp@virsoftech.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    _subject: "New Website Enquiry from " + formData.name
                })
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Message sent successfully! Our team will contact you shortly.' });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'An error occurred. Please try again or email us directly.' });
        }
    };

    return (
        <section className="contact-home" id="contact">
            <div className="container">
                <div className="contact-grid-wrapper">
                    {/* Contact Info Column */}
                    <motion.div 
                        className="contact-info-col"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="badge-accent">Get In Touch</span>
                        <h2 className="section-title">Let's Build the <br /><span className="text-gradient">Future Together</span></h2>
                        <p className="contact-intro">
                            Ready to transform your digital ecosystem? Our experts are here to help 
                            you navigate the complexities of imaging and automation.
                        </p>

                        <div className="contact-cards-grid">
                            <div className="info-card-small">
                                <div className="card-icon"><Mail size={20} /></div>
                                <div className="card-text">
                                    <p className="label">General Inquiries</p>
                                    <p className="value">corp@virsoftech.com</p>
                                </div>
                            </div>
                            <div className="info-card-small">
                                <div className="card-icon"><Phone size={20} /></div>
                                <div className="card-text">
                                    <p className="label">Call Us</p>
                                    <p className="value">+91-9871258989</p>
                                </div>
                            </div>
                        </div>

                        <div className="locations-wrapper">
                            <div className="location-item">
                                <div className="loc-header">
                                    <Globe size={18} className="text-secondary" />
                                    <h4>India Headquarters</h4>
                                </div>
                                <p>A-306, The I Thum, Sector 62, Noida, UP - 201301</p>
                            </div>
                            <div className="location-item">
                                <div className="loc-header">
                                    <Globe size={18} className="text-accent" />
                                    <h4>Japan Operations</h4>
                                </div>
                                <p>Tokyo, Japan - Serving our East Asian partners with precision.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form Column */}
                    <motion.div 
                        className="contact-form-col"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form className="contact-form-premium card" onSubmit={handleSubmit}>
                            <div className="form-header">
                                <MessageSquare size={24} className="text-secondary" />
                                <h3>Send us a Message</h3>
                            </div>

                            <div className="form-grid-row">
                                <div className="form-group-new">
                                    <label>Full Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                        placeholder="John Doe" 
                                        required 
                                    />
                                </div>
                                <div className="form-group-new">
                                    <label>Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        placeholder="john@company.com" 
                                        required 
                                    />
                                </div>
                            </div>

                            <div className="form-group-new">
                                <label>Subject</label>
                                <input 
                                    type="text" 
                                    name="subject" 
                                    value={formData.subject} 
                                    onChange={handleChange} 
                                    placeholder="How can we help?" 
                                    required 
                                />
                            </div>

                            <div className="form-group-new">
                                <label>Message</label>
                                <textarea 
                                    name="message" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    rows="5" 
                                    placeholder="Tell us about your project requirements..." 
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full">
                                Send Message <Send size={18} />
                            </button>

                            {status.message && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`form-status ${status.type}`}
                                >
                                    {status.message}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                .contact-home {
                    padding: var(--spacing-xl) 0;
                    background: var(--white);
                    position: relative;
                    overflow: hidden;
                }

                .contact-grid-wrapper {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 6rem;
                    align-items: center;
                }

                .contact-info-col {
                    max-width: 500px;
                }

                .contact-intro {
                    font-size: 1.15rem;
                    color: var(--text-muted);
                    margin-bottom: 3rem;
                    line-height: 1.6;
                }

                .contact-cards-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-bottom: 3rem;
                }

                .info-card-small {
                    padding: 1.5rem;
                    background: var(--background-alt);
                    border-radius: var(--radius-lg);
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .card-icon {
                    width: 40px;
                    height: 40px;
                    background: var(--white);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--secondary);
                    box-shadow: var(--shadow-sm);
                }

                .card-text .label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--text-light);
                    text-transform: uppercase;
                    margin-bottom: 2px;
                }

                .card-text .value {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--primary);
                }

                .locations-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .location-item {
                    padding-left: 1.5rem;
                    border-left: 3px solid var(--background-alt);
                }

                .loc-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 0.5rem;
                }

                .loc-header h4 {
                    font-size: 1.1rem;
                    margin: 0;
                }

                .location-item p {
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    margin: 0;
                }

                .contact-form-premium {
                    padding: 3rem;
                    border-radius: var(--radius-xl);
                    box-shadow: var(--shadow-xl);
                    border: 1px solid rgba(0, 0, 0, 0.05);
                }

                .form-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 2.5rem;
                    padding-bottom: 1.5rem;
                    border-bottom: 1px solid var(--background-alt);
                }

                .form-header h3 {
                    font-size: 1.5rem;
                    margin: 0;
                }

                .form-grid-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }

                .form-group-new {
                    margin-bottom: 1.5rem;
                }

                .form-group-new label {
                    display: block;
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: var(--primary);
                    margin-bottom: 0.5rem;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .form-group-new input, 
                .form-group-new textarea {
                    width: 100%;
                    padding: 0.85rem 1rem;
                    background: var(--background-alt);
                    border: 1px solid transparent;
                    border-radius: var(--radius-md);
                    font-family: inherit;
                    font-size: 0.95rem;
                    transition: var(--transition-fast);
                    outline: none;
                }

                .form-group-new input:focus, 
                .form-group-new textarea:focus {
                    background: var(--white);
                    border-color: var(--secondary);
                    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
                }

                .form-status {
                    margin-top: 1.5rem;
                    padding: 1rem;
                    border-radius: var(--radius-md);
                    font-size: 0.9rem;
                    text-align: center;
                }

                .form-status.success {
                    background: rgba(16, 185, 129, 0.1);
                    color: #065f46;
                    border: 1px solid rgba(16, 185, 129, 0.2);
                }

                .form-status.error {
                    background: rgba(239, 68, 68, 0.1);
                    color: #991b1b;
                    border: 1px solid rgba(239, 68, 68, 0.2);
                }

                .form-status.sending {
                    background: rgba(59, 130, 246, 0.1);
                    color: #1e40af;
                    border: 1px solid rgba(59, 130, 246, 0.2);
                }

                @media (max-width: 1024px) {
                    .contact-grid-wrapper {
                        grid-template-columns: 1fr;
                        gap: 4rem;
                    }
                    .contact-info-col {
                        max-width: 100%;
                    }
                }

                @media (max-width: 640px) {
                    .form-grid-row {
                        grid-template-columns: 1fr;
                    }
                    .contact-form-premium {
                        padding: 2rem 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
