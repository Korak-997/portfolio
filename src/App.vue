<script>
  import { RouterView } from "vue-router";
  import FooterComponent from "./components/FooterComponent.vue";
  import NavbarComponent from "./components/NavbarComponent.vue";
  export default {
    name: "App",
    data() {
      return {};
    },
    components: {
      NavbarComponent,
      FooterComponent,
      RouterView,
    },
  };
</script>

<template>
  <div class="max-w-full flex items-center justify-center flex-col">
    <NavbarComponent />
    <main>
      <RouterView />
    </main>
    <FooterComponent />
  </div>
</template>

<style lang="scss" scoped>
  main {
    margin-bottom: 6rem;
  }
</style>
