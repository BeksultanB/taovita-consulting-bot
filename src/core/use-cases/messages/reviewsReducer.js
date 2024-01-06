const youtubeVideos = require("../../constants/reviews/youtube-videos");
const { mainKeyboard } = require("../../entities/keyboards");

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
      {
        reply_markup: {
          keyboard: mainKeyboard,
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      }
    );
  },
};

module.exports = reviewsReducer;
