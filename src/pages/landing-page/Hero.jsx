import heroImage from "../../assets/HERO.png";
import { Link, useNavigate } from "react-router-dom";

const MOBILE_FOCUS = "70% center";

const primaryBtn =
  "inline-flex items-center justify-center bg-accent px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:text-xs";
const secondaryBtn =
  "inline-flex cursor-pointer items-center justify-center border border-white/40 bg-transparent px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-footer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:text-xs";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative isolate overflow-hidden bg-black text-primary">
      <img
        src={heroImage}
        alt="Talqin clothing collection"
        fetchPriority="high"
        style={{ "--focus": MOBILE_FOCUS }}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[var(--focus)] lg:object-left"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10
    bg-linear-to-t from-black/70 from-0% via-black/20 via-40% to-transparent to-65%
    lg:bg-linear-to-r lg:from-black/55 lg:from-0% lg:via-black/15 lg:via-35% lg:to-transparent lg:to-60%"
      />

      <div className="mx-auto flex min-h-[clamp(480px,85svh,720px)] max-w-[1400px] items-end px-4 pb-10 pt-24 sm:px-6 sm:pb-14 lg:min-h-[clamp(560px,75svh,680px)] lg:items-center lg:px-8 lg:py-16">
        <div className="w-full max-w-[34rem]">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-400 sm:text-xs">
            New collection
          </p>

          <h1 className="font-heading text-[clamp(2.25rem,8.5vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-primary">
            Built different.
            <span className="mt-2 block">
              Made to <span className="text-emerald-400">stand out.</span>
            </span>
          </h1>

          <p className="mt-5 max-w-sm text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
            Premium streetwear for those who set their own rules.
          </p>

          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row sm:gap-4">
            <Link to="/shop" className={primaryBtn}>
              Shop now
            </Link>
            <button
              type="button"
              className={secondaryBtn}
              onClick={() =>
                navigate("/shop", {
                  state: { searchTerm: "TalQin" },
                })
              }
            >
              Explore collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
