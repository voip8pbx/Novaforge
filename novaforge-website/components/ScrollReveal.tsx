"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, Variants, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealType = "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "scale" | "rotate" | "3d-flip";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    type?: RevealType;
    delay?: number;
    duration?: number;
    threshold?: number;
    once?: boolean;
    stagger?: number;
}

const variants: Record<RevealType, Variants> = {
    fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    "slide-up": {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
    },
    "slide-down": {
        hidden: { opacity: 0, y: -60 },
        visible: { opacity: 1, y: 0 },
    },
    "slide-left": {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
    rotate: {
        hidden: { opacity: 0, rotate: -10 },
        visible: { opacity: 1, rotate: 0 },
    },
    "3d-flip": {
        hidden: { opacity: 0, rotateX: -30, y: 40 },
        visible: { opacity: 1, rotateX: 0, y: 0 },
    },
};

export default function ScrollReveal({
    children,
    className = "",
    type = "fade",
    delay = 0,
    duration = 0.6,
    threshold = 0.2,
    once = true,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once,
        amount: threshold,
    });
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    // Check for reduced motion preference
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            className={cn("will-change-transform", className)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants[type]}
            transition={{
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1], // Custom easing for smooth deceleration
            }}
            style={{
                perspective: type === "3d-flip" ? 1000 : undefined,
                transformStyle: type === "3d-flip" ? "preserve-3d" : undefined,
            }}
        >
            {children}
        </motion.div>
    );
}

// Stagger Container for child animations
interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    threshold?: number;
}

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1,
    threshold = 0.2,
}: StaggerContainerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: threshold });
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

// Stagger Item for use within StaggerContainer
interface StaggerItemProps {
    children: React.ReactNode;
    className?: string;
    type?: RevealType;
}

export function StaggerItem({
    children,
    className = "",
    type = "slide-up",
}: StaggerItemProps) {
    return (
        <motion.div
            className={cn("will-change-transform", className)}
            variants={variants[type]}
            transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
