import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, ExternalLink, Linkedin, User, Youtube } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getArticle, getNews } from "@/data/news";
import { getSiteCopy } from "@/data/siteCopy";
import { useLanguage } from "@/lib/language";

const NewsArticlePage = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const article = getArticle(language, slug ?? "");
  const copy = getSiteCopy(language).newsArticle;

  if (!article) return <Navigate to="/news" replace />;

  const related = getNews(language).filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-40 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <Reveal>
            <Link to="/news" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft size={16} />
              {copy.back}
            </Link>

            <Badge variant="secondary" className="bg-primary/10 text-primary border-0 mb-4">
              {article.categoryLabel}
            </Badge>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{article.title}</h1>
          </Reveal>

          {article.heroImage && (
            <Reveal delay={50}>
              <div className="mb-8 overflow-hidden rounded-2xl border border-border">
                <img
                  src={article.heroImage}
                  alt={article.title}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          )}

          <Reveal delay={75}>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border pb-6 mb-10">
              <span className="inline-flex items-center gap-2">
                <Calendar size={14} className="text-primary" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <User size={14} className="text-primary" />
                {article.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={14} className="text-primary" />
                {article.readTime}
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-xl text-foreground/90 leading-relaxed mb-10">{article.excerpt}</p>

            {article.heroQuote && (
              <blockquote className="border-l-4 border-primary pl-6 py-2 my-10 italic text-lg text-foreground/80">
                "{article.heroQuote}"
              </blockquote>
            )}

            <div className="space-y-6">
              {article.body.map((paragraph, index) => (
                <p key={index} className="text-foreground/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                {copy.mediaInquiries} <span className="text-foreground">FINSENSE TECHNOLOGY LIMITED</span>
              </p>
              <Button asChild variant="outline">
                <Link to="/news">{copy.allNews}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </article>

      <section className="py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="flex items-end justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">{copy.moreTitle}</h2>
              <Link to="/news" className="text-primary text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                {copy.viewAll} <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 100}>
                <Link
                  to={`/news/${item.slug}`}
                  className="group block h-full p-6 rounded-2xl border border-border bg-background hover:border-primary/40 transition-all"
                >
                  <p className="text-xs text-primary uppercase tracking-wider mb-3">
                    {item.categoryLabel} · {item.date}
                  </p>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsArticlePage;
