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
    class="button border border-primary p-4 rounded-md relative overflow-hidden z-10 text-primary md:text-2xl text-md"
    :aria-label="link"
    target="_blank"
    >{{ $t(`${text}`)
    }}<Icon
      icon="iconoir:open-new-window"
      class="mx-2 inline"
    />
  </a>
  <a
    v-else
    :href="link"
    class="button border border-primary py-2 px-4 rounded-md relative overflow-hidden z-10 text-primary md:text-2xl text-md"
    :aria-label="link"
    >{{ $t(`${text}`) }}</a
  >
</template>

<style lang="scss" scoped>
  .button {
    transition: all 0.2s ease-in;
    &::before {
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
    &::after {
      content: "";
      position: absolute;
      left: 55%;
      transform: translateX(-50%) scaleY(1) scaleX(1.45);
      top: 180%;
      width: 160%;
      height: 190%;
      background-color: #3c69f1;
      border-radius: 50%;
      display: block;
      transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
      z-index: -1;
    }
    &:hover {
      color: #ffffff;
      border: 1px solid #3c69f1;
    }

    &:hover:before {
      top: -35%;
      background-color: #3c69f1;
      transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }

    &:hover:after {
      top: -45%;
      background-color: #3c69f1;
      transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }
  }
</style>
