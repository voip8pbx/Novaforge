"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Dribbble, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig, navigation } from "@/lib/siteConfig";
import { Button } from "@/components/ui/Button";

const footerLinks = {
    company: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press Kit", href: "/press" },
        { name: "Contact", href: "/contact" },
    ],
    resources: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Documentation", href: "/docs" },
        { name: "Help Center", href: "/help" },
    ],
    legal: [
        { name: "Sherr", href: "/privacy" },
        { name: "Holaaa", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
    ],
};

const socialLinks = [
    { name: "Twitter", icon: Twitter, href: siteConfig.links.twitter },
    { name: "LinkedIn", icon: Linkedin, href: siteConfig.links.linkedin },
    { name: "GitHub", icon: Github, href: siteConfig.links.github },
    { name: "Dribbble", icon: Dribbble, href: "https://dribbble.com/novaforgelabs" },
];

export default function Footer() {
    return (
        <footer className="relative bg-[#03070A] border-t border-white/5">
            {/* Gradient Top Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F0FF]/50 to-transparent" />

            <div className="container-main py-16 lg:py-20">
                {/* Main Footer Content - Proper grid spacing */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
                    {/* Brand Column - Takes 4 columns */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-block mb-6">
                            <div className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F0FF] to-[#FF00FF] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                                    <span className="text-black font-bold text-xl">N</span>
                                </div>
                                <span className="text-xl font-bold tracking-wide text-white text-shadow-sm">
                                    NovaForge
                                    <span className="text-[#00F0FF]">.</span>
                                </span>
                            </div>
                        </Link>
                        <p className="text-white/70 mb-8 max-w-sm leading-relaxed tracking-wide">
                            {siteConfig.description}
                        </p>

                        {/* Contact Info - Proper spacing */}
                        <div className="space-y-4">
                            <a
                                href={`mailto:${siteConfig.contact.email}`}
                                className="flex items-center gap-3 text-white/70 hover:text-[#00F0FF] transition-colors group"
                            >
                                <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
                                <span className="text-sm tracking-wide">{siteConfig.contact.email}</span>
                            </a>
                            <a
                                href={`tel:${siteConfig.contact.phone}`}
                                className="flex items-center gap-3 text-white/70 hover:text-[#00F0FF] transition-colors group"
                            >
                                <Phone className="w-4 h-4 transition-transform group-hover:scale-110" />
                                <span className="text-sm tracking-wide">{siteConfig.contact.phone}</span>
                            </a>
                            <div className="flex items-start gap-3 text-white/70">
                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span className="text-sm tracking-wide">{siteConfig.contact.address}</span>
                            </div>
                        </div>
                    </div>

                    {/* Company Links - Takes 2 columns */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-[#00F0FF] transition-colors text-sm tracking-wide"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links - Takes 2 columns */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">Services</h4>
                        <ul className="space-y-4">
                            {navigation.services.slice(0, 4).map((service) => (
                                <li key={service.slug}>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="text-white/70 hover:text-[#00F0FF] transition-colors text-sm tracking-wide"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links - Takes 2 columns */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">Resources</h4>
                        <ul className="space-y-4">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-[#00F0FF] transition-colors text-sm tracking-wide"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter - Takes 2 columns */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">Stay Updated</h4>
                        <p className="text-white/70 text-sm mb-6 leading-relaxed tracking-wide">
                            Subscribe to our newsletter for the latest insights.
                        </p>
                        <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/55 focus:outline-none focus:border-[#00F0FF]/50 transition-colors tracking-wide"
                            />
                            <Button variant="primary" size="md" fullWidth>
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-10" />

                {/* Bottom Row - Proper spacing */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Copyright */}
                    <p className="text-white/55 text-sm text-center md:text-left tracking-wide">
                        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/70 hover:text-[#00F0FF] hover:border-[#00F0FF]/30 hover:bg-[#00F0FF]/5 transition-all duration-300"
                                aria-label={social.name}
                            >
                                <social.icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>

                    {/* Legal Links */}
                    <div className="flex items-center gap-6">
                        {footerLinks.legal.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white/55 hover:text-white/90 text-sm transition-colors tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
