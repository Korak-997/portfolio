<script>
  import Logo from "./Logo.vue";
  import LanguagePicker from "../components/LanguagePicker.vue";
  export default {
    name: "NavbarComponent",
    data() {},

    components: {
      Logo,
      LanguagePicker,
    },

    methods: {},
  };
</script>
<template>
  <div class="w-full flex justify-around items-center my-4 flex-wrap gap-2">
    <div class="w-12">
      <Logo />
    </div>
  </div>
</template>
