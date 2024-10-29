import BahasaMalaysia from '@assets/i18n/bm-MY.json';
import English from '@assets/i18n/en-US.json';
import Chinese from '@assets/i18n/zh-CN.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageType } from './core/enums/language-utils.enum';

const resources = {
    [LanguageType.English_US]: {
        translation: English,
    },
    [LanguageType.Chinese_CN]: {
        translation: Chinese,
    },
    [LanguageType.Malay_MY]: {
        translation: BahasaMalaysia,
    },
};

const lang = localStorage.getItem('lang') ?? 'en-US';

i18n.use(initReactI18next).init({
    fallbackLng: LanguageType.English_US,
    lng: lang,
    resources: resources,
});

export default i18n;
