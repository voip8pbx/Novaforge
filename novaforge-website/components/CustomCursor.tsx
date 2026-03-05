"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [cursorText, setCursorText] = useState("");
    const cursorRef = useRef<HTMLDivElement>(null);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Check if device has fine pointer (mouse)
        const hasPointer = window.matchMedia("(pointer: fine)").matches;
        if (!hasPointer) return;

        setIsVisible(true);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        // Handle hoverable elements
        const handleElementMouseEnter = (e: Event) => {
            const target = e.target as HTMLElement;
            setIsHovering(true);
            const cursorLabel = target.getAttribute("data-cursor-text");
            if (cursorLabel) {
                setCursorText(cursorLabel);
            }
        };

        const handleElementMouseLeave = () => {
            setIsHovering(false);
            setCursorText("");
        };

        window.addEventListener("mousemove", moveCursor);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        // Add listeners to hoverable elements
        const hoverables = document.querySelectorAll(
            'a, button, [data-cursor-hover], input, textarea, [role="button"]'
        );

        hoverables.forEach((el) => {
            el.addEventListener("mouseenter", handleElementMouseEnter);
            el.addEventListener("mouseleave", handleElementMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);

            hoverables.forEach((el) => {
                el.removeEventListener("mouseenter", handleElementMouseEnter);
                el.removeEventListener("mouseleave", handleElementMouseLeave);
            });
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                ref={cursorRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    className="relative -translate-x-1/2 -translate-y-1/2 rounded-full"
                    animate={{
                        width: isHovering ? 60 : 12,
                        height: isHovering ? 60 : 12,
                        backgroundColor: isHovering
                            ? "rgba(0, 240, 255, 0.2)"
                            : "#00F0FF",
                        border: isHovering ? "2px solid #00F0FF" : "none",
                    }}
                    transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 300,
                    }}
                >
                    {cursorText && (
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white"
                        >
                            {cursorText}
                        </motion.span>
                    )}
                </motion.div>
            </motion.div>

            {/* Trailing glow effect */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    className="relative -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl"
                    animate={{
                        width: isHovering ? 80 : 30,
                        height: isHovering ? 80 : 30,
                        opacity: isHovering ? 0.6 : 0.3,
                    }}
                    style={{
                        background:
                            "radial-gradient(circle, rgba(0, 240, 255, 0.5) 0%, transparent 70%)",
                    }}
                    transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 200,
                    }}
                />
            </motion.div>

            {/* Hide default cursor */}
            <style jsx global>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
        </>
    );
}
