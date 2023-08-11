import i18n from "@/i18n";

const Trans = {
  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale;
  },
  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(",");
  },
  async switchLanguage(newLocale) {
    const html = document.querySelector("html");
    Trans.currentLocale = newLocale;
    html.setAttribute("lang", newLocale);
    if (newLocale == "ku" || newLocale == "sa" == newLocale == "ir") {
      html.setAttribute("dir", "rtl");
      document.querySelector("body").classList.add("kurdish-font");
    } else {
      html.setAttribute("dir", "ltr");
    }
  },
};
export default Trans;
