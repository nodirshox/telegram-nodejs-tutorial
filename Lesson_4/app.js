var TelegramBot = require('node-telegram-bot-api');
var token = '1121325473:AAEDEmBoPJulrZsmxlCdamp4xoncfNvhsYE';
var bot = new TelegramBot(token, {polling: true});

bot.on('message', function(msg) {
    console.log(msg.text);
})