import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Given an Automation Practice Form', () => {
  beforeAll(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm');
  });

  describe('When fill the form', () => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

    beforeAll(async () => {
      await personalInformationPage.fillForm({
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        profession: ['Automation Tester'],
        profilePictureRelativePath: 'resources/sample_img.jpg',
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands']
      });

      await personalInformationPage.submitForm();
    });

    it('Then should upload picture', async () => {
      const imgName = 'sample_img.jpg';
      expect(await personalInformationPage.getPhotoTitle()).toContain(imgName);
    });

    it('Then should have a title', async () => {
      expect(await personalInformationPage.getTitle())
      .toEqual('Selenium - Automation Practice Form');
    });
  });
});
