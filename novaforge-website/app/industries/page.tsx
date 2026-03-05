"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Building2, Stethoscope, ShoppingCart, GraduationCap, Landmark, Factory, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const industries = [
    {
        name: "Technology",
        description: "Empowering tech companies with cutting-edge solutions for rapid innovation and scale.",
        icon: Building2,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
        stats: [
            { value: "150+", label: "Tech Clients" },
            { value: "40%", label: "Efficiency Gain" },
        ],
        slug: "technology",
    },
    {
        name: "Healthcare",
        description: "Transforming patient care with AI-driven diagnostics and digital health solutions.",
        icon: Stethoscope,
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
        stats: [
            { value: "50+", label: "Health Systems" },
            { value: "60%", label: "Cost Reduction" },
        ],
        slug: "healthcare",
    },
    {
        name: "E-Commerce",
        description: "Building high-converting digital storefronts and personalized shopping experiences.",
        icon: ShoppingCart,
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        stats: [
            { value: "$2B+", label: "GMV Generated" },
            { value: "3x", label: "Conversion Lift" },
        ],
        slug: "ecommerce",
    },
    {
        name: "Education",
        description: "Revolutionizing learning with adaptive platforms and intelligent tutoring systems.",
        icon: GraduationCap,
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
        stats: [
            { value: "1M+", label: "Students" },
            { value: "85%", label: "Engagement" },
        ],
        slug: "education",
    },
    {
        name: "Finance",
        description: "Modernizing financial services with secure, compliant, and user-friendly solutions.",
        icon: Landmark,
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
        stats: [
            { value: "30+", label: "Banks" },
            { value: "99.9%", label: "Uptime" },
        ],
        slug: "finance",
    },
    {
        name: "Manufacturing",
        description: "Optimizing operations with IoT, predictive maintenance, and smart factory solutions.",
        icon: Factory,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
        stats: [
            { value: "25%", label: "Cost Savings" },
            { value: "50%", label: "Downtime Reduced" },
        ],
        slug: "manufacturing",
    },
];

export default function IndustriesPage() {
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
                            Industries We Serve
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                        >
                            Solutions for Every
                            <br />
                            <span className="text-gradient">Industry</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto"
                        >
                            We bring deep domain expertise across diverse industries,
                            delivering tailored solutions that drive real results.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={industry.slug}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="group h-full rounded-2xl glass overflow-hidden hover:bg-white/5 transition-all duration-500">
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={industry.image}
                                            alt={industry.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] to-transparent" />
                                        <div className="absolute bottom-4 left-4">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                                <industry.icon className="w-6 h-6 text-[#00F0FF]" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                                        <p className="text-white/60 text-sm mb-6">
                                            {industry.description}
                                        </p>

                                        {/* Stats */}
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            {industry.stats.map((stat) => (
                                                <div key={stat.label} className="text-center p-3 rounded-lg bg-white/5">
                                                    <div className="text-xl font-bold text-[#00F0FF]">
                                                        {stat.value}
                                                    </div>
                                                    <div className="text-xs text-white/50">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href={`/industries/${industry.slug}`}
                                            className="inline-flex items-center gap-2 text-sm text-[#00F0FF] hover:gap-3 transition-all"
                                        >
                                            Learn More
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF]/10 to-[#FF00FF]/10" />
                <div className="relative z-10 container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Don't see your industry?
                        </h2>
                        <p className="text-white/60 text-lg mb-8">
                            We work with businesses across all sectors. Let's discuss how we can
                            help your specific needs.
                        </p>
                        <Link href="/contact">
                            <motion.button
                                className="px-8 py-4 bg-[#00F0FF] text-black font-bold rounded-full"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get in Touch
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
