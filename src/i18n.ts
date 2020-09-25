import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./lang/en.json";
import nl from "./lang/nl.json";

const resources = {
    EN: {
        happey365: {
            ...en
        }

    },
    NL: {
        happey365: {
            ...nl
        }

    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "EN",
        defaultNS: 'happey365',
        keySeparator: false,
        fallbackLng: ["EN", "NL"],
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
