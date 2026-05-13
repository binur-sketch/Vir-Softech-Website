import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Clock, ArrowRight, Star } from 'lucide-react';
import PageHero from '../components/PageHero';

const Careers = () => {
    const jobs = [
        {
            title: "Senior Full Stack Developer",
            department: "Engineering",
            location: "Noida, India",
            type: "Full-time",
            tags: ["React", "Node.js", "Python"]
        },
        {
            title: "AI / Computer Vision Engineer",
            department: "R&D",
            location: "Noida / Remote",
            type: "Full-time",
            tags: ["OpenCV", "PyTorch", "C++"]
        },
        {
            title: "UX/UI Designer",
            department: "Design",
            location: "Hybrid",
            type: "Full-time",
            tags: ["Figma", "Design Systems"]
        }
    ];

    return (
        <div className="page-careers">
            <PageHero 
                title="Join Our Mission"
                subtitle="Build the future of digital transformation and imaging intelligence with a global team."
                bgImage="https://images.unsplash.com/photo-1522071823991-b99c223c7483?q=80&w=2400&auto=format&fit=crop"
            />

            <section className="section careers-intro">
                <div className="container">
                    <div className="grid-2 align-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="section-title">Why Work at <span className="text-gradient">Vir Softech?</span></h2>
                            <p className="lead-text">We foster a culture of innovation, continuous learning, and global collaboration.</p>
                            <p>At Vir Softech, you're not just a number. You're a key contributor to products that millions of people use every day. From digitizing national archives to revolutionizing examination systems, your work has a real-world impact.</p>
                        </motion.div>
                        <div className="benefits-sidebar card">
                            <div className="benefit-pill"><Star size={16} /> Global Exposure</div>
                            <div className="benefit-pill"><Star size={16} /> Continuous Learning</div>
                            <div className="benefit-pill"><Star size={16} /> Innovative Projects</div>
                            <div className="benefit-pill"><Star size={16} /> Hybrid Work Culture</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-alt open-positions">
                <div className="container">
                    <div className="section-header-new text-center">
                        <h2 className="section-title">Open <span className="text-gradient">Positions</span></h2>
                        <p className="section-subtitle">Find your next challenge in our growing team.</p>
                    </div>

                    <div className="jobs-container-new">
                        {jobs.map((job, index) => (
                            <motion.div 
                                key={index} 
                                className="job-row-card card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="job-main-info">
                                    <div className="job-title-group">
                                        <h3>{job.title}</h3>
                                        <div className="job-meta-pills">
                                            <span className="meta-pill"><Briefcase size={14} /> {job.department}</span>
                                            <span className="meta-pill"><MapPin size={14} /> {job.location}</span>
                                            <span className="meta-pill"><Clock size={14} /> {job.type}</span>
                                        </div>
                                    </div>
                                    <div className="job-tags">
                                        {job.tags.map(tag => <span key={tag} className="tag-pill">{tag}</span>)}
                                    </div>
                                </div>
                                <div className="job-action-new">
                                    <Link to="/contact" className="btn btn-primary-outline">Apply Now <ArrowRight size={18} /></Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="careers-footer text-center">
                        <p>Don't see a fitting role? We're always looking for talent.</p>
                        <a href="mailto:careers@virsoftech.com" className="email-link">careers@virsoftech.com</a>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .careers-intro {
                    padding: var(--spacing-xl) 0;
                }

                .align-center {
                    align-items: center;
                }

                .benefits-sidebar {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                    padding: 2rem;
                }

                .benefit-pill {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.75rem 1rem;
                    background: var(--background-alt);
                    border-radius: var(--radius-md);
                    font-weight: 700;
                    font-size: 0.85rem;
                    color: var(--primary);
                }

                .benefit-pill :global(svg) {
                    color: var(--secondary);
                }

                .open-positions {
                    padding: var(--spacing-xl) 0;
                }

                .jobs-container-new {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    margin: 3rem 0;
                }

                .job-row-card {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 2.5rem;
                    transition: var(--transition-normal);
                }

                .job-row-card:hover {
                    transform: translateX(10px);
                    border-color: var(--secondary);
                }

                .job-title-group h3 {
                    font-size: 1.5rem;
                    margin-bottom: 0.75rem;
                }

                .job-meta-pills {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                .meta-pill {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: var(--text-muted);
                }

                .job-tags {
                    display: flex;
                    gap: 0.5rem;
                    margin-top: 1.25rem;
                }

                .tag-pill {
                    padding: 0.25rem 0.75rem;
                    background: rgba(99, 102, 241, 0.05);
                    color: var(--secondary);
                    border-radius: var(--radius-full);
                    font-size: 0.75rem;
                    font-weight: 700;
                    border: 1px solid rgba(99, 102, 241, 0.1);
                }

                .job-action-new {
                    flex-shrink: 0;
                }

                .btn-primary-outline {
                    border: 2px solid var(--secondary);
                    color: var(--secondary);
                    background: transparent;
                    padding: 0.75rem 2rem;
                    font-weight: 700;
                    border-radius: var(--radius-md);
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .btn-primary-outline:hover {
                    background: var(--secondary);
                    color: white;
                }

                .careers-footer {
                    margin-top: 4rem;
                }

                .email-link {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: var(--secondary);
                    font-family: var(--font-heading);
                    text-decoration: underline;
                }

                @media (max-width: 900px) {
                    .job-row-card {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 2rem;
                    }
                    .job-action-new {
                        width: 100%;
                    }
                    .job-action-new .btn {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>
        </div>
    );
};

export default Careers;
