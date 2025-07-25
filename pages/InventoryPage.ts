export class InventoryPage {
  constructor(private page: any) {}

  async selectProduct(productName: string) {
    await this.page.getByText(productName).click();
  }

  async addProductToCart() {
    await this.page.getByRole('button', { name: 'Add to cart' }).click();
  }

  async goToCart() {
    await this.page.getByRole('link', { name: /\d/ }).click();
  }
}
