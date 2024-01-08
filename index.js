require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");
const callbackHandler = require("./src/core/use-cases/callback-queries");
const messageHandler = require("./src/core/use-cases/messages");

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (message) => messageHandler(message, bot));
bot.on("callback_query", (query) => callbackHandler(query, bot));
bot.on("polling_error", (error) => console.log(error));
