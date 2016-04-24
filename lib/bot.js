'use strict';

const GREETINGS = [
    "hoi",
    "hallo",
    "hi",
    "hello",
    "hey"
];

const GREETING_ANSWERS = [
    "Wat moet je?",
    "Wat?",
    "He.",
    "Ja?"
];

const QUESTION_ANSWERS = [
    "Gaat je niets aan.",
    "Weet je dat zelf niet?",
    "Wat een slechte vraag zeg.",
    "Ben je dom ofzo?",
    "Pfff. Hier: http://lmgtfy.com/?q={text_urlencoded}",
    "Ik kom er zo even op terug, ik moet nu eerst even kakken. :poop:"
];

const GENERAL_REACTIONS = [
    "Boeiend.",
    "Saai verhaal.",
    "Ik luister niet hoor.",
    "Ben je klaar?",
    "Booorrring.",
    "Zzzzz.",
    "Meen je dat nou echt?",
    "Interessant...",
    "O.",
    "Tja.",
    "Jaja.",
    ":poop:",
    "o.O",
    ":|]",
    ":/",
    "Dat kan me niets schelen.",
    "Dus."
];

function isGreeting(text) {
  let processed = text.toLowerCase();
  return GREETINGS.some(greeting => processed.indexOf(greeting) !== -1);
}

function isQuestion(text) {
  return text.indexOf('?') !== -1;
}

function pickRandom(array) {
  return array[ Math.floor( Math.random() * array.length ) ];
}

function chooseResponse (text) {
  if (isGreeting(text)) {
    return pickRandom(GREETING_ANSWERS);
  } else if (isQuestion(text)) {
    return pickRandom(QUESTION_ANSWERS);
  }
  return pickRandom(GENERAL_REACTIONS);
}

function replaceVars(text, originalText) {
  return text.replace("{text_urlencoded}", encodeURIComponent(originalText));
}

module.exports = function (text) {
  return replaceVars(chooseResponse(text), text);
}
