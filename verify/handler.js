'use strict';

const fb = require('../lib/fb')(
  process.env.VERIFY_TOKEN,
  process.env.PAGE_TOKEN
);

module.exports.handler = function(event, context, cb) {
    console.log('Received event:', JSON.stringify(event, null, 2));

    return context.succeed(
      fb.verifyToken(
        event['hub.verify_token'],
        event['hub.challenge']
      )
    );
};
