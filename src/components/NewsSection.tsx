import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { getNews } from "@/data/news";
import { getSiteCopy } from "@/data/siteCopy";
import { useLanguage } from "@/lib/language";

const NewsSection = () => {
  const { language } = useLanguage();
  const latest = getNews(language).slice(0, 3);
  const copy = getSiteCopy(language).newsSection;

  return (
    <section id="news" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">{copy.eyebrow}</p>
              <h2 className="text-3xl md:text-5xl font-bold">{copy.title}</h2>
            </div>
            <Link
              to="/news"
              className="text-primary text-sm inline-flex items-center gap-1 hover:gap-2 transition-all mt-4 md:mt-0"
            >
              {copy.viewAll} <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>

        <div className="space-y-0 divide-y divide-border">
          {latest.map((item, index) => (
            <Reveal key={item.slug} delay={index * 120}>
              <Link
                to={`/news/${item.slug}`}
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 hover:px-4 transition-all duration-300"
              >
                <div className="flex-1">
                  <p className="text-xs text-primary uppercase tracking-wider mb-2">
                    {item.date} · {item.categoryLabel}
                  </p>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.excerpt}</p>
                </div>
                <ArrowRight
                  className="text-muted-foreground group-hover:text-primary transition-colors mt-4 md:mt-0 ml-0 md:ml-8 shrink-0"
                  size={20}
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
