"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import FloatingScene from "@/components/3d/FloatingScene";
import { content } from "@/lib/siteConfig";
import { Button } from "@/components/ui/Button";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subheadRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    // Parallax transforms
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate headline letters
            const headline = headlineRef.current;
            if (headline) {
                const chars = headline.innerText.split("");
                headline.innerHTML = chars
                    .map((char) => `<span class="inline-block">${char === " " ? "&nbsp;" : char}</span>`)
                    .join("");

                gsap.fromTo(
                    headline.querySelectorAll("span"),
                    {
                        opacity: 0,
                        y: 80,
                        rotateX: -90,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        duration: 1,
                        stagger: 0.04,
                        ease: "expo.out",
                        delay: 0.3,
                    }
                );
            }

            // Animate subheadline
            gsap.fromTo(
                subheadRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.8, ease: "expo.out", delay: 0.8 }
            );

            // Animate CTAs
            gsap.fromTo(
                ctaRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.8, ease: "expo.out", delay: 1 }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden w-full"
        >
            {/* 3D Background Scene */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 w-full"
            >
                <FloatingScene />
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050A14]/40 to-[#050A14] pointer-events-none" />

            {/* Animated background orbs - Full width positioning */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 -left-[15vw] sm:-left-[10vw] md:-left-[8vw] w-[70vw] sm:w-[55vw] md:w-[45vw] lg:w-[500px] aspect-square rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(0, 240, 255, 0.25) 0%, transparent 70%)",
                        filter: "blur(80px)",
                    }}
                    animate={{
                        x: [0, 60, 0],
                        y: [0, 40, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-[15vw] sm:-right-[10vw] md:-right-[8vw] w-[70vw] sm:w-[55vw] md:w-[45vw] lg:w-[500px] aspect-square rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(255, 0, 255, 0.2) 0%, transparent 70%)",
                        filter: "blur(80px)",
                    }}
                    animate={{
                        x: [0, -60, 0],
                        y: [0, -40, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>


            {/* Content - Using section-content for responsive padding */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 w-full section-content pt-32 pb-20"
            >
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge - Enhanced Contrast */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-10"
                    >
                        <Sparkles className="w-4 h-4 text-[#00F0FF]" />
                        <span className="text-sm font-medium text-white/[0.95] tracking-wide">Next-Gen AI Solutions</span>
                    </motion.div>

                    {/* Main Headline - Enhanced Spacing and Contrast */}
                    <h1
                        ref={headlineRef}
                        className="heading-xl font-bold mb-8 text-shadow-lg"
                    >
                        <span className="text-gradient">{content.hero.headline}</span>
                    </h1>

                    {/* Subheadline - Improved Contrast and Spacing */}
                    <p
                        ref={subheadRef}
                        className="text-xl sm:text-2xl md:text-3xl text-white/[0.87] mb-10 max-w-3xl mx-auto leading-relaxed font-medium tracking-wide py-px"
                    >
                        {content.hero.subheadline}
                    </p>

                    {/* Description - Enhanced Readability */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="text-base sm:text-lg text-white/70 mb-14 max-w-2xl mx-auto leading-relaxed tracking-normal py-[12px]"
                    >
                        {content.hero.description}
                    </motion.p>

                    {/* CTA Buttons - Proper Spacing (40px from description) */}
                    <div
                        ref={ctaRef}
                        className="flex flex-col sm:flex-row items-center justify-center gap-5 py-[5px] px-[6px]"
                    >
                        <Link href="/contact">
                            <Button
                                variant="primary"
                                size="lg"
                                rightIcon={<ArrowRight className="w-5 h-5" />}
                            >
                                {content.hero.cta.primary}
                            </Button>
                        </Link>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
                        >
                            <motion.div
                                className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"
                                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </motion.div>

                        <Link href="/services">
                            <Button
                                variant="secondary"
                                size="lg"
                            >
                                {content.hero.cta.secondary}
                            </Button>
                        </Link>
                    </div>
                </div>

            </motion.div>
        </section>
    );
}
