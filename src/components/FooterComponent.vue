<script>
  import LanguagePicker from "../components/LanguagePicker.vue";
  export default {
    name: "NavbarComponent",
    data() {},

    components: {
      LanguagePicker,
    },

    methods: {},
  };
</script>
<template>
  <div
    class="w-full flex justify-around items-center flex-wrap fixed bottom-0 bg-base-100"
  >
    <LanguagePicker />
  </div>
</template>
