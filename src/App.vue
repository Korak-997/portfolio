<script>
  import { RouterView } from "vue-router";
  import NavbarComponent from "./components/NavbarComponent.vue";
  import FooterComponent from "./components/FooterComponent.vue";
  import TopSocialsBar from "./components/TopSocialsBar.vue";
  export default {
    name: "App",
    data() {
      return {};
    },
    components: {
      NavbarComponent,
      RouterView,
      FooterComponent,
      TopSocialsBar,
    },
  };
</script>

<template>
  <div class="max-w-full flex items-center justify-center flex-col">
    <NavbarComponent />
    <TopSocialsBar />
    <main>
      <RouterView />
    </main>
    <FooterComponent />
  </div>
</template>
