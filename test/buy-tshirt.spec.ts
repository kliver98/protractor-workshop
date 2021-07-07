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

  it('then should be bought a t-shirt', async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await productListPage.selectAddToCart();
    await productAddedModalPage.goToOrderSummaryStep();
    await summaryStepPage.goToSignInStep();

    await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');

    await addressStepPage.goToShippingStep();

    await shippingStepPage.acceptTermsOfService();

    await shippingStepPage.goToPaymentStep();
    await paymentStepPage.goToPayByBackWire();
    await bankPaymentPage.confirm();

    await expect(orderSummaryPage.getOrderSummaryTitle())
      .toBe('Your order on My Store is complete.');
  });
});
