import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import { LogOut, Newspaper, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAdminAuth } from "@/lib/admin-auth";

const AdminLayout = () => {
  const { isAuthenticated, email, logout } = useAdminAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return (
    <div lang="en" className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/60 backdrop-blur sticky top-0 z-30">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/admin/news" className="flex items-center gap-2 font-bold">
              <ShieldCheck className="text-primary" size={20} />
              <span>Admin Console</span>
            </Link>
            <nav className="flex items-center gap-1">
              <Link
                to="/admin/news"
                className="px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent inline-flex items-center gap-1.5"
              >
                <Newspaper size={14} /> News
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs text-muted-foreground">{email}</span>
            <Button variant="outline" size="sm" onClick={logout}>
              <LogOut size={14} /> Sign out
            </Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
