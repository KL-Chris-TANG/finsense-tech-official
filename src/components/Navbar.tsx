import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, LogIn, Languages } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { getSolutions } from "@/data/solutions";
import { getSiteCopy } from "@/data/siteCopy";
import logoHorizontal from "@/assets/brand/navbar-light-logo.png";
import logoHorizontalDark from "@/assets/brand/navbar-dark-logo.png";
import logoMark from "@/assets/brand/logo-mark.png";
import logoMarkDark from "@/assets/brand/logo-mark-dark.png";
import { useTheme } from "@/components/theme-provider";

import { languageOptions, useLanguage, type Language } from "@/lib/language";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const { theme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const isCruxEsgPage = location.pathname === "/solutions/crux-esg";
  const cruxLoginUrl = "https://crux.finsense.tech";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copy = getSiteCopy(language).navbar;
  const solutions = getSolutions(language);
  const links = [
    { label: copy.about, href: "/about" },
    { label: copy.news, href: "/news" },
    { label: copy.contact, href: "/inquiry" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-500">
      <nav
        className={`relative w-full max-w-5xl rounded-2xl border px-4 py-3 sm:px-6 transition-all duration-500 ${
          scrolled || mobileOpen
            ? "border-white/20 bg-background/40 shadow-2xl shadow-primary/10 ring-1 ring-white/10 dark:border-white/10 dark:bg-background/30"
            : theme === "dark"
              ? "border-transparent bg-transparent shadow-none"
              : "border-border/40 bg-background shadow-none"
        }`}
        style={
          scrolled || mobileOpen
            ? {
                backdropFilter: "blur(28px) saturate(180%)",
                WebkitBackdropFilter: "blur(28px) saturate(180%)",
              }
            : undefined
        }
      >
        {(scrolled || mobileOpen) && (
          <>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 via-white/5 to-transparent dark:from-white/10 dark:via-white/[0.02]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/20"
            />
          </>
        )}
        <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/" className="flex items-center" aria-label={copy.homeLabel}>
              <img
                src={theme === "dark" ? logoHorizontalDark : logoHorizontal}
                alt="Finsense Technology"
                className="hidden h-[1.6rem] w-auto min-[640px]:block"
              />
              <img
                src={theme === "dark" ? logoMarkDark : logoMark}
                alt="Finsense Technology"
                className="block h-[1.6rem] w-[1.6rem] object-contain min-[640px]:hidden"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => {
                setSolutionsOpen(true);
                setLanguageOpen(false);
              }}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide uppercase"
                onClick={() => {
                  setSolutionsOpen((open) => !open);
                  setLanguageOpen(false);
                }}
                aria-expanded={solutionsOpen}
              >
                {copy.solutions}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${solutionsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full left-1/2 w-[640px] -translate-x-1/2 pt-4">
                  <div
                    className="grid grid-cols-2 gap-1 rounded-2xl border border-border/40 bg-background/95 p-4 shadow-2xl shadow-primary/10 backdrop-blur-2xl"
                    style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
                  >
                    {solutions.map((solution) => {
                      const Icon = solution.icon;
                      return (
                        <Link
                          key={solution.slug}
                          to={`/solutions/${solution.slug}`}
                          onClick={() => setSolutionsOpen(false)}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-card/60"
                        >
                          <div className="mt-0.5 rounded-lg bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary/20">
                            <Icon size={18} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                              {solution.name}
                              <ArrowRight
                                size={12}
                                className="-translate-x-1 opacity-0 transition-all text-primary group-hover:translate-x-0 group-hover:opacity-100"
                              />
                            </div>
                            <div className="mt-0.5 text-xs leading-snug text-muted-foreground">
                              {solution.tagline}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => {
                setLanguageOpen(true);
                setSolutionsOpen(false);
              }}
              onMouseLeave={() => setLanguageOpen(false)}
            >
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/40 bg-transparent text-muted-foreground transition-colors duration-300 hover:border-border/60 hover:text-foreground"
                onClick={() => {
                  setLanguageOpen((open) => !open);
                  setSolutionsOpen(false);
                }}
                aria-expanded={languageOpen}
                aria-label={copy.language}
                title={copy.language}
              >
                <Languages size={16} />
              </button>

              {languageOpen && (
                <div className="absolute top-full right-0 pt-4">
                  <div
                    className="flex min-w-[140px] flex-col gap-1 rounded-2xl border border-border/40 bg-background/95 p-2 shadow-2xl shadow-primary/10 backdrop-blur-2xl"
                    style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
                  >
                    {languageOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setLanguage(option.value as Language);
                          setLanguageOpen(false);
                        }}
                        className="group flex items-center justify-between gap-2 rounded-xl px-3 py-2 text-left text-sm font-semibold text-foreground transition-all hover:bg-card/60"
                      >
                        <span>{option.label[language]}</span>
                        <ArrowRight
                          size={12}
                          className="-translate-x-1 opacity-0 transition-all text-primary group-hover:translate-x-0 group-hover:opacity-100"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {isCruxEsgPage && (
              <a
                href={cruxLoginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:opacity-90 hover:shadow-primary/30"
              >
                <LogIn size={14} />
                {copy.login}
                <ArrowRight size={14} className="-translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </a>
            )}
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <div className="relative">
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/40 bg-transparent text-muted-foreground transition-colors duration-300 hover:border-border/60 hover:text-foreground"
                onClick={() => setLanguageOpen((open) => !open)}
                aria-expanded={languageOpen}
                aria-label={copy.language}
                title={copy.language}
              >
                <Languages size={16} />
              </button>

              {languageOpen && (
                <div className="absolute top-full right-0 pt-4 z-50">
                  <div
                    className="flex min-w-[140px] flex-col gap-1 rounded-2xl border border-border/40 bg-background/95 p-2 shadow-2xl shadow-primary/10 backdrop-blur-2xl"
                    style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
                  >
                    {languageOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setLanguage(option.value as Language);
                          setLanguageOpen(false);
                        }}
                        className="group flex items-center justify-between gap-2 rounded-xl px-3 py-2 text-left text-sm font-semibold text-foreground transition-all hover:bg-card/60"
                      >
                        <span>{option.label[language]}</span>
                        <ArrowRight
                          size={12}
                          className="-translate-x-1 opacity-0 transition-all text-primary group-hover:translate-x-0 group-hover:opacity-100"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button className="text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mt-4 border-t border-border/40 pt-4 lg:hidden">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setMobileSolutionsOpen((open) => !open)}
                className="flex items-center justify-between text-sm text-foreground uppercase tracking-wide"
              >
                {copy.solutions}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileSolutionsOpen && (
                <div className="flex flex-col gap-1 border-l border-border/40 pl-3">
                  {solutions.map((solution) => {
                    const Icon = solution.icon;
                    return (
                      <Link
                        key={solution.slug}
                        to={`/solutions/${solution.slug}`}
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileSolutionsOpen(false);
                        }}
                        className="flex items-center gap-2 py-2 text-sm text-foreground"
                      >
                        <Icon size={14} className="text-primary" />
                        {solution.name}
                      </Link>
                    );
                  })}
                </div>
              )}
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-foreground transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
              {isCruxEsgPage && (
                <a
                  href={cruxLoginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:opacity-90"
                >
                  <LogIn size={14} />
                  {copy.login}
                </a>
              )}
            </div>
          </div>
        )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
