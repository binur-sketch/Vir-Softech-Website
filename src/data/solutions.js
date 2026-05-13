export const solutions = [
    {
        title: "Enterprise Content Management",
        slug: "enterprise-content-management",
        description: "Secure, scalable, and cloud-ready platform for managing your enterprise content lifecycle.",
        longDescription: "VsDox ECM is a robust, open-source based capabilities built on the DSpace platform, designed to manage the entire lifecycle of your organization's content. From digitizing physical documents to managing born-digital assets, VsDox ensures your information is secure, accessible, and compliant. Whether deployed on-premise, on AWS, or Microsoft Azure, it scales effortlessly to meet the demands of large data archives.",
        features: [
            "Advanced Content Capture: Multilingual OCR, image enhancement, and automated metadata indexing.",
            "Smart Retrieval: Full-text indexing, structured folders, and granular access controls.",
            "Workflow Automation: Configurable workflows for review, approval, and document routing.",
            "Enterprise Security: OWASP compliant, digital signatures, encryption, and comprehensive audit trails.",
            "Seamless Integration: Interoperable with SAP, Google Enterprise, and other core business systems."
        ],
        benefits: [
            "Reduce Total Cost of Ownership (TCO) with no proprietary licensing fees.",
            "Enhance operational efficiency by eliminating manual paper handling.",
            "Ensure regulatory compliance and data security.",
            "Enable remote access to critical business documents."
        ],
        content: "Our Enterprise Content Management (ECM) solutions empower organizations to capture, store, activate, analyze, and automate business content. By leveraging advanced OCR, metadata tagging, and workflow automation, we turn your documents into a powerful knowledge base. Whether it's digitizing physical archives or managing born-digital assets, our VsDox platform ensures security, compliance, and accessibility."
    },
    {
        title: "Eval Educational Solution Suite",
        slug: "eval-educational-solution-suite",
        description: "A comprehensive ecosystem for modern education and assessment.",
        longDescription: "The Eval Suite addresses the end-to-end needs of educational institutions, examination bodies, and recruitment agencies. We provide a modular ecosystem that digitizes every stage of the assessment lifecycle—from candidate registration to result declaration—ensuring integrity, speed, and accuracy.",
        features: [
            "Modular Architecture: Choose only the components you need (OMR, CBT, LMS, etc.).",
            "Scalable: Proven to handle millions of candidates.",
            "Secure: End-to-end encryption and role-based access control.",
            "Analytics: Deep insights into student performance and exam trends."
        ],
        content: "The Eval Suite is designed to address the end-to-end needs of educational institutions and examination bodies. From candidate registration to result declaration, our modular solutions ensure integrity, efficiency, and scalability in the assessment process.",
        subItems: [
            {
                title: "EVAL EXAMS",
                slug: "eval-exams",
                description: "End-to-end examination management system.",
                longDescription: "EVAL EXAMS handles the entire lifecycle of an examination. It serves as the central command center for managing candidates, centers, and logistics.",
                features: [
                    "Candidate Registration & Admit Card Generation.",
                    "Exam Center Management & Allocation.",
                    "Attendance Tracking.",
                    "Result Processing & Declaration."
                ]
            },
            {
                title: "OMR Exam Software",
                slug: "omr-exam-software",
                description: "High-accuracy Optical Mark Recognition software.",
                longDescription: "Our eVAL OMR software offers 100% accuracy in reading optical marks. It eliminates the need for expensive specialized scanners by working with standard flatbed/ADF scanners and normal A4 paper, making it a cost-effective choice for schools and universities.",
                features: [
                    "100% Accuracy: Advanced algorithms tailored for bubble sheet recognition.",
                    "Hardware Agnostic: Works with standard office printers and scanners.",
                    "Custom Form Designer: Create your own OMR sheets with ease.",
                    "Advanced Reporting: Generate graphical analysis and detailed merit lists."
                ]
            },
            {
                title: "Computer Based Test Platform",
                slug: "computer-based-test-platform",
                description: "Secure and scalable online testing.",
                longDescription: "Conduct exams anywhere, anytime. Our CBT platform supports high-stakes entrance exams and internal assessments with robust security measures to prevent malpractice.",
                features: [
                    "AI-Proctoring: Automated monitoring of candidate behavior.",
                    "Question Bank Support: Randomization and various question types.",
                    "Real-time Analytics: Instant results and performance metrics.",
                    "Offline Support: Sync capabilities for low-bandwidth areas."
                ]
            },
            {
                title: "Learning Management Solution",
                slug: "learning-management-solution",
                description: "Interactive platform for teaching and learning.",
                longDescription: "Our LMS facilitates seamless course delivery, enhancing student engagement through multimedia content and collaborative tools. It bridges the gap between educators and learners.",
                features: [
                    "Course Content Management.",
                    "Student Progress Tracking.",
                    "Discussion Forums & Collaboration Tools.",
                    "Integrated Assessments."
                ]
            },
            {
                title: "On-Screen Marking System",
                slug: "on-screen-marking-platform",
                description: "Digitize the evaluation of physical answer scripts.",
                longDescription: "eVAL OSM revolutionizes the grading process by digitizing answer booklets. Evaluators can mark scripts on-screen from secure remote locations, ensuring faster results and eliminating logistical risks.",
                features: [
                    "Digital Evaluation: Mark scanned answer booklets on screen.",
                    "Auto-Totalling: Eliminates calculation errors.",
                    "Masking: Anonymizes student details for unbiased grading.",
                    "Moderation Workflow: Supports multi-tier review processes."
                ]
            }
        ]
    },
    {
        title: "Print Product Engineering",
        slug: "print-product-engineering",
        description: "Innovative software solutions for the print industry.",
        longDescription: "We specialize in developing custom software for the print and packaging industry. Our deep understanding of PDF workflows, color management, and RIP technologies allows us to build solutions that optimize production and ensure quality.",
        features: [
            "Prepress Automation: Streamline file preparation for print.",
            "Color Management: Ensure color consistency across devices.",
            "Workflow Optimization: Reduce manual touchpoints and errors.",
            "RIP Solutions: High-performance raster image processing."
        ]
    },
    {
        title: "Custom Product Engineering",
        slug: "custom-product-engineering",
        description: "Turning your ideas into robust software products.",
        longDescription: "Our product engineering services cover the full software development lifecycle. We partner with ISVs and enterprises to build scalable, secure, and high-performance software tailored to unique business requirements.",
        features: [
            "Full Lifecycle Development: From ideation to deployment.",
            "Technology Expertise: MERN, Python, Java, and more.",
            "Agile Methodology: Iterative delivery for faster time-to-market.",
            "QA & Testing: Comprehensive automated and manual testing."
        ]
    },
    {
        title: "Design and Artwork Automation",
        slug: "design-artwork-automation",
        description: "Accelerate your creative workflows with custom plugins.",
        longDescription: "Automate repetitive design tasks with our custom plugins and scripts for Adobe Creative Cloud (InDesign, Illustrator, Photoshop) and CorelDraw. We help agencies and prepress houses reduce manual errors and speed up artwork generation.",
        features: [
            "Custom Plugins: Tailored extensions for Adobe & Corel suites.",
            "Automated Layout: Data-driven placement of text and images.",
            "PDF Automation: Advanced manipulation and optimization of PDFs.",
            "Error Reduction: Eliminate manual copy-paste errors."
        ],
        benefits: [
            "Reduce artwork generation time by up to 75%.",
            "Ensure 100% accuracy in text and asset placement.",
            "Streamline approval workflows.",
            "Handle multi-language adaptations effortlessly."
        ]
    }
];

export const getSolutionBySlug = (slug) => {
    for (const s of solutions) {
        if (s.slug === slug) return s;
        if (s.subItems) {
            const sub = s.subItems.find(sub => sub.slug === slug);
            if (sub) return sub;
        }
    }
    return null;
};

export const getAllSolutions = () => solutions;
