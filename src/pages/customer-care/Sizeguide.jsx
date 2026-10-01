import { useState } from "react";
import { Link } from "react-router-dom";
import { Ruler, Shirt, MoveVertical, Info } from "lucide-react";
import Supportlayout from "./Supportlayout";
import { SIZE_CHARTS } from "./Supportdata";

const CM_TO_IN = 0.3937;
const fmt = (cm, unit) => (unit === "cm" ? cm : (cm * CM_TO_IN).toFixed(1));

function Segmented({ options, value, onChange, label }) {
  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex border border-black/10"
    >
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={value === o.value}
          onClick={() => onChange(o.value)}
          className={`cursor-pointer px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${
            value === o.value
              ? "bg-footer text-primary"
              : "bg-primary text-footer/70 hover:text-footer"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

const MEASURE_STEPS = [
  {
    icon: Shirt,
    title: "Chest",
    text: "Lay a favourite piece flat and measure straight across, from armpit to armpit.",
  },
  {
    icon: MoveVertical,
    title: "Length",
    text: "Measure from the highest point of the shoulder down to the bottom hem.",
  },
  {
    icon: Ruler,
    title: "Waist & inseam",
    text: "For pants, measure the waistband across and the inseam from crotch to hem.",
  },
];

export default function SizeGuide() {
  const [tab, setTab] = useState("tops");
  const [unit, setUnit] = useState("cm");
  const chart = SIZE_CHARTS[tab];

  return (
    <Supportlayout
      title="Size Guide"
      intro="Talqin is cut for modest, relaxed silhouettes — longer lengths and generous coverage. Use the garment measurements below to find your fit."
    >
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Segmented
          label="Garment type"
          value={tab}
          onChange={setTab}
          options={Object.entries(SIZE_CHARTS).map(([value, c]) => ({
            value,
            label: c.label,
          }))}
        />
        <Segmented
          label="Unit"
          value={unit}
          onChange={setUnit}
          options={[
            { value: "cm", label: "cm" },
            { value: "in", label: "inches" },
          ]}
        />
      </div>

      {/* Chart */}
      <div className="mt-6 overflow-x-auto border border-black/10 bg-white">
        <table className="w-full min-w-[560px] text-left text-sm">
          <caption className="sr-only">
            {chart.label} garment measurements in{" "}
            {unit === "cm" ? "centimetres" : "inches"}
          </caption>
          <thead>
            <tr className="border-b border-black/10 bg-hero">
              <th
                scope="col"
                className="px-5 py-4 text-[11px] font-bold uppercase tracking-[0.15em]"
              >
                Size
              </th>
              {chart.columns.map((c) => (
                <th
                  key={c}
                  scope="col"
                  className="px-5 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-footer/70"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5">
            {chart.rows.map((row) => (
              <tr key={row.size} className="transition-colors hover:bg-hero/60">
                <th
                  scope="row"
                  className="px-5 py-4 font-heading text-lg font-black"
                >
                  {row.size}
                </th>
                {row.values.map((v, i) => (
                  <td key={i} className="px-5 py-4 tabular-nums text-footer/80">
                    {fmt(v, unit)}
                    <span className="ml-1 text-[10px] uppercase text-footer/40">
                      {unit}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 flex items-start gap-2 text-xs text-footer/60">
        <Info
          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
          aria-hidden="true"
        />
        Measurements are taken from the garment laid flat and may vary by ±1–2
        cm.
      </p>

      {/* How to measure + fit */}
      <div className="mt-16 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <section>
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight">
            How to measure
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {MEASURE_STEPS.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="border border-black/10 bg-white p-5">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-hero text-accent">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <span className="font-heading text-2xl font-black text-footer/15">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-xs font-bold uppercase tracking-[0.15em]">
                  {title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-footer/65">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <aside className="border border-black/10 bg-footer p-6 text-primary sm:p-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-primary/60">
            Fit advice
          </p>
          <h2 className="mt-2 font-heading text-2xl font-black uppercase tracking-tight">
            Between two sizes?
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-primary/75">
            <li className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary"
                aria-hidden="true"
              />
              Take your usual size for the intended oversized, covered look.
            </li>
            <li className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary"
                aria-hidden="true"
              />
              Size down for a cleaner, closer fit.
            </li>
            <li className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary"
                aria-hidden="true"
              />
              Not sure? Exchanges are easy within 30 days.
            </li>
          </ul>
          <Link
            to="/shop"
            className="mt-7 inline-flex bg-primary px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-footer transition hover:opacity-85"
          >
            Shop now
          </Link>
        </aside>
      </div>
    </Supportlayout>
  );
}
