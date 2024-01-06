const { brandsKeyboard } = require("../../../entities/keyboards");
const feelFast = require("./feelFast");
const nuovo = require("./nuovo");
const regeneCollagen = require("./regeneCollagen");

const brandsReducer = {
  cases: [
    "Бренды",
    "бренды",
    "Наши бренды",
    "наши бренды",
    "Наши бренды 🎖",
    "Продукты 🛍🌿",
  ],
  handler(msg, bot) {
    const chatId = msg.chat.id;

    const opts = {
      reply_markup: JSON.stringify({
        keyboard: brandsKeyboard,
        resize_keyboard: true,
        one_time_keyboard: true,
      }),
    };
    bot.sendMessage(chatId, "Выберите бренд, о котором хотите узнать", opts);
  },
};

module.exports = [brandsReducer, feelFast, regeneCollagen, nuovo];
