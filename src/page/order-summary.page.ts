import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderSummaryTitle: ElementFinder;

  constructor () {
    this.orderSummaryTitle = $('#center_column > div > p > strong');
  }

  public async getOrderSummaryTitle(): Promise<string> {
    return await this.orderSummaryTitle.getText();
  }
}
