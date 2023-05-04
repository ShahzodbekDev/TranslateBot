import TelegramBot, { CallbackQuery, ChatId, Message } from "node-telegram-bot-api";
import { MessageText } from "./enums/message.text.enum";
import { ChooseLangugeKeyboard } from './keyboards/choose-languge-keyboard.ts';
import translatFromUz from "./utils/translete";
import { language } from "./enums/languge.enum";



const bot = new TelegramBot(process.env.BOT_API_TOKEN as string, {
  polling: true,
});

let textToTranslete : string;

bot.on("message", async (message: Message) => {
    const chatId: ChatId = message.chat.id;
    const text: string | undefined = message.text;

    if (!text) return bot.sendMessage(chatId, "Matn yuboring");

    if (text === MessageText.Start) {
        return bot.sendMessage(
            chatId,
            `<b><i>Assalomu alaykum!</i></b>\n<b>Tarjima qilish uchun istalgan matingizni yuboring!</b>\n`,
            {
                parse_mode: "HTML",
            }
        );
    }

    await bot.sendMessage(chatId, `Qaysi tilga tarjima qilmoqchisiz?`, {
        reply_markup: ChooseLangugeKeyboard,
    });

    textToTranslete = text;
});

bot.on("callback_query", async (callback: CallbackQuery) => {
    const chatId: ChatId = callback.message?.chat.id as ChatId;
    const callbackData: language = callback.data as string as language;

  

   const text = await translatFromUz(textToTranslete, callbackData);
   await bot.sendMessage(chatId, text);



    
})


