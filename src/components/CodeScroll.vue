<script>
  export default {
    name: "CodeScroll",
  };
</script>
<template>
  <div class="loading-blurbs md:text-4xl text-xl w-full">
    <code class="html">
      <span class="text-blue-600">&lt;h1</span>
      <span class="text-cyan-500"> class</span> =
      <span class="text-orange-600">"vip"</span>&gt;
      <span class="text-neutral"
        ><strong>{{ $t("intro.hi") }}</strong></span
      ><span class="text-blue-600">&lt;/h1&gt;</span>
    </code>
    <code class="ruby">
      <span class="text-neutral">puts</span>
      <span class="text-orange-600">
        "<strong>Fullstack Developer</strong>"</span
      >
    </code>
    <code class="js">
      <span class="text-purple-700">console</span
      ><span class="text-neutral">.log(</span>
      <span class="text-orange-600">"<strong>Frontend Developer</strong>"</span>
      <span class="text-neutral">)</span>
    </code>
    <code class="python">
      <span class="text-green-600">print</span>
      <span class="text-neutral">(</span>
      <span class="text-orange-600">"<strong>Youtuber</strong>"</span>
      <span class="text-neutral">)</span>
    </code>
  </div>
</template>
<style lang="scss" scoped>
  .loading-blurbs code {
    --animation-duration: 2.5s;
    display: block;
    position: absolute;
    width: 100%;
    bottom: 0;
    animation-name: move;
    animation-duration: calc(var(--animation-duration) * 4);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    opacity: 0;
  }

  @keyframes move {
    from {
      transform: translateY(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    70% {
      opacity: 0;
    }
    100% {
      transform: translateY(-400px);
    }
  }

  .loading-blurbs code.html {
    animation-delay: calc(var(--animation-duration));
  }
  .loading-blurbs code.ruby {
    animation-delay: calc(var(--animation-duration) * 2);
  }

  .loading-blurbs code.js {
    animation-delay: calc(var(--animation-duration) * 3);
  }

  .loading-blurbs code.python {
    animation-delay: calc(var(--animation-duration) * 4);
  }
</style>
