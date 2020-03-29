var TelegramBot = require('node-telegram-bot-api');
var token = '1121325473:AAEDEmBoPJulrZsmxlCdamp4xoncfNvhsYE';
var bot = new TelegramBot(token, {polling: true});


bot.on('message', function(msg) {
    //console.log(msg.text);
    //bot.sendMessage(msg.chat.id, 'Salom berdik ' + msg.chat.first_name);
})
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Salom berdik ' + msg.chat.first_name);
})

bot.onText(/\/stop/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Xayr ' + msg.chat.first_name);
})

bot.on('message', (msg) => {
    const chatId = msg.chat.id

    bot.sendMessage(chatId, 'Klaviyatur ishga tushdi', {
        reply_markup: {
            keyboard: [
                ["Birinchi qator", "Birinchi qatorning 2-elementi"],
                ["Ikkinchi qator"],
                ["3-qator"]
            ] 
        }
    })
})

