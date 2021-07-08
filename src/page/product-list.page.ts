import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private addToCart: ElementFinder;

  constructor () {
    this.addToCart = $('ul.product_list > li:nth-child(1) .button-container .ajax_add_to_cart_button');
  }

  public async selectAddToCart(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCart));
    await this.addToCart.click();
  }
}
