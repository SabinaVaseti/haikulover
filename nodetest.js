console.log("Hello twitter and node test");

const twitterController = require('twit');
const config = require('./config');
console.log(config);

const twitter = new Twit({
    consumer_key: '9QPIrPZYXn3JY3kl8xD1sJEgx',
    consumer_secret: 'XNoMtPD0X0HtiM6vOo7LWuXMrfK9MHr1LZV3n64OaI9zC8GIs9',
    access_token: '\t1015331810799247360-mGYoCjFrabfgcSegqxNWPQp0MQtqt2',
    access_token_secret: 'Jr7ev2eDgoCQYVEroQT3XGIKCieHwvyzqBHWQ2kugOdKk',
});