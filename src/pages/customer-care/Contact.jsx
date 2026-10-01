import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import Supportlayout from "./Supportlayout";
import { CONTACT } from "./Supportdata";

const TOPICS = ["Order", "Shipping", "Returns & exchanges", "Sizing", "Other"];

const inputCls =
  "w-full border border-black/10 bg-primary px-4 py-3 text-sm text-footer outline-none transition-colors placeholder:text-footer/40 focus:border-footer";
const labelCls = "mb-2 block text-[11px] font-bold uppercase tracking-wider";

const INFO = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phoneHref}`,
  },
  { icon: MapPin, label: "Location", value: CONTACT.address },
  { icon: Clock, label: "Hours", value: CONTACT.hours },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: TOPICS[0],
    orderId: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // No contact endpoint exists yet, so we hand off to the user's mail app.
    const subject = `[${form.topic}] Message from ${form.name}`;
    const body = [
      form.message,
      "",
      "—",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.orderId && `Order: ${form.orderId}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <Supportlayout
      title="Contact us"
      intro="Questions about an order, a fit or a return? Send us a message and we'll get back to you."
      showHelpCta={false}
    >
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        {/* Form */}
        <div className="border border-black/10 bg-white p-6 sm:p-8">
          {sent ? (
            <div
              className="flex flex-col items-center py-10 text-center"
              role="status"
            >
              <CheckCircle2
                className="mb-4 h-10 w-10 text-accent"
                aria-hidden="true"
              />
              <h2 className="font-heading text-2xl font-black uppercase tracking-tight">
                Almost there
              </h2>
              <p className="mt-2 max-w-sm text-sm text-footer/70">
                Your email app should have opened with your message ready to
                send. If nothing happened, write to us directly at{" "}
                <a
                  className="font-bold text-accent underline"
                  href={`mailto:${CONTACT.email}`}
                >
                  {CONTACT.email}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 cursor-pointer border border-footer px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] transition hover:bg-footer hover:text-primary"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="font-heading text-xl font-bold uppercase tracking-wide">
                Send a message
              </h2>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelCls}>
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputCls}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="topic" className={labelCls}>
                    Topic
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    className={inputCls}
                  >
                    {TOPICS.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="orderId" className={labelCls}>
                    Order number{" "}
                    <span className="font-normal normal-case text-footer/40">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="orderId"
                    name="orderId"
                    value={form.orderId}
                    onChange={handleChange}
                    placeholder="e.g. 8F3A21BC"
                    className={inputCls}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelCls}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  minLength={10}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className={`${inputCls} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 bg-footer px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary transition hover:bg-accent sm:w-auto"
              >
                Send message
                <Send
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
            </form>
          )}
        </div>

        {/* Info column */}
        <aside className="space-y-4">
          <div className="border border-black/10 bg-hero p-6">
            <ul className="space-y-5">
              {INFO.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-primary text-accent">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-footer/50">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-semibold transition hover:text-accent"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 bg-accent p-6 text-primary transition hover:opacity-90"
          >
            <div className="flex items-center gap-4">
              <MessageCircle size={22} aria-hidden="true" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em]">
                  Chat on WhatsApp
                </p>
                <p className="mt-0.5 text-xs text-primary/75">
                  {CONTACT.responseTime}
                </p>
              </div>
            </div>
            <span
              aria-hidden="true"
              className="text-lg transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </aside>
      </div>
    </Supportlayout>
  );
}
