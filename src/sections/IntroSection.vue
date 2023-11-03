<script>
  import CustBtn from "@/components/CustBtn.vue";
  import SocialsBar from "@/components/SocialsBar.vue";
  export default {
    name: "IntroSection",
    components: { CustBtn, SocialsBar },
    data() {
      return {
        titles: [
          "korak",
          "Web Dev",
          "Full-stack dev",
          "Youtuber",
          "Data Processor",
        ],
        colors: [
          "bg-indigo-700 shadow-indigo-500/50",
          "bg-purple-700 shadow-purple-500/50",
          "bg-orange-600 shadow-orange-400/50",
          "bg-red-700 shadow-red-500/50",
          "bg-cyan-700 shadow-cyan-500/50",
        ],
      };
    },
  };
</script>
<template>
  <div class="flex items-center justify-around flex-col text-center gap-10">
    <div
      class="container uppercase font-bold text-xl md:text-4xl flex items-center justify-evenly"
    >
      <p>{{ $t("intro.hi") }}</p>
      <section class="animation h-10 overflow-hidden">
        <div
          v-for="(title, idx) in titles"
          :key="idx"
          :class="colors[idx]"
          class="text-center p-2 shadow-lg m-4"
        >
          <p>{{ title }}</p>
        </div>
      </section>
    </div>

    <h1 class="text-2xl md:text-4xl">
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

  .animation {
    div {
      &:first-child {
        animation: text-animation 20s infinite;
      }
    }
  }

  @keyframes text-animation {
    0% {
      margin-top: 0rem;
    }
    30% {
      margin-top: -5.5rem;
    }
    40% {
      margin-top: -10.5rem;
    }
    50% {
      margin-top: -15.5rem;
    }
    60% {
      margin-top: -20.5rem;
    }
    70% {
      margin-top: -15.5rem;
    }
    80% {
      margin-top: -10.5rem;
    }
    90% {
      margin-top: -5.5rem;
    }
    100% {
      margin-top: 0;
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
