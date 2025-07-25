import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Complete sauce demo flow', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await inventory.selectProduct('Sauce Labs Backpack');
  await inventory.addProductToCart();
  await inventory.goToCart();
  await cart.verifyItemInCart('Sauce Labs Backpack');
  await cart.proceedToCheckout();
  await checkout.enterCustomerDetails('Victor', 'QA', '12345');
  await checkout.finishOrder();
});

test('Login with invalid credentials shows error', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('locked_out_user', 'wrong_password');

  await expect(page.locator('[data-test="error"]')).toHaveText(/Username and password do not match/);
});

test('Verify product sorting A-Z', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await page.getByRole('combobox').selectOption('az');
  const productNames = await page.locator('.inventory_item_name').allTextContents();

  const sortedNames = [...productNames].sort();
  expect(productNames).toEqual(sortedNames);
});

test('Remove item from cart', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await inventory.selectProduct('Sauce Labs Backpack');
  await inventory.addProductToCart();
  await inventory.goToCart();

  await page.getByRole('button', { name: 'Remove' }).click();
  await expect(page.locator('.cart_item')).toHaveCount(0);
});

test('Visual snapshot of inventory page', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await expect(page).toHaveScreenshot({ fullPage: true });
});
