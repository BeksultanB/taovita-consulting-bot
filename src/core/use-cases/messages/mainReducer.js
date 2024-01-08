const { defaultOptions } = require("../../entities/options");

const mainReducer = {
  cases: [
    "Главная",
    "главная",
    "на главную",
    "На главную",
    "На главную 🔙",
    "Меню",
    "меню",
    "/main",
  ],
  async handler(msg, bot) {
    const chatId = msg.chat.id;
    await bot.sendMessage(chatId, "Выберите раздел меню: ", defaultOptions);
  },
};

module.exports = mainReducer;
