import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="mt-20 bg-footer text-primary">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <h3 className="font-heading text-4xl uppercase tracking-tight">
            Talqin
          </h3>
          <p className="mt-4 max-w-xs text-sm text-primary/70">
            Streetwear made for the bold. We create timeless apparel designed to
            stand out.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Shop
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-primary/75">
            <li
              onClick={() => navigate("/shop")}
              className="cursor-pointer hover:text-accent transition"
            >
              All products
            </li>
            <li
              onClick={() =>
                navigate("/shop", {
                  state: { category: "Hoodies" },
                })
              }
              className="cursor-pointer hover:text-accent transition"
            >
              Hoodies
            </li>
            <li
              onClick={() =>
                navigate("/shop", {
                  state: { category: "T-shirts" },
                })
              }
              className="cursor-pointer hover:text-accent transition"
            >
              T-shirts
            </li>
            <li
              onClick={() =>
                navigate("/shop", {
                  state: { category: "Pants" },
                })
              }
              className="cursor-pointer hover:text-accent transition"
            >
              Pants
            </li>
            <li
              onClick={() =>
                navigate("/shop", {
                  state: { category: "Jackets" },
                })
              }
              className="cursor-pointer hover:text-accent transition"
            >
              Jackets
            </li>
            <li
              onClick={() =>
                navigate("/shop", {
                  state: { category: "Accessories" },
                })
              }
              className="cursor-pointer hover:text-accent transition"
            >
              Accessories
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Customer Care
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-primary/75">
            <li
              onClick={() => navigate("/contact")}
              className="cursor-pointer hover:text-accent transition"
            >
              Contact us
            </li>
            <li
              onClick={() => navigate("/shipping")}
              className="cursor-pointer hover:text-accent transition"
            >
              Shipping &amp; Delivery
            </li>
            <li
              onClick={() => navigate("/returns")}
              className="cursor-pointer hover:text-accent transition"
            >
              Returns
            </li>
            <li
              onClick={() => navigate("/size-guide")}
              className="cursor-pointer hover:text-accent transition"
            >
              Size Guide
            </li>
            <li
              onClick={() => navigate("/FAQ")}
              className="cursor-pointer hover:text-accent transition"
            >
              FAQ
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-primary/75">
            <li
              onClick={() => navigate("/#about")}
              className="cursor-pointer hover:text-accent transition"
            >
              About us
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-4 py-4 text-xs uppercase tracking-[0.15em] text-primary/70 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Talqin. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Cash On Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
