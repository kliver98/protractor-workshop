import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private payByBackWire: ElementFinder;

  constructor () {
    this.payByBackWire = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async selectPayByBackWire(): Promise<void> {
    await this.payByBackWire.click();
  }
}
