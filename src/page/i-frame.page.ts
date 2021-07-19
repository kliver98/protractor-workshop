import { $, browser, ElementFinder } from 'protractor';

export class IFramePage {
  private iFrame1: ElementFinder;
  private currentPageTitle: ElementFinder;

  constructor() {
    this.iFrame1 = $('#frame1');
    this.currentPageTitle = $('.main-header');
  }

  public async getPageTitle(): Promise<string> {
    return await this.currentPageTitle.getText();
  }

  public async switchToFrame(): Promise<void> {
    this.currentPageTitle = $('#sampleHeading');
    await browser.switchTo().frame(this.iFrame1.getWebElement());
  }

  public async switchToMainPage(): Promise<void> {
    this.currentPageTitle = $('.main-header');
    await browser.switchTo().defaultContent();
  }

  public async setFormFrameHeight(height: number): Promise<void> {
    return browser.executeScript(`arguments[0].height = ${height};`, this.iFrame1);
  }
  public async getIFrameHeight(): Promise<number> {
    return (await this.iFrame1.getSize()).height;
  }
}
