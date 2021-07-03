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

  public async sendEmailField(value: string): Promise<void> {
    await this.emailField.sendKeys(value);
  }

  public async sendPasswdField(value: string): Promise<void> {
    await this.passwdField.sendKeys(value);
  }

  public async goToLoginSubmitButton(): Promise<void> {
    await this.loginSubmitButton.click();
  }
}
