import { TrendingUp, BarChart3, DollarSign } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getSiteCopy } from "@/data/siteCopy";
import { useLanguage } from "@/lib/language";

const icons = [TrendingUp, BarChart3, DollarSign, TrendingUp];

const InvestorsSection = () => {
  const { language } = useLanguage();
  const cards = getSiteCopy(language).investors;

  return (
    <section id="investors" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {cards.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.label} delay={index * 100}>
                <div className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors duration-300">
                  <Icon className="text-primary mb-3" size={24} />
                  <div className="text-2xl font-bold mb-1">{item.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
