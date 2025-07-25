import { expect } from "@playwright/test";

export class CheckoutPage {
  constructor(private page: any) {}

  async enterCustomerDetails(first: string, last: string, zip: string) {
    await this.page.getByPlaceholder('First Name').fill(first);
    await this.page.getByPlaceholder('Last Name').fill(last);
    await this.page.getByPlaceholder('Zip/Postal Code').fill(zip);
    await this.page.getByRole('input', { name: 'Continue' }).click();
  }

  async finishOrder() {
    await this.page.getByRole('button', { name: 'Finish' }).click();
    await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
  }
}
