const { brandsOptions } = require("../../../entities/options");

const regeneCollagen = {
  cases: ["REGENE COLLAGEN"],
  async handler(msg, bot) {
    const chatId = msg.chat.id;
    const photo = "https://taovita.ru/static/img/0723-regene-collagen.png";

    await bot.sendPhoto(chatId, photo, {
      caption: `REGENE COLLAGEN
      Питьевой коллаген для здоровья кожи и костной ткани.
      Коллаген — это соединительный белок, который отвечает за упругость и тонус кожи, укрепляет суставы и связки
      В составе:
      🔹  Коллаген — основа соединительно ткани
      🔹  Натуральные соки и экстракты, богатые витамином С
      🔹  Фукоидан — регулятор иммунитета, усиливает защитные силы организма
      🔹  Коэнзим Q10 — антиоксидант молодости и красоты
      🔹  Хондроитин и глюкозамин — поддержка здоровья суставов`,
    });
    await bot.sendMessage(
      chatId,
      "Выберите бренд, о котором хотите узнать",
      brandsOptions
    );
  },
};

module.exports = regeneCollagen;
