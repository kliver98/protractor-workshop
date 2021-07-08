import { reporter } from './helpers/reporter';
import { Config, browser } from 'protractor';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 30000,
  SELENIUM_PROMISE_MANAGER: false,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  onPrepare: () => {
    reporter();
    browser.manage().timeouts().implicitlyWait(0);
  }
};
