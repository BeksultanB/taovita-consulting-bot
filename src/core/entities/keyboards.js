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
  ["На главную"],
];

const contactsKeyboard = Markup.inlineKeyboard([
  [Markup.button.url("Instagram", "https://www.instagram.com/bektenalieva_a/")],
  [Markup.button.url("WhatsApp", "https://wa.me/996550915445")],
  [Markup.button.url("Telegram", "https://t.me/@AltynaiGold")],
]);

module.exports = {
  mainKeyboard,
  brandsKeyboard,
  contactsKeyboard,
};
