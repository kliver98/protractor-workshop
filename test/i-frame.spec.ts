import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given a practice IFrame page', () => {
  beforeAll(async () => {
    browser.waitForAngularEnabled(false);
    await browser.get('https://demoqa.com/frames');
  });

  describe('When the height of IFrame wants to be modify', () => {
    const iFramePage: IFramePage = new IFramePage();
    const height = 500;

    beforeAll(async () => {
      await iFramePage.setFormFrameHeight(height);
    });

    it('Then it should have a new height', async () => {
      expect(await iFramePage.getIFrameHeight()).toEqual(height);
    });
  });
});
