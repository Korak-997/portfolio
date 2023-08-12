<script>
  import { RouterView } from "vue-router";
  import NavbarComponent from "./components/NavbarComponent.vue";
  export default {
    data() {
      return {};
    },
    components: {
      NavbarComponent,
      RouterView,
    },
    methods: {},
    mounted() {},
  };
</script>

<template>
  <div class="max-w-full flex items-center justify-center flex-col">
    <NavbarComponent />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style></style>
