import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import aboutAiImage from "@/assets/about-ai-hk.jpg";

import { getAboutContent } from "@/data/about";
import { getSiteCopy } from "@/data/siteCopy";
import { useLanguage } from "@/lib/language";

const AboutPage = () => {
  const { language } = useLanguage();
  const aboutContent = getAboutContent(language);
  const copy = getSiteCopy(language).aboutPage;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="border-b border-border/60 pt-36 pb-20 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8">
              <Reveal>
                <p className="text-primary text-sm uppercase tracking-[0.2em]">{copy.eyebrow}</p>
              </Reveal>
              <Reveal delay={100}>
                <div className="space-y-6">
                  <h1 className="max-w-4xl text-4xl font-bold leading-tight text-foreground md:text-6xl">
                    {copy.title}
                  </h1>
                  <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                    {copy.description}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {aboutContent.companyHighlights.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-border/60 bg-card/60 p-5">
                      <div className="text-2xl font-semibold text-foreground">{item.value}</div>
                      <div className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">{item.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <div className="relative overflow-hidden rounded-[28px] border border-border/60 bg-card">
                <img
                  src={aboutAiImage}
                  alt={copy.aiImageAlt}
                  className="h-full min-h-[420px] w-full object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="max-w-xl space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/85 px-3 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm">
                      <Sparkles className="h-4 w-4 text-primary" />
                      {copy.imageBadge}
                    </div>
                    <p className="text-sm leading-7 text-foreground/90 md:text-base">{copy.imageDescription}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-[28px] border border-border/60 bg-card/50 p-8 md:p-10">
                <p className="text-primary text-sm uppercase tracking-[0.2em]">{copy.vision}</p>
                <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">{aboutContent.missionVision.vision}</p>
              </article>
            </Reveal>
            <Reveal delay={100}>
              <article className="h-full rounded-[28px] border border-border/60 bg-card/50 p-8 md:p-10">
                <p className="text-primary text-sm uppercase tracking-[0.2em]">{copy.mission}</p>
                <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">{aboutContent.missionVision.mission}</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <div className="space-y-5">
                <p className="text-primary text-sm uppercase tracking-[0.2em]">{copy.powerEyebrow}</p>
                <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-5xl">{copy.powerTitle}</h2>
              </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-3">
              {aboutContent.capabilityPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <Reveal key={pillar.title} delay={index * 100}>
                    <article className="h-full rounded-2xl border border-border/60 bg-card p-6">
                      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-10">
            <Reveal>
              <div className="space-y-5">
                <p className="text-primary text-sm uppercase tracking-[0.2em]">{copy.productsEyebrow}</p>
                <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-foreground md:text-5xl">{copy.productsTitle}</h2>
              </div>
            </Reveal>

            <div className="grid gap-4 lg:grid-cols-2">
              {aboutContent.products.map((product, index) => (
                <Reveal key={product.name} delay={index * 120}>
                  <a
                    href={product.href}
                    className="group block rounded-[28px] border border-border/60 bg-card p-7 transition-colors hover:border-primary/40"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-3">
                        <div>
                          <p className="text-2xl font-semibold text-foreground">{product.name}</p>
                          <p className="mt-1 text-sm uppercase tracking-[0.16em] text-primary">{product.strap}</p>
                        </div>
                        <p className="text-sm leading-7 text-muted-foreground">{product.description}</p>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <Reveal>
              <div className="space-y-5">
                <p className="text-primary text-sm uppercase tracking-[0.2em]">{copy.partnersEyebrow}</p>
                <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-5xl">{copy.partnersTitle}</h2>
                <p className="text-base leading-8 text-muted-foreground">{copy.partnersDescription}</p>
              </div>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-2">
              {aboutContent.strategicPartners.map((partner, index) => (
                <Reveal key={partner.name} delay={index * 100}>
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full flex-col justify-between rounded-[28px] border border-border/60 bg-card p-6 transition-colors hover:border-primary/40"
                  >
                    <div className="space-y-5">
                      <div className="flex h-20 items-center justify-start rounded-2xl border border-border/50 bg-white px-5">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="max-h-10 w-auto max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
                          {partner.name}
                          <ExternalLink className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </div>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">{partner.summary}</p>
                      </div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-16 space-y-10">
            <Reveal>
              <div className="space-y-4">
                <p className="text-primary text-sm uppercase tracking-[0.2em]">{copy.acceleratorsEyebrow}</p>
                <h3 className="text-2xl font-semibold leading-tight text-foreground md:text-4xl">{copy.acceleratorsTitle}</h3>
                <p className="max-w-3xl text-base leading-8 text-muted-foreground">{copy.acceleratorsDescription}</p>
              </div>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-2">
              {aboutContent.acceleratorsInvestors.map((item, index) => (
                <Reveal key={item.name} delay={index * 80}>
                  <article className="flex h-full items-center gap-5 rounded-2xl border border-border/60 bg-card p-5">
                    <div className="flex h-28 w-40 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-white px-4">
                      <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        className="max-h-20 w-auto max-w-full object-contain"
                        loading="lazy"
                        width={1024}
                        height={1024}
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-foreground">{item.name}</h4>
                      <p className="mt-1 text-xs leading-6 text-muted-foreground">{item.description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="text-primary text-sm uppercase tracking-[0.2em]">{copy.teamEyebrow}</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground md:text-5xl">{copy.teamTitle}</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-base leading-8 text-muted-foreground">{copy.teamDescription}</p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {aboutContent.managementTeam.map((member, index) => (
              <Reveal key={member.name} delay={120 + index * 100}>
                <article className="group h-full rounded-3xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg md:p-8">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div className="relative shrink-0 overflow-hidden rounded-2xl border border-border/60 bg-muted ring-1 ring-border/40">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="h-36 w-36 object-cover sm:h-40 sm:w-40"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-36 w-36 items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 text-primary sm:h-40 sm:w-40">
                          <Sparkles className="h-8 w-8 opacity-60" />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1 space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground md:text-xl">{member.name}</h3>
                        <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                      </div>
                      <div className="h-px w-12 bg-border" />
                      <p className="text-sm leading-7 text-muted-foreground">{member.bio}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {aboutContent.sampleLeadership.map((item, index) => (
              <Reveal key={item.role} delay={180 + index * 80}>
                <article className="rounded-2xl border border-border/60 bg-card p-5">
                  <h3 className="text-base font-semibold text-foreground">{item.role}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-16">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <p className="text-primary text-sm uppercase tracking-[0.2em]">{copy.businessEyebrow}</p>
                <p className="text-lg text-muted-foreground">{copy.businessDescription}</p>
              </div>
              <Link
                to="/#businesses"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
              >
                {copy.businessCta}
                <ArrowRight className="h-4 w-4 text-primary" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
