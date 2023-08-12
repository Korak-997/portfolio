<script>
  export default {
    name: "Skills",
    data() {
      return {
        skills: import.meta.glob("@/assets/icons/*.svg"),
      };
    },
    methods: {},
  };
</script>
<template>
  <div class="shadow-xl w-11/12 p-4 gap-4">
    <h1 class="text-primary font-bold text-4xl md:text-6xl p-2">
      {{ $t("skills.title") }}
    </h1>
    <div class="flex items-center justify-around flex-wrap gap-4">
      <img
        v-for="(idx, icon) in skills"
        :key="idx"
        class="w-20"
        :src="icon"
        alt="skill logo"
      />
    </div>
  </div>
</template>
