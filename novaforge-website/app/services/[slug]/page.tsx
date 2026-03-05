"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Brain,
    Cpu,
    TrendingUp,
    Cloud,
    Database,
    Palette,
    ArrowLeft,
    ArrowRight,
    Check,
} from "lucide-react";
import Footer from "@/components/Footer";

const servicesData: Record<
    string,
    {
        title: string;
        description: string;
        longDescription: string;
        icon: typeof Brain;
        color: string;
        image: string;
        features: string[];
        benefits: string[];
        process: { title: string; description: string }[];
    }
> = {
    "ai-strategy": {
        title: "AI Strategy",
        description: "Transform your business with intelligent systems that learn, adapt, and evolve.",
        longDescription:
            "Our AI Strategy services help organizations leverage the power of artificial intelligence to drive innovation, automate processes, and unlock new business opportunities. From machine learning models to natural language processing, we build custom AI solutions tailored to your unique challenges.",
        icon: Brain,
        color: "#00F0FF",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
        features: [
            "Machine Learning Models",
            "Natural Language Processing",
            "Computer Vision",
            "Predictive Analytics",
            "AI Consulting",
            "Deep Learning Solutions",
        ],
        benefits: [
            "Increase operational efficiency by up to 40%",
            "Reduce manual processing time by 60%",
            "Improve decision-making with data-driven insights",
            "Enhance customer experience with personalization",
            "Scale operations without proportional cost increase",
        ],
        process: [
            {
                title: "Discovery",
                description: "We analyze your business needs and identify AI opportunities.",
            },
            {
                title: "Strategy",
                description: "Develop a comprehensive AI roadmap aligned with your goals.",
            },
            {
                title: "Development",
                description: "Build and train custom AI models using your data.",
            },
            {
                title: "Deployment",
                description: "Integrate AI solutions into your existing infrastructure.",
            },
            {
                title: "Optimization",
                description: "Continuously improve model performance and accuracy.",
            },
        ],
    },
    "digital-engineering": {
        title: "Digital Engineering",
        description: "End-to-end digital transformation with cutting-edge technologies.",
        longDescription:
            "Our Digital Engineering services provide comprehensive software development capabilities, from concept to deployment. We specialize in building scalable, secure, and high-performance digital products using modern technologies and best practices.",
        icon: Cpu,
        color: "#FF00FF",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
        features: [
            "Full-Stack Development",
            "System Architecture",
            "API Development",
            "Microservices",
            "DevOps & CI/CD",
            "Quality Assurance",
        ],
        benefits: [
            "Accelerate time-to-market by 50%",
            "Reduce technical debt and maintenance costs",
            "Improve system reliability and uptime",
            "Enable rapid scaling of your platform",
            "Future-proof your technology stack",
        ],
        process: [
            {
                title: "Analysis",
                description: "Understand requirements and define technical specifications.",
            },
            {
                title: "Architecture",
                description: "Design scalable and maintainable system architecture.",
            },
            {
                title: "Development",
                description: "Build using agile methodologies and modern tech stacks.",
            },
            {
                title: "Testing",
                description: "Rigorous QA and security testing at every stage.",
            },
            {
                title: "Launch",
                description: "Deploy with monitoring and support systems in place.",
            },
        ],
    },
    "growth-systems": {
        title: "Growth Systems",
        description: "Data-driven growth engines that scale with your ambition.",
        icon: TrendingUp,
        color: "#8B5CF6",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
        longDescription:
            "Our Growth Systems help businesses acquire, engage, and retain customers at scale. We combine marketing automation, conversion optimization, and data analytics to create powerful growth engines.",
        features: [
            "Growth Hacking",
            "Marketing Automation",
            "CRO Optimization",
            "Analytics & Reporting",
            "Funnel Design",
            "A/B Testing",
        ],
        benefits: [
            "Increase conversion rates by up to 150%",
            "Reduce customer acquisition costs",
            "Improve customer lifetime value",
            "Automate repetitive marketing tasks",
            "Make data-driven growth decisions",
        ],
        process: [
            {
                title: "Audit",
                description: "Analyze current growth metrics and identify opportunities.",
            },
            {
                title: "Strategy",
                description: "Develop a comprehensive growth plan.",
            },
            {
                title: "Implementation",
                description: "Build and deploy growth systems and automations.",
            },
            {
                title: "Optimization",
                description: "Test, measure, and continuously improve.",
            },
            {
                title: "Scale",
                description: "Expand successful strategies across channels.",
            },
        ],
    },
    "cloud-architecture": {
        title: "Cloud Architecture",
        description: "Scalable, resilient infrastructure for the modern enterprise.",
        icon: Cloud,
        color: "#14B8A6",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
        longDescription:
            "Our Cloud Architecture services help businesses modernize their infrastructure, migrate to the cloud, and build scalable, cost-effective systems. We work with AWS, Azure, and GCP to deliver solutions that meet your specific needs.",
        features: [
            "Cloud Migration",
            "AWS/Azure/GCP",
            "Serverless Architecture",
            "Container Orchestration",
            "Cloud Security",
            "Cost Optimization",
        ],
        benefits: [
            "Reduce infrastructure costs by up to 40%",
            "Improve system scalability and reliability",
            "Enable faster deployment cycles",
            "Enhance security and compliance",
            "Future-proof your technology infrastructure",
        ],
        process: [
            {
                title: "Assessment",
                description: "Evaluate current infrastructure and cloud readiness.",
            },
            {
                title: "Planning",
                description: "Design cloud architecture and migration strategy.",
            },
            {
                title: "Migration",
                description: "Execute phased migration with minimal downtime.",
            },
            {
                title: "Optimization",
                description: "Fine-tune performance and cost efficiency.",
            },
            {
                title: "Support",
                description: "Provide ongoing monitoring and maintenance.",
            },
        ],
    },
    "data-intelligence": {
        title: "Data Intelligence",
        description: "Turn your data into actionable insights.",
        icon: Database,
        color: "#F59E0B",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
        longDescription:
            "Our Data Intelligence services help organizations harness the power of their data. From data engineering and warehousing to business intelligence and visualization, we create comprehensive data solutions.",
        features: [
            "Data Engineering",
            "Business Intelligence",
            "Data Visualization",
            "ETL Pipelines",
            "Data Warehousing",
            "Real-time Analytics",
        ],
        benefits: [
            "Make faster, data-driven decisions",
            "Uncover hidden business insights",
            "Improve operational efficiency",
            "Enable predictive capabilities",
            "Create a single source of truth",
        ],
        process: [
            {
                title: "Discovery",
                description: "Assess data sources and business requirements.",
            },
            {
                title: "Architecture",
                description: "Design data pipeline and storage architecture.",
            },
            {
                title: "Implementation",
                description: "Build data pipelines and transformation logic.",
            },
            {
                title: "Visualization",
                description: "Create dashboards and reporting systems.",
            },
            {
                title: "Governance",
                description: "Establish data quality and governance practices.",
            },
        ],
    },
    "product-design": {
        title: "Product Design",
        description: "User-centered design that combines aesthetics with functionality.",
        icon: Palette,
        color: "#EC4899",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
        longDescription:
            "Our Product Design services create exceptional digital experiences that users love. We combine user research, UX design, and UI design to deliver products that are both beautiful and functional.",
        features: [
            "UX Research",
            "UI Design",
            "Design Systems",
            "Prototyping",
            "User Testing",
            "Brand Identity",
        ],
        benefits: [
            "Increase user engagement and satisfaction",
            "Reduce development time with design systems",
            "Improve conversion rates through UX optimization",
            "Build consistent brand experiences",
            "Minimize usability issues and support costs",
        ],
        process: [
            {
                title: "Research",
                description: "Understand users, market, and business goals.",
            },
            {
                title: "Strategy",
                description: "Define product vision and design principles.",
            },
            {
                title: "Design",
                description: "Create wireframes, prototypes, and visual designs.",
            },
            {
                title: "Testing",
                description: "Validate designs with real users.",
            },
            {
                title: "Handoff",
                description: "Deliver design specs and support development.",
            },
        ],
    },
};

export default function ServicePage() {
    const params = useParams();
    const slug = params.slug as string;
    const service = servicesData[slug];

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link href="/services" className="text-[#00F0FF] hover:underline">
                        View all services
                    </Link>
                </div>
            </div>
        );
    }

    const Icon = service.icon;

    return (
        <div className="relative bg-[#050A14]">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-end overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-[#050A14]/80 to-transparent" />
                </div>

                <div className="relative z-10 container-custom py-20">
                    <Link href="/services">
                        <motion.div
                            className="inline-flex items-center gap-2 text-white/60 hover:text-[#00F0FF] transition-colors mb-8"
                            whileHover={{ x: -5 }}
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Services
                        </motion.div>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                            style={{ backgroundColor: `${service.color}20` }}
                        >
                            <Icon className="w-8 h-8" style={{ color: service.color }} />
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                            {service.title}
                        </h1>
                        <p className="text-xl text-white/60 max-w-2xl">{service.description}</p>
                    </motion.div>
                </div>
            </section>

            {/* Description Section */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Overview</h2>
                            <p className="text-white/70 text-lg leading-relaxed">{service.longDescription}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-bold mb-6">Key Features</h3>
                            <ul className="space-y-3">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3">
                                        <div
                                            className="w-5 h-5 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: `${service.color}20` }}
                                        >
                                            <Check className="w-3 h-3" style={{ color: service.color }} />
                                        </div>
                                        <span className="text-white/80">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-[#0A1428]/50">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Benefits of {service.title}
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-xl glass"
                            >
                                <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                                    style={{ backgroundColor: `${service.color}15` }}
                                >
                                    <Check className="w-5 h-5" style={{ color: service.color }} />
                                </div>
                                <p className="text-white/80">{benefit}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>

                    <div className="max-w-4xl mx-auto">
                        {service.process.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-8 mb-8 last:mb-0"
                            >
                                <div className="flex flex-col items-center">
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center font-bold"
                                        style={{
                                            backgroundColor: `${service.color}20`,
                                            color: service.color,
                                        }}
                                    >
                                        {index + 1}
                                    </div>
                                    {index < service.process.length - 1 && (
                                        <div className="w-px h-full bg-white/10 mt-4" />
                                    )}
                                </div>
                                <div className="pb-8">
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-white/60">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center p-12 rounded-3xl glass"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to get started with {service.title}?
                        </h2>
                        <p className="text-white/60 mb-8 max-w-xl mx-auto">
                            Let's discuss how we can help transform your business with our
                            {service.title.toLowerCase()} solutions.
                        </p>
                        <Link href="/contact">
                            <motion.button
                                className="px-8 py-4 font-bold rounded-full inline-flex items-center gap-2"
                                style={{ backgroundColor: service.color, color: "#000" }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
