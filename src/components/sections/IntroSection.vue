<script>
  export default {
    name: "IntroSection",
  };
</script>
<template>
  <div class="h-screen">
    <div class="wraper w-screen text-primary">
      <div
        class="noise pointer-events-none absolute w-full h-full bg-no-repeat bg-cover -z-10"
      ></div>
      <div class="overlay pointer-events-none absolute w-full h-full"></div>
      <div class="terminal uppercase absolute w-full h-full p-4">
        <h1 class="intro-text text-6xl mb-6">{{ $t("intro.hi") }}</h1>
        <h1 class="intro-text text-4xl mb-6">{{ $t("intro.coding") }}</h1>
        <div class="my-6">
          <a
            href="#socials"
            class="text-white text-2xl"
            >[{{ $t("common.reachout") }}]</a
          >
        </div>
      </div>
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

  .wraper {
    background-color: #000000;
    background-image: radial-gradient(#11581e, #041607),
      url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif");
    background-repeat: no-repeat;
    background-size: cover;
    text-shadow: 0 0 1ex rgba(51, 255, 51, 1), 0 0 2px rgba(255, 255, 255, 0.8);
    .noise {
      background-image: url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif");
      opacity: 0.02;
    }
    .overlay {
      background: repeating-linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0,
        rgba(0, 0, 0, 0.3) 50%,
        rgba(0, 0, 0, 0) 100%
      );
      background-size: auto 4px;
      z-index: 1;
      &::before {
        content: "";
        pointer-events: none;
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
          0deg,
          transparent 0%,
          rgba(32, 128, 32, 0.2) 2%,
          rgba(32, 128, 32, 0.8) 3%,
          rgba(32, 128, 32, 0.2) 3%,
          transparent 100%
        );
        background-repeat: no-repeat;
        animation: scan 7.5s linear 0s infinite;
      }
    }

    .output {
      color: rgba(128, 255, 128, 0.8);
      text-shadow: 0 0 1px rgba(51, 255, 51, 0.4),
        0 0 2px rgba(255, 255, 255, 0.8);
      &::before {
        content: "> ";
      }
    }
  }

  @keyframes scan {
    0% {
      background-position: 0 -100vh;
    }
    100% {
      background-position: 0 100vh;
    }
  }
</style>
