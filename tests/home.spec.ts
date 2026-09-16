import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("homepage is public, server rendered, and has working destinations", async ({
  page,
  request,
}) => {
  const response = await request.get("/");
  expect(response.status()).toBe(200);
  expect(await response.text()).toContain("Choose your theme.");
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto("/");
  await expect(page).toHaveTitle("Website Development Plans | Star Selling");
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.getByRole("banner")).toHaveCount(1);
  await expect(page.getByRole("main")).toBeVisible();
  for (const name of ["Basic", "Premium", "Advanced"]) {
    await expect(
      page.getByRole("link", { name: `Learn more about ${name}` }),
    ).toHaveAttribute(
      "href",
      `https://starsellingz.com/product/website-developments-${name.toLowerCase()}/`,
    );
  }
  const missingTargets = await page
    .locator('a[href^="#"]')
    .evaluateAll((links) =>
      links
        .filter(
          (link) =>
            !document.getElementById(link.getAttribute("href")!.slice(1)),
        )
        .map((link) => link.getAttribute("href")),
    );
  expect(missingTargets).toEqual([]);
  await page.getByRole("link", { name: "Sign in", exact: true }).click();
  await expect(page).toHaveURL(/\/login$/);
  await expect(page.getByText("Welcome back", { exact: true })).toBeVisible();
  expect(errors).toEqual([]);
  const dashboard = await request.get("/dashboard", { maxRedirects: 0 });
  expect(dashboard.status()).toBe(307);
  expect(dashboard.headers().location).toContain("/login");
});

for (const width of [320, 375, 768, 1024, 1440]) {
  test(`responsive layout and navigation at ${width}px`, async ({
    page,
  }, testInfo) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    const heading = await page.locator("h1").boundingBox();
    const preview = await page.locator("figure").boundingBox();
    expect(heading).not.toBeNull();
    expect(preview).not.toBeNull();
    if (width < 1024) {
      expect(preview!.y).toBeGreaterThan(heading!.y + heading!.height);
      await page.getByRole("button", { name: "Open navigation menu" }).click();
      await expect(
        page.getByRole("navigation", { name: "Mobile navigation" }),
      ).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(
        page.getByRole("button", { name: "Open navigation menu" }),
      ).toBeFocused();
      await page.getByRole("button", { name: "Open navigation menu" }).click();
      await page
        .getByRole("navigation", { name: "Mobile navigation" })
        .getByRole("link", { name: "Pricing" })
        .click();
      await expect(
        page.getByRole("navigation", { name: "Mobile navigation" }),
      ).toBeHidden();
    } else {
      const positions = await page
        .locator('#pricing [data-slot="card-footer"]')
        .evaluateAll((footers) =>
          footers.map((footer) => footer.getBoundingClientRect().top),
        );
      expect(Math.max(...positions) - Math.min(...positions)).toBeLessThan(2);
      await page
        .getByRole("navigation", { name: "Main navigation", exact: true })
        .getByRole("link", { name: "Pricing" })
        .click();
    }
    await expect(page).toHaveURL(/#pricing$/);
    await expect
      .poll(() =>
        page
          .locator("#pricing")
          .evaluate((el) => Math.round(el.getBoundingClientRect().top)),
      )
      .toBe(96);
    if (width === 375 || width === 1440) {
      await page.evaluate(() =>
        window.scrollTo({ top: 0, behavior: "instant" }),
      );
      await page.screenshot({
        path: testInfo.outputPath(`homepage-${width}.png`),
        fullPage: true,
        animations: "disabled",
      });
    }
  });
}

test("all 54 feature statuses match the supplied matrix and cards expand independently", async ({
  page,
}) => {
  await page.goto("/#pricing");
  const ids = [
    "hosting",
    "email",
    "wordpress",
    "woocommerce",
    "design",
    "navigation",
    "catalog",
    "media",
    "inventory",
    "onPageSeo",
    "keywordSeo",
    "payments",
    "shipping",
    "security",
    "social",
    "support",
    "responsive",
    "app",
  ];
  const expected: Record<string, string[]> = {
    Basic: [
      "excluded",
      "excluded",
      "excluded",
      "excluded",
      "excluded",
      "excluded",
      "included",
      "included",
      "included",
      "included",
      "included",
      "excluded",
      "excluded",
      "excluded",
      "excluded",
      "excluded",
      "excluded",
      "not-specified",
    ],
    Premium: [
      ...Array<string>(16).fill("included"),
      "not-specified",
      "excluded",
    ],
    Advanced: [
      ...Array<string>(16).fill("included"),
      "not-specified",
      "included",
    ],
  };
  for (const name of Object.keys(expected)) {
    const card = page.getByRole("article", { name, exact: true });
    await expect(card.locator("[data-feature]")).toHaveCount(6);
  }
  await expect(
    page
      .getByRole("article", { name: "Basic", exact: true })
      .locator('[data-feature="design"]'),
  ).toContainText("Excluded");
  await expect(
    page
      .getByRole("article", { name: "Premium", exact: true })
      .locator('[data-feature="app"]'),
  ).toContainText("Excluded");
  for (const [name, statuses] of Object.entries(expected)) {
    const card = page.getByRole("article", { name, exact: true });
    const trigger = card.getByRole("button", {
      name: `View all features for ${name}`,
    });
    await trigger.focus();
    await page.keyboard.press("Enter");
    await expect(
      card.getByRole("button", { name: `Show fewer features for ${name}` }),
    ).toHaveAttribute("aria-expanded", "true");
    await expect(card.locator("[data-feature]")).toHaveCount(18);
    for (const [index, id] of ids.entries())
      await expect(card.locator(`[data-feature="${id}"]`)).toHaveAttribute(
        "data-status",
        statuses[index],
      );
  }
  await page
    .getByRole("button", { name: "Show fewer features for Premium" })
    .press("Space");
  await expect(
    page.getByRole("button", { name: "View all features for Premium" }),
  ).toHaveAttribute("aria-expanded", "false");
  await expect(
    page.getByRole("button", { name: "Show fewer features for Basic" }),
  ).toHaveAttribute("aria-expanded", "true");
  await expect(
    page.getByRole("button", { name: "Show fewer features for Advanced" }),
  ).toHaveAttribute("aria-expanded", "true");
});

test("FAQ supports keyboard navigation and accessible panels", async ({
  page,
}) => {
  await page.goto("/#faq");
  const first = page.getByRole("button", { name: "What does Basic include?" });
  await first.focus();
  await page.keyboard.press("Enter");
  await expect(first).toHaveAttribute("aria-expanded", "true");
  const panelId = await first.getAttribute("aria-controls");
  await expect(page.locator(`[id="${panelId}"]`)).toContainText(
    "It does not include a new website build.",
  );
  // Base UI 1.7 follows the updated APG: Tab moves between headers.
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("button", {
      name: "What is the difference between Premium and Advanced?",
    }),
  ).toBeFocused();
  await page.keyboard.press("Space");
  await expect(
    page.getByRole("button", {
      name: "What is the difference between Premium and Advanced?",
    }),
  ).toHaveAttribute("aria-expanded", "true");
});

test("hero plays its selection sequence, pauses, and stops when hidden or offscreen", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const preview = page.locator("figure");
  await expect(preview).toHaveAttribute("data-animation-state", "playing");
  const selected = preview.getByText("Theme selected");
  await expect(selected).toHaveCSS("opacity", "1", { timeout: 9_000 });
  await page.getByRole("button", { name: "Pause preview animation" }).click();
  await expect(preview).toHaveAttribute("data-animation-state", "paused");
  const before = await preview
    .locator("svg.lucide-mouse-pointer-2")
    .locator("..")
    .getAttribute("style");
  await page.waitForTimeout(400);
  expect(
    await preview
      .locator("svg.lucide-mouse-pointer-2")
      .locator("..")
      .getAttribute("style"),
  ).toBe(before);
  await page.getByRole("button", { name: "Play preview animation" }).click();
  await expect(preview).toHaveAttribute("data-animation-state", "playing");
  await page.locator("#pricing").scrollIntoViewIfNeeded();
  await expect(preview).toHaveAttribute("data-animation-state", "paused");
  await preview.scrollIntoViewIfNeeded();
  await expect(preview).toHaveAttribute("data-animation-state", "playing");
  // Headless Chromium does not expose OS tab visibility. Exercise the same
  // browser event and visibility property used for real background tabs.
  await page.evaluate(() => {
    Object.defineProperty(document, "visibilityState", {
      configurable: true,
      value: "hidden",
    });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect(preview).toHaveAttribute("data-animation-state", "paused");
  await page.evaluate(() => {
    Object.defineProperty(document, "visibilityState", {
      configurable: true,
      value: "visible",
    });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect(preview).toHaveAttribute("data-animation-state", "playing");
});

test("reduced motion shows a complete static preview and accessible expanded content", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("figure")).toHaveAttribute(
    "data-animation-state",
    "static",
  );
  await expect(page.getByText("Theme selected")).toHaveCSS("opacity", "1");
  await expect(
    page.getByRole("button", { name: "Animation disabled for reduced motion" }),
  ).toBeDisabled();
  await page
    .getByRole("button", { name: "View all features for Basic" })
    .click();
  await page
    .getByRole("button", { name: "Is mobile app development included?" })
    .click();
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});

test("content and navigation remain available without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3210/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Basic", exact: true }),
  ).toBeVisible();
  await expect(page.getByText("Theme selected")).toHaveCSS("opacity", "1");
  await page
    .getByRole("link", { name: "View Plans", exact: true })
    .first()
    .click();
  await expect(page).toHaveURL(/#pricing$/);
  await context.close();
});
