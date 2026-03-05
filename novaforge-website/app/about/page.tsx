"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Target, Lightbulb, Users, Award } from "lucide-react";
import Footer from "@/components/Footer";

const values = [
    {
        icon: Target,
        title: "Precision",
        description: "Every pixel, every line of code, every interaction crafted with meticulous attention to detail.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Pushing boundaries and exploring the unknown to create solutions that define the future.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Believing in the power of partnership to achieve extraordinary results together.",
    },
    {
        icon: Award,
        title: "Excellence",
        description: "Setting the highest standards and consistently exceeding expectations in everything we do.",
    },
];

const team = [
    {
        name: "Alex Chen",
        role: "CEO & Founder",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
        name: "Sarah Williams",
        role: "CTO",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
        name: "Marcus Johnson",
        role: "Head of Design",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
        name: "Emily Rodriguez",
        role: "AI Lead",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
];

const timeline = [
    {
        year: "2012",
        title: "The Beginning",
        description: "NovaForge founded with a vision to transform digital experiences.",
    },
    {
        year: "2015",
        title: "AI Integration",
        description: "Pioneered AI-driven solutions for enterprise clients.",
    },
    {
        year: "2018",
        title: "Global Expansion",
        description: "Opened offices in London, Singapore, and New York.",
    },
    {
        year: "2021",
        title: "Innovation Award",
        description: "Recognized as Technology Innovator of the Year.",
    },
    {
        year: "2024",
        title: "Future Ready",
        description: "Leading the charge in next-generation AI solutions.",
    },
];

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div ref={containerRef} className="relative bg-[#050A14]">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#00F0FF]/5 to-transparent" />
                    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FF00FF]/10 rounded-full blur-3xl" />
                </div>

                <motion.div style={{ y }} className="relative z-10 container-custom pt-32 pb-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-2 rounded-full glass text-[#00F0FF] text-sm font-medium mb-6 tracking-wide"
                        >
                            About Us
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wide text-shadow-lg"
                        >
                            Engineering the
                            <br />
                            <span className="text-gradient">Future</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed tracking-normal"
                        >
                            We are a collective of innovators, engineers, and dreamers dedicated to
                            transforming how businesses interact with technology.
                        </motion.p>
                    </div>
                </motion.div>
            </section>

            {/* Story Section */}
            <section className="py-32 relative">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-wide">
                                Our <span className="text-gradient">Story</span>
                            </h2>
                            <div className="space-y-4 text-white/75 leading-relaxed tracking-normal">
                                <p>
                                    Founded in 2012, NovaForge Labs emerged from a simple belief: that technology
                                    should empower, not complicate. What started as a small team of passionate
                                    developers has evolved into a global force for digital innovation.
                                </p>
                                <p>
                                    Today, we partner with Fortune 500 companies and ambitious startups alike,
                                    bringing the same level of dedication and expertise to every project. Our
                                    journey has been defined by a relentless pursuit of excellence and a
                                    commitment to pushing the boundaries of what's possible.
                                </p>
                                <p>
                                    With over a decade of experience, we've learned that true innovation comes
                                    from understanding not just the technology, but the human needs behind it.
                                    That's why every solution we create is tailored, thoughtful, and transformative.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-2xl overflow-hidden glass">
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                                    alt="Team collaboration"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#00F0FF]/30 rounded-lg" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#FF00FF]/20 rounded-full blur-2xl" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-32 relative bg-[#0A1428]/50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-2 rounded-full glass text-[#FF00FF] text-sm font-medium mb-6 tracking-wide"
                        >
                            Our Values
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide"
                        >
                            What Drives <span className="text-gradient">Us</span>
                        </motion.h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 rounded-2xl glass hover:bg-white/5 transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-xl bg-[#00F0FF]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <value.icon className="w-7 h-7 text-[#00F0FF]" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 tracking-wide">{value.title}</h3>
                                <p className="text-white/70 text-sm leading-relaxed tracking-normal">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide"
                        >
                            Our <span className="text-gradient">Journey</span>
                        </motion.h2>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#00F0FF] via-[#FF00FF] to-transparent" />

                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex items-center gap-8 mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                    }`}
                            >
                                <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                                    <span className="text-[#00F0FF] font-bold text-lg tracking-wide">{item.year}</span>
                                    <h3 className="text-xl font-bold mt-1 mb-2 tracking-wide">{item.title}</h3>
                                    <p className="text-white/70 tracking-normal">{item.description}</p>
                                </div>
                                <div className="w-4 h-4 rounded-full bg-[#00F0FF] border-4 border-[#050A14] z-10" />
                                <div className="flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-32 relative bg-[#0A1428]/50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-2 rounded-full glass text-[#00F0FF] text-sm font-medium mb-6 tracking-wide"
                        >
                            Our Team
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide"
                        >
                            Meet the <span className="text-gradient">Visionaries</span>
                        </motion.h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 glass">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h3 className="font-bold text-lg tracking-wide">{member.name}</h3>
                                <p className="text-[#00F0FF] text-sm tracking-wide">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
