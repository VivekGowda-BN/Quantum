import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import AtomLogo from "./AtomLogo";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="mt-24 bg-[#0a0a0a] text-white/65 dark:bg-[#171a1f]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <AtomLogo className="h-7 w-7 text-white" />
              <span className="text-sm uppercase tracking-[0.26em] font-semibold text-white">
                Quantum
              </span>
            </div>
            <div className="mt-6 text-2xl leading-snug text-white">
              Theoretical Physics &amp; Quantum Computing Club
            </div>
            <p className="mt-4 text-sm leading-relaxed max-w-sm">
              A student-run club at RV University, Bengaluru — reading, building
              and teaching quantum physics.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-eyebrow text-white/40 mb-4">Pages</div>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/resources", label: "Books" },
                { to: "/updates", label: "News" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    data-testid={`footer-link-${l.label.toLowerCase()}`}
                    className="inline-flex items-center gap-1 hover:text-white transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-eyebrow text-white/40 mb-4">Contact</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  RV University, Mysuru Road,
                  <br /> Bengaluru — 560059
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href="mailto:quantum@rvu.edu.in"
                  data-testid="footer-email"
                  className="hover:text-white transition-colors"
                >
                  quantum@rvu.edu.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="text-xs text-white/40">
            © {new Date().getFullYear()} Quantum · RV University
          </div>
          <div className="text-xs text-white/40">Bengaluru, India</div>
        </div>
      </div>
    </footer>
  );
}
