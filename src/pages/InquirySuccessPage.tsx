import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { getSiteCopy } from "@/data/siteCopy";
import { useLanguage } from "@/lib/language";

type InquirySuccessState = {
  name?: string;
};

const InquirySuccessPage = () => {
  const location = useLocation();
  const state = (location.state as InquirySuccessState | null) ?? null;
  const { language } = useLanguage();
  const copy = getSiteCopy(language).inquirySuccess;
  const contactName = state?.name?.trim() || copy.fallbackName;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-36 pb-20 md:pt-40">
        <div className="container mx-auto max-w-4xl px-6">
          <Reveal>
            <section className="overflow-hidden rounded-[28px] border border-border/60 bg-card/50 p-8 md:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary">{copy.eyebrow}</p>
                <h1 className="mt-4 text-3xl font-bold text-foreground md:text-5xl">
                  {copy.titlePrefix} {contactName}.
                </h1>
                <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">{copy.description}</p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    {copy.backHome}
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
                  >
                    {copy.learnMore}
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </Link>
                </div>
              </div>
            </section>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InquirySuccessPage;
