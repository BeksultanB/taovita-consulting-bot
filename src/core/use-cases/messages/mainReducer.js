const { mainKeyboard } = require("../../entities/keyboards");

const mainReducer = {
  cases: ["Главная", "главная", "на главную", "На главную", "/main"],
  async handler(msg, bot) {
    const chatId = msg.chat.id;

    const opts = {
      reply_markup: JSON.stringify({
        keyboard: mainKeyboard,
        resize_keyboard: true,
        one_time_keyboard: true,
      }),
    };
    await bot.sendMessage(chatId, "Выберите раздел меню: ", opts);
  },
};

module.exports = mainReducer;
