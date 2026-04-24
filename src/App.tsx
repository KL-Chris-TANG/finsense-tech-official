import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/language";
import RouteTransitionManager from "@/components/RouteTransitionManager";
import Index from "./pages/Index.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import InquiryPage from "./pages/InquiryPage.tsx";
import InquirySuccessPage from "./pages/InquirySuccessPage.tsx";
import TermsOfUsePage from "./pages/TermsOfUsePage.tsx";
import SolutionPage from "./pages/SolutionPage.tsx";
import NewsPage from "./pages/NewsPage.tsx";
import NewsArticlePage from "./pages/NewsArticlePage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <RouteTransitionManager>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/inquiry" element={<InquiryPage />} />
                <Route path="/inquiry/sent" element={<InquirySuccessPage />} />
                <Route path="/terms-of-use" element={<TermsOfUsePage />} />
                <Route path="/solutions/:slug" element={<SolutionPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/news/:slug" element={<NewsArticlePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </RouteTransitionManager>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
