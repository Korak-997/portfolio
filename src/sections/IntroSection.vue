<script>
  import CustBtn from "@/components/CustBtn.vue";
  import SocialsBar from "@/components/SocialsBar.vue";
  import particlesConfig from "../assets/particles-js.json";
  export default {
    name: "IntroSection",
    components: { CustBtn, SocialsBar },
    data() {
      return {
        configs: JSON.stringify(particlesConfig),
      };
    },
    mounted() {
      particlesJS.load("particles-js", JSON.stringify(this.configs));
    },
  };
</script>
<template>
  <div
    class="flex items-center justify-center flex-col text-center gap-20 h-full"
  >
    <input
      type="hidden"
      name="particles-config"
      id="particles-config"
      :value="configs"
    />
    <div
      id="particles-js"
      class="absolute w-full h-full"
    ></div>

    <div class="p-2">
      <h1 class="text-xl md:text-4xl">
        <span class="text-blue-600">&lt;h1</span>
        <span class="text-cyan-500"> class</span> =
        <span class="text-orange-600">"vip"</span>&gt;
        <span class="text-neutral">{{ $t("intro.hi") }}</span
        ><span class="text-blue-600">&lt;/h1&gt;</span>
      </h1>
      <h1 class="text-xl md:text-4xl">
        <span class="text-neutral">puts</span>
        <span class="text-orange-600"> "Fullstack Developer"</span>
      </h1>
      <h1 class="text-xl md:text-4xl">
        <span class="text-purple-700">console</span
        ><span class="text-neutral">.log(</span>
        <span class="text-orange-600">"Frontend Developer"</span>
        <span class="text-neutral">)</span>
      </h1>
      <h1 class="text-xl md:text-4xl">
        <span class="text-green-600">print</span>
        <span class="text-neutral">(</span>
        <span class="text-orange-600">"Youtuber"</span>
        <span class="text-neutral">)</span>
      </h1>
    </div>
    <h1 class="text-xl md:text-4xl">
      {{ $t("intro.currentlyWorking") }}
      <a
        href="https://www.sincnovation.com/en/"
        class="text-2xl md:text-4xl cp-link"
        target="-blank"
        >SINC NOVATION</a
      >
    </h1>
    <div class="flex items-center justify-around flex-wrap w-11/12">
      <CustBtn
        :text="'common.reachout'"
        :link="'#socials'"
      />
      <CustBtn
        :text="'common.projects'"
        :link="'#projects'"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
  .cp-link {
    background-image: url("@/assets/sincBg.webp");
    text-shadow: none;
    background-repeat: no-repeat;
    background-clip: text;
    color: transparent;
    font-weight: bold;
    background-position: center;
    text-transform: uppercase;

    &:hover {
      transition: all ease-in 1s;
      cursor: pointer;
      background-position: top;
    }
  }
  p {
    text-shadow: 0 0 7px rgba(255, 255, 255, 0.3),
      0 0 3px rgba(255, 255, 255, 0.3);
  }
</style>
