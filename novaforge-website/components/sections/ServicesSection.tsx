"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Brain, Cpu, TrendingUp, Cloud, Database, Palette } from "lucide-react";

const services = [
    {
        icon: Brain,
        title: "AI Strategy",
        description: "Intelligent systems that learn, adapt, and transform your business operations with cutting-edge machine learning.",
        color: "#00F0FF",
        features: ["Machine Learning", "NLP Solutions", "Predictive Analytics"],
        slug: "ai-strategy",
    },
    {
        icon: Cpu,
        title: "Digital Engineering",
        description: "End-to-end digital transformation with cutting-edge technologies and agile methodologies.",
        color: "#FF00FF",
        features: ["System Architecture", "API Development", "Microservices"],
        slug: "digital-engineering",
    },
    {
        icon: TrendingUp,
        title: "Growth Systems",
        description: "Data-driven growth engines that scale with your ambition and market demands.",
        color: "#8B5CF6",
        features: ["Growth Hacking", "CRO", "Marketing Automation"],
        slug: "growth-systems",
    },
    {
        icon: Cloud,
        title: "Cloud Architecture",
        description: "Scalable, resilient infrastructure designed for the modern enterprise ecosystem.",
        color: "#14B8A6",
        features: ["AWS/Azure/GCP", "DevOps", "Serverless"],
        slug: "cloud-architecture",
    },
    {
        icon: Database,
        title: "Data Intelligence",
        description: "Transform raw data into actionable insights that drive strategic business decisions.",
        color: "#F59E0B",
        features: ["Data Engineering", "BI Solutions", "Data Visualization"],
        slug: "data-intelligence",
    },
    {
        icon: Palette,
        title: "Product Design",
        description: "User-centered design that combines aesthetics with functionality and business purpose.",
        color: "#EC4899",
        features: ["UX Research", "UI Design", "Design Systems"],
        slug: "product-design",
    },
];

export default function ServicesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden w-full"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050A14] via-[#0A1428] to-[#050A14] z-0" />

            {/* Floating Elements - Responsive sizing */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 pointer-events-none overflow-hidden z-0"
            >
                <div className="absolute top-1/4 -right-[10vw] w-[50vw] sm:w-[35vw] md:w-80 lg:w-96 aspect-square bg-[#00F0FF]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -left-[10vw] w-[50vw] sm:w-[35vw] md:w-80 lg:w-96 aspect-square bg-[#FF00FF]/10 rounded-full blur-3xl" />
            </motion.div>

            <div className="relative z-10 py-14 py-10">
                <div className="w-full section-content section-content-no-x py-[20px] my-[10px] py-10">
                {/* Section Header - Enhanced spacing and contrast */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 lg:mb-16 px-4 sm:px-6 lg:px-8">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[#00F0FF] text-sm font-medium mb-6 tracking-wide"
                    >
                        What We Do
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="heading-lg font-bold mb-6 tracking-wide py-[4px] px-[5px]"
                    >
                        Our <span className="text-gradient">Services</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-white/70 leading-relaxed tracking-normal max-w-2xl mx-auto px-[5px] py-[14px]"
                    >
                        Comprehensive digital solutions tailored to accelerate your business
                        growth and technological advancement.
                    </motion.p>
                </div>

                {/* Services Grid - Responsive with consistent gaps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 py-[38px] px-[5px] py-10">
                    {services.map((service, index) => (
                        <Link key={service.slug} href={`/services/${service.slug}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group h-full"
                            >
                                <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden">
                                    {/* Hover Gradient */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: `radial-gradient(circle at 50% 0%, ${service.color}12 0%, transparent 70%)`,
                                        }}
                                    />

                                    {/* Top Border Glow */}
                                    <div
                                        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                                        }}
                                    />

                                    <div className="relative z-10">
                                        {/* Icon & Arrow - Proper spacing */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                                style={{ backgroundColor: `${service.color}15` }}
                                            >
                                                <service.icon
                                                    className="w-6 h-6"
                                                    style={{ color: service.color }}
                                                />
                                            </div>
                                            <div
                                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300"
                                            >
                                                <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                                            </div>
                                        </div>

                                        {/* Content - Enhanced Spacing */}
                                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors tracking-wide">
                                            {service.title}
                                        </h3>
                                        <p className="text-white/70 mb-6 leading-relaxed text-sm lg:text-base tracking-normal">
                                            {service.description}
                                        </p>

                                        {/* Features - Enhanced Visibility */}
                                        <div className="flex flex-wrap gap-2 px-[44px] justify-center text-center">
                                            {service.features.map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/75 border border-white/5 tracking-wide"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Number */}
                                    <div
                                        className="absolute -bottom-4 -right-4 text-8xl font-bold opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500"
                                        style={{ color: service.color }}
                                    >
                                        0{index + 1}
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
}
