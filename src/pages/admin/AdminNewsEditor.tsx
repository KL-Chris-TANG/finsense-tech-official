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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  categoryOptions,
  getArticleBySlug,
  slugify,
  upsertArticle,
  type AdminNewsArticle,
} from "@/lib/admin-news-store";
import type { NewsCategory } from "@/data/news";
import { useToast } from "@/hooks/use-toast";

const empty: AdminNewsArticle = {
  slug: "",
  title: "",
  date: "",
  category: "Company",
  excerpt: "",
  author: "Finsense Technology",
  readTime: "3 min read",
  heroQuote: "",
  heroImage: "",
  linkedInUrl: "",
  youtubeUrl: "",
  externalUrl: "",
  body: [],
};

const AdminNewsEditor = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isNew = !slug || slug === "new";

  const existing = useMemo(() => (isNew ? null : getArticleBySlug(slug!) ?? null), [slug, isNew]);

  const [form, setForm] = useState<AdminNewsArticle>(existing ?? empty);
  const [bodyText, setBodyText] = useState((existing?.body ?? []).join("\n\n"));
  const [slugTouched, setSlugTouched] = useState(!isNew);

  useEffect(() => {
    if (!isNew && !existing) {
      toast({ title: "Not found", description: "Post does not exist.", variant: "destructive" });
      navigate("/admin/news", { replace: true });
    }
  }, [isNew, existing, navigate, toast]);

  const update = <K extends keyof AdminNewsArticle>(key: K, value: AdminNewsArticle[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const onTitleChange = (val: string) => {
    update("title", val);
    if (!slugTouched) update("slug", slugify(val));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.slug.trim() || !form.date.trim()) {
      toast({ title: "Missing fields", description: "Title, slug, and date are required.", variant: "destructive" });
      return;
    }
    const article: AdminNewsArticle = {
      ...form,
      slug: slugify(form.slug),
      heroQuote: form.heroQuote?.trim() ? form.heroQuote : undefined,
      heroImage: form.heroImage?.trim() ? form.heroImage : undefined,
      linkedInUrl: form.linkedInUrl?.trim() ? form.linkedInUrl : undefined,
      youtubeUrl: form.youtubeUrl?.trim() ? form.youtubeUrl : undefined,
      externalUrl: form.externalUrl?.trim() ? form.externalUrl : undefined,
      body: bodyText
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean),
    };
    upsertArticle(article);
    toast({ title: isNew ? "Post created" : "Post updated", description: article.title });
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
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" value={form.title} onChange={(e) => onTitleChange(e.target.value)} required />
        </div>

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
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            rows={3}
            value={form.excerpt}
            onChange={(e) => update("excerpt", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="heroQuote">Hero quote (optional)</Label>
          <Textarea
            id="heroQuote"
            rows={2}
            value={form.heroQuote ?? ""}
            onChange={(e) => update("heroQuote", e.target.value)}
          />
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

        <div className="space-y-2">
          <Label htmlFor="body">Body</Label>
          <p className="text-xs text-muted-foreground">Separate paragraphs with a blank line.</p>
          <Textarea
            id="body"
            rows={12}
            value={bodyText}
            onChange={(e) => setBodyText(e.target.value)}
            required
          />
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

export default AdminNewsEditor;
