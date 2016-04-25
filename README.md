# De Botte Bot
[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
[![travic-ci](https://travis-ci.org/chrisvis/debottebot.svg?branch=master)](https://travis-ci.org/chrisvis/debottebot/)


>*'Artifical Ignorance is a bliss'*
>
> Chris


De Botte Bot is a Dutch speaking Facebook Messenger chat bot who is acting *bot*, which is a Dutch word meaning something like *rude*. He lives on Facebook at <https://fb.com/debottebot>.

*Unfortunately Facebook has not approved the bot and it doesn't seem to be happening any time soon, therefor the bot doesn't respond when you talk to him unless I add you as a tester for the Facebook app.*

## Installation
This project is built using the [Serverless Framework](https://github.com/serverless/serverless).
To install Serverless run:

```
npm install serverless -g
```

Now `cd` into the clone of this repository and run:

```
npm install
serverless project init
```

In the `_meta/variables` directory you can find the `s-variables-*.json` files.
There you need to set two variables:

- `verifyToken` needed for verifying the Facebook App Webhook
- `pageToken` used as `access_token` for calls back to the Facebook API.

The `pageToken` is acquired when setting up the [Facebook Page and Facebook App](https://developers.facebook.com/docs/messenger-platform/quickstart).


##Todo
- Add more tests
- Setup linting
- Make him "smarter"
- ???
- Profit
