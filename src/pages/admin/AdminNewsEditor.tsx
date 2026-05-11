import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { format, parse, isValid } from "date-fns";
import { ArrowLeft, CalendarIcon, Save } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ADMIN_LANGUAGES,
  categoryOptions,
  emptyArticle,
  getArticleBySlug,
  slugify,
  upsertArticle,
  type AdminNewsArticle,
  type ArticleTranslation,
} from "@/lib/admin-news-store";
import type { NewsCategory } from "@/data/news";
import type { Language } from "@/lib/language";
import { useToast } from "@/hooks/use-toast";

const LANGUAGE_LABELS: Record<Language, string> = {
  en: "English",
  "zh-Hant": "繁體中文",
  "zh-Hans": "简体中文",
};

const AdminNewsEditor = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isNew = !slug || slug === "new";

  const existing = useMemo(() => (isNew ? null : getArticleBySlug(slug!) ?? null), [slug, isNew]);

  const [form, setForm] = useState<AdminNewsArticle>(existing ?? emptyArticle());
  const [bodyText, setBodyText] = useState<Record<Language, string>>(() => {
    const init: Record<Language, string> = { en: "", "zh-Hant": "", "zh-Hans": "" };
    ADMIN_LANGUAGES.forEach((l) => {
      init[l] = (existing?.translations?.[l]?.body ?? []).join("\n\n");
    });
    return init;
  });
  const [slugTouched, setSlugTouched] = useState(!isNew);
  const [activeLang, setActiveLang] = useState<Language>("en");

  useEffect(() => {
    if (!isNew && !existing) {
      toast({ title: "Not found", description: "Post does not exist.", variant: "destructive" });
      navigate("/admin/news", { replace: true });
    }
  }, [isNew, existing, navigate, toast]);

  const update = <K extends keyof AdminNewsArticle>(key: K, value: AdminNewsArticle[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const updateTranslation = (
    lang: Language,
    key: keyof ArticleTranslation,
    value: string,
  ) =>
    setForm((f) => ({
      ...f,
      translations: {
        ...f.translations,
        [lang]: { ...f.translations[lang], [key]: value },
      },
    }));

  const onTitleChange = (lang: Language, val: string) => {
    updateTranslation(lang, "title", val);
    if (lang === "en" && !slugTouched) update("slug", slugify(val));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const enTitle = form.translations.en.title.trim();
    if (!enTitle || !form.slug.trim() || !form.date.trim()) {
      toast({
        title: "Missing fields",
        description: "English title, slug, and date are required.",
        variant: "destructive",
      });
      return;
    }
    const translations = ADMIN_LANGUAGES.reduce((acc, lang) => {
      const t = form.translations[lang];
      acc[lang] = {
        title: t.title.trim(),
        excerpt: t.excerpt.trim(),
        heroQuote: t.heroQuote?.trim() ? t.heroQuote.trim() : undefined,
        body: bodyText[lang]
          .split(/\n\s*\n/)
          .map((p) => p.trim())
          .filter(Boolean),
      };
      return acc;
    }, {} as AdminNewsArticle["translations"]);

    const article: AdminNewsArticle = {
      ...form,
      slug: slugify(form.slug),
      heroImage: form.heroImage?.trim() ? form.heroImage : undefined,
      linkedInUrl: form.linkedInUrl?.trim() ? form.linkedInUrl : undefined,
      youtubeUrl: form.youtubeUrl?.trim() ? form.youtubeUrl : undefined,
      externalUrl: form.externalUrl?.trim() ? form.externalUrl : undefined,
      translations,
    };
    upsertArticle(article);
    toast({ title: isNew ? "Post created" : "Post updated", description: enTitle });
    navigate("/admin/news");
  };

  return (
    <div lang="en" className="max-w-3xl mx-auto">
      <Link
        to="/admin/news"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft size={14} /> Back to all posts
      </Link>

      <h1 className="text-3xl font-bold mb-8">{isNew ? "New post" : "Edit post"}</h1>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              value={form.slug}
              onChange={(e) => {
                setSlugTouched(true);
                update("slug", e.target.value);
              }}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <DatePickerField value={form.date} onChange={(v) => update("date", v)} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={form.category} onValueChange={(v) => update("category", v as NewsCategory)}>
              <SelectTrigger id="category">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categoryOptions.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="readTime">Read time</Label>
            <Input id="readTime" value={form.readTime} onChange={(e) => update("readTime", e.target.value)} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="author">Author</Label>
          <Input id="author" value={form.author} onChange={(e) => update("author", e.target.value)} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="heroImage">Hero image URL (optional)</Label>
          <p className="text-xs text-muted-foreground">
            Shown at the top of the post. Paste an absolute URL (https://...) or a path under /src/assets.
          </p>
          <Input
            id="heroImage"
            value={form.heroImage ?? ""}
            onChange={(e) => update("heroImage", e.target.value)}
            placeholder="https://example.com/cover.jpg"
          />
        </div>

        <div className="space-y-4 rounded-lg border border-border p-4">
          <div>
            <h3 className="text-sm font-semibold">Social & external links (optional)</h3>
            <p className="text-xs text-muted-foreground">Shown as buttons under the article.</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedInUrl">LinkedIn post URL</Label>
            <Input
              id="linkedInUrl"
              value={form.linkedInUrl ?? ""}
              onChange={(e) => update("linkedInUrl", e.target.value)}
              placeholder="https://www.linkedin.com/posts/..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="youtubeUrl">YouTube URL</Label>
            <Input
              id="youtubeUrl"
              value={form.youtubeUrl ?? ""}
              onChange={(e) => update("youtubeUrl", e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="externalUrl">External link</Label>
            <Input
              id="externalUrl"
              value={form.externalUrl ?? ""}
              onChange={(e) => update("externalUrl", e.target.value)}
              placeholder="https://..."
            />
          </div>
        </div>

        <div className="space-y-3 rounded-lg border border-border p-4">
          <div>
            <h3 className="text-sm font-semibold">Content (per language)</h3>
            <p className="text-xs text-muted-foreground">
              English is required. If a language is left blank, the front-end falls back to English.
            </p>
          </div>
          <Tabs value={activeLang} onValueChange={(v) => setActiveLang(v as Language)}>
            <TabsList>
              {ADMIN_LANGUAGES.map((l) => (
                <TabsTrigger key={l} value={l}>
                  {LANGUAGE_LABELS[l]}
                </TabsTrigger>
              ))}
            </TabsList>
            {ADMIN_LANGUAGES.map((l) => (
              <TabsContent key={l} value={l} className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label>Title{l === "en" ? "" : " (optional)"}</Label>
                  <Input
                    value={form.translations[l].title}
                    onChange={(e) => onTitleChange(l, e.target.value)}
                    required={l === "en"}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Excerpt</Label>
                  <Textarea
                    rows={3}
                    value={form.translations[l].excerpt}
                    onChange={(e) => updateTranslation(l, "excerpt", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Hero quote (optional)</Label>
                  <Textarea
                    rows={2}
                    value={form.translations[l].heroQuote ?? ""}
                    onChange={(e) => updateTranslation(l, "heroQuote", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Body</Label>
                  <p className="text-xs text-muted-foreground">Separate paragraphs with a blank line.</p>
                  <Textarea
                    rows={12}
                    value={bodyText[l]}
                    onChange={(e) => setBodyText((b) => ({ ...b, [l]: e.target.value }))}
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="flex justify-end gap-2 pt-4 border-t border-border">
          <Button type="button" variant="outline" onClick={() => navigate("/admin/news")}>
            Cancel
          </Button>
          <Button type="submit">
            <Save size={14} /> {isNew ? "Create post" : "Save changes"}
          </Button>
        </div>
      </form>
    </div>
  );
};

const DATE_FORMAT = "d MMMM yyyy";

const parseStoredDate = (value: string): Date | undefined => {
  if (!value) return undefined;
  const cleaned = value.includes(",") ? value.split(",").slice(-1)[0].trim() : value.trim();
  const candidates = [DATE_FORMAT, "MMMM yyyy", "d MMM yyyy", "yyyy-MM-dd"];
  for (const fmt of candidates) {
    const d = parse(cleaned, fmt, new Date());
    if (isValid(d)) return d;
  }
  const native = new Date(cleaned);
  return isValid(native) ? native : undefined;
};

const DatePickerField = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => {
  const date = parseStoredDate(value);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
        >
          <CalendarIcon size={14} className="mr-2" />
          {date ? format(date, DATE_FORMAT) : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => d && onChange(format(d, DATE_FORMAT))}
          initialFocus
          className={cn("p-3 pointer-events-auto")}
        />
      </PopoverContent>
    </Popover>
  );
};

export default AdminNewsEditor;
