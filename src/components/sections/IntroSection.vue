<script>
  export default {
    name: "IntroSection",
  };
</script>
<template>
  <div class="h-screen w-full">
    <div class="wrap">
      <div
        v-for="i in 600"
        :key="i"
        class="c"
      ></div>
    </div>
    <div class="flex items-center justify-top flex-col text-center">
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
  </div>
</template>
<style scoped lang="scss">
  $total: 600; // total particles
  $orb-size: 150px;
  $particle-size: 2px;
  $time: 30s;
  $base-hue: 150;

  .wrap {
    position: relative;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    transform-style: preserve-3d;
    perspective: 100000px;
    animation: rotate $time infinite linear; // rotate orb
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
    $z: (random(360) * 1deg); // random angle to rotateZ
    $y: (random(360) * 1deg); // random to rotateX
    $hue: ((40 / $total * $i) + $base-hue); // set hue

    .c:nth-child(#{$i}) {
      // grab the nth particle
      animation: orbit#{$i} $time infinite;
      animation-delay: ($i * 0.01s);
      background-color: hsla($hue, 100%, 50%, 1);
    }

    @keyframes orbit#{$i} {
      20% {
        opacity: 1; // fade in
      }
      30% {
        transform: rotateZ(-$z) rotateY($y) translateX($orb-size) rotateZ($z); // form orb
      }
      80% {
        transform: rotateZ(-$z) rotateY($y) translateX($orb-size) rotateZ($z); // hold orb state 30-80
        opacity: 1; // hold opacity 20-80
      }
      100% {
        transform: rotateZ(-$z) rotateY($y) translateX(($orb-size)) rotateZ($z); // translateX * 3
      }
    }
  }

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
    &:hover {
      transition: all ease-in 1s;
      cursor: pointer;
      background-position: top;
    }
  }
</style>
