export const solutions = [
    {
        title: "VsDox ECM",
        slug: "enterprise-content-management",
        externalLink: "https://vsdox.com",
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
        title: "eVAL Education Suite",
        slug: "eval-educational-solution-suite",
        externalLink: "https://evalexam.com",
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
                title: "OMR Software",
                slug: "omr-software",
                externalLink: "https://evalexam.com/omr-software"
            },
            {
                title: "On-Screen Marking",
                slug: "on-screen-marking",
                externalLink: "https://evalexam.com/on-screen-marking"
            },
            {
                title: "Question Paper Management",
                slug: "question-paper-management",
                externalLink: "https://evalexam.com/question-paper-management"
            },
            {
                title: "AI Proctoring",
                slug: "ai-proctoring",
                externalLink: "https://evalexam.com/ai-proctoring"
            },
            {
                title: "CBT Platform",
                slug: "cbt-platform",
                externalLink: "https://evalexam.com/cbt-platform"
            },
            {
                title: "Olympiad Portal",
                slug: "olympiad-portal",
                externalLink: "https://evalexam.com/olympiad-portal"
            }
        ]
    },
    {
        title: "Print Product Engineering",
        slug: "print-product-engineering",
        description: "Your go-to partner for IT-led process transformation for product life-cycle management, development or workflow optimization needs, with a special focus on print.",
        longDescription: "In today's dynamic economy, print and publishing companies must rapidly introduce new products and features to gain competitive advantage. Vir Softech is the ideal value-added software service provider for print and publishing companies that need to move quickly without sacrificing quality while maintaining a profit margin. We have a world-class team of computer scientists with decades of experience in managing all aspects of Imaging technologies and replacing RIP technologies with comparable or improved performance and quality.",
        features: [
            "Print Technology Expertise: Proven experience in RIP, color management, job management & settings, printer & cutter workflows, half-toning, VDP, and imposition.",
            "Advanced Functions: Deep knowledge of bands generation, nesting, tiling, step & repeat.",
            "Market Segment Focus: Target RFPs for specific market segments, such as production, industrial, commercial, large format and enterprise printing.",
            "Global OEM Engagement: Strong partnerships with print OEMs across geographies such as Japan, USA, and Europe.",
            "Core Competencies: Super-strong expertise on PostScript, PDF, PCL & XPS, and implementation partner for Harlequin & Mako."
        ]
    },
    {
        title: "Custom Product Engineering",
        slug: "custom-product-engineering",
        externalLink: "/solutions/print-product-engineering#customm_services",
        description: "Offload your end-to-end software development for business-leading transformation.",
        longDescription: "With Vir Softech engineering services you can offload your end-to-end software development for business-leading transformation in managing documents, optimizing education, bringing new age printing services, or workflow management of artwork and design in print and packaging setups. You can rely on us to meet all of your current and future engineering and technology needs in multiple models: solution-level, module-level, or skill-level.",
        features: [
            "New Product Development: Product ideation, conceptualization, Prototyping, Beta testing & go-to-market.",
            "Product Transformation: Legacy transformation and regular upgrades, Technology assessment & migration, Mobile, Cloud, SaaS enablement.",
            "Maintenance & Testing: Life-cycle management, Product enhancements, Product maintenance & testing.",
            "UI/UX Development: Visual design and asset creation, Front-end engineering, HTML/CSS, Wireframes, Concept prototype."
        ]
    },
    {
        title: "Design & Artwork Automation",
        slug: "design-artwork-automation",
        description: "Reduce significant time and effort in designing artwork and manage design processes using automation.",
        longDescription: "Automate the artwork design process with Vir Softech's custom plugins for desktop and digital publishing to create high quality artwork with 100% accuracy. For regulated industries, such as pharma and consumer durables, there is a need to customize the product packaging to cover the regulatory aspects of countries where the product is being sold. Designing multiple versions of product designs for folding boxes, blisters, packets, and leaflets is complex, error-prone and costly. With our custom plugins, you can automate this process and get it all at a much lower time, money, and review effort.",
        features: [
            "Custom Plugins: Developed in C++, scripts, VBA, VSTA & HTML for Windows and Mac OS across Adobe (InDesign, Illustrator, Photoshop, Acrobat) and CorelDraw.",
            "Workflow Optimization: Manage and enhance PDF workflows, optimize web documents for printing and content for various market segments.",
            "Automated Layouts: Automated placement of text, images and tables, multi-column alignment, multi-language support, font and paragraph styling.",
            "Variable Data Printing: Improve printing and packaging workflows with powerful VDP and imposition capabilities."
        ],
        benefits: [
            "Nearly 75% reduction in time for designing artwork compared to manual processes.",
            "Create high quality artwork with 100% accuracy, eliminating costly errors.",
            "Significantly reduce investment in time, cost, and review effort.",
            "Seamlessly replace legacy Flash-based extensions with modern CEP HTML-based plugins."
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
