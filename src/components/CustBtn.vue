<script>
  import { Icon } from "@iconify/vue";
  export default {
    name: "CusBtn",
    props: {
      text: String,
      link: String,
      out: Boolean,
    },
    components: {
      Icon,
    },
  };
</script>
<template>
  <a
    v-if="out"
    :href="link"
    class="button text-secondary md:text-2xl text-md flex items-center justify-around w-52"
    :aria-label="link"
    :target="_blank"
    >{{ $t(`${text}`)
    }}<Icon
      icon="iconoir:open-new-window"
      class="mx-2"
    />
  </a>
  <a
    v-else
    :href="link"
    class="button text-secondary md:text-2xl text-md"
    :aria-label="link"
    >{{ $t(`${text}`) }}</a
  >
</template>

<style lang="scss" scoped>
  .button {
    padding: 12px 24px;
    border: 1px solid #4f4f4f;
    border-radius: 4px;
    transition: all 0.2s ease-in;
    position: relative;
    overflow: hidden;
    font-size: 19px;
    z-index: 1;
  }

  .button:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: transparent;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #a11ed9;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button:hover {
    color: #ffffff;
    border: 1px solid #a11ed9;
  }

  .button:hover:before {
    top: -35%;
    background-color: #a11ed9;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  .button:hover:after {
    top: -45%;
    background-color: #a11ed9;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
</style>
