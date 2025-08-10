// In CartPage.ts
import { expect, Page } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  async verifyItemInCart(itemName: string) {
    await expect(this.page.locator('.inventory_item_name')).toHaveText(itemName);
  }

  async proceedToCheckout() {
    await this.page.getByRole('button', { name: 'Checkout' }).click();
  }
}
