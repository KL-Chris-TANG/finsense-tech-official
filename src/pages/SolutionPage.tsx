import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, LogIn } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getSolution, getSolutions } from "@/data/solutions";
import { getSiteCopy } from "@/data/siteCopy";
import { useLanguage } from "@/lib/language";

const SolutionPage = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const solution = getSolution(language, slug ?? "");
  const solutions = getSolutions(language);
  const copy = getSiteCopy(language).solutionPage;

  if (!solution) return <Navigate to="/" replace />;

  const Icon = solution.icon;
  const headlineWords = solution.heroHeadline.split(" ");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-40 pb-24 overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-primary)", filter: "blur(120px)" }} />
        <div className="relative container mx-auto px-6">
          <Link to="/#businesses" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
            ← {copy.allSolutions}
          </Link>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_32rem]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-border/60 bg-card/40 backdrop-blur-xl">
                <Icon className="text-primary" size={18} />
                <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{solution.name}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {headlineWords.slice(0, -2).join(" ")} <span className="text-gradient">{headlineWords.slice(-2).join(" ")}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">{solution.heroSubcopy}</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground border-0 hover:opacity-90">
                  <Link to={`/inquiry?type=${encodeURIComponent(solution.name)}`}>
                    {copy.talkToSales} <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
                {solution.slug !== "crux-esg" && (
                  <Button size="lg" variant="outline" className="border-border/60 bg-card/40 backdrop-blur-xl">
                    {copy.readDocs}
                  </Button>
                )}
                {solution.slug === "crux-esg" && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="group border-primary/60 bg-background/40 text-foreground backdrop-blur-xl hover:border-primary hover:bg-primary/10 hover:text-foreground"
                  >
                    <a href="https://crux.finsense.tech" target="_blank" rel="noopener noreferrer">
                      <LogIn className="mr-2 text-primary" size={16} />
                      {getSiteCopy(language).navbar.login}
                      <ArrowRight className="ml-2 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" size={16} />
                    </a>
                  </Button>
                )}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-border/60 bg-card/40 backdrop-blur-xl shadow-2xl shadow-primary/10">
              <img src={solution.image} alt={solution.name} width={1920} height={1080} className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {solution.benefits.map((benefit) => (
              <div key={benefit.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{benefit.metric}</div>
                <div className="text-sm uppercase tracking-wide text-muted-foreground">{benefit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">{copy.capabilities}</p>
            <h2 className="text-3xl md:text-5xl font-bold">{copy.capabilitiesTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.features.map((feature) => (
              <Card key={feature.title} className="bg-card/40 backdrop-blur-xl border-border/60 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Sparkles className="text-primary mb-3" size={22} />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">{copy.useCases}</p>
            <h2 className="text-3xl md:text-5xl font-bold">{copy.useCasesTitle}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {solution.useCases.map((useCase, index) => (
              <div key={useCase.title} className="relative p-8 rounded-2xl border border-border/60 bg-background/40 backdrop-blur-xl">
                <div className="text-5xl font-bold text-gradient mb-4">0{index + 1}</div>
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">{copy.integrations}</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">{copy.integrationsTitle}</h3>
            <div className="flex flex-wrap gap-3">
              {solution.integrations.map((integration) => (
                <Badge key={integration} variant="outline" className="border-border/60 bg-card/40 backdrop-blur-xl px-4 py-2 text-sm">
                  {integration}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">{copy.compliance}</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">{copy.complianceTitle}</h3>
            <ul className="space-y-3">
              {solution.compliance.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <ShieldCheck className="text-primary" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">{copy.pricing}</p>
            <h2 className="text-3xl md:text-5xl font-bold">{copy.pricingTitle}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {solution.pricing.map((price, index) => (
              <Card key={price.tier} className={`bg-card/40 backdrop-blur-xl border-border/60 ${index === 1 ? "border-primary/60 glow" : ""}`}>
                <CardHeader>
                  <CardTitle className="text-lg uppercase tracking-wide text-muted-foreground">{price.tier}</CardTitle>
                  <div className="text-3xl font-bold text-gradient pt-2">{price.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {price.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={16} />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">{copy.faq}</p>
            <h2 className="text-3xl md:text-5xl font-bold">{copy.faqTitle}</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {solution.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/60">
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 p-12 md:p-16 text-center" style={{ background: "var(--gradient-primary)" }}>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">{copy.ctaTitlePrefix} {solution.name}?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">{copy.ctaDescriptionPrefix} {solution.name.toLowerCase()} {copy.ctaDescriptionSuffix}</p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to={`/inquiry?type=${encodeURIComponent(`${solution.name} — Book a Demo`)}`}>
                {copy.bookDemo} <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>

          <div className="mt-20">
            <p className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground mb-8">{copy.exploreMore}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {solutions
                .filter((item) => item.slug !== solution.slug)
                .slice(0, 3)
                .map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <Link key={item.slug} to={`/solutions/${item.slug}`} className="group flex items-center gap-4 p-5 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-xl hover:border-primary/40 transition-all">
                      <ItemIcon className="text-primary shrink-0" size={22} />
                      <div className="flex-1">
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.tagline}</div>
                      </div>
                      <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionPage;
