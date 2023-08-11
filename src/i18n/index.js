import { createI18n } from "vue-i18n";

import en from "./locales/en.json";
import de from "./locales/de.json";
import tr from "./locales/tr.json";
import ku from "./locales/ku.json";
import ar from "./locales/ar.json";
import fa from "./locales/fa.json";

const savedLocale = JSON.parse(localStorage.getItem("alphaSalon"));

export default createI18n({
  locale:
    savedLocale == null
      ? import.meta.env.VITE_DEFAULT_LOCALE
      : savedLocale.settings.locale,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: {
    en,
    de,
    ar,
    tr,
    ku,
    fa,
  },
});
