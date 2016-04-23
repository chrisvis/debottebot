# De Botte Bot
[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

>*'Artifical Ignorance is a bliss'*
>
> Chris


De Botte Bot is a Dutch speaking Facebook Messenger chat bot who is acting *bot*, which is a Dutch word meaning something like *rude*. He lives on Facebook at <https://fb.com/debottebot>. 

*Unfortunately Facebook has not approved the bot and it doesn't seem to be happening any time soon, therefor the bot doesn't respond when you are not talk to him when unless I add you as a tester for the Facebook app.*

## Installation
This project is built using the [Serverless Framework](https://github.com/serverless/serverless).
To install Serverless run:

```
npm install serverless -g
```

Now `cd` into the clone of this repository and run:

```
serverless project init
```

In the `_meta/variables` directory you can find the `s-variables-*.json` files.
There you need to set two variables:

- `verifyToken` needed for verifying the Facebook App Webhook 
- `pageToken` used as `access_token` for calls back to the Facebook API.

##Todo
- Add unit tests
- Setup linting
- Make him "smarter"
- ???
- Profit
