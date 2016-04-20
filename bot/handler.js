'use strict';
var request = require('request');


module.exports.handler = function(event, context, cb) {
    var token = "***REMOVED***";

    console.log('Received event:', JSON.stringify(event, null, 2));

    function sendTextMessage(sender, text) {
        let messageData = {
            text: text
        };
        request({
            url: 'https://graph.facebook.com/v2.6/me/messages',
            qs: {
                access_token: token
            },
            method: 'POST',
            json: {
                recipient: {
                    id: sender
                },
                message: messageData,
            }
        }, function(error, response, body) {
            if (error) {
                console.log('Error sending message: ', error);
            } else if (response.body.error) {
                console.log('Error: ', response.body.error);
            }
        });
    }

    var greetings = [
        "Wat moet je?",
        "Wat?",
        "He."
    ];

    var questionAnswers = [
        "Gaat je niets aan.",
        "Weet je dat zelf niet?",
        "Wat een slechte vraag zeg."
    ];

    var generalReactions = [
        "Boeiend.",
        "Saai verhaal.",
        "Ik luister niet hoor."
    ];

    var messaging_events = event.entry[0].messaging;
    for (var i = 0; i < messaging_events.length; i++) {
        let messaging_event = messaging_events[i];
        let sender = messaging_event.sender.id;
        if (messaging_event.message && messaging_event.message.text) {
            let text = messaging_event.message.text;
            sendTextMessage(sender, greetings[0]);
        }
    }

    cb(null, greetings[0]);
};
