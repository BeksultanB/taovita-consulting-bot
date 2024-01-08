const { defaultOptions } = require("../../entities/options");

const aboutCompanyReducer = {
  cases: [
    "Компания",
    "компания",
    "О компании",
    "о компании",
    "О компании ℹ️",
    "Достижения 🏆",
  ],
  async handler(msg, bot) {
    const chatId = msg.chat.id;

    const caption1 = `«ТАOVITA» — российская торгово-производственная компания, основанная в 2019 году. Основное направление деятельности — производство уникальных, высокоэффективных продуктов для здоровья, не имеющих аналогов в мире.
🌱Вся продукция разработана с целью сохранения и укрепления здоровья человека, для профилактики различных заболеваний и поддержания жизненного баланса.`;
    const caption2 = `💯Мы успешно реализуем программы активного долголетия, продления молодости и красоты, а также предоставляем инструменты для запуска собственного проекта.

«ТАOVITA» производится в России.
При производстве каждого продукта мы используем самые актуальные технологии, которые позволяют значительно повысить качество и усвояемость активных компонентов
Уникальность наших разработок – в сочетании высоких технологий и многовековых знаний китайской медицины🎋`;
    const caption3 = `«МЫ СОЗДАЕМ ВОЗМОЖНОСТИ»
✅Здоровье
    Укрепление и поддержка своего здоровья и здоровья близких с помощью уникальной продукции, которая доказала свою эффективность на практике
✅Обучение
    Доступ к актуальным знаниям и навыкам, которые помогут принимать верные и эффективные решения в управлении бизнесом
✅Бизнес
    Инструменты и поддержка для запуска и развития своего бизнеса на выгодных партнёрских условиях, расширение финансовых возможностей
✅Уникальный продукт
    Уникальные продуктовые бренды, разработанные на основе собственных инновационных и запатентованных натуральных составов — на пользу людям`;
    const images = [
      {
        type: "photo",
        media: "https://taovita.ru/static/img/about_pano.jpg",
        caption: caption1,
      },
      {
        type: "photo",
        media: "./static/img/taovita_medicine.png",
        caption: caption2,
      },
      {
        type: "photo",
        media: "https://taovita.ru/static/img/additional.jpg",
        caption: caption3,
      },
    ];
    for (const image of images) {
      const { media, caption } = image;
      await bot.sendPhoto(chatId, media, { caption });
    }

    await bot.sendMessage(chatId, "Вы находитесь на главной", defaultOptions);
  },
};

module.exports = aboutCompanyReducer;
