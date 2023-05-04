import TelegramBot from "node-telegram-bot-api";

export const ChooseLangugeKeyboard: TelegramBot.InlineKeyboardMarkup = {
    inline_keyboard: [

        [ 
            {
                text: "🇬🇧 En",
                callback_data: "en",
            },
            {
                text: "🇷🇺 Ru",
                callback_data: "ru",
            },
            {
                text: "🇰🇷 Ko",
                callback_data: "ko",
            },
        ],

        [ 
            {
                text: "🇸🇦 Ar",
                callback_data: "ar",
            },
            {
                text: "🇰🇿 KK",
                callback_data: "kk",
            },
            {
                text: "🇹🇷 Tr",
                callback_data: "tr",
            },
        ]
    ]

}