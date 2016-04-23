'use strict';

const request = require('request');

module.exports = function (VERIFY_TOKEN, PAGE_TOKEN) {

  function sendTextMessage(sender, text) {
      let messageData = {
          text: text
      };

      request({
          url: 'https://graph.facebook.com/v2.6/me/messages',
          qs: { access_token: PAGE_TOKEN },
          method: 'POST',
          json: {
              recipient: { id: sender },
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

  function verifyToken(verifyToken, challenge) {
    if (verifyToken === VERIFY_TOKEN) {
        return challenge;
    }
    return 'Error, wrong validation token';
  }

  function handleMessages(event, messageHandler) {
    let messagingEvents = event.entry[0].messaging;

    messagingEvents.forEach(function (messagingEvent){
      let sender = messagingEvent.sender.id;

      if (messagingEvent.message && messagingEvent.message.text) {
          let text = messagingEvent.message.text;
          sendTextMessage(sender, messageHandler(text));
      }
    });
  }

  return {
    verifyToken: verifyToken,
    handleMessages: handleMessages
  };
}
