import { $, browser, ElementFinder } from 'protractor';

export class IFramePage {
  private pageTitle: ElementFinder;

  constructor() {
    this.pageTitle = $('#sampleHeading');
  }

  public async getPageTitle(): Promise<string> {
    return await this.pageTitle.getText();
  }

  public async switchToMainPage(): Promise<void> {
    await browser.switchTo().defaultContent();
  }
}
