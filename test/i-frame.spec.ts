import { browser } from 'protractor';
import { MainContentPage, IFramePage } from '../src/page';

describe('Given a web-page with a frame', () => {
  const mainContentPage: MainContentPage = new MainContentPage();
  const iFramePage: IFramePage = new IFramePage();

  beforeAll(async () => {
    browser.waitForAngularEnabled(false);
    await browser.get('https://demoqa.com/frames');
  });

  it('Then it should have a title', async () => {
    expect(await mainContentPage.getPageTitle()).toEqual('Frames');
  });

  describe('When switch to frame', () => {
    beforeAll(async () => {
      await mainContentPage.switchToFrame();
    });

    it('Then it should have a frame title', async () => {
      expect(await iFramePage.getPageTitle()).toEqual('This is a sample page');
    });

    describe('When switch to main page', () => {
      beforeAll(async () => {
        await iFramePage.switchToMainPage();
      });

      it('Then it should have a title', async () => {
        expect(await mainContentPage.getPageTitle()).toEqual('Frames');
      });

      describe('When the height of frame is modified', () => {
        const height = 500;

        beforeAll(async () => {
          await mainContentPage.setFrameHeight(height);
        });

        it('Then it should have a new height', async () => {
          expect(await mainContentPage.getFrameHeight()).toEqual(height);
        });
      });
    });
  });
});
