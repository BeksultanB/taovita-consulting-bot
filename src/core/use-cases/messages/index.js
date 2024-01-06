const mainReducer = require("./mainReducer");
const brandsReducer = require("./brandsReducers");
const reviewsReducer = require("./reviewsReducer");
const aboutCompanyReducer = require("./aboutCompanyReducer");
const contactsReducer = require("./contactsReducer");
const { mainKeyboard } = require("../../entities/keyboards");

const messageReducers = [
  mainReducer,
  ...brandsReducer,
  reviewsReducer,
  aboutCompanyReducer,
  contactsReducer,
];

async function messageHandler(...args) {
  let incorrectMessage = true;
  messageReducers.find((reducer) => {
    const { handler, cases } = reducer;

    if (cases.includes(args[0].text)) {
      handler(...args);
      incorrectMessage = false;
      return true;
    }
    return false;
  });

  if (incorrectMessage) {
    const chatId = args[0].chat.id;
    const opts = {
      reply_markup: JSON.stringify({
        keyboard: mainKeyboard,
        resize_keyboard: true,
        one_time_keyboard: true,
      }),
    };
    await args[1].sendMessage(chatId, "Не понял вашу команду", opts);
  }
}

module.exports = messageHandler;
