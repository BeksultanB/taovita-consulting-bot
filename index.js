const TelegramBot = require("node-telegram-bot-api");
const { mainKeyboard } = require("./src/core/entities/keyboards");
const callbackHandler = require("./src/core/use-cases/callback-queries");
const messageHandler = require("./src/core/use-cases/messages");

const token = "6804568950:AAG1Azj4zNUX0gYAX1P5tXdeA21wWJpjIqw";
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  const opts = {
    reply_markup: JSON.stringify({
      keyboard: mainKeyboard,
      resize_keyboard: true,
      one_time_keyboard: true,
    }),
  };
  await bot.sendMessage(chatId, "Вас приветствует Taovita Bot");
  await bot.sendMessage(
    chatId,
    "Вы находитесь на главной, выберите раздел меню:",
    opts
  );
});
bot.on("callback_query", (query) => callbackHandler(query, bot));

bot.on("message", (message) => messageHandler(message, bot));

bot.on("polling_error", (error) => {
  console.log(error);
});
