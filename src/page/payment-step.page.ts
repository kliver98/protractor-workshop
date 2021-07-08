import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBackWire: ElementFinder;

  constructor () {
    this.payByBackWire = $('#HOOK_PAYMENT .bankwire');
  }

  public async goToPayByBackWire(): Promise<void> {
    await this.payByBackWire.click();
  }
}
