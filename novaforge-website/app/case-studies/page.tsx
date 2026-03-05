"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, Users, Clock } from "lucide-react";
import Footer from "@/components/Footer";

const caseStudies = [
    {
        id: "1",
        title: "AI-Powered Customer Support",
        client: "TechCorp Global",
        industry: "Technology",
        description: "Implemented an intelligent chatbot system that reduced support tickets by 60% and improved response times.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop",
        results: [
            { metric: "60%", label: "Ticket Reduction" },
            { metric: "3x", label: "Faster Response" },
        ],
        tags: ["AI", "NLP", "Customer Support"],
    },
    {
        id: "2",
        title: "Cloud Migration & Modernization",
        client: "FinanceFirst Bank",
        industry: "Finance",
        description: "Migrated legacy systems to cloud infrastructure, improving scalability and reducing operational costs.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
        results: [
            { metric: "40%", label: "Cost Savings" },
            { metric: "99.9%", label: "Uptime" },
        ],
        tags: ["Cloud", "AWS", "DevOps"],
    },
    {
        id: "3",
        title: "E-commerce Growth Platform",
        client: "ShopSmart Inc",
        industry: "E-Commerce",
        description: "Built a high-converting platform with personalization engine that doubled revenue in 6 months.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
        results: [
            { metric: "2x", label: "Revenue Growth" },
            { metric: "150%", label: "Conversion Lift" },
        ],
        tags: ["E-commerce", "Growth", "Personalization"],
    },
    {
        id: "4",
        title: "Healthcare Analytics Dashboard",
        client: "MediCare Plus",
        industry: "Healthcare",
        description: "Created real-time analytics platform for monitoring patient outcomes and operational efficiency.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
        results: [
            { metric: "35%", label: "Efficiency Gain" },
            { metric: "50%", label: "Faster Decisions" },
        ],
        tags: ["Healthcare", "Analytics", "Data Viz"],
    },
];

export default function CaseStudiesPage() {
    return (
        <div className="relative bg-[#050A14]">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
                            Our Work
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                        >
                            Case <span className="text-gradient">Studies</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto"
                        >
                            Explore how we've helped leading companies achieve remarkable
                            results through innovative digital solutions.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8">
                        {caseStudies.map((study, index) => (
                            <motion.article
                                key={study.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="relative rounded-2xl overflow-hidden glass hover:bg-white/5 transition-all duration-500">
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={study.image}
                                            alt={study.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-transparent" />

                                        {/* Tags */}
                                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                            {study.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <div className="flex items-center gap-2 text-sm text-[#00F0FF] mb-3">
                                            <span>{study.client}</span>
                                            <span className="text-white/30">|</span>
                                            <span className="text-white/60">{study.industry}</span>
                                        </div>

                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00F0FF] transition-colors">
                                            {study.title}
                                        </h3>

                                        <p className="text-white/60 mb-6 line-clamp-2">
                                            {study.description}
                                        </p>

                                        {/* Results */}
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            {study.results.map((result) => (
                                                <div
                                                    key={result.label}
                                                    className="p-4 rounded-xl bg-white/5"
                                                >
                                                    <div className="text-2xl font-bold text-[#00F0FF]">
                                                        {result.metric}
                                                    </div>
                                                    <div className="text-xs text-white/50">{result.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href={`/case-studies/${study.id}`}
                                            className="inline-flex items-center gap-2 text-[#00F0FF] hover:gap-3 transition-all"
                                        >
                                            View Case Study
                                            <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-[#0A1428]/50">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: TrendingUp, value: "500+", label: "Projects Completed" },
                            { icon: Users, value: "200+", label: "Happy Clients" },
                            { icon: Clock, value: "12+", label: "Years Experience" },
                            { value: "98%", label: "Client Retention" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-white/50">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
