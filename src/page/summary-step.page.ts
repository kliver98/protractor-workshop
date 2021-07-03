import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proceedToCheckout: ElementFinder;

  constructor () {
    this.proceedToCheckout = $('.cart_navigation span');
  }

  public async goToProceedToCheckout(): Promise<void> {
    await this.proceedToCheckout.click();
  }
}
