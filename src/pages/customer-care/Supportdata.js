// Single Source of truth
export const SUPPORT_LINKS = [
  { to: "/contact", label: "Contact" },
  { to: "/shipping", label: "Shipping" },
  { to: "/returns", label: "Returns" },
  { to: "/size-guide", label: "Size Guide" },
  { to: "/faq", label: "FAQ" },
];

export const CONTACT = {
  email: "support@talqin.com", // TODO
  phone: "+213 555 000 000", // TODO
  phoneHref: "+213555000000", // TODO
  whatsapp: "213555000000", // TODO
  instagram: "https://instagram.com/talqin", // TODO
  address: "Algiers, Algeria", // TODO
  hours: "Sat – Thu · 09:00 – 18:00 (CET)",
  responseTime: "We reply within 24 hours",
};

export const SHIPPING = {
  freeOver: 3000, // TODO
  zones: [
    // TODO
    { zone: "Algiers & suburbs", time: "1 – 2 business days", fee: 400 },
    { zone: "Northern wilayas", time: "2 – 4 business days", fee: 600 },
    { zone: "High Plateaux & South", time: "4 – 7 business days", fee: 900 },
  ],
};

export const FAQ_CATEGORIES = [
  "Orders",
  "Shipping",
  "Returns",
  "Sizing",
  "Payment",
  "Account",
];

export const FAQS = [
  {
    category: "Orders",
    q: "How do I place an order?",
    a: "Add your pieces to the cart, choose your size and colour, then head to checkout. Enter your contact details and delivery address (including your wilaya) and confirm. You'll receive a confirmation as soon as we've got it.",
  },
  {
    category: "Orders",
    q: "Can I change or cancel my order?",
    a: "Yes — as long as it is still marked Pending. Contact us as soon as possible with your order number and we'll update or cancel it. Once an order is Shipped it can no longer be modified, but you can still return it under our 30-day policy.",
  },
  {
    category: "Orders",
    q: "How do I track my order?",
    a: "Sign in and open the Track Order page, then enter your order number (the 8-character code shown in Account → My Orders). You'll see its live status: Pending, Shipped or Delivered.",
  },
  {
    category: "Shipping",
    q: "How much does delivery cost?",
    a: "Delivery is free on orders over 3,000 DZD. Below that, the fee depends on your wilaya — see the full rate table on our Shipping & Delivery page.",
  },
  {
    category: "Shipping",
    q: "How long will my order take to arrive?",
    a: "Between 1 and 7 business days depending on your wilaya. Algiers and nearby areas are usually the fastest. Orders are prepared within 24 hours of confirmation.",
  },
  {
    category: "Shipping",
    q: "Will someone call me before delivery?",
    a: "Yes. The courier will call the phone number you provided at checkout, so please make sure it's correct and reachable.",
  },
  {
    category: "Returns",
    q: "What is your return policy?",
    a: "You have 30 days from delivery to return items that are unworn, unwashed and in their original condition with tags attached. See our Returns page for the full process.",
  },
  {
    category: "Returns",
    q: "Can I exchange for a different size?",
    a: "Absolutely. Contact us within 30 days and we'll arrange an exchange, subject to stock availability. If your size is sold out, we'll offer a refund instead.",
  },
  {
    category: "Returns",
    q: "When will I get my refund?",
    a: "Once we've received and inspected your return, refunds are processed within 3 – 5 business days.",
  },
  {
    category: "Sizing",
    q: "How do your pieces fit?",
    a: "Talqin is built around modest, relaxed silhouettes — longer cuts, drop shoulders and generous coverage. Most customers take their usual size for an oversized look, or size down for a closer fit. Check our Size Guide for exact measurements.",
  },
  {
    category: "Sizing",
    q: "Which sizes do you offer?",
    a: "Most styles are available from S to XXXL. Available sizes are shown on each product page, and sizes that are out of stock are marked as unavailable.",
  },
  {
    category: "Payment",
    q: "Which payment methods do you accept?",
    a: "Right now we offer Cash on Delivery — you pay when your order arrives. Card payment is coming soon.",
  },
  {
    category: "Payment",
    q: "Is my personal information safe?",
    a: "Yes. We only use your details to process and deliver your order, and we never sell them to third parties.",
  },
  {
    category: "Payment",
    q: "How do I use a promo code?",
    a: "Enter your code during checkout. Codes can't be combined, and they don't apply to orders that have already been placed.",
  },
  {
    category: "Account",
    q: "Do I need an account to order?",
    a: "An account lets you follow your orders, save your details and check out faster. Creating one takes less than a minute.",
  },
  {
    category: "Account",
    q: "I forgot my password. What now?",
    a: "Use the “Forgot password” link on the sign-in page. We'll email you a secure link to set a new one.",
  },
];

//TODO
export const SIZE_CHARTS = {
  tops: {
    label: "Hoodies & T-shirts",
    columns: ["Chest width", "Body length", "Shoulder drop", "Sleeve length"],
    rows: [
      { size: "S", values: [58, 70, 62, 58] },
      { size: "M", values: [60, 72, 64, 60] },
      { size: "L", values: [62, 74, 66, 62] },
      { size: "XL", values: [64, 76, 68, 63] },
      { size: "XXL", values: [66, 78, 70, 64] },
      { size: "XXXL", values: [68, 80, 72, 65] },
    ],
  },
  bottoms: {
    label: "Pants",
    columns: ["Waist (relaxed)", "Hip", "Inseam", "Full length"],
    rows: [
      { size: "S", values: [76, 108, 76, 102] },
      { size: "M", values: [80, 112, 77, 104] },
      { size: "L", values: [84, 116, 78, 106] },
      { size: "XL", values: [88, 120, 79, 108] },
      { size: "XXL", values: [92, 124, 80, 110] },
      { size: "XXXL", values: [96, 128, 81, 112] },
    ],
  },
};
