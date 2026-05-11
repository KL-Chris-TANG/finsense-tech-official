import { getNews, newsCategories, type NewsArticle, type NewsCategory } from "@/data/news";

// Local-only news store backed by localStorage. Acts as the source of truth
// for the admin UI. Real backend wiring (e.g. Lovable Cloud) to come later.

const STORAGE_KEY = "finsense-admin-news-store";

export type AdminNewsArticle = Omit<NewsArticle, "categoryLabel">;

const seed = (): AdminNewsArticle[] =>
  getNews("en").map(({ categoryLabel: _categoryLabel, ...rest }) => rest);

export const loadNews = (): AdminNewsArticle[] => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
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
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
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
