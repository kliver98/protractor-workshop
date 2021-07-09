import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmButton: ElementFinder;

  constructor () {
    this.confirmButton = $('#cart_navigation > button');
  }

  public async confirm(): Promise<void> {
    await this.confirmButton.click();
  }
}
