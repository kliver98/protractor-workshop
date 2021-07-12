import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private termsOfService: ElementFinder;
  private proceedToCheckout: ElementFinder;

  constructor () {
    this.termsOfService = $('#cgv');
    this.proceedToCheckout = $('[name="processCarrier"]');
  }

  public async acceptTermsOfService(): Promise<void> {
    await this.termsOfService.click();
  }

  public async goToPaymentStep(): Promise<void> {
    await this.proceedToCheckout.click();
  }
}
