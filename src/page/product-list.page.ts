import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private addToCart: ElementFinder;

  constructor () {
    this.addToCart = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async selectAddToCart(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCart));
    await this.addToCart.click();
  }
}
