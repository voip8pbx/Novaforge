"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface Card3DProps {
    children: React.ReactNode;
    className?: string;
    frontClassName?: string;
    backClassName?: string;
    backContent?: React.ReactNode;
    flipOnClick?: boolean;
    glowColor?: string;
    intensity?: number;
}

export default function Card3D({
    children,
    className = "",
    frontClassName = "",
    backClassName = "",
    backContent,
    flipOnClick = false,
    glowColor = "rgba(0, 240, 255, 0.3)",
    intensity = 15,
}: Card3DProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    // Check for reduced motion preference
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    // Mouse position tracking
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics for smooth animation
    const springConfig = { stiffness: 150, damping: 20 };
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), springConfig);
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), springConfig);

    // Handle mouse move for 3D tilt effect
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current || prefersReducedMotion || flipOnClick) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set((e.clientX - centerX) / rect.width);
        y.set((e.clientY - centerY) / rect.height);
    };

    // Reset on mouse leave
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Handle click flip
    const handleClick = () => {
        if (flipOnClick && backContent) {
            setIsFlipped(!isFlipped);
        }
    };

    if (prefersReducedMotion) {
        return (
            <div className={cn("relative", className)}>
                <div className={frontClassName}>{children}</div>
            </div>
        );
    }

    return (
        <div
            ref={ref}
            className={cn(
                "relative cursor-pointer",
                flipOnClick && "perspective-1000",
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{ perspective: 1000 }}
        >
            <motion.div
                className="relative w-full h-full"
                style={{
                    rotateX: flipOnClick ? (isFlipped ? 180 : 0) : rotateX,
                    rotateY: flipOnClick ? 0 : rotateY,
                    transformStyle: "preserve-3d",
                }}
                animate={{
                    rotateY: flipOnClick ? (isFlipped ? 180 : 0) : undefined,
                }}
                transition={{
                    duration: flipOnClick ? 0.6 : 0,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                {/* Front Face */}
                <div
                    className={cn(
                        "relative backface-hidden",
                        flipOnClick && "absolute inset-0",
                        frontClassName
                    )}
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                    }}
                >
                    {children}

                    {/* Glow Effect */}
                    <motion.div
                        className="absolute -inset-px rounded-2xl opacity-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 60%)`,
                        }}
                        animate={{
                            opacity: flipOnClick ? 0 : 1,
                        }}
                    />
                </div>

                {/* Back Face (for flip cards) */}
                {backContent && flipOnClick && (
                    <div
                        className={cn(
                            "absolute inset-0 backface-hidden",
                            backClassName
                        )}
                        style={{
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                        }}
                    >
                        {backContent}
                    </div>
                )}
            </motion.div>

            {/* Ambient Glow */}
            <div
                className="absolute -inset-4 blur-2xl opacity-20 pointer-events-none"
                style={{
                    background: glowColor,
                    filter: "blur(40px)",
                }}
            />
        </div>
    );
}

// Simple tilt card without flip
interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    intensity?: number;
    glowColor?: string;
    glowOnHover?: boolean;
}

export function TiltCard({
    children,
    className = "",
    intensity = 10,
    glowColor = "rgba(0, 240, 255, 0.2)",
    glowOnHover = true,
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const springConfig = { stiffness: 300, damping: 30 };
    const rotateX = useSpring(useTransform(y, [0, 1], [intensity, -intensity]), springConfig);
    const rotateY = useSpring(useTransform(x, [0, 1], [-intensity, intensity]), springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current || prefersReducedMotion) return;

        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width);
        y.set((e.clientY - rect.top) / rect.height);
    };

    const handleMouseEnter = () => setIsHovered(true);

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0.5);
        y.set(0.5);
    };

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            className={cn("relative will-change-transform", className)}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000,
            }}
        >
            {children}

            {/* Glow Effect */}
            {glowOnHover && (
                <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at ${x.get() * 100}% ${y.get() * 100}%, ${glowColor}, transparent 50%)`,
                    }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                />
            )}
        </motion.div>
    );
}
