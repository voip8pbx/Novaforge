// NovaForge Labs - Type Definitions

// Navigation
export interface NavItem {
    name: string;
    href: string;
    children?: NavItem[];
}

export interface Service {
    title: string;
    description: string;
    slug: string;
    icon: string;
    color: string;
    features?: string[];
    image?: string;
}

export interface CaseStudy {
    id: string;
    title: string;
    description: string;
    client: string;
    industry: string;
    results: {
        metric: string;
        value: string;
    }[];
    image: string;
    tags: string[];
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: Author;
    date: string;
    readTime: string;
    image: string;
    tags: string[];
    featured?: boolean;
}

export interface Author {
    name: string;
    role: string;
    avatar: string;
}

export interface Stat {
    value: string;
    label: string;
    suffix?: string;
    prefix?: string;
}

export interface Testimonial {
    id: string;
    content: string;
    author: Author;
    company: string;
    rating: number;
}

export interface Industry {
    name: string;
    slug: string;
    description: string;
    icon: string;
    image: string;
    stats: Stat[];
}

export interface ContactFormData {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    service?: string;
    message: string;
}

export interface ApiResponse<T = unknown> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

// 3D Scene Types
export interface FloatingObject {
    id: string;
    type: "cube" | "sphere" | "torus" | "octahedron";
    position: [number, number, number];
    rotation: [number, number, number];
    scale: number;
    color: string;
    speed: number;
    amplitude: number;
}

// Animation Types
export interface ScrollAnimationConfig {
    trigger: string;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
    onEnter?: () => void;
    onLeave?: () => void;
}

export interface ParallaxLayer {
    speed: number;
    direction?: "vertical" | "horizontal";
}

// Component Props
export interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
    intensity?: "low" | "medium" | "high";
}

export interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    strength?: number;
    onClick?: () => void;
}

export interface AnimatedCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}

// SEO Types
export interface MetadataConfig {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
    canonical?: string;
    noIndex?: boolean;
}

export interface StructuredData {
    "@context": string;
    "@type": string;
    [key: string]: unknown;
}

// Theme Types
export interface ThemeConfig {
    colors: {
        primary: string;
        accent: string;
        background: string;
        surface: string;
        text: string;
    };
    animations: {
        duration: {
            fast: number;
            normal: number;
            slow: number;
        };
        easing: {
            smooth: string;
            bounce: string;
        };
    };
}

// Lenis Smooth Scroll Types
export interface LenisInstance {
    scroll: number;
    limit: number;
    velocity: number;
    direction: number;
    isScrolling: boolean;
    isStopped: boolean;
    raf: (time: number) => void;
    scrollTo: (
        target: string | number | HTMLElement,
        options?: {
            offset?: number;
            duration?: number;
            easing?: (t: number) => number;
            immediate?: boolean;
        }
    ) => void;
    stop: () => void;
    start: () => void;
    destroy: () => void;
}

// Mouse Position for Custom Cursor
export interface MousePosition {
    x: number;
    y: number;
    normalizedX: number;
    normalizedY: number;
}

// Page Transition Types
export interface PageTransition {
    initial: Record<string, number | string>;
    animate: Record<string, number | string>;
    exit: Record<string, number | string>;
    transition: {
        duration: number;
        ease: number[];
    };
}
