import { test, expect } from "@playwright/test";

test("hero renders bilingual identity", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Dاللوى تل" })).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: /amplifies the emotive frequencies/i
    })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /signal atlas/i })).toBeVisible();
});
