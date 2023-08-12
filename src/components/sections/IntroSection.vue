<script>
  import ContactBtn from "../CostBtn.vue";
  export default {
    name: "IntroSection",
    components: { ContactBtn },
  };
</script>
<template>
  <div class="h-screen w-full flex items-center justify-around flex-col">
    <div
      class="text-center uppercase font-bold text-snow md:text-12xl text-4xl"
    >
      <h1 class="my-6 intro-text">{{ $t("intro.hi") }}</h1>
      <h1 class="my-6 intro-text">{{ $t("intro.coding") }}</h1>
      <ContactBtn
        text="common.reachout"
        action="none"
      />
    </div>
    <div class="wrap -z-10 absolute">
      <div
        v-for="index in 500"
        :key="index"
        class="c"
      />
    </div>
  </div>
</template>

<style lang="scss" scooped>
  $total: 500;
  $orb-size: 200px;
  $particle-size: 2px;
  $time: 14s;
  $base-hue: 150;

  @font-face {
    font-family: "Brice";
    src: url("/fonts/Bricemont.ttf");
  }

  .intro-text {
    text-shadow: 3px -2px 3px #00a48c, 1px -2px 2px #00a48c;
    font-family: "Brice";
  }

  .wrap {
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    transform-style: preserve-3d;
    perspective: 1000px;
    animation: rotate $time infinite linear;
  }

  @keyframes rotate {
    100% {
      transform: rotateY(360deg) rotateX(360deg);
    }
  }

  .c {
    position: absolute;
    width: $particle-size;
    height: $particle-size;
    border-radius: 50%;
    opacity: 0;
  }

  @for $i from 1 through $total {
    $z: (random(360) * 1deg);
    $y: (random(360) * 1deg);
    $hue: calc(calc(40 / $total * $i) + $base-hue);

    .c:nth-child(#{$i}) {
      animation: orbit#{$i} $time infinite;
      animation-delay: ($i * 0.01s);
      background-color: hsla($hue, 100%, 50%, 1);
    }

    @keyframes orbit#{$i} {
      20% {
        opacity: 1;
      }
      30% {
        transform: rotateZ(-$z) rotateY($y) translateX($orb-size) rotateZ($z);
      }
      80% {
        transform: rotateZ(-$z) rotateY($y) translateX($orb-size) rotateZ($z);
        opacity: 1;
      }
      100% {
        transform: rotateZ(-$z) rotateY($y) translateX(($orb-size * 3))
          rotateZ($z);
      }
    }
  }
</style>
