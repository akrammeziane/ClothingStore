import { NavLink, Link } from "react-router-dom";
import { ChevronRight, MessageCircle, ArrowUpRight } from "lucide-react";
import { SUPPORT_LINKS } from "./Supportdata";

// Layout for all Customer Care pages

export default function SupportLayout({
  eyebrow = "Customer care",
  title,
  intro,
  children,
  showHelpCta = true,
}) {
  return (
    <div className="bg-primary text-footer">
      {/* Title block */}
      <section className="border-b border-black/10 bg-hero">
        <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-footer/50"
          >
            <Link to="/" className="transition hover:text-accent">
              Home
            </Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-footer/80" aria-current="page">
              {title}
            </span>
          </nav>

          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.4em] text-accent sm:text-xs">
            {eyebrow}
          </p>
          <h1 className="font-heading text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            {title}
            <span className="text-accent">.</span>
          </h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-footer/70 sm:text-base">
              {intro}
            </p>
          )}
        </div>

        {/* Sub-navigation */}
        <div className="border-t border-black/10 bg-primary">
          <nav
            aria-label="Customer care"
            className="mx-auto flex max-w-[1400px] gap-1 overflow-x-auto px-4 sm:px-6 lg:px-8"
          >
            {SUPPORT_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `shrink-0 border-b-2 px-3 py-4 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors sm:px-4 ${
                    isActive
                      ? "border-accent text-footer"
                      : "border-transparent text-footer/50 hover:text-footer"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {children}
      </div>

      {showHelpCta && <HelpCta />}
    </div>
  );
}

export function HelpCta() {
  return (
    <section className="border-t border-black/10 bg-hero">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/10 bg-primary text-accent">
            <MessageCircle size={20} aria-hidden="true" />
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight">
              Still need help?
            </h2>
            <p className="mt-1 text-sm text-footer/70">
              Our team is happy to help — we usually reply within 24 hours.
            </p>
          </div>
        </div>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 bg-footer px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary transition hover:bg-accent"
        >
          Contact us
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}
