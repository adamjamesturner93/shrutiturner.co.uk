import { test, expect } from '@playwright/test';

test('homepage has title and links to terms of service page', async ({
  page,
}) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Shruti Turner/);

  // create a locator
  const termsLink = page.getByRole('link', { name: 'Terms of use' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(termsLink).toHaveAttribute('href', '/terms');

  // Click the get started link.
  await termsLink.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveTitle(/Terms of use/i);
});
