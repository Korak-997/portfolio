<script>
  import LanguagePicker from "./LanguagePicker.vue";
  import Logo from "./Logo.vue";
  import ThemeSwitcher from "./ThemeSwitcher.vue";
  export default {
    name: "NavbarComponent",

    components: {
      Logo,
      ThemeSwitcher,
      LanguagePicker,
    },
  };
</script>
<template>
  <div class="w-full flex justify-around items-center my-4 flex-wrap gap-2">
    <div class="w-12">
      <Logo />
    </div>
    <div>
      <LanguagePicker />
    </div>
    <div>
      <ThemeSwitcher />
    </div>
  </div>
</template>
