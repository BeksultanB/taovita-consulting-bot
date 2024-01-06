const { brandsKeyboard } = require("../../../entities/keyboards");

const feelFast = {
  cases: ["FEEL FAST"],
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

    const opts = {
      reply_markup: JSON.stringify({
        keyboard: brandsKeyboard,
        resize_keyboard: true,
        one_time_keyboard: true,
      }),
    };

    await bot.sendMessage(
      chatId,
      "Выберите бренд, о котором хотите узнать",
      opts
    );
  },
};

module.exports = feelFast;
