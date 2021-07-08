import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proceedToCheckout: ElementFinder;

  constructor () {
    this.proceedToCheckout = $('.cart_navigation .standard-checkout');
  }

  public async goToSignInStep(): Promise<void> {
    await this.proceedToCheckout.click();
  }
}
