'use strict';

const bot = require('../lib/bot');
const fb = require('../lib/fb')(
  process.env.VERIFY_TOKEN,
  process.env.PAGE_TOKEN
);

module.exports.handler = function(event, context, cb) {
    console.log('Received event:', JSON.stringify(event, null, 2));
    fb.handleMessages(event, bot);
};
