import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private proceedToCheckout: ElementFinder;

  constructor () {
    this.proceedToCheckout = $('[name="processAddress"]');
  }

  public async goToShippingStep(): Promise<void> {
    await this.proceedToCheckout.click();
  }
}
