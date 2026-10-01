import { Link } from "react-router-dom";
import {
  CalendarCheck,
  Mail,
  PackageOpen,
  Wallet,
  Check,
  X,
} from "lucide-react";
import Supportlayout from "./Supportlayout";

const STEPS = [
  {
    icon: Mail,
    title: "Contact us",
    text: "Within 30 days of delivery, send us your order number and the reason for your return.",
  },
  {
    icon: PackageOpen,
    title: "Pack your items",
    text: "Place the items in their original packaging with all tags attached.",
  },
  {
    icon: CalendarCheck,
    title: "Send it back",
    text: "We'll share the return instructions and arrange the pick-up or drop-off.",
  },
  {
    icon: Wallet,
    title: "Get refunded",
    text: "Once inspected, your refund is processed within 3 – 5 business days.",
  },
];

const ELIGIBLE = [
  "Unworn and unwashed items",
  "Original tags still attached",
  "Original packaging",
  "Returned within 30 days of delivery",
];
const NOT_ELIGIBLE = [
  "Worn, washed or altered items",
  "Items without tags or packaging",
  "Accessories marked as final sale",
  "Requests made after 30 days",
];

function Checklist({ title, items, positive }) {
  const Icon = positive ? Check : X;
  return (
    <div className="border border-black/10 bg-white p-6 sm:p-8">
      <h3 className="font-heading text-lg font-bold uppercase tracking-wide">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm text-footer/75"
          >
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                positive
                  ? "bg-accent text-primary"
                  : "bg-footer/10 text-footer/60"
              }`}
            >
              <Icon size={12} strokeWidth={3} aria-hidden="true" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Returns() {
  return (
    <Supportlayout
      title="Returns"
      intro="Changed your mind or not the right fit? You have 30 days to return or exchange your order."
    >
      {/* Highlights */}
      <div className="grid gap-px border border-black/10 bg-black/10 sm:grid-cols-3">
        {[
          ["30", "Days to return"],
          ["3–5", "Business days to refund"],
          ["Easy", "Size exchanges"],
        ].map(([big, small]) => (
          <div key={small} className="bg-hero p-6 text-center sm:p-8">
            <p className="font-heading text-4xl font-black text-accent sm:text-5xl">
              {big}
            </p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-footer/60">
              {small}
            </p>
          </div>
        ))}
      </div>

      {/* Process */}
      <section className="mt-14">
        <h2 className="font-heading text-2xl font-black uppercase tracking-tight">
          How to return
        </h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="border border-black/10 bg-white p-5">
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
            </li>
          ))}
        </ol>
      </section>

      {/* Eligibility */}
      <section className="mt-14 grid gap-4 md:grid-cols-2">
        <Checklist title="Eligible for return" items={ELIGIBLE} positive />
        <Checklist title="Not eligible" items={NOT_ELIGIBLE} />
      </section>

      <p className="mt-10 text-sm text-footer/70">
        Not sure about your size?{" "}
        <Link
          to="/size-guide"
          className="font-bold text-accent underline underline-offset-4"
        >
          Check the size guide
        </Link>{" "}
        or{" "}
        <Link
          to="/contact"
          className="font-bold text-accent underline underline-offset-4"
        >
          contact us
        </Link>{" "}
        to start a return.
      </p>
    </Supportlayout>
  );
}
