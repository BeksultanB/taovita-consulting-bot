const greetingReducer = require("./greetingReducer");
const mainReducer = require("./mainReducer");
const brandsReducer = require("./brandsReducers");
const reviewsReducer = require("./reviewsReducer");
const aboutCompanyReducer = require("./aboutCompanyReducer");
const contactsReducer = require("./contactsReducer");
const { defaultOptions } = require("../../entities/options");
const productsReducers = require("./productsReducers");

const messageReducers = [
  greetingReducer,
  mainReducer,
  ...brandsReducer,
  reviewsReducer,
  aboutCompanyReducer,
  contactsReducer,
  ...productsReducers,
];

async function messageHandler(...args) {
  let incorrectMessage = true;
  messageReducers.find((reducer) => {
    const { handler, cases } = reducer;

    if (cases.includes(args[0].text)) {
      console.log(args[0]);
      handler(...args);
      incorrectMessage = false;
      return true;
    }
    return false;
  });

  if (incorrectMessage) {
    const chatId = args[0].chat.id;
    await args[1].sendMessage(chatId, "Не понял вашу команду", defaultOptions);
  }
}

module.exports = messageHandler;
