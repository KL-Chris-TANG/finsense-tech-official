import roadTrustImg from "@/assets/business-roadtrust-editorial.jpg";
import cruxEsgImg from "@/assets/business-crux-esg-editorial.jpg";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/language";
import { getSiteCopy } from "@/data/siteCopy";

const businesses = {
  en: [
    {
      title: "RoadTrust",
      description: "AI-powered mobile telematics and insurance intelligence built to reward safer driving and modernise motor risk assessment.",
      image: roadTrustImg,
      href: "/solutions/roadtrust",
    },
    {
      title: "Crux ESG",
      description: "AI-powered ESG reporting software that helps SMEs collect data, analyse performance, and generate compliant outputs with less effort.",
      image: cruxEsgImg,
      href: "/solutions/crux-esg",
    },
  ],
  "zh-Hant": [
    {
      title: "RoadTrust",
      description: "以 AI 驅動的流動車聯網與保險智能，鼓勵更安全駕駛並革新汽車風險評估。",
      image: roadTrustImg,
      href: "/solutions/roadtrust",
    },
    {
      title: "Crux ESG",
      description: "AI 驅動的 ESG 匯報軟件，協助中小企更高效地收集數據、分析表現並生成合規輸出。",
      image: cruxEsgImg,
      href: "/solutions/crux-esg",
    },
  ],
  "zh-Hans": [
    {
      title: "RoadTrust",
      description: "以 AI 驱动的移动车联网与保险智能，鼓励更安全驾驶并革新汽车风险评估。",
      image: roadTrustImg,
      href: "/solutions/roadtrust",
    },
    {
      title: "Crux ESG",
      description: "AI 驱动的 ESG 报告软件，协助中小企业更高效地收集数据、分析表现并生成合规输出。",
      image: cruxEsgImg,
      href: "/solutions/crux-esg",
    },
  ],
} as const;

const BusinessesSection = () => {
  const { language } = useLanguage();
  const copy = getSiteCopy(language).businesses;

  return (
    <section id="businesses" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">{copy.eyebrow}</p>
            <h2 className="text-3xl md:text-5xl font-bold">{copy.title}</h2>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {businesses[language].map((business, index) => (
            <Reveal
              key={business.title}
              delay={index * 150}
              className="group relative mx-auto w-full max-w-[360px] overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:glow"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={business.image}
                  alt={business.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-bold">{business.title}</h3>
                <p className="mb-5 text-sm leading-7 text-muted-foreground">{business.description}</p>
                <Link
                  to={business.href}
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  {copy.learnMore} <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessesSection;
