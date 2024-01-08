const { productCardKeyboard } = require("../../../entities/keyboards");

const fLife = {
  cases: ["F-LIFE 🛍"],
  async handler(msg, bot) {
    const chatId = msg.chat.id;
    const photo = "https://taovita.ru/static/img/0723-feel-fast.png";

    await bot.sendPhoto(chatId, photo, {
      caption: `FEEL FAST
Напитки из натуральных компонентов для очищения, омоложения и комплексного оздоровления организма.
В составе:
🔹  Натуральный концентрированный гранатовый сок
🔹  Фукоидан — регулятор иммунитета, усиливает защитные силы организма
🔹  Ресвератрол и янтарная кислота — мощные антиоксиданты
🔹  Пептиды — восстанавливают регенерацию клеток`,
    });
    await bot.sendMessage(
      chatId,
      "Выберите бренд, о котором хотите узнать",
      productCardKeyboard
    );
  },
};

module.exports = fLife;
