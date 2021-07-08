import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private proceedToCheckout: ElementFinder;

  constructor () {
    this.proceedToCheckout = $('form .cart_navigation > button[type="submit"]');
  }

  public async goToShippingStep(): Promise<void> {
    await this.proceedToCheckout.click();
  }
}
