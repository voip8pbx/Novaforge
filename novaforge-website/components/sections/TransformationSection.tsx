"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Brain, Rocket } from "lucide-react";

const features = [
    {
        icon: Brain,
        title: "AI-Powered Intelligence",
        description: "Leverage cutting-edge machine learning models that adapt and evolve with your business needs, delivering insights that matter.",
        color: "#00F0FF",
    },
    {
        icon: Zap,
        title: "Lightning Performance",
        description: "Optimized architectures delivering sub-second response times at enterprise scale, ensuring seamless user experiences.",
        color: "#FF00FF",
    },
    {
        icon: Rocket,
        title: "Future-Ready Infrastructure",
        description: "Cloud-native solutions built for tomorrow's challenges, today. Scalable, secure, and designed for growth.",
        color: "#8B5CF6",
    },
];

const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "150+", label: "AI Solutions" },
    { value: "12", label: "Years Experience" },
];

export default function TransformationSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate feature cards
            gsap.fromTo(
                ".feature-card",
                {
                    opacity: 0,
                    y: 60,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Animate stats
            gsap.fromTo(
                ".stat-item",
                {
                    opacity: 0,
                    y: 40,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: ".stats-container",
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden w-full"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[#050A14] z-0" />

            <div className="section-lg relative z-10 pt-[8px] pb-[8px] py-16">
                <motion.div style={{ opacity }} className="relative w-full section-content py-40">
                    {/* Section Header - Consistent responsive spacing */}
                    <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24 lg:mb-32 px-18 sm:px-18 lg:px-8 py-19">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-[10px] py-3 rounded-full glass text-[#00F0FF] text-sm font-medium mb-8 tracking-wide"
                        >
                            Our Approach
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="heading-lg font-bold mb-12 tracking-wide py-6 px-[5px]"
                        >
                            Transforming Ideas into
                            <br />
                            <span className="text-gradient">Digital Reality</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-white/70 leading-relaxed tracking-normal max-w-2xl mx-auto px-[10px] py-6"
                        >
                            We combine innovative technology with strategic thinking to deliver
                            solutions that drive real business impact.
                        </motion.p>
                    </div>

                    {/* Feature Cards - Responsive grid with consistent gaps */}
                    <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24 md:mb-32 lg:mb-40 px-4 sm:px-0 py-40">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className="feature-card group relative p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 py-20"
                            >
                                {/* Glow Effect */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                                    style={{
                                        background: `radial-gradient(circle at center, ${feature.color}15 0%, transparent 70%)`,
                                    }}
                                />

                                {/* Border Glow */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        border: `1px solid ${feature.color}30`,
                                    }}
                                />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110"
                                        style={{ backgroundColor: `${feature.color}15` }}
                                    >
                                        <feature.icon
                                            className="w-7 h-7"
                                            style={{ color: feature.color }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-6 text-white tracking-wide px-[5px]">
                                        {feature.title}
                                    </h3>
                                    <p className="text-white/70 leading-relaxed text-[13px] lg:text-base tracking-normal px-[5px]">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Number */}
                                <div className="absolute top-6 right-6 text-5xl lg:text-6xl font-bold text-white/[0.03]">
                                    0{index + 1}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stats Row - Enhanced spacing with responsive gaps */}
                    <div className="stats-container grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 px-[2px] py-16 my-8 py-41">
                        {stats.map((stat) => (
                            <div key={stat.label} className="stat-item text-center py-8">
                                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-3 tracking-wide">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-white/65 tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Animated Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0, 240, 255, 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 240, 255, 0.5) 1px, transparent 1px)
                        `,
                        backgroundSize: "clamp(40px, 5vw, 60px) clamp(40px, 5vw, 60px)",
                    }}
                />
            </div>
        </section>
    );
}
