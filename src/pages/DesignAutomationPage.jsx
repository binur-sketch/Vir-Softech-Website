import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { CheckCircle2, Box, Layers, Settings, FileText, Smartphone } from 'lucide-react';

const DesignAutomationPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-design-automation">
            <PageHero 
                title="Design & Artwork Automation"
                subtitle="Reduce significant time and effort in designing artwork and manage design processes using automation."
            />

            <section className="section bg-white">
                <div className="container">
                    <div className="content-grid">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="content-main"
                        >
                            <h2 className="section-title text-primary mb-4">Design and Artwork Automation</h2>
                            <p className="lead-text mb-6">
                                You can now automate the artwork design process with Vir Softech's custom plugins for desktop and digital publishing to create high quality artwork with 100% accuracy. You get it all at a much lower time, money, and review effort.
                            </p>
                            <p className="mb-6">
                                Traditional artwork creation for packaging workflow is often based on digital publishing apps such as InDesign, CorelDraw, Photoshop, Acrobat, Illustrator, etc. For regulated industries, such as pharma and consumer durables, there is a need to customize the product packaging to cover the regulatory aspects of countries where the product is being sold.
                            </p>
                            <p className="mb-6">
                                As a product owner, you may now need to design multiple versions of product designs for folding boxes, blisters, packets, leaflets and a variety of packages. This is complex, error-prone and costly.
                            </p>
                            
                            <div className="case-study-box card p-6 mt-8 border-l-4">
                                <h3 className="text-xl font-bold text-primary mb-3">Client Success Story</h3>
                                <p className="mb-4">
                                    One of the global pharma companies uses our custom InDesign plug-in to automate the designing of leaflets and folding boxes for various medicine brands. 
                                    The customization includes features such as:
                                </p>
                                <ul className="simple-list mb-4">
                                    <li>Automated placement of content (text, images, and tables)</li>
                                    <li>Multi-column alignment and multi-language support</li>
                                    <li>Font style and paragraph style application</li>
                                    <li>Blank space adjustment</li>
                                </ul>
                                <p className="font-bold text-accent">
                                    Our automation has resulted in almost 75% reduction in time for designing of a leaflet as compared to the current manual process.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="content-sidebar"
                        >
                            <div className="card glass-card p-6 mb-6">
                                <h3 className="text-xl font-bold text-primary mb-4">Custom Plugins</h3>
                                <p className="mb-4 text-sm text-muted">
                                    Various desktop publishing software such as InDesign, CorelDraw, Photoshop, Acrobat, Illustrator have advanced digital publishing capabilities. Publishers need to manage and enhance PDF workflows, optimize web documents for printing and optimize content for various market segments.
                                </p>
                                <p className="mb-4 text-sm font-bold text-secondary">
                                    We develop plug-ins in C++, scripts, VBA, VSTA & HTML for Windows and Mac OS. Our specialization is across industrial segments such as print, imaging, graphics, and publishing.
                                </p>
                            </div>

                            <div className="card glass-card p-6">
                                <h3 className="text-xl font-bold text-primary mb-4">Scripting Models</h3>
                                <ul className="feature-list">
                                    <li><CheckCircle2 size={18} className="text-accent" /> Workflow automation and optimization</li>
                                    <li><CheckCircle2 size={18} className="text-accent" /> Web to print solutions</li>
                                    <li><CheckCircle2 size={18} className="text-accent" /> Variable data printing</li>
                                    <li><CheckCircle2 size={18} className="text-accent" /> InDesign Server integration</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="section-title text-primary mb-4">Our Recent Work</h2>
                        <p className="lead-text max-w-3xl mx-auto">
                            We have successfully delivered automated solutions that significantly improve efficiency and accuracy in the printing and packaging workflows.
                        </p>
                    </motion.div>

                    <div className="work-grid">
                        <div className="work-card card p-6 text-center">
                            <div className="icon-wrapper mb-4 mx-auto"><FileText className="text-primary" size={32} /></div>
                            <h4 className="font-bold mb-2">Modern Plugins</h4>
                            <p className="text-sm text-muted">Help customers replace Flash based extensions with modern CEP HTML based plugins.</p>
                        </div>
                        <div className="work-card card p-6 text-center">
                            <div className="icon-wrapper mb-4 mx-auto"><Layers className="text-primary" size={32} /></div>
                            <h4 className="font-bold mb-2">Variable Data Printing</h4>
                            <p className="text-sm text-muted">Improve printing and packaging workflows, with efficient variable data printing.</p>
                        </div>
                        <div className="work-card card p-6 text-center">
                            <div className="icon-wrapper mb-4 mx-auto"><Settings className="text-primary" size={32} /></div>
                            <h4 className="font-bold mb-2">Color Management</h4>
                            <p className="text-sm text-muted">Improve color management and imposition for better print consistency.</p>
                        </div>
                        <div className="work-card card p-6 text-center">
                            <div className="icon-wrapper mb-4 mx-auto"><Box className="text-primary" size={32} /></div>
                            <h4 className="font-bold mb-2">3D & CAD Integration</h4>
                            <p className="text-sm text-muted">Incorporate 3D visualization and CAD functionality into existing tools.</p>
                        </div>
                        <div className="work-card card p-6 text-center">
                            <div className="icon-wrapper mb-4 mx-auto"><Smartphone className="text-primary" size={32} /></div>
                            <h4 className="font-bold mb-2">Powerful UI Components</h4>
                            <p className="text-sm text-muted">Create powerful UI components using wxWidgets that integrates seamlessly with SDKs.</p>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .content-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 4rem;
                }
                .mb-2 { margin-bottom: 0.5rem; }
                .mb-3 { margin-bottom: 0.75rem; }
                .mb-4 { margin-bottom: 1rem; }
                .mb-6 { margin-bottom: 1.5rem; }
                .mb-8 { margin-bottom: 2rem; }
                .mb-12 { margin-bottom: 3rem; }
                .mt-8 { margin-top: 2rem; }
                .p-6 { padding: 1.5rem; }
                .mx-auto { margin-left: auto; margin-right: auto; }
                .max-w-3xl { max-width: 48rem; }
                .text-xl { font-size: 1.25rem; }
                .text-sm { font-size: 0.875rem; }
                .font-bold { font-weight: 700; }
                .text-primary { color: var(--primary); }
                .text-secondary { color: var(--secondary); }
                .text-accent { color: var(--accent); }
                .text-muted { color: var(--text-muted); }
                .text-center { text-align: center; }
                .bg-light { background: var(--background-alt); }
                .bg-white { background: var(--white); }
                .border-l-4 { border-left: 4px solid var(--accent); }

                .lead-text {
                    font-size: 1.15rem;
                    line-height: 1.8;
                    color: var(--text-muted);
                }

                .feature-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .feature-list li {
                    display: flex;
                    gap: 0.75rem;
                    align-items: flex-start;
                    color: var(--text-muted);
                    font-size: 0.95rem;
                    line-height: 1.5;
                }
                
                .feature-list li svg {
                    margin-top: 0.2rem;
                    flex-shrink: 0;
                }

                .simple-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .simple-list li {
                    position: relative;
                    padding-left: 1.25rem;
                    color: var(--text-muted);
                    font-size: 0.95rem;
                }

                .simple-list li::before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: var(--secondary);
                    font-weight: bold;
                }

                .glass-card {
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(2, 48, 71, 0.05);
                    box-shadow: var(--shadow-md);
                }

                .work-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                }

                .work-card {
                    border: 1px solid rgba(2, 48, 71, 0.05);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .work-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg);
                    border-color: var(--accent);
                }

                .icon-wrapper {
                    display: inline-flex;
                    padding: 1rem;
                    background: rgba(33, 158, 188, 0.1);
                    border-radius: var(--radius-md);
                }

                @media (max-width: 1024px) {
                    .content-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default DesignAutomationPage;
