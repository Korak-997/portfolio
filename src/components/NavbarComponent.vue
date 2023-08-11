<script>
import { RouterLink } from "vue-router";
import LanguagePicker from "../components/LanguagePicker.vue";
import BookNowBtn from "./BookNowBtn.vue";

export default {
  name: "NavbarComponent",
  data() {},

  components: {
    RouterLink,
    LanguagePicker,
    BookNowBtn,
  },

  methods: {},
};
</script>
<template>
  <div>
    <div class="navbar bg-transparent h-2">
      <div class="navbar-start">
        <label
          for="my-drawer"
          class="text-2xl hover:text-primary hover:cursor-pointer"
        >
          <font-awesome-icon icon="fa-solid fa-bars"
        /></label>
      </div>
      <div class="navbar-center text-4xl text-primary">
        <RouterLink to="/home"> ᗩᒪᑭᕼᗩ ᔕᗩᒪᗝᑎ </RouterLink>
      </div>
      <div class="navbar-end">
        <language-picker></language-picker>
      </div>
    </div>
  </div>
</template>
