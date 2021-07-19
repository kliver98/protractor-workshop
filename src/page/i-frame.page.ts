import { $, browser, ElementFinder } from 'protractor';

export class IFramePage {
  private iFrame1: ElementFinder;

  constructor() {
    this.iFrame1 = $('#frame1');
  }

  public async setFormFrameHeight(height: number): Promise<void> {
    return browser.executeScript(`arguments[0].height = ${height};`, this.iFrame1);
  }
  public async getIFrameHeight(): Promise<number> {
    return (await this.iFrame1.getSize()).height;
  }
}
