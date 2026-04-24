import Reveal from "@/components/Reveal";
import { getSiteCopy } from "@/data/siteCopy";
import { useLanguage } from "@/lib/language";

const StatsSection = () => {
  const { language } = useLanguage();
  const stats = getSiteCopy(language).stats;

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-primary opacity-40" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
