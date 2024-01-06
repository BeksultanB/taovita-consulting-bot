const youtubeVideos = require("../../constants/reviews/youtube-videos");

const reviewsReducer = {
  query: "reviews",
  async handler(query, bot) {
    const chatId = query.message.chat.id;
    const messageId = query.message.message_id;
    const [cb_query, action, index] = query.data.split("_");

    let newIndex = parseInt(index);
    if (action === "next") {
      newIndex = (newIndex + 1) % youtubeVideos.length;
    } else if (action === "prev") {
      newIndex = (newIndex - 1 + youtubeVideos.length) % youtubeVideos.length;
    }

    const keyboard = [
      [
        {
          text: "Предыдущий",
          callback_data: `${cb_query}_prev_` + newIndex,
        },
        {
          text: "Следующий",
          callback_data: `${cb_query}_next_` + newIndex,
        },
      ],
    ];

    await bot.editMessageText(
      `${youtubeVideos[newIndex].description}
${youtubeVideos[newIndex].url}`,
      {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: { inline_keyboard: keyboard },
      }
    );
  },
};

module.exports = reviewsReducer;
