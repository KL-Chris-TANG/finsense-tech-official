import Reveal from "@/components/Reveal";
import aboutAiImage from "@/assets/about-ai-hk.jpg";
import { getAboutContent } from "@/data/about";
import { getSiteCopy } from "@/data/siteCopy";
import { useLanguage } from "@/lib/language";

const AboutSection = () => {
  const { language } = useLanguage();
  const aboutContent = getAboutContent(language);
  const copy = getSiteCopy(language).homeAbout;

  return (
    <section id="about" className="bg-card py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <Reveal>
              <p className="text-primary text-sm uppercase tracking-[0.2em]">{copy.eyebrow}</p>
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-6">
                <h2 className="max-w-4xl text-3xl font-bold leading-tight text-foreground md:text-5xl">
                  {copy.title}
                </h2>
                <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                  {copy.description}
                </p>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="grid gap-4 sm:grid-cols-3">
                {aboutContent.capabilityPillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <article key={pillar.title} className="rounded-2xl border border-border/60 bg-background/80 p-5">
                      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground">{pillar.title}</h3>
                    </article>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-background">
              <img
                src={aboutAiImage}
                alt={copy.imageAlt}
                className="h-full min-h-[420px] w-full object-cover"
                loading="lazy"
                width={1920}
                height={1080}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
