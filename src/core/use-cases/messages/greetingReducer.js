const { defaultOptions } = require("../../entities/options");

const greetingReducer = {
  cases: ["/start"],
  async handler(msg, bot) {
    const chatId = msg.chat.id;
    await bot.sendMessage(chatId, "Вас приветствует Taovita Bot");
    await bot.sendMessage(
      chatId,
      "Вы находитесь на главной, выберите раздел меню:",
      defaultOptions
    );
  },
};

module.exports = greetingReducer;
