<script>
  import ContactBtn from "../CostBtn.vue";
  export default {
    name: "IntroSection",
    components: { ContactBtn },
  };
</script>
<template>
  <div class="h-screen w-full flex items-center justify-center flex-col">
    <div
      class="text-center uppercase font-bold text-snow md:text-12xl text-4xl"
    >
      <h1 class="intro-text">{{ $t("intro.hi") }}</h1>
      <h1 class="intro-text">{{ $t("intro.coding") }}</h1>
      <ContactBtn
        text="common.reachout"
        action="none"
      />
    </div>
  </div>
</template>

<style lang="scss" scooped>
  @font-face {
    font-family: "Brice";
    src: url("/fonts/Bricemont.ttf");
  }

  .intro-text {
    text-shadow: 3px -2px 3px #00a48c, 1px -2px 2px #00a48c;
    font-family: "Brice";
  }
</style>
