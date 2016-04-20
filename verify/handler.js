'use strict';

module.exports.handler = function(event, context, cb) {
    var token = 'tokentje';

    console.log('Received event:', JSON.stringify(event, null, 2));

    if (event['hub.verify_token'] === token) {
        return context.succeed(event['hub.challenge']);
    }
    return context.succeed('Error, wrong validation token');
};
