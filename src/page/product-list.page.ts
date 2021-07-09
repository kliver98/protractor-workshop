import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private addToCart: ElementFinder;

  constructor () {
    this.addToCart = $('.button-container [data-id-product="1"]');
  }

  public async selectAddToCart(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCart));
    await this.addToCart.click();
  }
}
