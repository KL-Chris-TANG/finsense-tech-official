import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { getSiteCopy } from "@/data/siteCopy";
import { useLanguage } from "@/lib/language";

const CareersSection = () => {
  const { language } = useLanguage();
  const copy = getSiteCopy(language).careers;

  return (
    <section id="inquiry-hook" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-3xl bg-gradient-primary pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <Reveal>
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">{copy.eyebrow}</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{copy.title}</h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">{copy.description}</p>
        </Reveal>
        <Reveal delay={300}>
          <Link
            to="/inquiry"
            className="inline-block border border-primary text-primary px-8 py-4 rounded-full text-sm uppercase tracking-wider font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            {copy.cta}
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default CareersSection;
