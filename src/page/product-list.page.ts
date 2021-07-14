import { $, $$, ElementFinder, ElementArrayFinder, browser, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private addToCartBtn: ElementFinder;
  private products: ElementArrayFinder;

  constructor () {
    this.addToCartBtn = $('#add_to_cart > button');
    this.products = $$('.product_list');
  }

  public async selectProduct(productName: string): Promise<void> {
    const product = this.findByProduct(productName);
    await browser.wait(ExpectedConditions.elementToBeClickable(product.$('img')));
    product.$('img').click();
  }

  private findByProduct(productName: string): ElementFinder {
    return this.products
      .filter(
        (product: ElementFinder) =>
          product
          .$('[itemprop="name"]')
          .getText()
          .then((text : string) => text === productName)
    ).first();
  }

  public async selectAddToCart(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCartBtn));
    await this.addToCartBtn.click();
  }
}
