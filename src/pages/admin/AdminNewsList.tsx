import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteArticle, loadNews, resolveTranslation, type AdminNewsArticle } from "@/lib/admin-news-store";
import { useToast } from "@/hooks/use-toast";

const AdminNewsList = () => {
  const [items, setItems] = useState<AdminNewsArticle[]>([]);
  const { toast } = useToast();

  const refresh = () => setItems(loadNews());
  useEffect(() => {
    refresh();
  }, []);

  const handleDelete = (slug: string) => {
    deleteArticle(slug);
    refresh();
    toast({ title: "Deleted", description: "The post has been removed." });
  };

  return (
    <div lang="en">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">News & Press Releases</h1>
          <p className="text-sm text-muted-foreground">
            Manage published posts. Changes are stored locally until the backend is connected.
          </p>
        </div>
        <Button asChild>
          <Link to="/admin/news/new">
            <Plus size={16} /> New post
          </Link>
        </Button>
      </div>

      <div className="rounded-lg border border-border overflow-hidden bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-muted-foreground">
            <tr>
              <th className="text-left font-medium px-4 py-3">Title</th>
              <th className="text-left font-medium px-4 py-3 hidden md:table-cell">Category</th>
              <th className="text-left font-medium px-4 py-3 hidden lg:table-cell">Date</th>
              <th className="text-right font-medium px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-12 text-center text-muted-foreground">
                  No posts yet. Create your first one.
                </td>
              </tr>
            ) : (
              items.map((article) => {
                const enTitle = resolveTranslation(article, "en").title;
                return (
                <tr key={article.slug} className="border-t border-border">
                  <td className="px-4 py-3">
                    <div className="font-medium">{enTitle}</div>
                    <div className="text-xs text-muted-foreground truncate max-w-md">{article.slug}</div>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <Badge variant="secondary">{article.category}</Badge>
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell text-muted-foreground">{article.date}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <Button asChild size="sm" variant="outline">
                        <Link to={`/admin/news/${article.slug}`}>
                          <Pencil size={14} /> Edit
                        </Link>
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button size="sm" variant="outline">
                            <Trash2 size={14} /> Delete
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete this post?</AlertDialogTitle>
                            <AlertDialogDescription>
                              "{enTitle}" will be removed. This cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(article.slug)}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </td>
                </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminNewsList;
