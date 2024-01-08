const generateReplyMarkup = require("../../libs/utils/generateReplyMarkup");
const {
  mainKeyboard,
  brandsKeyboard,
  productsKeyboard,
  generateProductCardKeyboard,
} = require("./keyboards");

const defaultOptions = {
  reply_markup: generateReplyMarkup(mainKeyboard),
};

const brandsOptions = {
  reply_markup: generateReplyMarkup(brandsKeyboard),
};

const productsOptions = {
  reply_markup: generateReplyMarkup(productsKeyboard),
};

function generateProductCardOptions(args) {
  const keyboard = generateProductCardKeyboard(args);
  const opts = {
    reply_markup: generateReplyMarkup(keyboard, true),
  };

  return opts;
}

module.exports = {
  defaultOptions,
  brandsOptions,
  productsOptions,
  generateProductCardOptions,
};
