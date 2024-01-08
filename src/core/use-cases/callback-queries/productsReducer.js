const products = require("../../constants/products");
const { generateProductCardOptions } = require("../../entities/options");

const productsReducer = {
  query: "products",
  async handler(query, bot) {
    try {
      const chatId = query.message.chat.id;
      const currentMsgId = query.message.message_id;
      const [cb_query, action, productType, index] = query.data.split("_");
      const productsList = products[productType];
      let opened = false;

      let newIndex = parseInt(index);
      if (action === "next") {
        newIndex = (newIndex + 1) % productsList.length;
      } else if (action === "prev") {
        newIndex = (newIndex - 1 + productsList.length) % productsList.length;
      } else if (action === "more") {
        opened = true;
      } else if (action === "hide") {
        opened = false;
      }

      const opts = generateProductCardOptions({
        index: newIndex,
        msgId: currentMsgId,
        productType,
      });

      const { photo, name, price, points, caption, description } =
        productsList[newIndex];

      await bot.deleteMessage(chatId, currentMsgId);
      await bot.sendPhoto(chatId, photo, {
        ...opts,
        caption: `${name}
${opened ? "" : caption}
  
Цена: ${price}
Бонусы: ${points}
${
  opened
    ? `
${description}`
    : ""
}
`,
      });
    } catch (err) {
      console.log("There's an error in products");
      console.log(err);
    }
  },
};

module.exports = productsReducer;
