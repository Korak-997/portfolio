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
      class="container uppercase flex items-center justify-around font-bold text-xl md:text-4xl"
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
</style>
