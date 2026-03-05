"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { MousePosition } from "@/types";

export function useMousePosition() {
    const [mousePosition, setMousePosition] = useState<MousePosition>({
        x: 0,
        y: 0,
        normalizedX: 0,
        normalizedY: 0,
    });

    const rafRef = useRef<number | null>(null);
    const lastUpdateRef = useRef<number>(0);

    const updateMousePosition = useCallback((e: MouseEvent) => {
        const now = performance.now();
        // Throttle to 60fps
        if (now - lastUpdateRef.current < 16) return;
        lastUpdateRef.current = now;

        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
        }

        rafRef.current = requestAnimationFrame(() => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
                normalizedX: (e.clientX / window.innerWidth) * 2 - 1,
                normalizedY: -(e.clientY / window.innerHeight) * 2 + 1,
            });
        });
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [updateMousePosition]);

    return mousePosition;
}

export function useMagneticEffect(strength: number = 0.3) {
    const elementRef = useRef<HTMLElement | null>(null);
    const [transform, setTransform] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!elementRef.current) return;

            const rect = elementRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;

            setTransform({
                x: distanceX * strength,
                y: distanceY * strength,
            });
        },
        [strength]
    );

    const handleMouseLeave = useCallback(() => {
        setTransform({ x: 0, y: 0 });
    }, []);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [handleMouseMove, handleMouseLeave]);

    return { elementRef, transform };
}

export default useMousePosition;
