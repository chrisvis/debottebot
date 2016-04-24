const rewire = require('rewire');
const bot = rewire('../lib/bot.js');
const assert = require('chai').assert;

const isGreeting = bot.__get__('isGreeting');
const isQuestion = bot.__get__('isQuestion');

describe('isGreeting', function() {
    it('should return true when the text is a greeting', function() {
        assert.equal(isGreeting('Hoi bot'), true);
        assert.equal(isGreeting('hallo lief botje'), true);
        assert.equal(isGreeting('Doei'), false);
    });
});

describe('isQuestion', function() {
    it('should return true when the text is a question', function() {
        assert.equal(isQuestion('Alles goed?'), true);
        assert.equal(isQuestion('Ik ben gek'), false);
    });
});
