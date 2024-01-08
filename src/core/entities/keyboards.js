const { Markup } = require("telegraf");

const mainKeyboard = [
  ["Наши бренды 🎖", "Отзывы ↩️"],
  ["Продукты 🛍🌿"],
  ["О компании ℹ️", "Достижения 🏆"],
  ["Контакты ✉️"],
];

const brandsKeyboard = [
  ["FEEL FAST", "REGENE COLLAGEN"],
  ["NUOVO"],
  ["На главную 🔙"],
];

const productsKeyboard = [
  ["FEEL FAST 🛍", "REGENE COLLAGEN 🛍"],
  ["NUOVO 🛍", "F-LIFE 🛍"],
  ["На главную 🔙"],
];

function generateProductCardKeyboard({
  index = 0,
  productType,
  msgId,
  opened = false,
}) {
  const cb_query = "products";

  const productCardKeyboard = [
    [
      {
        text: "◀️",
        callback_data: `${cb_query}_prev_${productType}_${index}`,
      },
      {
        text: "Подробнее",
        callback_data: `${cb_query}_more_${productType}_${index}`,
      },
      {
        text: "▶️",
        callback_data: `${cb_query}_next_${productType}_${index}`,
      },
    ],
  ];
  const productCardOpenedKeyboard = Markup.inlineKeyboard([
    [
      [
        {
          text: "В корзину 🛒",
          callback_data: `cart_add_${productType}_${index}`,
        },
      ],
      [
        {
          text: "◀️",
          callback_data: `${cb_query}_prev_${productType}_${index}`,
        },
        {
          text: "Скрыть",
          callback_data: `${cb_query}_hide_${productType}_${index}`,
        },
        {
          text: "▶️",
          callback_data: `${cb_query}_next_${productType}_${index}`,
        },
      ],
    ],
  ]);

  return opened ? productCardOpenedKeyboard : productCardKeyboard;
}

const contactsKeyboard = Markup.inlineKeyboard([
  [Markup.button.url("Instagram", "https://www.instagram.com/bektenalieva_a/")],
  [Markup.button.url("WhatsApp", "https://wa.me/996550915445")],
  [Markup.button.url("Telegram", "https://t.me/@AltynaiGold")],
]);

module.exports = {
  mainKeyboard,
  brandsKeyboard,
  productsKeyboard,
  contactsKeyboard,
  generateProductCardKeyboard,
};
