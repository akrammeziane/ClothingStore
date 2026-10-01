import { useMemo, useState } from "react";
import { Search, Plus, SearchX } from "lucide-react";
import Supportlayout from "./Supportlayout";
import { FAQS, FAQ_CATEGORIES } from "./Supportdata";

function AccordionItem({ id, q, a, open, onToggle }) {
  return (
    <div className="border-b border-black/10">
      <h3>
        <button
          type="button"
          id={`${id}-btn`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="group flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span
            className={`text-sm font-bold sm:text-base ${
              open ? "text-accent" : "text-footer group-hover:text-accent"
            } transition-colors`}
          >
            {q}
          </span>
          <Plus
            size={18}
            aria-hidden="true"
            className={`shrink-0 text-footer/60 transition-transform duration-300 ${
              open ? "rotate-45 text-accent" : ""
            }`}
          />
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl pb-6 text-sm leading-relaxed text-footer/70">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return FAQS.map((item, i) => ({ ...item, id: `faq-${i}` })).filter(
      (item) =>
        (category === "All" || item.category === category) &&
        (!term ||
          item.q.toLowerCase().includes(term) ||
          item.a.toLowerCase().includes(term)),
    );
  }, [category, query]);

  return (
    <Supportlayout
      title="FAQ"
      intro="Quick answers to the questions we hear most. Can't find yours? Just reach out."
    >
      {/* Search */}
      <div className="relative max-w-xl">
        <label htmlFor="faq-search" className="sr-only">
          Search questions
        </label>
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-footer/40"
          aria-hidden="true"
        />
        <input
          id="faq-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions…"
          className="w-full border border-black/10 bg-primary py-3.5 pl-11 pr-4 text-sm text-footer outline-none transition-colors placeholder:text-footer/40 focus:border-footer"
        />
      </div>

      {/* Category filter */}
      <div
        role="group"
        aria-label="Filter by topic"
        className="mt-6 flex flex-wrap gap-2"
      >
        {["All", ...FAQ_CATEGORIES].map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={category === cat}
            onClick={() => setCategory(cat)}
            className={`cursor-pointer border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${
              category === cat
                ? "border-footer bg-footer text-primary"
                : "border-black/10 bg-primary text-footer/70 hover:border-footer hover:text-footer"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="mt-10 max-w-4xl border-t border-black/10">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <AccordionItem
              key={item.id}
              {...item}
              open={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))
        ) : (
          <div className="flex flex-col items-center py-16 text-center">
            <SearchX
              className="mb-3 h-8 w-8 text-footer/30"
              aria-hidden="true"
            />
            <p className="text-sm font-bold uppercase tracking-wider">
              No matching questions
            </p>
            <p className="mt-1 text-xs text-footer/60">
              Try different keywords or browse all topics.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="mt-5 cursor-pointer border border-footer px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] transition hover:bg-footer hover:text-primary"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </Supportlayout>
  );
}
