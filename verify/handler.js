'use strict';

const token = process.env.VERIFY_TOKEN;

module.exports.handler = function(event, context, cb) {
    console.log('Received event:', JSON.stringify(event, null, 2));

    if (event['hub.verify_token'] === token) {
        return context.succeed(event['hub.challenge']);
    }
    return context.succeed('Error, wrong validation token');
};
