import { browser } from 'protractor';
import {
  // MenuContentPage,
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

  describe('Open webpage', () => {

    beforeAll(async () => {
      await browser.waitForAngularEnabled(false);
      await browser.get('http://automationpractice.com/');
    });

    describe('Buy proccess', async () => {
      beforeAll(async () => {
        // const menuContentPage: MenuContentPage = new MenuContentPage();
        const productListPage: ProductListPage = new ProductListPage();
        const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
        const summaryStepPage: SummaryStepPage = new SummaryStepPage();

        // await menuContentPage.goToTShirtMenu();
        await productListPage.selectAddToCart();
        await productAddedModalPage.goToOrderSummaryStep();
        await summaryStepPage.goToSignInStep();
      });

      describe('Sign-In into application', async () => {
        beforeAll(async () => {
          const signInStepPage: SignInStepPage = new SignInStepPage();

          await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
        });

        describe('Selecting default address', async () => {
          beforeAll(async () => {
            const addressStepPage: AddressStepPage = new AddressStepPage();

            await addressStepPage.goToShippingStep();
          });

          describe('Bank payment', async () => {
            beforeAll(async () => {
              const shippingStepPage: ShippingStepPage = new ShippingStepPage();
              const paymentStepPage: PaymentStepPage = new PaymentStepPage();
              const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

              await shippingStepPage.acceptTermsOfService();
              await shippingStepPage.goToPaymentStep();
              await paymentStepPage.goToPayByBackWire();
              await bankPaymentPage.confirm();
            });

            it('then should be bought a t-shirt', async () => {
              const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

              await expect(orderSummaryPage.getOrderSummaryTitle())
              .toBe('Your order on My Store is complete.');
            });
          });
        });
      });
    });
  });
});
