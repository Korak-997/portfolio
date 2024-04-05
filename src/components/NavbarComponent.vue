<script>
  import LanguagePicker from "./LanguagePicker.vue";
  import Logo from "./Logo.vue";
  export default {
    name: "NavbarComponent",

    components: {
      Logo,
      LanguagePicker,
    },
  };
</script>
<template>
  <div class="w-full flex justify-around items-center my-4 flex-wrap gap-2">
    <div class="w-12">
      <Logo />
    </div>
    <div class="lg:flex md:flex hidden items-center justify-around">
      <a
        href="#projects"
        class="mx-4 text-primary hover:text-secondary active:text-secondary text-xl"
      >
        {{ $t("common.projects") }}
      </a>
      <a
        href="#socials"
        class="mx-4 text-primary hover:text-secondary active:text-secondary text-xl"
      >
        {{ $t("common.reachout") }}
      </a>
    </div>
    <div class="w-16">
      <LanguagePicker />
    </div>
  </div>
</template>
