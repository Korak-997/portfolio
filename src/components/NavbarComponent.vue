<script>
  import Logo from "./Logo.vue";
  import LanguagePicker from "../components/LanguagePicker.vue";
  import ThemeSwitcher from "./ThemeSwitcher.vue";
  export default {
    name: "NavbarComponent",
    data() {},

    components: {
      Logo,
      LanguagePicker,
      ThemeSwitcher,
    },

    methods: {},
  };
</script>
<template>
  <div class="w-full flex justify-around items-center my-4 flex-wrap gap-2">
    <div class="w-12">
      <Logo />
    </div>
    <ThemeSwitcher />
    <LanguagePicker />
  </div>
</template>
