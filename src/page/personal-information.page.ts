import { $, browser, ElementFinder, ElementArrayFinder, by, ExpectedConditions, element } from 'protractor';
import * as remote from 'selenium-webdriver/remote';
import { existsSync } from 'fs';

const { resolve } = require('path');

export class PersonalInformationPage {
  private firstNameInput: ElementFinder;
  private lastNameInput: ElementFinder;
  private sexInput: ElementArrayFinder;
  private experienceInput: ElementArrayFinder;
  private photoInput: ElementFinder;
  private continentSelector: ElementFinder;
  private commandsSelector: ElementFinder;
  private submitButton: ElementFinder;

  constructor() {
    this.firstNameInput = element(by.name('firstname'));
    this.lastNameInput = element(by.name('lastname'));
    this.sexInput = element.all(by.name('sex'));
    this.experienceInput = element.all(by.name('exp'));
    this.continentSelector = element(by.name('continents'));
    this.commandsSelector = element(by.name('selenium_commands'));
    this.submitButton = element(by.name('submit'));
    this.photoInput = element(by.name('photo'));
  }

  private async fillFullName(firstName: string, lastName: string): Promise<void> {
    await this.firstNameInput.sendKeys(firstName);
    await this.lastNameInput.sendKeys(lastName);
  }

  private async fillSex(sex: string): Promise<void> {
    await this.sexInput
      .filter(
        (elem: ElementFinder) => elem
          .getAttribute('value')
          .then((sexValue : string) => sexValue === sex),
      ).first().click();
  }

  private async fillExperience(experience: number): Promise<void> {
    await this.experienceInput
      .filter(
        (elem: ElementFinder) => elem
          .getAttribute('value')
          .then((expValue : string) => expValue === experience.toString()),
      ).first().click();
  }

  private async fillProfession(profession: string[]): Promise<void> {
    profession.forEach(async (professionValue) => {
      await $(`[name="profession"][value="${professionValue}"]`).click();
    });
  }

  private async uploadProfilePicture(profilePictureRelativePath: string): Promise<void> {
    const path = resolve(profilePictureRelativePath);
    if (existsSync(path)) {
      await browser.setFileDetector(new remote.FileDetector);
      await this.photoInput.sendKeys(path);
      await browser.setFileDetector(undefined);
    }
  }

  private async fillTools(tools: string[]): Promise<void> {
    tools.forEach(async (toolValue) => {
      await $(`[name="tool"][value="${toolValue}"]`).click();
    });
  }

  private async fillContinent(continent: string): Promise<void> {
    await this.continentSelector.element(by.cssContainingText('option', continent)).click();
  }

  private async fillCommands(commands: string[]): Promise<void> {
    commands.forEach(async (commandValue) => {
      await this.commandsSelector.element(by.cssContainingText('option', commandValue)).click();
    });
  }

  public async submitForm(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.submitButton));
    await this.submitButton.click();
    await browser.switchTo().alert().accept();
  }

  public async getTitle(): Promise<string> {
    return await element.all(by.css('h1')).first().getText();
  }

  public async getPhotoTitle(): Promise<string> {
    return await this.photoInput.getAttribute('value');
  }

  public async fillForm(data: {firstName: string, lastName: string, sex: string,
    experience: number, profession: string[], profilePictureRelativePath: string, tools: string[],
    continent: string, commands: string[]}): Promise<void> {
    await this.fillFullName(data.firstName, data.lastName);
    await this.fillSex(data.sex);
    await this.fillExperience(data.experience);
    await this.fillProfession(data.profession);
    await this.uploadProfilePicture(data.profilePictureRelativePath);
    await this.fillTools(data.tools);
    await this.fillContinent(data.continent);
    await this.fillCommands(data.commands);
  }
}
