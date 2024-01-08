<script>
  import { Icon } from "@iconify/vue";
  import { useI18n } from "vue-i18n";
  import Tr from "../i18n/translations";
  export default {
    name: "TerminalSection",
    setup() {
      const { t, locale } = useI18n();
      const supportedLocales = Tr.supportedLocales;
      const switchLanguage = async (newLocale) => {
        await Tr.switchLanguage(newLocale);
      };
      return { t, locale, supportedLocales, switchLanguage };
    },
    components: {
      Icon,
    },
    data() {
      const savedLocale = JSON.parse(localStorage.getItem("korak"));
      return {
        showToast: false,
        locale:
          savedLocale == null
            ? import.meta.env.VITE_DEFAULT_LOCALE
            : savedLocale.settings.locale,
        theme: "dark",
        isDark: true,
      };
    },
    mounted() {
      this.theme =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      this.isDark = this.theme == "dark" ? true : false;
      const html = document.querySelector("html");
      html.setAttribute("data-theme", this.theme);
    },
    methods: {
      handleTerminalCommand(e) {
        e.preventDefault();
        const givenCommand = e.target.value.toLowerCase().trim();
        const html = document.querySelector("html");

        switch (givenCommand) {
          case "sudo dark theme":
            html.setAttribute("data-theme", "dark");
            break;
          case "sudo light theme":
            html.setAttribute("data-theme", "light");
            break;
          case "sudo english lang":
            localStorage.setItem(
              "korak",
              JSON.stringify({ settings: { locale: "en" } })
            );
            location.reload();
            break;
          case "sudo german lang":
            localStorage.setItem(
              "korak",
              JSON.stringify({ settings: { locale: "de" } })
            );
            location.reload();
            break;
          case "help":
            this.showToast = true;
            break;
          default:
            this.showToast = true;
        }
        e.target.value += "\n Action was successful \n";
        e.target.value += "\n Refreshing after 2 Seconds... \n";
        setTimeout(() => (e.target.value = ""), 2000);
        setTimeout(() => (this.showToast = false), 8000);
      },
    },
  };
</script>
<template>
  <div class="w-11/12 flex items-center justify-center flex-col">
    <div class="alert alert-info mb-4">{{ $t("alerts.terminal") }}</div>
    <div
      class="p-2 bg-black w-11/12 h-80 overflow-x-hidden overflow-y-scroll flex items-center justify-between flex-col"
    >
      <div class="flex items-center justify-between w-full">
        <div></div>
        <div>korak@website-fun-terminal:~</div>
        <div class="flex items-center justify-around">
          <Icon
            icon="ic:baseline-minus"
            class="bg-stone-700 rounded-full m-1 p-1 text-lg"
          /><Icon
            icon="ph:square-light"
            class="bg-stone-700 rounded-full m-1 p-1 text-lg"
          />
          <Icon
            icon="akar-icons:cross"
            class="bg-secondary rounded-full m-1 p-1 text-lg"
          />
        </div>
      </div>
      <textarea
        class="w-full h-full bg-transparent text-sm"
        @keyup.enter.prevent="handleTerminalCommand"
      >
      </textarea>
    </div>
    <div
      class="toast"
      :class="{ hidden: !showToast }"
    >
      <div class="alert alert-info">
        <div class="flex items-start justify-between flex-col">
          <div class="flex items-center justify-between w-full">
            <p>Terminal Usage:</p>
            <Icon
              icon="akar-icons:cross"
              class="rounded-full m-1 p-1 text-2xl text-red-500 cursor-pointer hover:bg-red-500 hover:text-white"
              @click="showToast = false"
            />
          </div>
          <p>sudo light theme --> {{ $t("terminalToast.light") }}</p>
          <p>sudo dark theme --> {{ $t("terminalToast.dark") }}</p>
          <p>sudo english lang --> {{ $t("terminalToast.en") }}</p>
          <p>sudo german lang --> {{ $t("terminalToast.de") }}</p>
          <p>help --> {{ $t("terminalToast.help") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none; /*remove the resize handle on the bottom right*/
  }
</style>
