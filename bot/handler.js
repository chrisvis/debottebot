'use strict';
var request = require('request');

const GREETINGS = [
    "Wat moet je?",
    "Wat?",
    "He."
];

const QUESTIONANSWERS = [
    "Gaat je niets aan.",
    "Weet je dat zelf niet?",
    "Wat een slechte vraag zeg."
];

const GENERALREACTIONS = [
    "Boeiend.",
    "Saai verhaal.",
    "Ik luister niet hoor."
];

function isGreeting(text) {
  let normalized = text.toLowerCase();

  return (
    normalized.indexOf('hoi') !== -1 ||
    normalized.indexOf('hallo') !== -1 ||
    normalized.indexOf('hi') !== -1
  );
}

function isQuestion(text) {
  return text.indexOf('?') !== -1;
}

function pickRandom(array) {
  return array[ Math.floor( Math.random() * array.length ) ];
}

function chooseResponse(text) {
  if (isGreeting(text)) {
    return pickRandom(GREETINGS);
  } else if (isQuestion(text)) {
    return pickRandom(QUESTIONANSWERS);
  }
  return pickRandom(GENERALREACTIONS);
}

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

    let messaging_events = event.entry[0].messaging;
    for (var i = 0; i < messaging_events.length; i++) {
        let messaging_event = messaging_events[i];
        let sender = messaging_event.sender.id;

        if (messaging_event.message && messaging_event.message.text) {
            let text = messaging_event.message.text;
            sendTextMessage(sender, chooseResponse(text));
        }
    }
};
