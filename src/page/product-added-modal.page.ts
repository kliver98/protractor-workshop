import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductAddedModalPage {
  private proceedToCheckout: ElementFinder;

  constructor () {
    this.proceedToCheckout = $('[style*="display: block;"] .button-container > a');
  }

  public async goToOrderSummaryStep(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.proceedToCheckout));
    await this.proceedToCheckout.click();
  }
}
