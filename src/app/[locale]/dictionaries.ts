import 'server-only'

const dictionaries: any = {
    "en": () => import('./dictionaries/en-US.json').then((module) => module.default),
    "zh": () => import('./dictionaries/zh-TW.json').then((module) => module.default),
}

export async function getTypeName(locale: string, type: string) {
    const dict = await getDictionary(locale);
    switch (type) {
        case "anime":
            return dict.anime;
        case "comic":
            return dict.comic;
        case "game":
            return dict.game;
        case "novel":
            return dict.novel;
        default:
            return "";
    }
}

export const getDictionary = async (locale: string) => dictionaries[locale]();