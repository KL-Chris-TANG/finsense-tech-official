import { Link } from "react-router-dom";
import { Linkedin, Youtube, Instagram } from "lucide-react";

const XIcon = ({ size = 16, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
import { getSolutions } from "@/data/solutions";
import { getSiteCopy } from "@/data/siteCopy";
import logoHorizontal from "@/assets/brand/logo-horizontal.png";
import logoHorizontalDark from "@/assets/brand/logo-horizontal-dark.png";
import { useTheme } from "@/components/theme-provider";
import { useLanguage } from "@/lib/language";

const Footer = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const copy = getSiteCopy(language).footer;
  const solutions = getSolutions(language);

  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/finsense-technology", Icon: Linkedin },
    { label: "X", href: "https://x.com/", Icon: XIcon },
    { label: "YouTube", href: "https://www.youtube.com/@FinSenseTechnology", Icon: Youtube },
    { label: "Instagram", href: "https://www.instagram.com/", Icon: Instagram },
  ];

  const columns = [
    {
      title: copy.company,
      links: [
        { label: copy.home, to: "/" },
        { label: copy.about, to: "/about" },
        { label: copy.latestNews, to: "/news" },
      ],
    },
    {
      title: copy.solutions,
      links: solutions.map((solution) => ({
        label: solution.name,
        to: `/solutions/${solution.slug}`,
      })),
    },
    {
      title: copy.contact,
      links: [{ label: copy.inquiryForm, to: "/inquiry" }],
    },
  ];

  return (
    <footer id="contact" className="pt-20 pb-10 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-[1.2fr_repeat(3,minmax(0,0.72fr))] mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="mb-4 inline-flex items-center" aria-label="Finsense Technology home">
              <img
                src={theme === "dark" ? logoHorizontalDark : logoHorizontal}
                alt="Finsense Technology"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">{copy.tagline}</p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">{copy.followUs}</p>
              <div className="flex gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-full border border-border bg-background/50 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1">
            {columns.slice(0, 2).map((column) => (
              <div key={column.title} className="max-w-[180px]">
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {columns.slice(2).map((column) => (
            <div key={column.title} className="max-w-[180px]">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 mb-8">
          <div className="max-w-4xl space-y-3 text-xs leading-relaxed text-muted-foreground">
            <p>{copy.regulatory1}</p>
            <p>
              {copy.regulatory2Lead}{" "}
              <Link to="/terms-of-use" className="font-medium text-foreground transition-colors hover:text-primary">
                {copy.regulatory2Link}
              </Link>{" "}
              {copy.regulatory2Tail}
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex items-center justify-center">
          <p className="text-[10px] sm:text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} FINSENSE TECHNOLOGY LIMITED. {copy.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
