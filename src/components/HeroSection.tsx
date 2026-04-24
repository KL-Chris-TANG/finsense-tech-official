import heroBg from "@/assets/hero-bg-editorial.jpg";
import { ArrowDown } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { getSiteCopy } from "@/data/siteCopy";
import { useLanguage } from "@/lib/language";

const HeroSection = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const copy = getSiteCopy(language).hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt={copy.imageAlt}
          width={1920}
          height={1080}
          className="w-full h-full object-cover brightness-[0.65] transition-all duration-500"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: theme === "light" ? "hsl(0 0% 0% / 0.1)" : "hsl(var(--background) / 0.15)" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <p
          className="text-sm uppercase tracking-[0.3em] text-primary mb-6 animate-fade-in opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          {copy.eyebrow}
        </p>
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 animate-fade-up opacity-0"
          style={{ animationDelay: "0.4s" }}
        >
          <span style={{ color: "hsl(0 0% 100%)" }}>{copy.titleLine1}</span>
          <br />
          <span className="text-gradient">{copy.titleLine2}</span>
        </h1>
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up opacity-0"
          style={{ animationDelay: "0.6s", color: "hsl(0 0% 100%)" }}
        >
          {copy.description}
        </p>
        <a
          href="#businesses"
          className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity animate-fade-up opacity-0"
          style={{ animationDelay: "0.8s" }}
        >
          {copy.cta}
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
