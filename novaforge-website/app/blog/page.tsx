"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight, User } from "lucide-react";
import Footer from "@/components/Footer";

const blogPosts = [
    {
        id: "1",
        title: "The Future of AI in Enterprise: Trends to Watch in 2024",
        excerpt: "Explore the emerging AI technologies reshaping how businesses operate and compete in the digital landscape.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
        author: "Alex Chen",
        date: "Mar 1, 2024",
        readTime: "8 min read",
        category: "AI & Machine Learning",
        featured: true,
    },
    {
        id: "2",
        title: "Building Scalable Cloud Architecture: Best Practices",
        excerpt: "Learn the key principles for designing cloud infrastructure that grows with your business needs.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
        author: "Sarah Williams",
        date: "Feb 28, 2024",
        readTime: "6 min read",
        category: "Cloud Computing",
        featured: false,
    },
    {
        id: "3",
        title: "UX Design Principles for AI-Powered Applications",
        excerpt: "How to create intuitive user experiences when integrating artificial intelligence into your products.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
        author: "Marcus Johnson",
        date: "Feb 25, 2024",
        readTime: "5 min read",
        category: "Design",
        featured: false,
    },
    {
        id: "4",
        title: "Data-Driven Growth: Metrics That Actually Matter",
        excerpt: "Cut through the noise and focus on the KPIs that drive real business growth.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        author: "Emily Rodriguez",
        date: "Feb 22, 2024",
        readTime: "7 min read",
        category: "Growth",
        featured: false,
    },
    {
        id: "5",
        title: "Cybersecurity in the Age of AI: New Threats and Defenses",
        excerpt: "Understanding how AI is changing the cybersecurity landscape and how to protect your organization.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
        author: "Alex Chen",
        date: "Feb 18, 2024",
        readTime: "9 min read",
        category: "Security",
        featured: false,
    },
    {
        id: "6",
        title: "The Rise of No-Code: Democratizing Software Development",
        excerpt: "How no-code platforms are changing who can build software and what that means for businesses.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
        author: "Sarah Williams",
        date: "Feb 15, 2024",
        readTime: "5 min read",
        category: "Development",
        featured: false,
    },
];

const categories = [
    "All",
    "AI & Machine Learning",
    "Cloud Computing",
    "Design",
    "Growth",
    "Security",
    "Development",
];

export default function BlogPage() {
    const featuredPost = blogPosts.find((post) => post.featured);
    const regularPosts = blogPosts.filter((post) => !post.featured);

    return (
        <div className="relative bg-[#050A14]">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#00F0FF]/5 to-transparent" />
                    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FF00FF]/10 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 container-custom pt-32 pb-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-2 rounded-full glass text-[#00F0FF] text-sm font-medium mb-6"
                        >
                            Our Blog
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                        >
                            Insights & <span className="text-gradient">Perspectives</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto"
                        >
                            Thoughts on technology, design, and the future of digital innovation.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-8 border-b border-white/10">
                <div className="container-custom">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category, index) => (
                            <motion.button
                                key={category}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className={`px-4 py-2 rounded-full text-sm transition-all ${index === 0
                                        ? "bg-[#00F0FF] text-black"
                                        : "bg-white/5 text-white/70 hover:bg-white/10"
                                    }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
                <section className="py-20">
                    <div className="container-custom">
                        <motion.article
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Link href={`/blog/${featuredPost.id}`}>
                                <div className="grid lg:grid-cols-2 gap-8 rounded-3xl overflow-hidden glass hover:bg-white/5 transition-all duration-500">
                                    <div className="relative h-64 lg:h-auto overflow-hidden">
                                        <Image
                                            src={featuredPost.image}
                                            alt={featuredPost.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#00F0FF]/20 text-[#00F0FF]">
                                                Featured
                                            </span>
                                            <span className="text-sm text-white/50">
                                                {featuredPost.category}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 group-hover:text-[#00F0FF] transition-colors">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-white/60 mb-6 text-lg">
                                            {featuredPost.excerpt}
                                        </p>
                                        <div className="flex items-center gap-6 text-sm text-white/50">
                                            <div className="flex items-center gap-2">
                                                <User className="w-4 h-4" />
                                                {featuredPost.author}
                                            </div>
                                            <div>{featuredPost.date}</div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                {featuredPost.readTime}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    </div>
                </section>
            )}

            {/* Blog Grid */}
            <section className="py-20">
                <div className="container-custom">
                    <h2 className="text-2xl font-bold mb-12">Latest Articles</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <Link href={`/blog/${post.id}`}>
                                    <div className="rounded-2xl overflow-hidden glass hover:bg-white/5 transition-all duration-500 h-full flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm rounded-full">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-bold mb-3 group-hover:text-[#00F0FF] transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-white/60 text-sm mb-4 line-clamp-2 flex-grow">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between text-xs text-white/50 pt-4 border-t border-white/10">
                                                <span>{post.author}</span>
                                                <div className="flex items-center gap-4">
                                                    <span>{post.date}</span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3" />
                                                        {post.readTime}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto text-center p-12 rounded-3xl glass"
                    >
                        <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
                        <p className="text-white/60 mb-8">
                            Get the latest insights delivered straight to your inbox. No spam, unsubscribe anytime.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-[#00F0FF]/50 transition-colors"
                            />
                            <motion.button
                                type="submit"
                                className="px-8 py-4 bg-[#00F0FF] text-black font-bold rounded-full flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Subscribe
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
