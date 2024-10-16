var expect = require('chai').expect;

function fizzBuzz(value) {
    return value.toString();
}

function checkFizzBuzz(testValue, expectedResult) {
    var result = fizzBuzz(testValue);
    expect(result).to.equal(expectedResult);
}

it('returns 1 with 1 passed in', function(){
    checkFizzBuzz(1, '1');
});

it('returns 2 with 2 passed in', function(){
    checkFizzBuzz(2, '2');
});