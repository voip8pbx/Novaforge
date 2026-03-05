module.exports = [
"[project]/novaforge-website/lib/siteConfig.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// NovaForge Labs - Site Configuration
// Based on video frame analysis - Cinematic 3D Motion Design
__turbopack_context__.s([
    "animations",
    ()=>animations,
    "colors",
    ()=>colors,
    "content",
    ()=>content,
    "default",
    ()=>__TURBOPACK__default__export__,
    "navigation",
    ()=>navigation,
    "scene3D",
    ()=>scene3D,
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    name: "NovaForge Labs",
    tagline: "Engineering the Future of Digital Intelligence",
    description: "Premium futuristic digital engineering & AI growth studio. We forge cutting-edge digital experiences through innovative technology and intelligent design.",
    url: "https://novaforgelabs.com",
    ogImage: "https://novaforgelabs.com/og.jpg",
    links: {
        twitter: "https://twitter.com/novaforgelabs",
        github: "https://github.com/novaforgelabs",
        linkedin: "https://linkedin.com/company/novaforgelabs"
    },
    contact: {
        email: "hello@novaforgelabs.com",
        phone: "+1 (555) 123-4567",
        address: "Innovation District, San Francisco, CA 94105"
    }
};
const colors = {
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
        950: "#002829"
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
        950: "#290029"
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
        950: "#000000"
    },
    // Glow Effects - Cyan & Violet Gradients
    glow: {
        cyan: "#00F0FF",
        violet: "#8B5CF6",
        magenta: "#FF00FF",
        blue: "#3B82F6",
        teal: "#14B8A6"
    },
    // Surface - Soft translucent glass layers
    surface: {
        DEFAULT: "rgba(255, 255, 255, 0.05)",
        hover: "rgba(255, 255, 255, 0.1)",
        active: "rgba(255, 255, 255, 0.15)",
        glass: "rgba(10, 20, 40, 0.6)",
        glassBorder: "rgba(0, 240, 255, 0.2)"
    },
    // Text colors
    text: {
        primary: "#FFFFFF",
        secondary: "rgba(255, 255, 255, 0.7)",
        muted: "rgba(255, 255, 255, 0.5)",
        accent: "#00F0FF"
    }
};
const animations = {
    // Scroll trigger settings
    scrollTrigger: {
        scrub: 1,
        smoothness: 1.5,
        anticipatePin: 1
    },
    // Easing functions
    easing: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        elastic: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    },
    // Duration presets (in seconds)
    duration: {
        fast: 0.3,
        normal: 0.6,
        slow: 1.0,
        cinematic: 1.5
    },
    // Stagger delays
    stagger: {
        fast: 0.05,
        normal: 0.1,
        slow: 0.15
    }
};
const scene3D = {
    camera: {
        fov: 50,
        near: 0.1,
        far: 1000,
        position: [
            0,
            0,
            8
        ]
    },
    lights: {
        ambient: {
            intensity: 0.3,
            color: "#ffffff"
        },
        directional: {
            intensity: 1,
            position: [
                5,
                5,
                5
            ],
            color: "#00F0FF"
        },
        point: {
            intensity: 0.8,
            position: [
                -5,
                3,
                -5
            ],
            color: "#FF00FF"
        }
    },
    objects: {
        cube: {
            size: 2,
            rotationSpeed: 0.005,
            floatAmplitude: 0.3,
            floatSpeed: 1.5
        },
        sphere: {
            radius: 1.2,
            detail: 32
        },
        particles: {
            count: 200,
            size: 0.02,
            color: "#00F0FF"
        }
    }
};
const navigation = {
    main: [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Services",
            href: "/services"
        },
        {
            name: "Industries",
            href: "/industries"
        },
        {
            name: "Case Studies",
            href: "/case-studies"
        },
        {
            name: "Blog",
            href: "/blog"
        },
        {
            name: "Contact",
            href: "/contact"
        }
    ],
    services: [
        {
            name: "AI Strategy",
            slug: "ai-strategy"
        },
        {
            name: "Digital Engineering",
            slug: "digital-engineering"
        },
        {
            name: "Growth Systems",
            slug: "growth-systems"
        },
        {
            name: "Cloud Architecture",
            slug: "cloud-architecture"
        },
        {
            name: "Data Intelligence",
            slug: "data-intelligence"
        },
        {
            name: "Product Design",
            slug: "product-design"
        }
    ],
    social: [
        {
            name: "Twitter",
            href: "https://twitter.com/novaforgelabs"
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com/company/novaforgelabs"
        },
        {
            name: "GitHub",
            href: "https://github.com/novaforgelabs"
        },
        {
            name: "Dribbble",
            href: "https://dribbble.com/novaforgelabs"
        }
    ]
};
const content = {
    hero: {
        headline: "NOVAFORGE",
        subheadline: "Engineering the Future of Digital Intelligence",
        description: "We forge cutting-edge digital experiences through innovative AI technology, intelligent design, and strategic engineering.",
        cta: {
            primary: "Start Your Journey",
            secondary: "Explore Services"
        }
    },
    stats: [
        {
            value: "500+",
            label: "Projects Delivered"
        },
        {
            value: "98%",
            label: "Client Satisfaction"
        },
        {
            value: "150+",
            label: "AI Solutions Built"
        },
        {
            value: "12",
            label: "Years Experience"
        }
    ],
    services: [
        {
            title: "AI Strategy",
            description: "Intelligent systems that learn, adapt, and transform your business.",
            icon: "Brain",
            color: "#00F0FF"
        },
        {
            title: "Digital Engineering",
            description: "End-to-end digital transformation with cutting-edge technologies.",
            icon: "Cpu",
            color: "#FF00FF"
        },
        {
            title: "Growth Systems",
            description: "Data-driven growth engines that scale with your ambition.",
            icon: "TrendingUp",
            color: "#8B5CF6"
        },
        {
            title: "Cloud Architecture",
            description: "Scalable, resilient infrastructure for the modern enterprise.",
            icon: "Cloud",
            color: "#14B8A6"
        }
    ]
};
const __TURBOPACK__default__export__ = siteConfig;
}),
"[project]/novaforge-website/components/providers/SmoothScrollProvider.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/novaforge-website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/novaforge-website/components/providers/SmoothScrollProvider.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/novaforge-website/components/providers/SmoothScrollProvider.tsx <module evaluation>", "default");
}),
"[project]/novaforge-website/components/providers/SmoothScrollProvider.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/novaforge-website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/novaforge-website/components/providers/SmoothScrollProvider.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/novaforge-website/components/providers/SmoothScrollProvider.tsx", "default");
}),
"[project]/novaforge-website/components/providers/SmoothScrollProvider.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$components$2f$providers$2f$SmoothScrollProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/novaforge-website/components/providers/SmoothScrollProvider.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$components$2f$providers$2f$SmoothScrollProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/novaforge-website/components/providers/SmoothScrollProvider.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$components$2f$providers$2f$SmoothScrollProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/novaforge-website/components/Navigation.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/novaforge-website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/novaforge-website/components/Navigation.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/novaforge-website/components/Navigation.tsx <module evaluation>", "default");
}),
"[project]/novaforge-website/components/Navigation.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/novaforge-website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/novaforge-website/components/Navigation.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/novaforge-website/components/Navigation.tsx", "default");
}),
"[project]/novaforge-website/components/Navigation.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/novaforge-website/components/Navigation.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/novaforge-website/components/Navigation.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/novaforge-website/components/CustomCursor.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/novaforge-website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/novaforge-website/components/CustomCursor.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/novaforge-website/components/CustomCursor.tsx <module evaluation>", "default");
}),
"[project]/novaforge-website/components/CustomCursor.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/novaforge-website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/novaforge-website/components/CustomCursor.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/novaforge-website/components/CustomCursor.tsx", "default");
}),
"[project]/novaforge-website/components/CustomCursor.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$components$2f$CustomCursor$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/novaforge-website/components/CustomCursor.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$components$2f$CustomCursor$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/novaforge-website/components/CustomCursor.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$components$2f$CustomCursor$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/novaforge-website/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/novaforge-website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/novaforge-website/lib/siteConfig.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$components$2f$providers$2f$SmoothScrollProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/novaforge-website/components/providers/SmoothScrollProvider.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/novaforge-website/components/Navigation.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$components$2f$CustomCursor$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/novaforge-website/components/CustomCursor.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    title: {
        default: `${__TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name} | ${__TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].tagline}`,
        template: `%s | ${__TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name}`
    },
    description: __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].description,
    keywords: [
        "AI",
        "Artificial Intelligence",
        "Digital Engineering",
        "Technology",
        "Innovation",
        "Software Development",
        "Cloud Architecture",
        "Data Intelligence"
    ],
    authors: [
        {
            name: __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name
        }
    ],
    creator: __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name,
    metadataBase: new URL(__TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].url),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].url,
        title: __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].description,
        siteName: __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name,
        images: [
            {
                url: __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].ogImage,
                width: 1200,
                height: 630,
                alt: __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].description,
        images: [
            __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].ogImage
        ],
        creator: "@novaforgelabs"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png"
    },
    manifest: `${__TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].url}/site.webmanifest`
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        className: "dark",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "antialiased bg-[#050A14] text-white overflow-x-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$components$2f$providers$2f$SmoothScrollProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$components$2f$CustomCursor$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/novaforge-website/app/layout.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/novaforge-website/app/layout.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$novaforge$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/novaforge-website/app/layout.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/novaforge-website/app/layout.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/novaforge-website/app/layout.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/novaforge-website/app/layout.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
}),
"[project]/novaforge-website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/novaforge-website/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=novaforge-website_141714f5._.js.map