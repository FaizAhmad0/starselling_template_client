export type PlanId = "basic" | "premium" | "advanced";
export type FeatureStatus = "included" | "excluded" | "not-specified";

export const featureLabels = {
  hosting: "Domain & Hosting Setup",
  email: "Professional Email Setup",
  wordpress: "WordPress Installation",
  woocommerce: "WooCommerce Setup",
  design: "Professional Website Design",
  navigation: "Website Pages & Navigation",
  catalog: "Product & Catalog Management",
  media: "Product Images & Video Integration",
  inventory: "Product & Inventory Management",
  onPageSeo: "Product SEO & On-Page SEO",
  keywordSeo: "Keyword Research & SEO",
  payments: "Payment Gateway Integration",
  shipping: "Shipping & Delivery Setup",
  security: "Security, Backup & Performance",
  social: "Google & Social Media Integration",
  support: "Website Training & Support",
  responsive: "Mobile Responsive Development",
  app: "Mobile App Development",
} as const;

export type FeatureId = keyof typeof featureLabels;

export interface Plan {
  id: PlanId;
  name: string;
  eyebrow: string;
  description: string;
  price: string;
  href: string;
  recommended: boolean;
  featured: readonly FeatureId[];
  features: Record<FeatureId, FeatureStatus>;
}

export const statusLabels: Record<FeatureStatus, string> = {
  included: "Included",
  excluded: "Excluded",
  "not-specified": "Not specified",
};

// Unspecified services are intentional: responsive development and mobile app
// development are separate entries, with no inferred inclusions.
export const plans: readonly Plan[] = [
  {
    id: "basic",
    name: "Basic",
    eyebrow: "Refine your existing website",
    description:
      "Catalog, content, and SEO services for a website you already have.",
    price: "Contact for pricing",
    href: "https://starsellingz.com/product/website-developments-basic/",
    recommended: false,
    featured: [
      "catalog",
      "media",
      "inventory",
      "onPageSeo",
      "keywordSeo",
      "design",
    ],
    features: {
      hosting: "excluded",
      email: "excluded",
      wordpress: "excluded",
      woocommerce: "excluded",
      design: "excluded",
      navigation: "excluded",
      catalog: "included",
      media: "included",
      inventory: "included",
      onPageSeo: "included",
      keywordSeo: "included",
      payments: "excluded",
      shipping: "excluded",
      security: "excluded",
      social: "excluded",
      support: "excluded",
      responsive: "excluded",
      app: "not-specified",
    },
  },
  {
    id: "premium",
    name: "Premium",
    eyebrow: "Build your online presence",
    description:
      "Website setup, professional design, ecommerce integrations, and support.",
    price: "Contact for pricing",
    href: "https://starsellingz.com/product/website-developments-premium/",
    recommended: true,
    featured: [
      "hosting",
      "design",
      "woocommerce",
      "payments",
      "support",
      "app",
    ],
    features: {
      hosting: "included",
      email: "included",
      wordpress: "included",
      woocommerce: "included",
      design: "included",
      navigation: "included",
      catalog: "included",
      media: "included",
      inventory: "included",
      onPageSeo: "included",
      keywordSeo: "included",
      payments: "included",
      shipping: "included",
      security: "included",
      social: "included",
      support: "included",
      responsive: "not-specified",
      app: "excluded",
    },
  },
  {
    id: "advanced",
    name: "Advanced",
    eyebrow: "Take the next step with an app",
    description:
      "Premium’s listed services, with mobile app development included.",
    price: "Contact for pricing",
    href: "https://starsellingz.com/product/website-developments-advanced/",
    recommended: false,
    featured: [
      "hosting",
      "design",
      "woocommerce",
      "payments",
      "support",
      "app",
    ],
    features: {
      hosting: "included",
      email: "included",
      wordpress: "included",
      woocommerce: "included",
      design: "included",
      navigation: "included",
      catalog: "included",
      media: "included",
      inventory: "included",
      onPageSeo: "included",
      keywordSeo: "included",
      payments: "included",
      shipping: "included",
      security: "included",
      social: "included",
      support: "included",
      responsive: "not-specified",
      app: "included",
    },
  },
];

export const featureIds = Object.keys(featureLabels) as FeatureId[];
