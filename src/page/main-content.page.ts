import { $, browser, ElementFinder } from 'protractor';

export class MainContentPage {
  private pageTitle: ElementFinder;
  private frame: ElementFinder;

  constructor() {
    this.pageTitle = $('.main-header');
    this.frame = $('#frame1');
  }

  public async getPageTitle(): Promise<string> {
    return await this.pageTitle.getText();
  }

  public async switchToFrame(): Promise<void> {
    await browser.switchTo().frame(this.frame.getWebElement());
  }

  public async setFrameHeight(height: number): Promise<void> {
    return browser.executeScript(`arguments[0].height = ${height};`, this.frame);
  }

  public async getFrameHeight(): Promise<number> {
    return (await this.frame.getSize()).height;
  }
}
