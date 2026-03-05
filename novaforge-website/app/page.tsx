import HeroSection from "@/components/sections/HeroSection";
import TransformationSection from "@/components/sections/TransformationSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";

// Section Divider Component
function SectionDivider({ variant = "default" }: { variant?: "default" | "gradient" | "glow" }) {
  const variants = {
    default: "bg-gradient-to-r from-transparent via-white/10 to-transparent",
    gradient: "bg-gradient-to-r from-[#00F0FF]/0 via-[#00F0FF]/30 to-[#FF00FF]/0",
    glow: "bg-gradient-to-r from-transparent via-[#00F0FF]/20 to-transparent shadow-[0_0_20px_rgba(0,240,255,0.3)]",
  };

  return (
    <div className="relative h-px w-full my-0">
      <div className={`absolute inset-0 ${variants[variant]}`} />
    </div>
  );
}

// Section Wrapper with consistent spacing and reveal animation
function SectionWrapper({
  children,
  className = "",
  hasBackground = false,
}: {
  children: React.ReactNode;
  className?: string;
  hasBackground?: boolean;
}) {
  return (
    <section
      className={`relative ${hasBackground ? 'bg-[#0A1428]/30' : ''} ${className}`}
    >
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section - Full viewport with no top margin */}
      <HeroSection />

      {/* Divider 1 - Gradient fade from hero */}
      <SectionDivider variant="gradient" />

      {/* Transformation Section - With subtle background */}
      <SectionWrapper hasBackground>
        <TransformationSection />
      </SectionWrapper>

      {/* Divider 2 - Subtle separator */}
      <SectionDivider variant="default" />

      {/* Services Section - Clean background */}
      <SectionWrapper>
        <ServicesSection />
      </SectionWrapper>

      {/* Divider 3 - Glow effect before CTA */}
      <SectionDivider variant="glow" />

      {/* CTA Section - With background accent */}
      <SectionWrapper hasBackground>
        <CTASection />
      </SectionWrapper>

      {/* Final gradient transition to footer */}
      <div className="h-24 bg-gradient-to-b from-[#050A14] to-[#03070A]" />

      <Footer />
    </div>
  );
}
