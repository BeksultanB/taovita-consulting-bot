const youtubeVideos = require("../../constants/reviews/youtube-videos");
const { defaultOptions } = require("../../entities/options");

const reviewsReducer = {
  cases: ["Отзывы ", "отзывы", "Отзывы ↩️"],
  async handler(msg, bot) {
    const chatId = msg.chat.id;
    const cb_query = "reviews";
    const index = 0;

    const text = `${youtubeVideos[0].description}
${youtubeVideos[0].url}`;

    const keyboard = [
      [
        {
          text: "Предыдущий",
          callback_data: `${cb_query}_prev_` + index,
        },
        { text: "Следующий", callback_data: `${cb_query}_next_` + index },
      ],
    ];

    const opts = {
      reply_markup: { inline_keyboard: keyboard },
    };

    await bot.sendMessage(chatId, text, opts);
    await bot.sendMessage(
      chatId,
      "Используйте кнопки выше для управления отзывами",
      defaultOptions
    );
  },
};

module.exports = reviewsReducer;
