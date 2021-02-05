const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const tokenTelegram = process.env.TELEGRAM_API_TOKEN;

const TELEGRAM_STORE_ID = process.env.TELEGRAM_STORE_ID;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(tokenTelegram, {polling: true});

bot.on('message', (msg) => {
  console.log(msg);
  // type other code here
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text.toLowerCase() == 'quiero una hamburguesa') {
    console.log('holaaaaaaaaaa');
    const nombreUsuario = msg.chat.username ?
      msg.chat.username : `${msg.chat.first_name} ${msg.chat.last_name}`;
    const mensaje = `El usuario ${nombreUsuario} quiere una hamburguesa`;
    console.log('TELEGRAM_STORE_ID', TELEGRAM_STORE_ID);
    bot.sendMessage(TELEGRAM_STORE_ID, mensaje);
    bot.sendMessage(chatId, `Listo enviaremos una hamburgesa a tu direccion`);
  } else {
    bot.sendMessage(chatId, `Hola id: ${msg.chat.username} si eres el garlic de mrd
      VETE A LA RECTM
    `);
  }
  // bot.sendMessage(chatId, `Hola ${msg.chat.username} ya recibi tu mensaje: ${text}`);
});

