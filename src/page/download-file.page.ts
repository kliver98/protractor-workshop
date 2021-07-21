import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';
import { DownloadService } from '../service/download.service';

export class DownloadFilePage {
  private downloadButton: ElementFinder;

  private downloadService: DownloadService;

  constructor() {
    this.downloadButton = $('#downloadButton');

    this.downloadService = new DownloadService();
  }

  public async download(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.downloadButton));
    await this.downloadService.downloadFile(await this.downloadButton.getAttribute('href'), 'imgDownloaded.jpeg');
  }

  public readFileFromTemp(filename: string): Buffer {
    return this.downloadService.readFileFromTemp(filename);
  }

}
