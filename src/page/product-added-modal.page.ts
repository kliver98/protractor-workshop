import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductAddedModalPage {
  private proceedToCheckout: ElementFinder;

  constructor () {
    this.proceedToCheckout = $('[title="Proceed to checkout"]');
  }

  public async goToOrderSummaryStep(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.proceedToCheckout));
    await this.proceedToCheckout.click();
  }
}
