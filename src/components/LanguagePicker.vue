<script>
  import { useI18n } from "vue-i18n";
  import Tr from "../i18n/translations";
  export default {
    name: "LanguagePicker",
    setup() {
      const { t, locale } = useI18n();
      const supportedLocales = Tr.supportedLocales;
      const switchLanguage = async (newLocale) => {
        await Tr.switchLanguage(newLocale);
      };
      return { t, locale, supportedLocales, switchLanguage };
    },
    data() {
      const savedLocale = JSON.parse(localStorage.getItem("korak"));
      return {
        locale:
          savedLocale == null
            ? import.meta.env.VITE_DEFAULT_LOCALE
            : savedLocale.settings.locale,
      };
    },
    methods: {
      saveChanges(newLocale) {
        localStorage.setItem(
          "korak",
          JSON.stringify({ settings: { locale: newLocale } })
        );
        this.$router.go("");
      },
    },
  };
</script>

<template>
  <div class="dropdown dropdown-end text-center">
    <label
      tabindex="0"
      class="btn btn-ghost rounded-btn hover:border-primary"
      ><img
        :src="`/flags/${locale}.svg`"
        :alt="`Country flag for (${sLocale}) language`"
        class="w-8 rounded-xl"
    /></label>
    <ul
      tabindex="0"
      class="menu dropdown-content p-2 shadow bg-base-300 w-36 flex flex-col justify-around items-center"
    >
      <li
        class="w-full text-center border-b border-primary hover:bg-secondary"
        v-for="sLocale in supportedLocales"
        :key="`locale-${sLocale}`"
        @click="
          () => {
            switchLanguage(sLocale);
            saveChanges(sLocale);
          }
        "
      >
        <p>
          <img
            :src="`/flags/${sLocale}.svg`"
            alt="Country flag"
            class="w-6 rounded-xl"
          />
          {{ t(`locale.${sLocale}`) }}
        </p>
      </li>
    </ul>
  </div>
</template>
