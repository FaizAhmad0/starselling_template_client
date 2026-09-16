This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Homepage checks

The homepage lives at `/`. Plan inclusions and product links are configured in
`src/features/home/data/plans.ts`; FAQ content is in `src/features/home/data/content.ts`.
Plan prices are configured in INR: Basic ₹11,800, Premium ₹23,600, and Advanced ₹35,000.
Subscribe Now links lead to the corresponding product pages. Billing periods and terms
are not configured; the homepage does not assume monthly or annual billing.
The existing dashboard navbar has a public variant; authentication and protected routes
retain their existing behavior.

```bash
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

The browser suite starts the production server on port 3210 and checks responsive
layouts, navigation, all 54 feature statuses, independent expansion, FAQ keyboard
behavior, reduced motion, animation visibility and pause controls, and accessibility.
Screenshots are written to the ignored `test-results` directory. To use an existing
Chromium installation, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to its executable path.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
