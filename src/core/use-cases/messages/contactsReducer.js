const { defaultOptions } = require("../../entities/options");
const { contactsKeyboard } = require("../../entities/keyboards");

const contactsReducer = {
  cases: ["Контакты", "контакты", "Контакты ✉️"],
  async handler(msg, bot) {
    const chatId = msg.chat.id;
    await bot.sendMessage(chatId, `Мои контакты:`, contactsKeyboard);
    await bot.sendMessage(
      chatId,
      `Сотовый: +996 (550) 915-445`,
      defaultOptions
    );
  },
};

module.exports = contactsReducer;
