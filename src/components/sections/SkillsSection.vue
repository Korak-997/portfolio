<script>
  export default {
    name: "Skills",
    data() {
      return {
        numbers: Array.from({ length: 19 }, (value, index) => index + 1),
      };
    },
  };
</script>
<template>
  <div class="shadow-md w-11/12 p-4 gap-4">
    <h1 class="font-brice my-5 text-primary font-bold text-4xl md:text-6xl p-2">
      {{ $t("skills.title") }}
    </h1>

    <div
      class="flex items-center justify-around flex-wrap gap-4 bg-slate-100 p-6"
    >
      <img
        v-for="num in numbers"
        :key="num"
        class="md:w-36 w-24"
        :src="`/icons/${num}.svg`"
        alt="skill logo"
      />
    </div>
  </div>
</template>
