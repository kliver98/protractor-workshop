import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private addToCart: ElementFinder;

  constructor () {
    this.addToCart = $('#center_column [title="Add to cart"]');
  }

  public async selectAddToCart(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCart));
    await this.addToCart.click();
  }
}
