import { test, expect } from '@playwright/test';

test('Validate LeetCode Two Sum difficulty is Easy', async ({ page }) => {
  // 1. Go to Google
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);

  // 2. Search for "two sum"
  const searchBox = page.getByRole('combobox', { name: 'Search' });
  await searchBox.fill('two sum');
  await searchBox.press('Enter');

  // 3. Click on the LeetCode link for Two Sum
  const leetcodeLink = page.getByRole('link', { name: /Two Sum LeetCode/ });
  await leetcodeLink.click();

  // 4. Verify the difficulty is "Easy"
  await expect(page.locator('text=Easy')).toBeVisible();
});
