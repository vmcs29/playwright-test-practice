import { Page } from "@playwright/test";

export class InventoryPage {
  constructor(private page: Page) {}

  async selectProduct(productName: string) {
    await this.page.getByText(productName).click();
  }

  async addProductToCart() {
    await this.page.getByRole('button', { name: 'Add to cart' }).click();
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}
