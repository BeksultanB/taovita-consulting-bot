const { productsOptions } = require("../../../entities/options");
const feelFast = require("./feelFast");
const fLife = require("./fLife");
const nuovo = require("./nuovo");
const regeneCollagen = require("./regeneCollagen");

const productsReducer = {
  cases: ["Продукты 🛍🌿", "Продукты", "продукты"],
  handler(msg, bot) {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId,
      "Выберите линейку интересующего вас продукта",
      productsOptions
    );
  },
};

module.exports = [productsReducer, feelFast, regeneCollagen, nuovo, fLife];
