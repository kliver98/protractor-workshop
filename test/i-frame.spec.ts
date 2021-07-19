import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given a web-page with a frame', () => {
  const iFramePage: IFramePage = new IFramePage();

  beforeAll(async () => {
    browser.waitForAngularEnabled(false);
    await browser.get('https://demoqa.com/frames');
  });

  it('Then it should have a title', async () => {
    expect(await iFramePage.getPageTitle()).toEqual('Frames');
  });

  describe('When switch to frame', () => {
    beforeAll(async () => {
      await iFramePage.switchToFrame();
    });

    it('Then it should have a frame title', async () => {
      expect(await iFramePage.getPageTitle()).toEqual('This is a sample page');
    });

    describe('When switch to main page', () => {
      beforeAll(async () => {
        await iFramePage.switchToMainPage();
      });

      it('Then it should have a title', async () => {
        expect(await iFramePage.getPageTitle()).toEqual('Frames');
      });

      describe('When the height is modified', () => {
        const height = 500;

        beforeAll(async () => {
          await iFramePage.setFormFrameHeight(height);
        });

        it('Then it should have a new height', async () => {
          expect(await iFramePage.getIFrameHeight()).toEqual(height);
        });
      });
    });
  });
});
