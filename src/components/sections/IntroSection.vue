<script>
  import CustBtn from "../CustBtn.vue";
  import SocialsBar from "../SocialsBar.vue";
  export default {
    name: "IntroSection",
    components: { CustBtn, SocialsBar },
  };
</script>
<template>
  <div class="flex items-center justify-around flex-col text-center gap-10">
    <h1 class="font-brice text-6xl sh">{{ $t("intro.hi") }}</h1>
    <h1 class="font-brice text-2xl md:text-4xl sh">
      {{ $t("intro.currentlyWorking") }}
      <a
        href="https://www.sincnovation.com/en/"
        class="text-2xl md:text-4xl cp-link"
        target="-blank"
        >SINC NOVATION</a
      >
    </h1>
    <div class="flex items-center justify-around flex-wrap">
      <CustBtn
        :text="'common.reachout'"
        :link="'#socials'"
      />

      <CustBtn
        :text="'common.readMore'"
        :link="'#timeline'"
      />
    </div>
    <div class="w-11/12 slogan">
      <h1 class="md:text-6xl text-4xl font-bold">
        {{ $t("intro.coding") }}
      </h1>
    </div>
    <SocialsBar :onlyIcon="true" />
  </div>
</template>
<style scoped lang="scss">
  .slogan {
    h1 {
      text-align: center;
      font-family: "Dakdo";

      background: linear-gradient(
        to right,
        rgba(0, 255, 228, 1) 20%,
        rgba(126, 217, 87, 1) 40%,
        rgba(29, 228, 192, 1) 60%,
        rgba(126, 217, 87, 1) 80%
      );
      background-size: 200% auto;

      color: #000;
      background-clip: text;
      color: transparent;
      background-clip: text;

      animation: shine 5s linear infinite;
      @keyframes shine {
        to {
          background-position: 200% center;
        }
      }
    }
  }
  .cp-link {
    background-image: url("../../assets/sincBg.png");
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
</style>
