const feelFastProducts = require("../../../constants/products/feelFastProducts");
const { generateProductCardOptions } = require("../../../entities/options");

const feelFast = {
  cases: ["FEEL FAST 🛍"],
  async handler(msg, bot) {
    const chatId = msg.chat.id;
    const msgId = msg.message_id;
    const productType = "feelFastProducts";

    const { name, price, points, photo, caption } = feelFastProducts[0];
    const opts = generateProductCardOptions({ index: 0, msgId, productType });

    await bot.sendPhoto(chatId, photo, {
      caption: `${name}
${caption}

Цена: ${price}
Бонусы: ${points}
`,
      ...opts,
    });
  },
};

module.exports = feelFast;
