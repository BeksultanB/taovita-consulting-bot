const { brandsOptions } = require("../../../entities/options");
const feelFast = require("./feelFast");
const nuovo = require("./nuovo");
const regeneCollagen = require("./regeneCollagen");

const brandsReducer = {
  cases: ["Бренды", "бренды", "Наши бренды", "наши бренды", "Наши бренды 🎖"],
  handler(msg, bot) {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId,
      "Выберите бренд, о котором хотите узнать",
      brandsOptions
    );
  },
};

module.exports = [brandsReducer, feelFast, regeneCollagen, nuovo];
