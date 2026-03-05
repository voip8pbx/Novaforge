// NovaForge Labs - Site Configuration
// Based on video frame analysis - Cinematic 3D Motion Design

export const siteConfig = {
    name: "NovaForge Labs",
    tagline: "Engineering the Future of Digital Intelligence",
    description:
        "Premium futuristic digital engineering & AI growth studio. We forge cutting-edge digital experiences through innovative technology and intelligent design.",
    url: "https://novaforgelabs.com",
    ogImage: "https://novaforgelabs.com/og.jpg",
    links: {
        twitter: "https://twitter.com/novaforgelabs",
        github: "https://github.com/novaforgelabs",
        linkedin: "https://linkedin.com/company/novaforgelabs",
    },
    contact: {
        email: "hello@novaforgelabs.com",
        phone: "+1 (555) 123-4567",
        address: "Innovation District, San Francisco, CA 94105",
    },
} as const;

// Color System - Extracted from Video Frames
export const colors = {
    // Primary - Electric Aqua (Main neon glow)
    primary: {
        DEFAULT: "#00F0FF",
        50: "#E6FDFF",
        100: "#B3F7FF",
        200: "#80F0FF",
        300: "#4DE9FF",
        400: "#1AE2FF",
        500: "#00F0FF",
        600: "#00C4D4",
        700: "#0098A3",
        800: "#006C72",
        900: "#004042",
        950: "#002829",
    },

    // Accent - Neon Magenta (Glow highlights)
    accent: {
        DEFAULT: "#FF00FF",
        50: "#FFE6FF",
        100: "#FFB3FF",
        200: "#FF80FF",
        300: "#FF4DFF",
        400: "#FF1AFF",
        500: "#FF00FF",
        600: "#D400D4",
        700: "#A300A3",
        800: "#720072",
        900: "#420042",
        950: "#290029",
    },

    // Deep Background - Midnight Blue-Black
    background: {
        DEFAULT: "#050A14",
        50: "#0A1428",
        100: "#0D1B33",
        200: "#122240",
        300: "#1A2E4D",
        400: "#243B5D",
        500: "#050A14",
        600: "#03070A",
        700: "#020508",
        800: "#010204",
        900: "#000102",
        950: "#000000",
    },

    // Glow Effects - Cyan & Violet Gradients
    glow: {
        cyan: "#00F0FF",
        violet: "#8B5CF6",
        magenta: "#FF00FF",
        blue: "#3B82F6",
        teal: "#14B8A6",
    },

    // Surface - Soft translucent glass layers
    surface: {
        DEFAULT: "rgba(255, 255, 255, 0.05)",
        hover: "rgba(255, 255, 255, 0.1)",
        active: "rgba(255, 255, 255, 0.15)",
        glass: "rgba(10, 20, 40, 0.6)",
        glassBorder: "rgba(0, 240, 255, 0.2)",
    },

    // Text colors
    text: {
        primary: "#FFFFFF",
        secondary: "rgba(255, 255, 255, 0.7)",
        muted: "rgba(255, 255, 255, 0.5)",
        accent: "#00F0FF",
    },
} as const;

// Animation Configuration
export const animations = {
    // Scroll trigger settings
    scrollTrigger: {
        scrub: 1,
        smoothness: 1.5,
        anticipatePin: 1,
    },

    // Easing functions
    easing: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        elastic: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    },

    // Duration presets (in seconds)
    duration: {
        fast: 0.3,
        normal: 0.6,
        slow: 1.0,
        cinematic: 1.5,
    },

    // Stagger delays
    stagger: {
        fast: 0.05,
        normal: 0.1,
        slow: 0.15,
    },
} as const;

// 3D Scene Configuration
export const scene3D = {
    camera: {
        fov: 50,
        near: 0.1,
        far: 1000,
        position: [0, 0, 8] as const,
    },

    lights: {
        ambient: {
            intensity: 0.3,
            color: "#ffffff",
        },
        directional: {
            intensity: 1,
            position: [5, 5, 5] as const,
            color: "#00F0FF",
        },
        point: {
            intensity: 0.8,
            position: [-5, 3, -5] as const,
            color: "#FF00FF",
        },
    },

    objects: {
        cube: {
            size: 2,
            rotationSpeed: 0.005,
            floatAmplitude: 0.3,
            floatSpeed: 1.5,
        },
        sphere: {
            radius: 1.2,
            detail: 32,
        },
        particles: {
            count: 200,
            size: 0.02,
            color: "#00F0FF",
        },
    },
} as const;

// Navigation Configuration
export const navigation = {
    main: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Industries", href: "/industries" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ],

    services: [
        { name: "AI Strategy", slug: "ai-strategy" },
        { name: "Digital Engineering", slug: "digital-engineering" },
        { name: "Growth Systems", slug: "growth-systems" },
        { name: "Cloud Architecture", slug: "cloud-architecture" },
        { name: "Data Intelligence", slug: "data-intelligence" },
        { name: "Product Design", slug: "product-design" },
    ],

    social: [
        { name: "Twitter", href: "https://twitter.com/novaforgelabs" },
        { name: "LinkedIn", href: "https://linkedin.com/company/novaforgelabs" },
        { name: "GitHub", href: "https://github.com/novaforgelabs" },
        { name: "Dribbble", href: "https://dribbble.com/novaforgelabs" },
    ],
} as const;

// Content Configuration
export const content = {
    hero: {
        headline: "NOVAFORGE",
        subheadline: "Engineering the Future of Digital Intelligence",
        description:
            "We forge cutting-edge digital experiences through innovative AI technology, intelligent design, and strategic engineering.",
        cta: {
            primary: "Start Your Journey",
            secondary: "Explore Services",
        },
    },

    stats: [
        { value: "500+", label: "Projects Delivered" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "150+", label: "AI Solutions Built" },
        { value: "12", label: "Years Experience" },
    ],

    services: [
        {
            title: "AI Strategy",
            description: "Intelligent systems that learn, adapt, and transform your business.",
            icon: "Brain",
            color: "#00F0FF",
        },
        {
            title: "Digital Engineering",
            description: "End-to-end digital transformation with cutting-edge technologies.",
            icon: "Cpu",
            color: "#FF00FF",
        },
        {
            title: "Growth Systems",
            description: "Data-driven growth engines that scale with your ambition.",
            icon: "TrendingUp",
            color: "#8B5CF6",
        },
        {
            title: "Cloud Architecture",
            description: "Scalable, resilient infrastructure for the modern enterprise.",
            icon: "Cloud",
            color: "#14B8A6",
        },
    ],
} as const;

export default siteConfig;
