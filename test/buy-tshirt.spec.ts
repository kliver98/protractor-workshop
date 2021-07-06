import { browser } from 'protractor';
import {
  MenuContentPage,
  SignInStepPage,
  AddressStepPage,
  SummaryStepPage,
  ShippingStepPage,
  PaymentStepPage,
  OrderSummaryPage,
  ProductAddedModalPage,
  ProductListPage,
  BankPaymentPage
 } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const productListPage: ProductListPage = new ProductListPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.selectAddToCart();
    await(browser.sleep(3000));
    await productAddedModalPage.goToOrderSummaryStep();
    await(browser.sleep(3000));
    await summaryStepPage.goToSignInStep();
    await(browser.sleep(3000));

    await signInStepPage.login('aperdomobo@gmail.com','WorkshopProtractor');
    await(browser.sleep(3000));

    await addressStepPage.goToShippingStep();
    await(browser.sleep(3000));

    await shippingStepPage.acceptTermsOfService();
    await(browser.sleep(3000));

    await shippingStepPage.goToPaymentStep();
    await(browser.sleep(3000));
    await paymentStepPage.goToPayByBackWire();
    await(browser.sleep(3000));
    await bankPaymentPage.confirm();
    await(browser.sleep(3000));

    await expect(orderSummaryPage.getOrderSummaryTitle())
      .toBe('Your order on My Store is complete.');
  });
});
