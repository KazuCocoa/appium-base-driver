// transpile:mocha

import { validators } from '../../lib/mjsonwp/validators';
import chai from 'chai';


chai.should();

describe('MJSONWP', () => {
  describe('direct to driver', () => {

    describe('setUrl', () => {
      it('should fail when no url passed', async () => {
        (() => {validators.setUrl();}).should.throw(/url/i);
      });
      it('should fail when given invalid url', async () => {
        (() => {validators.setUrl('foo');}).should.throw(/url/i);
      });
      it('should succeed when given url starting with http', async () => {
        (() => {validators.setUrl('http://appium.io');}).should.not.throw();
      });
      it('should succeed when given an android-like scheme', async () => {
        (() => {validators.setUrl('content://contacts/people/1');}).should.not.throw();
      });
      it('should succeed with hyphens dots and plus chars in the scheme', async () => {
        (() => {validators.setUrl('my-app.a+b://login');}).should.not.throw();
      });
      it('should succeed when given an about scheme', async () => {
        (() => {validators.setUrl('about:blank');}).should.not.throw();
      });
      it('should succeed when given a data scheme', async () => {
        (() => {validators.setUrl('data:text/html,<html></html>');}).should.not.throw();
      });
    });
    describe('implicitWait', () => {
      it('should fail when given no ms', async () => {
        (() => {validators.implicitWait();}).should.throw(/ms/i);
      });
      it('should fail when given a non-numeric ms', async () => {
        (() => {validators.implicitWait("five");}).should.throw(/ms/i);
      });
      it('should fail when given a negative ms', async () => {
        (() => {validators.implicitWait(-1);}).should.throw(/ms/i);
      });
      it('should succeed when given an ms of 0', async () => {
        (() => {validators.implicitWait(0);}).should.not.throw();
      });
      it('should succeed when given an ms greater than 0', async () => {
        (() => {validators.implicitWait(100);}).should.not.throw();
      });
    });
    describe('asyncScriptTimeout', () => {
      it('should fail when given no ms', async () => {
        (() => {validators.asyncScriptTimeout();}).should.throw(/ms/i);
      });
      it('should fail when given a non-numeric ms', async () => {
        (() => {validators.asyncScriptTimeout("five");}).should.throw(/ms/i);
      });
      it('should fail when given a negative ms', async () => {
        (() => {validators.asyncScriptTimeout(-1);}).should.throw(/ms/i);
      });
      it('should succeed when given an ms of 0', async () => {
        (() => {validators.asyncScriptTimeout(0);}).should.not.throw();
      });
      it('should succeed when given an ms greater than 0', async () => {
        (() => {validators.asyncScriptTimeout(100);}).should.not.throw();
      });
    });
    describe('timeoutsW3C', () => {
      it('should fail when given no ms', async () => {
        (() => {validators.timeoutsW3C({protocol: 'MJSONWP', type: 'page load', ms: null});}).should.throw(/ms/i);
      });
      it('should fail when given a non-numeric ms', async () => {
        (() => {validators.timeoutsW3C({protocol: 'MJSONWP', type: 'page load', ms: 'five'});}).should.throw(/ms/i);
      });
      it('should fail when given a negative ms', async () => {
        (() => {validators.timeoutsW3C({protocol: 'MJSONWP', type: 'page load', ms: -1});}).should.throw(/ms/i);
      });
      it('should succeed when given an ms of 0', async () => {
        (() => {validators.timeoutsW3C({protocol: 'MJSONWP', type: 'page load', ms: 0});}).should.not.throw();
      });
      it('should succeed when given an ms greater than 0', async () => {
        (() => {validators.timeoutsW3C({protocol: 'MJSONWP', type: 'page load', ms: 100});}).should.not.throw();
      });
      it('should not allow an invalid timeout type', async () => {
        (() => {validators.timeoutsW3C({protocol: 'MJSONWP', type: 'foofoo', ms: 100});}).should.throw(/'foofoo'/);
      });
      it('should fail when given a non-numeric scriptDuration', async () => {
        (() => {validators.timeoutsW3C({protocol: 'W3C', script: 'one', pageLoad: null, implicit: null});}).should.throw(/ms/i);
      });
      it('should fail when given a non-numeric pageLoadDuration', async () => {
        (() => {validators.timeoutsW3C({protocol: 'W3C', script: null, pageLoad: 'one', implicit: null});}).should.throw(/ms/i);
      });
      it('should fail when given a non-numeric implicitDuration', async () => {
        (() => {validators.timeoutsW3C({protocol: 'W3C', script: null, pageLoad: null, implicit: 'one'});}).should.throw(/ms/i);
      });
      it('should fail when given a negative scriptDuration', async () => {
        (() => {validators.timeoutsW3C({protocol: 'W3C', script: -1, pageLoad: null, implicit: null});}).should.throw(/ms/i);
      });
      it('should fail when given a negative pageLoadDuration', async () => {
        (() => {validators.timeoutsW3C({protocol: 'W3C', script: null, pageLoad: -1, implicit: null});}).should.throw(/ms/i);
      });
      it('should fail when given a negative implicitDuration', async () => {
        (() => {validators.timeoutsW3C({protocol: 'W3C', script: null, pageLoad: null, implicit: -1});}).should.throw(/ms/i);
      });
      it('should succeed when given scriptDuration of 0', async () => {
        (() => {validators.timeoutsW3C({protocol: 'W3C', script: 0, pageLoad: null, implicit: null});}).should.not.throw(/ms/i);
      });
      it('should succeed when given pageLoadDuration of 0', async () => {
        (() => {validators.timeoutsW3C({protocol: 'W3C', script: null, pageLoad: 0, implicit: null});}).should.not.throw(/ms/i);
      });
      it('should succeed when given implicitDuration of 0', async () => {
        (() => {validators.timeoutsW3C({protocol: 'W3C', script: null, pageLoad: null, implicit: 0});}).should.not.throw(/ms/i);
      });
      it('should succeed when given scriptDuration greater than 0', async () => {
        (() => {validators.timeoutsW3C({protocol: 'W3C', script: 1, pageLoad: null, implicit: null});}).should.not.throw(/ms/i);
      });
      it('should succeed when given pageLoadDuration greater than 0', async () => {
        (() => {validators.timeoutsW3C({protocol: 'W3C', script: null, pageLoad: 1, implicit: null});}).should.not.throw(/ms/i);
      });
      it('should succeed when given implicitDuration greater than 0', async () => {
        (() => {validators.timeoutsW3C({protocol: 'W3C', script: null, pageLoad: null, implicit: 1});}).should.not.throw(/ms/i);
      });
      it('should succeed when given scriptDuration,  pageLoadDuration and implicitDuration greater than 0', async () => {
        (() => {validators.timeoutsW3C({protocol: 'W3C', script: 1, pageLoad: 1, implicit: 1});}).should.not.throw(/ms/i);
      });
    });
    describe('clickCurrent', () => {
      it('should fail when given an invalid button', async () => {
        (() => {validators.clickCurrent(4);}).should.throw(/0, 1, or 2/i);
      });
      it('should succeed when given a valid button', async () => {
        (() => {validators.clickCurrent(0);}).should.not.throw();
        (() => {validators.clickCurrent(1);}).should.not.throw();
        (() => {validators.clickCurrent(2);}).should.not.throw();
      });
    });
    describe('setNetworkConnection', () => {
      it('should fail when given no type', async () => {
        (() => {validators.setNetworkConnection();}).should.throw(/0, 1, 2, 4, 6/i);
      });
      it('should fail when given an invalid type', async () => {
        (() => {validators.setNetworkConnection(8);}).should.throw(/0, 1, 2, 4, 6/i);
      });
      it('should succeed when given a valid type', async () => {
        (() => {validators.setNetworkConnection(0);}).should.not.throw();
        (() => {validators.setNetworkConnection(1);}).should.not.throw();
        (() => {validators.setNetworkConnection(2);}).should.not.throw();
        (() => {validators.setNetworkConnection(4);}).should.not.throw();
        (() => {validators.setNetworkConnection(6);}).should.not.throw();
      });
    });
  });
});
