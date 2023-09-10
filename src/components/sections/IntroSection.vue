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
    <div
      class="container uppercase flex items-center font-brice justify-around font-bold text-xl md:text-4xl"
    >
      <p>{{ $t("intro.hi") }}</p>
      <section class="animation h-10 overflow-hidden">
        <div class="bg-indigo-700 text-center p-2">
          <p>Korak</p>
        </div>
        <div class="bg-purple-700 text-center p-2">
          <p>Web Dev</p>
        </div>
        <div class="bg-orange-600 text-center p-2">
          <p>Full-Stack Dev</p>
        </div>
      </section>
    </div>

    <h1 class="font-brice text-2xl md:text-4xl sh">
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
        :text="'common.readMore'"
        :link="'#timeline'"
      />
    </div>
    <SocialsBar :onlyIcon="true" />
  </div>
</template>
<style scoped lang="scss">
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
  p {
    text-shadow: 0 0 7px rgba(255, 255, 255, 0.3),
      0 0 3px rgba(255, 255, 255, 0.3);
  }

  .animation {
    div {
      &:first-child {
        animation: text-animation 5s infinite;
      }
    }
  }

  @keyframes text-animation {
    0% {
      margin-top: 0rem;
    }

    100% {
      margin-top: -5.5rem;
    }
  }

  @keyframes lights {
    0% {
      text-shadow: 0 0 5px #fff, 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #206b0b,
        0 0 4px #206b0b, 0 0 5px #206b0b, 0 0 10px #206b0b, 0 0 15px #206b0b;
    }
    100% {
      text-shadow: 0 0 5px #fff, 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #39b616,
        0 0 4px #39b616, 0 0 5px #39b616, 0 0 10px #39b616, 0 0 15px #39b616;
    }
  }
</style>
