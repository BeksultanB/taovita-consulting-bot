const { productCardKeyboard } = require("../../../entities/keyboards");

const nuovo = {
  cases: ["NUOVO 🛍"],
  async handler(msg, bot) {
    const chatId = msg.chat.id;
    const photo = "https://taovita.ru/static/img/0723-nuovo_full.png";

    await bot.sendPhoto(chatId, photo, {
      caption: `NUOVO
      Мицеллярный биокомплекс с фосфолипидами для здоровья всего организма
      В составе:
      🔹  Фосфолипиды — поддерживают клеточный каркас
      🔹  Натуральные масла, Омега 3-6-9
      🔹  Пептиды — восстановление и регенерация клеток
      🔹  Органический германий — противоопухолевая активность
      🔹  Биокомплексы полезных экстрактов`,
    });

    await bot.sendMessage(
      chatId,
      "Выберите бренд, о котором хотите узнать",
      productCardKeyboard
    );
  },
};

module.exports = nuovo;
