import { browser } from 'protractor';
import { DownloadFilePage } from '../src/page';

describe('Given a download page', () => {
  beforeAll(async () => {
    browser.waitForAngularEnabled(false);
    await browser.get('https://demoqa.com/upload-download');
  });

  describe('When downloaded the file', () => {
    const downloadFile: DownloadFilePage = new DownloadFilePage();
    beforeAll(async () => {
      await downloadFile.download();
    });

    it('Then the file should be in temp folder', async () => {
      expect(downloadFile.readFileFromTemp('imgDownloaded.jpeg').byteLength)
        .toBeGreaterThanOrEqual(4000);
    });
  });
});
