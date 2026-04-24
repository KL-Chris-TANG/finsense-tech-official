import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { getNews, newsCategories, type NewsCategory, type NewsArticle } from "@/data/news";
import { getSiteCopy } from "@/data/siteCopy";
import { useLanguage } from "@/lib/language";

const NewsPage = () => {
  const { language } = useLanguage();
  const pageCopy = getSiteCopy(language).newsPage;
  const news = getNews(language);
  
  const categories = ["All", ...newsCategories] as const;
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    return news.filter((article) => {
      const matchesCategory = category === "All" || article.category === (category as NewsCategory);
      const normalizedQuery = query.trim().toLowerCase();
      const matchesQuery =
        !normalizedQuery ||
        article.title.toLowerCase().includes(normalizedQuery) ||
        article.excerpt.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, news, query]);

  const featured: NewsArticle = news[0];
  const rest = filtered.filter((article) => article.slug !== featured.slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-20 border-b border-border">
        <div className="container mx-auto px-6">
          <Reveal>
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">{pageCopy.eyebrow}</p>
            <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
              <span className="text-gradient">{pageCopy.titlePrefix}</span> {pageCopy.titleSuffix}
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg">{pageCopy.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <Reveal>
            <Link
              to={`/news/${featured.slug}`}
              className="group block rounded-2xl border border-border p-8 md:p-12 bg-card hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                  {pageCopy.featured}
                </Badge>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {featured.categoryLabel} · {featured.date}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 group-hover:text-primary transition-colors max-w-3xl">
                {featured.title}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mb-6">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-primary font-medium">
                {pageCopy.readArticle}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`px-4 py-2 rounded-full text-sm transition-all border ${
                      category === item
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-primary/40"
                    }`}
                  >
                    {item === "All" ? pageCopy.categories.All : pageCopy.categories[item]}
                  </button>
                ))}
              </div>
              <div className="relative md:w-72">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={pageCopy.searchPlaceholder} className="pl-9" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6">
          {rest.length === 0 ? (
            <p className="text-muted-foreground text-center py-20">{pageCopy.empty}</p>
          ) : (
            <div className="divide-y divide-border">
              {rest.map((item, index) => (
                <Reveal key={item.slug} delay={index * 80}>
                  <Link
                    to={`/news/${item.slug}`}
                    className="group flex flex-col md:flex-row md:items-center justify-between py-8 hover:px-4 transition-all duration-300"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs text-primary uppercase tracking-wider">{item.date}</span>
                        <span className="text-xs text-muted-foreground">·</span>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.categoryLabel}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground max-w-2xl">{item.excerpt}</p>
                    </div>
                    <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors mt-4 md:mt-0 ml-0 md:ml-8 shrink-0" size={20} />
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default NewsPage;
