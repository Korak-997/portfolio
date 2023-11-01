<script>
  import LanguagePicker from "../components/LanguagePicker.vue";
  import ThemeSwitcher from "./ThemeSwitcher.vue";
  export default {
    name: "FooterComponent",

    components: {
      LanguagePicker,
      ThemeSwitcher,
    },
  };
</script>
<template>
  <div
    class="w-full flex justify-between items-center flex-wrap fixed bottom-0 bg-base-100 px-6 py-4"
  >
    <LanguagePicker />
    <ThemeSwitcher />
  </div>
</template>
