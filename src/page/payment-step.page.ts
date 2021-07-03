import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private confirmOrder: ElementFinder;

  constructor () {
    this.confirmOrder = $('#cart_navigation > button > span');
  }

  public async goToConfirmOrder(): Promise<void> {
    await this.confirmOrder.click();
  }
}
