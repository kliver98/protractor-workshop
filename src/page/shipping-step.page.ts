import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private termsOfService: ElementFinder;
  private proceedToCheckout: ElementFinder;

  constructor () {
    this.termsOfService = $('#cgv');
    this.proceedToCheckout = $('#form > p > button > span');
  }

  public async acceptTermsOfService(): Promise<void> {
    await this.termsOfService.click();
  }

  public async goToProceedToCheckout(): Promise<void> {
    await this.proceedToCheckout.click();
  }
}
