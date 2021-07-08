import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailField: ElementFinder;
  private passwdField: ElementFinder;
  private loginSubmitButton: ElementFinder;

  constructor () {
    this.emailField = $('#login_form #email');
    this.passwdField = $('#login_form #passwd');
    this.loginSubmitButton = $('#login_form #SubmitLogin');
  }

  public async login(username: string, password: string): Promise<void> {
    await this.emailField.sendKeys(username);
    await this.passwdField.sendKeys(password);
    await this.loginSubmitButton.click();
  }
}
