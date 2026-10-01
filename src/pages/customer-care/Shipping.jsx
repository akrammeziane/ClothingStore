import { Link } from "react-router-dom";
import { PackageCheck, Truck, PhoneCall, Banknote } from "lucide-react";
import Supportlayout from "./Supportlayout";
import { SHIPPING } from "./Supportdata";

const dzd = (n) => `${n.toLocaleString()} DZD`;

const STEPS = [
  {
    icon: PackageCheck,
    title: "Order confirmed",
    text: "We prepare your order within 24 hours.",
  },
  {
    icon: Truck,
    title: "Shipped",
    text: "Handed to our courier and on its way to your wilaya.",
  },
  {
    icon: PhoneCall,
    title: "Courier calls",
    text: "You'll get a call before delivery — keep your phone on.",
  },
  {
    icon: Banknote,
    title: "Pay on delivery",
    text: "Inspect your order and pay the courier in cash.",
  },
];

export default function Shipping() {
  return (
    <Supportlayout
      title="Shipping & Delivery"
      intro="We deliver across all wilayas of Algeria. Free shipping on orders over 3,000 DZD."
    >
      {/* Free shipping banner */}
      <div className="flex flex-col items-start justify-between gap-4 bg-footer p-6 text-primary sm:flex-row sm:items-center sm:p-8">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-primary/60">
            Free shipping
          </p>
          <p className="mt-1 font-heading text-2xl font-black uppercase tracking-tight sm:text-3xl">
            On orders over {dzd(SHIPPING.freeOver)}
          </p>
        </div>
        <Link
          to="/shop"
          className="bg-primary px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-footer transition hover:opacity-85"
        >
          Start shopping
        </Link>
      </div>

      {/* Rates */}
      <section className="mt-14">
        <h2 className="font-heading text-2xl font-black uppercase tracking-tight">
          Delivery rates & times
        </h2>
        <div className="mt-6 overflow-x-auto border border-black/10 bg-white">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="border-b border-black/10 bg-hero text-[11px] font-bold uppercase tracking-[0.15em]">
                <th scope="col" className="px-5 py-4">
                  Zone
                </th>
                <th scope="col" className="px-5 py-4 text-footer/70">
                  Estimated time
                </th>
                <th scope="col" className="px-5 py-4 text-footer/70">
                  Fee
                </th>
                <th scope="col" className="px-5 py-4 text-footer/70">
                  Over {dzd(SHIPPING.freeOver)}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {SHIPPING.zones.map((z) => (
                <tr key={z.zone} className="transition-colors hover:bg-hero/60">
                  <th scope="row" className="px-5 py-4 font-bold">
                    {z.zone}
                  </th>
                  <td className="px-5 py-4 text-footer/80">{z.time}</td>
                  <td className="px-5 py-4 tabular-nums text-footer/80">
                    {dzd(z.fee)}
                  </td>
                  <td className="px-5 py-4 text-[11px] font-bold uppercase tracking-wider text-accent">
                    Free
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-footer/60">
          Delivery times are estimates in business days and may vary during
          sales or public holidays.
        </p>
      </section>

      {/* How it works */}
      <section className="mt-14">
        <h2 className="font-heading text-2xl font-black uppercase tracking-tight">
          How delivery works
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
    </Supportlayout>
  );
}
