import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderSummaryTitle: ElementFinder;

  constructor () {
    this.orderSummaryTitle = $('.cheque-indent > strong');
  }

  public async getOrderSummaryTitle(): Promise<string> {
    return await this.orderSummaryTitle.getText();
  }
}
