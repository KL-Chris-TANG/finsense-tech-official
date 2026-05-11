import { getStaticNews, newsCategories, type NewsArticle, type NewsCategory } from "@/data/news";
import type { Language } from "@/lib/language";

// Local-only news store backed by localStorage. Acts as the source of truth
// for the admin UI AND the public site. Real backend wiring (e.g. Lovable
// Cloud) to come later.

const STORAGE_KEY = "finsense-admin-news-store-v2";
const LEGACY_KEY = "finsense-admin-news-store";

export const ADMIN_LANGUAGES: Language[] = ["en", "zh-Hant", "zh-Hans"];

export type ArticleTranslation = {
  title: string;
  excerpt: string;
  heroQuote?: string;
  body: string[];
};

export type AdminNewsArticle = {
  slug: string;
  category: NewsCategory;
  date: string;
  author: string;
  readTime: string;
  heroImage?: string;
  linkedInUrl?: string;
  youtubeUrl?: string;
  externalUrl?: string;
  translations: Record<Language, ArticleTranslation>;
};

export const emptyTranslation = (): ArticleTranslation => ({
  title: "",
  excerpt: "",
  heroQuote: "",
  body: [],
});

export const emptyArticle = (): AdminNewsArticle => ({
  slug: "",
  category: "Company",
  date: "",
  author: "Finsense Technology",
  readTime: "3 min read",
  heroImage: "",
  linkedInUrl: "",
  youtubeUrl: "",
  externalUrl: "",
  translations: {
    en: emptyTranslation(),
    "zh-Hant": emptyTranslation(),
    "zh-Hans": emptyTranslation(),
  },
});

const buildTranslation = (a: NewsArticle): ArticleTranslation => ({
  title: a.title,
  excerpt: a.excerpt,
  heroQuote: a.heroQuote,
  body: [...a.body],
});

const seed = (): AdminNewsArticle[] => {
  const en = getStaticNews("en");
  const hant = new Map(getStaticNews("zh-Hant").map((a) => [a.slug, a]));
  const hans = new Map(getStaticNews("zh-Hans").map((a) => [a.slug, a]));
  return en.map((a) => ({
    slug: a.slug,
    category: a.category,
    date: a.date,
    author: a.author,
    readTime: a.readTime,
    heroImage: a.heroImage,
    linkedInUrl: a.linkedInUrl,
    youtubeUrl: a.youtubeUrl,
    externalUrl: a.externalUrl,
    translations: {
      en: buildTranslation(a),
      "zh-Hant": buildTranslation(hant.get(a.slug) ?? a),
      "zh-Hans": buildTranslation(hans.get(a.slug) ?? a),
    },
  }));
};

const isBrowser = () => typeof window !== "undefined";

export const loadNews = (): AdminNewsArticle[] => {
  if (!isBrowser()) return seed();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Discard any legacy v1 store; reseed from the bundled data.
      window.localStorage.removeItem(LEGACY_KEY);
      const initial = seed();
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(raw) as AdminNewsArticle[];
  } catch {
    return seed();
  }
};

export const saveNews = (items: AdminNewsArticle[]) => {
  if (!isBrowser()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent("admin-news-updated"));
};

export const upsertArticle = (article: AdminNewsArticle) => {
  const items = loadNews();
  const idx = items.findIndex((a) => a.slug === article.slug);
  if (idx >= 0) items[idx] = article;
  else items.unshift(article);
  saveNews(items);
};

export const deleteArticle = (slug: string) => {
  const items = loadNews().filter((a) => a.slug !== slug);
  saveNews(items);
};

export const getArticleBySlug = (slug: string) => loadNews().find((a) => a.slug === slug);

export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export const categoryOptions: NewsCategory[] = [...newsCategories];

// Resolve a translation for a given language with sensible fallbacks
// (requested language → English → first non-empty translation).
export const resolveTranslation = (
  article: AdminNewsArticle,
  language: Language,
): ArticleTranslation => {
  const order: Language[] = [language, "en", "zh-Hant", "zh-Hans"];
  for (const lang of order) {
    const t = article.translations?.[lang];
    if (t && (t.title?.trim() || t.body?.length)) return t;
  }
  return article.translations?.[language] ?? emptyTranslation();
};
