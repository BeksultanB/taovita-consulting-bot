const { mainKeyboard, contactsKeyboard } = require("../../entities/keyboards");

const contactsReducer = {
  cases: ["Контакты", "контакты", "Контакты ✉️"],
  async handler(msg, bot) {
    const chatId = msg.chat.id;

    const opts = {
      reply_markup: JSON.stringify({
        keyboard: mainKeyboard,
        resize_keyboard: true,
        one_time_keyboard: true,
      }),
    };
    await bot.sendMessage(chatId, `Мои контакты:`, contactsKeyboard);
    await bot.sendMessage(chatId, `Сотовый: +996 (550) 915-445`, opts);
  },
};

module.exports = contactsReducer;
