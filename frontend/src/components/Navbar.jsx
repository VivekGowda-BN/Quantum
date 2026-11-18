import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../lib/utils";
import AtomLogo from "./AtomLogo";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Books" },
  { to: "/updates", label: "News" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const overHero = !scrolled;

  return (
    <header
      data-testid="site-navbar"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        overHero
          ? "bg-transparent border-b border-transparent"
          : "bg-background/95 text-foreground border-b border-border backdrop-blur-xl"
      )}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-12 md:h-14 flex items-center justify-between">
        <Link
          to="/"
          data-testid="nav-logo"
          className="flex items-center gap-2.5"
          aria-label="Quantum"
        >
          <AtomLogo
            className={cn(
              "h-6 w-6 md:h-7 md:w-7",
              overHero ? "text-white" : "text-foreground"
            )}
          />
          <span
            className={cn(
              "text-[0.8rem] md:text-[0.88rem] uppercase tracking-[0.26em] font-semibold leading-none",
              overHero ? "text-white" : "text-foreground"
            )}
          >
            Quantum
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              data-testid={`nav-link-${item.label.toLowerCase()}`}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.16em] transition-colors",
                  overHero
                    ? isActive
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                    : isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            data-testid="theme-toggle-btn"
            onClick={toggle}
            aria-label="Toggle theme"
            className={cn(
              "h-8 w-8 grid place-items-center border rounded-md transition-colors",
              overHero
                ? "border-white/40 text-white hover:border-white hover:bg-white/10"
                : "border-border text-foreground hover:bg-secondary"
            )}
          >
            {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>
          <button
            data-testid="mobile-menu-toggle"
            className={cn(
              "md:hidden h-8 w-8 grid place-items-center border rounded-md",
              overHero ? "border-white/40 text-white" : "border-border text-foreground"
            )}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>

      {open && (
        <div data-testid="mobile-menu" className="md:hidden border-t border-border bg-background">
          <nav className="px-5 py-3 flex flex-col">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                className={({ isActive }) =>
                  cn(
                    "py-2.5 text-xs uppercase tracking-[0.18em] font-medium",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
