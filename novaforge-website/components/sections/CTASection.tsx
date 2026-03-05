"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const trustIndicators = [
    "Free Consultation",
    "24/7 Support",
    "Quick Response",
];

export default function CTASection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[80vh] lg:min-h-screen flex items-center justify-center overflow-hidden w-full"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Animated gradient orbs - Responsive sizing */}
                <motion.div
                    style={{ y }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[800px] aspect-square"
                >
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(0, 240, 255, 0.2) 0%, transparent 60%)",
                            filter: "blur(100px)",
                        }}
                    />
                </motion.div>

                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.35, 0.2],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] sm:w-[55vw] md:w-[45vw] lg:w-[600px] aspect-square"
                >
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(255, 0, 255, 0.15) 0%, transparent 60%)",
                            filter: "blur(80px)",
                        }}
                    />
                </motion.div>

                {/* Grid pattern - Responsive sizing */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0, 240, 255, 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 240, 255, 0.5) 1px, transparent 1px)
                        `,
                        backgroundSize: "clamp(60px, 8vw, 80px) clamp(60px, 8vw, 80px)",
                    }}
                />
            </div>

            {/* Content - Vertically centered with responsive padding */}
            <div className="section-lg relative z-10 w-full pt-[54px] pb-[54px]">
                <motion.div
                    style={{ scale, opacity }}
                    className="w-full section-content"
                >
                    <div className="max-w-4xl mx-auto text-center py-[11px]">
                    {/* Badge - Enhanced Contrast */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-8 lg:mb-10"
                    >
                        <Sparkles className="w-4 h-4 text-[#00F0FF]" />
                        <span className="text-sm font-medium text-white/[0.95] tracking-wide">Ready to Transform Your Business?</span>
                    </motion.div>

                    {/* Headline - Enhanced Spacing and Contrast */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="heading-lg font-bold mb-6 leading-tight text-shadow-lg py-[21px]"
                    >
                        Let's Build the
                        <br />
                        <span className="text-gradient">Future Together</span>
                    </motion.h2>

                    {/* Description - Improved Contrast */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-white/70 max-w-2xl mx-auto mb-10 lg:mb-12 leading-relaxed tracking-normal py-[19px]"
                    >
                        Start your digital transformation journey today. Our team of experts
                        is ready to turn your vision into reality.
                    </motion.p>

                    {/* CTA Buttons - Proper spacing */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12 lg:mb-16 py-[5px]"
                    >
                        <Link href="/contact">
                            <Button
                                variant="primary"
                                size="xl"
                                rightIcon={<ArrowRight className="w-5 h-5" />}
                            >
                                Start Your Project
                            </Button>
                        </Link>

                        <Link href="/case-studies">
                            <Button
                                variant="secondary"
                                size="xl"
                            >
                                View Our Work
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Trust Indicators - Enhanced Visibility */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 py-[21px]"
                    >
                        {trustIndicators.map((item) => (
                            <span key={item} className="flex items-center gap-2 text-white/65 text-sm tracking-wide">
                                <CheckCircle2 className="w-4 h-4 text-green-400" />
                                {item}
                            </span>
                        ))}
                    </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
