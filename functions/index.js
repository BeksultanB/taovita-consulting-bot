const TelegramBot = require('node-telegram-bot-api');
const { Extra, Markup } = require('telegraf');

const contactButtons = Markup.inlineKeyboard([
    [Markup.button.url('Instagram', 'https://www.instagram.com/bektenalieva_a/')],
    [Markup.button.url('WhatsApp', 'https://wa.me/996550915445')],
    [Markup.button.url('Telegram', 'https://t.me/@AltynaiGold')],
    // Markup.button.url('Сотовый', 'tel://+996999550233'),
    // Markup.button.text('+996999550233'),
    // Markup.button.text("На главную"),
]);

const token = '6804568950:AAG1Azj4zNUX0gYAX1P5tXdeA21wWJpjIqw';
const bot = new TelegramBot(token, { polling: true });

const mainKeyboards = [
    ['Наши бренды 🎖', "Отзывы ↩️"],
    ["Продукты 🛍🌿"],
    ['О компании ℹ️', 'Достижения 🏆'],
    ["Контакты ✉️"],
];
const youtubeVideos = [
    { description: "Таовита делает чудеса!", url: "https://youtu.be/ChoN9Q2WsLU?si=BYf_Ejqtv47jjMvM" },
    { description: "Таовита. Шатающиеся Зубы укрепляются👍", url: "https://youtu.be/7gJKgD_TOUQ?si=xc9wRZIyZawO3Vsd" },
    { description: "Таовита Делает чудеса👍", url: "https://youtu.be/gg2hrbKs_PI?si=q7gWxuEoM6gx1xN0" },
    { description: "Не видевшие глаза начали видеть от Таовита", url: "https://youtu.be/rTrjwAw1-xI?si=2PfzbE6EdIuTO11q" },
    { description: "Таовита. Решена проблема с Простатитом👍", url: "https://youtu.be/IydO3iiTVZM?si=kI9ngZfE8RcZz0GR" },
];

let isFirstVideo = true;
let isLastVideo = false;
let lastReviewId;
let currentReviewIndex = 0;


bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const opts = {
        reply_markup: JSON.stringify({
            keyboard: mainKeyboards,
            resize_keyboard: true,
            one_time_keyboard: true
        })
    };
    bot.sendMessage(chatId, 'Выберите опцию:', opts);
});
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    const messageId = query.message.message_id;

    bot.deleteMessage(chatId, lastReviewId);

    if (isFirstVideo) isFirstVideo = false;
    // if (currentReviewIndex !== (youtubeVideos.length - 1)) isLastVideo = false;


    if (query.data === "nextReview") {
        currentReviewIndex++
        if (currentReviewIndex === (youtubeVideos.length - 1)) isLastVideo = true;
        bot.sendMessage(chatId, `${youtubeVideos[currentReviewIndex].description}

${youtubeVideos[currentReviewIndex].url}`,
            {
                reply_markup: {
                    inline_keyboard: [
                        isFirstVideo ?
                            [{ text: 'Следующий отзыв', callback_data: 'nextReview' }] : (
                                isLastVideo ?
                                    [
                                        { text: 'Предыдущий отзыв', callback_data: 'prevReview' },
                                    ] : [
                                        { text: 'Предыдущий отзыв', callback_data: 'prevReview' },
                                        { text: 'Следующий отзыв', callback_data: 'nextReview' }
                                    ]),
                    ]
                }
            }).then(sentMessage => {
                lastReviewId = sentMessage.message_id;
            });
    } else {
        currentReviewIndex--
        if (currentReviewIndex === 0) isFirstVideo = true;
        bot.sendMessage(chatId, `${youtubeVideos[currentReviewIndex].description}

${youtubeVideos[currentReviewIndex].url}`,
            {
                reply_markup: {
                    inline_keyboard: [
                        isFirstVideo ?
                            [{ text: 'Следующий отзыв', callback_data: 'nextReview' }] :
                            [
                                { text: 'Предыдущий отзыв', callback_data: 'prevReview' },
                                { text: 'Следующий отзыв', callback_data: 'nextReview' }
                            ],
                    ]
                }
            }).then(sentMessage => {
                lastReviewId = sentMessage.message_id;
            });
    }
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    let opts;
    let photo;
    switch (msg.text) {
        case "Бренды":
        case "бренды":
        case "Наши бренды":
        case "наши бренды":
        case "Наши бренды 🎖":
            opts = {
                reply_markup: JSON.stringify({
                    keyboard: [
                        ['FEEL FAST', 'REGENE COLLAGEN'],
                        ['NUOVO'],
                        ["На главную"]
                    ],
                    resize_keyboard: true,
                    one_time_keyboard: true
                })
            };
            bot.sendMessage(chatId, 'Выберите бренд, о котором хотите узнать', opts);
            break
        case "Отзывы ":
        case "отзывы":
        case "Отзывы ↩️":
            bot.sendMessage(chatId, `${youtubeVideos[0].description}

${youtubeVideos[0].url}`,
                {
                    reply_markup: {
                        inline_keyboard: [
                            isFirstVideo ?
                                [{ text: 'Следующий отзыв', callback_data: 'nextReview' }] :
                                [
                                    { text: 'Предыдущий отзыв', callback_data: 'prevReview' },
                                    { text: 'Следующий отзыв', callback_data: 'butnextReviewton2' }
                                ],
                        ]
                    }
                }).then(sentMessage => {
                    lastReviewId = sentMessage.message_id;
                });
            break
        case "Главная":
        case "главная":
        case "на главную":
        case "На главную":
            opts = {
                reply_markup: JSON.stringify({
                    keyboard: mainKeyboards,
                    resize_keyboard: true,
                    one_time_keyboard: true
                })
            };
            bot.sendMessage(chatId, 'Выберите опцию:', opts);
            break
        case "FEEL FAST":
            photo = 'https://taovita.ru/static/img/0723-feel-fast.png';
            bot.sendPhoto(chatId, photo, {
                caption: `FEEL FAST
Напитки из натуральных компонентов для очищения, омоложения и комплексного оздоровления организма.
В составе:
🔹  Натуральный концентрированный гранатовый сок
🔹  Фукоидан — регулятор иммунитета, усиливает защитные силы организма
🔹  Ресвератрол и янтарная кислота — мощные антиоксиданты
🔹  Пептиды — восстанавливают регенерацию клеток`
            });
            break
        case "REGENE COLLAGEN":
            photo = 'https://taovita.ru/static/img/0723-regene-collagen.png';
            bot.sendPhoto(chatId, photo, {
                caption: `REGENE COLLAGEN
Питьевой коллаген для здоровья кожи и костной ткани.
Коллаген — это соединительный белок, который отвечает за упругость и тонус кожи, укрепляет суставы и связки
В составе:
🔹  Коллаген — основа соединительно ткани
🔹  Натуральные соки и экстракты, богатые витамином С
🔹  Фукоидан — регулятор иммунитета, усиливает защитные силы организма
🔹  Коэнзим Q10 — антиоксидант молодости и красоты
🔹  Хондроитин и глюкозамин — поддержка здоровья суставов`
            });
            break
        case "NUOVO":
            photo = 'https://taovita.ru/static/img/0723-nuovo_full.png';
            bot.sendPhoto(chatId, photo, {
                caption: `NUOVO
Мицеллярный биокомплекс с фосфолипидами для здоровья всего организма
В составе:
🔹  Фосфолипиды — поддерживают клеточный каркас
🔹  Натуральные масла, Омега 3-6-9
🔹  Пептиды — восстановление и регенерация клеток
🔹  Органический германий — противоопухолевая активность
🔹  Биокомплексы полезных экстрактов`
            });
            break
        case "Достижения":
        case "достижения":
        case "Достижения 🏆":
            opts = {
                reply_markup: JSON.stringify({
                    keyboard: [
                        ...mainKeyboards,
                        ["На главную"]
                    ],
                    resize_keyboard: true,
                    one_time_keyboard: true
                })
            };
            bot.sendMessage(chatId, 'Выберите опцию:', opts);
            break
        case "Компания":
        case "компания":
        case "О компании":
        case "о компании":
        case "О компании ℹ️":
            const caption1 = `«ТАOVITA» — российская торгово-производственная компания, основанная в 2019 году. Основное направление деятельности — производство уникальных, высокоэффективных продуктов для здоровья, не имеющих аналогов в мире.

🌱Вся продукция разработана с целью сохранения и укрепления здоровья человека, для профилактики различных заболеваний и поддержания жизненного баланса.`
            const caption2 = `💯Мы успешно реализуем программы активного долголетия, продления молодости и красоты, а также предоставляем инструменты для запуска собственного проекта.
«ТАOVITA» производится в России

При производстве каждого продукта мы используем самые актуальные технологии, которые позволяют значительно повысить качество и усвояемость активных компонентов
Уникальность наших разработок – в сочетании высоких технологий и многовековых знаний китайской медицины🎋`
            const caption3 = `«МЫ СОЗДАЕМ ВОЗМОЖНОСТИ»

✅Здоровье
Укрепление и поддержка своего здоровья и здоровья близких с помощью уникальной продукции, которая доказала свою эффективность на практике
✅Обучение
Доступ к актуальным знаниям и навыкам, которые помогут принимать верные и эффективные решения в управлении бизнесом
✅Бизнес
Инструменты и поддержка для запуска и развития своего бизнеса на выгодных партнёрских условиях, расширение финансовых возможностей
✅Уникальный продукт
Уникальные продуктовые бренды, разработанные на основе собственных инновационных и запатентованных натуральных составов — на пользу людям`
            const images = [
                { type: 'photo', media: 'https://taovita.ru/static/img/about_pano.jpg', caption1 },
                { type: 'photo', media: './static/img/taovita_medicine.png', caption2 },
                { type: 'photo', media: 'https://taovita.ru/static/img/additional.jpg', caption3 },
            ];
            opts = {
                reply_markup: JSON.stringify({
                    keyboard: [
                        ...mainKeyboards,
                        ["На главную"]
                    ],
                    resize_keyboard: true,
                    one_time_keyboard: true
                })
            };
            bot.sendPhoto(chatId, images[0].media, { caption: caption1 });
            bot.sendPhoto(chatId, images[1].media, { caption: caption2 });
            bot.sendPhoto(chatId, images[2].media, { caption: caption3 });
            bot.sendMessage(chatId, 'Вы находитесь на главной', opts);
            break
        case "Контакты":
        case "контакты":
        case "Контакты ✉️":
            opts = {
                reply_markup: JSON.stringify({
                    keyboard: [
                        ...mainKeyboards,
                    ],
                    resize_keyboard: true,
                    one_time_keyboard: true
                })
            };
            bot.sendMessage(chatId, `Мои контакты:
Сотовый: +996550915445`, contactButtons);
            bot.sendMessage(chatId, `Главная`, opts);
    }
});
