<script>
  import LanguagePicker from "../components/LanguagePicker.vue";
  import ThemeSwitcher from "./ThemeSwitcher.vue";
  export default {
    name: "NavbarComponent",
    data() {},

    components: {
      LanguagePicker,
      ThemeSwitcher,
    },

    methods: {},
  };
</script>
<template>
  <div
    class="w-full flex justify-around items-center flex-wrap fixed bottom-0 bg-base-100"
  >
    <ThemeSwitcher />
    <LanguagePicker />
  </div>
</template>
