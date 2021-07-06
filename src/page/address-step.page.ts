import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private proceedToCheckout: ElementFinder;

  constructor () {
    this.proceedToCheckout = $('#center_column > form > p > button > span');
  }

  public async goToShippingStep(): Promise<void> {
    await this.proceedToCheckout.click();
  }
}
