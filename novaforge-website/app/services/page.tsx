"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Brain,
    Cpu,
    TrendingUp,
    Cloud,
    Database,
    Palette,
    ArrowRight,
    Check,
} from "lucide-react";
import Footer from "@/components/Footer";

const services = [
    {
        icon: Brain,
        title: "AI Strategy",
        description:
            "Transform your business with intelligent systems that learn, adapt, and evolve. We develop custom AI solutions that automate processes and unlock new opportunities.",
        color: "#00F0FF",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
        features: [
            "Machine Learning Models",
            "Natural Language Processing",
            "Computer Vision",
            "Predictive Analytics",
            "AI Consulting",
        ],
        slug: "ai-strategy",
    },
    {
        icon: Cpu,
        title: "Digital Engineering",
        description:
            "Build robust, scalable digital products with our end-to-end engineering services. From concept to deployment, we handle every aspect of your digital transformation.",
        color: "#FF00FF",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
        features: [
            "Full-Stack Development",
            "System Architecture",
            "API Development",
            "Microservices",
            "DevOps",
        ],
        slug: "digital-engineering",
    },
    {
        icon: TrendingUp,
        title: "Growth Systems",
        description:
            "Accelerate your business growth with data-driven strategies and automation. We build growth engines that scale with your ambition.",
        color: "#8B5CF6",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        features: [
            "Growth Hacking",
            "Marketing Automation",
            "CRO Optimization",
            "Analytics & Reporting",
            "Funnel Design",
        ],
        slug: "growth-systems",
    },
    {
        icon: Cloud,
        title: "Cloud Architecture",
        description:
            "Modernize your infrastructure with cloud-native solutions. We design and implement scalable, secure, and cost-effective cloud architectures.",
        color: "#14B8A6",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        features: [
            "Cloud Migration",
            "AWS/Azure/GCP",
            "Serverless Architecture",
            "Container Orchestration",
            "Cloud Security",
        ],
        slug: "cloud-architecture",
    },
    {
        icon: Database,
        title: "Data Intelligence",
        description:
            "Turn your data into actionable insights. Our data engineering and analytics solutions help you make informed decisions and discover hidden opportunities.",
        color: "#F59E0B",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        features: [
            "Data Engineering",
            "Business Intelligence",
            "Data Visualization",
            "ETL Pipelines",
            "Data Warehousing",
        ],
        slug: "data-intelligence",
    },
    {
        icon: Palette,
        title: "Product Design",
        description:
            "Create exceptional user experiences with our human-centered design approach. We blend aesthetics with functionality to deliver products users love.",
        color: "#EC4899",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
        features: [
            "UX Research",
            "UI Design",
            "Design Systems",
            "Prototyping",
            "User Testing",
        ],
        slug: "product-design",
    },
];

export default function ServicesPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <div ref={containerRef} className="relative bg-[#050A14]">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#00F0FF]/5 to-transparent" />
                    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FF00FF]/10 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 container-custom pt-32 pb-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-2 rounded-full glass text-[#00F0FF] text-sm font-medium mb-6"
                        >
                            What We Offer
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                        >
                            Our <span className="text-gradient">Services</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto"
                        >
                            Comprehensive digital solutions designed to accelerate your growth
                            and transform your business.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="space-y-32">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.slug}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content */}
                                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                                        style={{ backgroundColor: `${service.color}15` }}
                                    >
                                        <service.icon
                                            className="w-8 h-8"
                                            style={{ color: service.color }}
                                        />
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                        {service.title}
                                    </h2>
                                    <p className="text-white/60 text-lg mb-8 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3">
                                                <div
                                                    className="w-5 h-5 rounded-full flex items-center justify-center"
                                                    style={{ backgroundColor: `${service.color}20` }}
                                                >
                                                    <Check
                                                        className="w-3 h-3"
                                                        style={{ color: service.color }}
                                                    />
                                                </div>
                                                <span className="text-white/80">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href={`/services/${service.slug}`}>
                                        <motion.button
                                            className="group flex items-center gap-2 px-6 py-3 rounded-full font-medium"
                                            style={{
                                                backgroundColor: `${service.color}15`,
                                                color: service.color,
                                            }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Learn More
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </motion.button>
                                    </Link>
                                </div>

                                {/* Image */}
                                <div
                                    className={`relative ${index % 2 === 1 ? "lg:order-1" : ""
                                        }`}
                                >
                                    <div className="aspect-[4/3] rounded-2xl overflow-hidden glass">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div
                                            className="absolute inset-0 opacity-20"
                                            style={{
                                                background: `linear-gradient(135deg, ${service.color} 0%, transparent 60%)`,
                                            }}
                                        />
                                    </div>
                                    {/* Decorative */}
                                    <div
                                        className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl"
                                        style={{
                                            background: `linear-gradient(135deg, ${service.color}20 0%, transparent 70%)`,
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF]/10 to-[#FF00FF]/10" />
                </div>

                <div className="relative z-10 container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                        >
                            Ready to <span className="text-gradient">Get Started?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-white/60 text-lg mb-8"
                        >
                            Let's discuss how we can help transform your business with our
                            cutting-edge solutions.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link href="/contact">
                                <motion.button
                                    className="px-8 py-4 bg-[#00F0FF] text-black font-bold rounded-full"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contact Us
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
