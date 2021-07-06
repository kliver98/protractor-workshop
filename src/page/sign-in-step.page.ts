import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailField: ElementFinder;
  private passwdField: ElementFinder;
  private loginSubmitButton: ElementFinder;

  constructor () {
    this.emailField = $('#email');
    this.passwdField = $('#passwd');
    this.loginSubmitButton = $('#SubmitLogin > span');
  }

  public async login(username: string, password: string): Promise<void> {
    await this.emailField.sendKeys(username);
    await this.passwdField.sendKeys(password);
    await this.loginSubmitButton.click();
  }
}
