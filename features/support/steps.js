const assert = require('assert');
const { When, Then } = require('@cucumber/cucumber');
const app = require('../../src');


let choice1 = 1;
let choice2 = 2;
let choice3 = 3;

When('I choose 1, 2 to add and subtract 3', function () {
    assert.equal(choice1, 1);
    assert.equal(choice2, 2);
    assert.equal(choice3, 3);
});

Then('I should observe the total is 0', function () {
    let firstResult = app.add(1, 2);
    let secondResult = app.sub(firstResult, 3);

    assert.equal( secondResult , 0);

});