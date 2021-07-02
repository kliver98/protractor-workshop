import { reporter } from './helpers/reporter';
import { Config } from 'protractor';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/google.spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    reporter();
  }
};
