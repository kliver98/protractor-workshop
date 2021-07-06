import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBackWire: ElementFinder;

  constructor () {
    this.payByBackWire = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async goToPayByBackWire(): Promise<void> {
    await this.payByBackWire.click();
  }
}
