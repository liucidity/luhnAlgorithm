const chai = require('chai');
const assert = chai.assert;

const check = require('../check');

describe("check Function", function() {

  it("7992739871 results in a check digit of 3", function() {
    const payLoad = "7992739871";
    assert.equal(check(payLoad),3);
  });
  it("1234 results in a check digit of 4", function() {
    const payLoad = "1234";
    assert.equal(check(payLoad),4);
  });
  it("00001234 results in a check digit of 4", function() {
    const payLoad = "00001234";
    assert.equal(check(payLoad),4);
  });
  it("00001234 results in a check digit of 4", function() {
    const payLoad = "00001234";
    assert.equal(check(payLoad),4);
  });
  it("11111 results in a check digit of 2", function() {
    const payLoad = "11111";
    assert.equal(check(payLoad),2);
  });
});