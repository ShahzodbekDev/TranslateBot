import { translate } from "@vitalets/google-translate-api";
import { language } from "../enums/languge.enum";

export default async function translatFromUz(
  text: string,
  languge: language
): Promise<string> {
    const translated = await translate(text, {from: "uz", to: languge});

    return translated.text;
}
