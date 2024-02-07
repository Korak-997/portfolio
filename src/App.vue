<script>
  import { RouterView } from "vue-router";
  import NavbarComponent from "./components/NavbarComponent.vue";
  import FooterComponent from "./components/FooterComponent.vue";
  export default {
    name: "App",
    data() {
      return {};
    },
    components: {
      NavbarComponent,
      RouterView,
      FooterComponent,
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
