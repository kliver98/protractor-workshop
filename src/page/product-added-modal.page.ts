import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private proceedToCheckout: ElementFinder;

  constructor () {
    this.proceedToCheckout = $('[style*="display: block;"] .button-container > a');
  }

  public async goToOrderSummaryStep(): Promise<void> {
    await this.proceedToCheckout.click();
  }
}
