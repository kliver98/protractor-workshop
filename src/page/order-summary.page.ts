import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderSuccessfulConfirm: ElementFinder;

  constructor () {
    this.orderSuccessfulConfirm = $('#center_column > div > p > strong');
  }

  public async getOrderSuccessfulConfirm(): Promise<string> {
    return await this.orderSuccessfulConfirm.getText();
  }
}
