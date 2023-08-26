<script>
  export default {
    name: "IntroSection",
  };
</script>
<template>
  <div
    class="h-screen w-full flex items-center justify-top flex-col text-center"
  >
    <h1 class="font-brice text-6xl mb-6 sh">{{ $t("intro.hi") }}</h1>
    <h1 class="font-brice text-2xl md:text-4xl mb-6 sh">
      {{ $t("intro.currentlyWorking") }}
      <a
        href="https://www.sincnovation.com/en/"
        class="text-2xl md:text-4xl cp-link"
        target="-blank"
        >SINC NOVATION</a
      >
    </h1>
    <h1 class="font-brice text-4xl mb-6 sh">{{ $t("intro.coding") }}</h1>
    <div class="flex items-center justify-around flex-wrap gap-6">
      <a
        href="#socials"
        class="text-2xl md:text-4xl sh"
        >[{{ $t("common.reachout") }}]</a
      >
      <a
        href="#timeline"
        class="text-2xl md:text-4xl sh"
        >[{{ $t("common.readMore") }}]</a
      >
    </div>
  </div>
</template>
<style scoped>
  .cp-link {
    text-shadow: none;
    background-image: url("../../assets/sincBg.png");
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    background-position: bottom;
    text-transform: uppercase;
    font-family: "Steelfish Rg", "helvetica neue", helvetica, arial, sans-serif;
    font-weight: 800;
    -webkit-font-smoothing: antialiased;
  }
  .cp-link:hover {
    transition: all ease-in 1s;
    cursor: pointer;
    background-position: top;
  }
</style>
