import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { getSiteCopy } from "@/data/siteCopy";
import { useLanguage } from "@/lib/language";

const TermsOfUsePage = () => {
  const { language } = useLanguage();
  const copy = getSiteCopy(language).terms;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-36 pb-20 md:pt-40">
        <div className="container mx-auto max-w-5xl px-6">
          <Reveal>
            <section className="border-b border-border/60 pb-12">
              <p className="text-sm uppercase tracking-[0.2em] text-primary">{copy.eyebrow}</p>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-foreground md:text-6xl">{copy.title}</h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">{copy.description}</p>
              <div className="mt-8 rounded-2xl border border-border/60 bg-card/50 p-5 text-sm leading-7 text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">{copy.ownerLabel}</span> FINSENSE TECHNOLOGY LIMITED
                </p>
                <p>
                  <span className="font-medium text-foreground">{copy.effectiveDateLabel}</span> {copy.effectiveDate}
                </p>
                <p>{copy.note}</p>
              </div>
            </section>
          </Reveal>

          <div className="mt-12 space-y-6">
            {copy.sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 50}>
                <section className="rounded-[24px] border border-border/60 bg-card/40 p-6 md:p-8">
                  <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-sm leading-8 text-muted-foreground md:text-base">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUsePage;
