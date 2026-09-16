export const homeLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

interface Faq {
  id: string;
  question: string;
  answer: string;
}

export const faqs: readonly Faq[] = [
  {
    id: "basic-inclusions",
    question: "What does Basic include?",
    answer:
      "Basic is for an existing website. It includes product and catalog management, product images and video integration, product and inventory management, product SEO and on-page SEO, and keyword research and SEO. It does not include a new website build.",
  },
  {
    id: "premium-advanced",
    question: "What is the difference between Premium and Advanced?",
    answer:
      "Premium includes website setup, professional design, pages and navigation, catalog and SEO services, ecommerce integrations, security, backup and performance, and website training and support. Advanced includes Premium’s listed services plus mobile app development.",
  },
  {
    id: "mobile-app",
    question: "Is mobile app development included?",
    answer:
      "Mobile app development is included in Advanced, excluded from Premium, and not specified for Basic. Mobile Responsive Development is a separate service: it is excluded from Basic and not specified for Premium or Advanced. Please confirm any unspecified service before choosing a plan.",
  },
  {
    id: "basic-design",
    question: "Does Basic include website design and hosting?",
    answer:
      "No. Professional Website Design and Domain & Hosting Setup are excluded from Basic. Both services are included in Premium and Advanced.",
  },
  {
    id: "pricing-details",
    question: "Where can I find pricing and subscription details?",
    answer:
      "Prices are shown on each plan card. Select Subscribe Now to visit the plan’s Star Selling product page and review the subscription details. Confirm the billing period and applicable terms on the product page before subscribing.",
  },
];
