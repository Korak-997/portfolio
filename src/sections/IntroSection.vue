<script>
  import CustBtn from "@/components/CustBtn.vue";
  import particlesConfig from "../assets/particles-js.json";
  import TextScramble from "../scrimble";
  export default {
    name: "IntroSection",
    components: { CustBtn },
    data() {
      return {
        configs: JSON.stringify(particlesConfig),
      };
    },
    mounted() {
      const phrases = ["Korak", "Fullstack Developer", "Youtuber"];
      const el = document.querySelector(".text");
      const fx = new TextScramble(el);
      let counter = 0;
      const next = () => {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 2000);
        });
        counter = (counter + 1) % phrases.length;
      };
      next();
    },
  };
</script>
<template>
  <div
    class="flex items-center justify-center flex-col text-center gap-20 h-full w-full"
  >
    <h1 class="text-6xl font-extrabold">{{ $t("intro.hi") }}</h1>
    <div class="text text-4xl md:text-6xl lg:text-6xl w-full"></div>

    <CustBtn
      :text="'common.projects'"
      :link="'#projects'"
      colorClasses="hover:text-secondary before:bg-secondary after:bg-cyan-600 hover:border-cyan-600"
    />
  </div>
</template>
