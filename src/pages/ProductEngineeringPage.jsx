import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { CheckCircle2, Code, Layout, Database, Cloud, Server, Monitor } from 'lucide-react';

const ProductEngineeringPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="page-product-engineering">
            <PageHero 
                title="Product Engineering Services"
                subtitle="Your go-to partner for IT-led process transformation for product life-cycle management, development or workflow optimization needs, with a special focus on print."
            />

            {/* Print Products Section */}
            <section className="section bg-white" id="print-products">
                <div className="container">
                    <div className="content-grid">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="content-main"
                        >
                            <h2 className="section-title text-primary mb-4">Print Products</h2>
                            <p className="lead-text mb-6">
                                In today's dynamic economy, print and publishing companies must rapidly introduce new products and features to gain competitive advantage. The expected speed of change puts massive pressure on internal R&D teams to address fast high-priority customer reported issues.
                            </p>
                            <p className="mb-6">
                                Vir Softech is the ideal value-added software service provider for print and publishing companies that need to move quickly without sacrificing quality while maintaining a profit margin. We assist customers in enhancing their business by providing high-quality software services at affordable prices, whether they are developing new software products, enhancing existing products, or supporting legacy products.
                            </p>
                            <p className="mb-8">
                                At Vir Softech, we have a world-class team of computer scientists with decades of experience in managing all aspects of Imaging technologies and replacing RIP technologies with comparable/improved performance and quality.
                            </p>

                            <h3 className="text-2xl font-bold text-primary mb-4">Why should you trust us?</h3>
                            <ul className="custom-list mb-8">
                                <li>Proven experience in print areas such as RIP, color management, job management & settings, printer & cutter workflows, half-toning, VDP, imposition, bands generation and advanced functions such as nesting, tiling, step & repeat, and so on.</li>
                                <li>We help you target RFPs for specific market segments, such as production, industrial, commercial, large format and enterprise printing.</li>
                                <li>Having engagement with print OEMs across geographies such as Japan, USA, Europe, you can trust us to provide solutions across production, enterprise, graphic cards and large format printing segments.</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="content-sidebar"
                        >
                            <div className="card glass-card p-6">
                                <h3 className="text-xl font-bold text-primary mb-4">Why OEMs and ODMs choose us for RIP Replacement Services</h3>
                                <ul className="feature-list">
                                    <li><CheckCircle2 size={18} className="text-accent" /> About 100 person-years of combined print technology and domain experience</li>
                                    <li><CheckCircle2 size={18} className="text-accent" /> Super-strong expertise on PostScript, PDF, PCL & XPS</li>
                                    <li><CheckCircle2 size={18} className="text-accent" /> Experience of working across enterprise, production and large format printers</li>
                                    <li><CheckCircle2 size={18} className="text-accent" /> Member of Global Graphics software Partner Network - Implementation partner for Harlequin & Mako</li>
                                    <li><CheckCircle2 size={18} className="text-accent" /> Hands-on experience of working on all the major RIP technologies available in market including Harlequin RIP, Adobe RIP and GhostScript</li>
                                    <li><CheckCircle2 size={18} className="text-accent" /> Comprehensive training & consulting support</li>
                                    <li><CheckCircle2 size={18} className="text-accent" /> Experience of developing PDF applications using 3rd party PDF libraries</li>
                                    <li><CheckCircle2 size={18} className="text-accent" /> Expertise in developing Plug-ins for Adobe - Illustrator, InDesign, Acrobat, Photoshop & CorelDraw</li>
                                    <li><CheckCircle2 size={18} className="text-accent" /> Track record of successfully working with multiple print OEMs worldwide</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Custom Services Section */}
            <section className="section bg-light" id="customm_services">
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="section-title text-primary mb-4">Custom Services</h2>
                        <p className="lead-text max-w-3xl mx-auto">
                            With Vir Softech engineering services you can offload your end-to-end software development for business-leading transformation in managing documents, optimizing education, bringing new age printing services, or workflow management of artwork and design in print and packaging setups.
                        </p>
                        <p className="mt-4 max-w-3xl mx-auto">
                            You can rely on us to meet all of your current and future engineering and technology needs. You can work with us in multiple models - you can outsource your engineering needs at a solution-level, module-level, or skill-level.
                        </p>
                    </motion.div>

                    <div className="services-grid mb-16">
                        <div className="service-card card p-6">
                            <div className="icon-wrapper mb-4"><Monitor className="text-primary" size={32} /></div>
                            <h3 className="text-xl font-bold mb-3">New Product Development</h3>
                            <ul className="simple-list">
                                <li>Product ideation, conceptualization</li>
                                <li>Prototyping</li>
                                <li>Beta testing & go-to-market</li>
                            </ul>
                        </div>
                        <div className="service-card card p-6">
                            <div className="icon-wrapper mb-4"><Cloud className="text-primary" size={32} /></div>
                            <h3 className="text-xl font-bold mb-3">Product Transformation</h3>
                            <ul className="simple-list">
                                <li>Legacy transformation and regular upgrades</li>
                                <li>Technology assessment & migration</li>
                                <li>Mobile, Cloud, SaaS enablement</li>
                            </ul>
                        </div>
                        <div className="service-card card p-6">
                            <div className="icon-wrapper mb-4"><Server className="text-primary" size={32} /></div>
                            <h3 className="text-xl font-bold mb-3">Maintenance & Testing</h3>
                            <ul className="simple-list">
                                <li>Life-cycle management</li>
                                <li>Product enhancements</li>
                                <li>Product maintenance & testing</li>
                            </ul>
                        </div>
                        <div className="service-card card p-6">
                            <div className="icon-wrapper mb-4"><Layout className="text-primary" size={32} /></div>
                            <h3 className="text-xl font-bold mb-3">UI/UX Development</h3>
                            <ul className="simple-list">
                                <li>Visual design and asset creation</li>
                                <li>Front-end engineering (HTML/CSS)</li>
                                <li>Wireframes & Concept prototyping</li>
                            </ul>
                        </div>
                    </div>

                    <div className="tech-stack-container card p-8 glass-card">
                        <h3 className="text-2xl font-bold text-primary mb-6 text-center">Our Technology Stack & Domains</h3>
                        <div className="tech-grid">
                            <div className="tech-col">
                                <h4 className="text-lg font-bold mb-3 text-secondary border-b pb-2">Programming Languages & Frameworks</h4>
                                <ul className="tech-list">
                                    <li>C, C++, Java, C#</li>
                                    <li>PDLs - PostScript, PDF, XPS</li>
                                    <li>HTML5, JavaScript, JSP, HTTP, REST, J2EE, Node.js</li>
                                    <li>ReactJS, Angular, Google Flutter</li>
                                </ul>
                            </div>
                            <div className="tech-col">
                                <h4 className="text-lg font-bold mb-3 text-secondary border-b pb-2">Databases & Cloud Platforms</h4>
                                <ul className="tech-list">
                                    <li>Oracle, PostgreSQL</li>
                                    <li>NoSQL DB - Mongo DB</li>
                                    <li>AWS, Azure</li>
                                </ul>
                            </div>
                            <div className="tech-col">
                                <h4 className="text-lg font-bold mb-3 text-secondary border-b pb-2">Operating Systems</h4>
                                <ul className="tech-list">
                                    <li>Linux - RHEL, CentOS</li>
                                    <li>Monta Vista, WindRiver</li>
                                    <li>microITRON, ThreadX (ARM)</li>
                                    <li>Windows / Mac</li>
                                </ul>
                            </div>
                            <div className="tech-col">
                                <h4 className="text-lg font-bold mb-3 text-secondary border-b pb-2">Domains</h4>
                                <ul className="tech-list">
                                    <li>Print & Publishing workflows</li>
                                    <li>Production/Enterprise Printing / Graphic Arts / Large Format</li>
                                    <li>Digitization workflows</li>
                                    <li>Plug-ins for Acrobat, Indesign, Illustrator, Corel Draw</li>
                                    <li>Print Drivers - Win (V3/V4 architecture) and Mac</li>
                                </ul>
                            </div>
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
                .mb-3 { margin-bottom: 0.75rem; }
                .mb-4 { margin-bottom: 1rem; }
                .mb-6 { margin-bottom: 1.5rem; }
                .mb-8 { margin-bottom: 2rem; }
                .mb-12 { margin-bottom: 3rem; }
                .mb-16 { margin-bottom: 4rem; }
                .pb-2 { padding-bottom: 0.5rem; }
                .p-6 { padding: 1.5rem; }
                .p-8 { padding: 2rem; }
                .mx-auto { margin-left: auto; margin-right: auto; }
                .max-w-3xl { max-width: 48rem; }
                .text-2xl { font-size: 1.5rem; }
                .text-xl { font-size: 1.25rem; }
                .text-lg { font-size: 1.125rem; }
                .font-bold { font-weight: 700; }
                .text-primary { color: var(--primary); }
                .text-secondary { color: var(--secondary); }
                .text-accent { color: var(--accent); }
                .text-center { text-align: center; }
                .border-b { border-bottom: 1px solid rgba(2, 48, 71, 0.1); }
                .bg-light { background: var(--background-alt); }
                .bg-white { background: var(--white); }

                .custom-list {
                    list-style: disc;
                    padding-left: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .custom-list li {
                    color: var(--text-muted);
                    line-height: 1.6;
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

                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }

                .service-card {
                    border: 1px solid rgba(2, 48, 71, 0.05);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .service-card:hover {
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

                .tech-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                }

                .tech-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .tech-list li {
                    color: var(--text-muted);
                    font-size: 0.95rem;
                }

                .glass-card {
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(2, 48, 71, 0.05);
                    box-shadow: var(--shadow-md);
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

export default ProductEngineeringPage;
