<script>
  import { Icon } from "@iconify/vue";

  export default {
    name: "TopSocialsBar",

    data() {
      return {
        isGoingDown: false,
      };
    },
    computed: {
      socials() {
        return this.$store.getters.getSocials;
      },
    },
    components: {
      Icon,
    },
    mounted() {
      let oldScrollY = window.scrollY;
      // Attach the scroll event listener when the component is mounted
      window.addEventListener("scroll", () => {
        this.isGoingDown = oldScrollY < window.scrollY;
        oldScrollY = window.scrollY;
      });

      // Clean up the event listener when the component is destroyed
      return () => {
        window.removeEventListener("scroll");
      };
    },
  };
</script>
<template>
  <div
    class="text-neutral flex items-center justify-around w-full p-2 fixed top-0 left-0 h-24 z-50 backdrop-blur-md backdrop-brightness-50"
    :class="{ hidden: !isGoingDown }"
  >
    <a
      v-for="social in socials"
      :key="social.title"
      :href="social.url"
      target="_blank"
      class="text-4xl social-icon p-4 rounded-full"
      rel="noopener noreferrer"
      :aria-label="social.title"
    >
      <Icon :icon="social.icon" />
    </a>
  </div>
</template>
<style lang="scss" scoped>
  .social-icon {
    transition: all ease-in-out 0.4s;
    &:nth-child(1):hover {
      background: #000;
      color: snow;
      box-shadow: 0 0 10px snow;
    }
    &:nth-child(2):hover {
      background: linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 55%,
        #cc2366 90%,
        #bc1888 100%
      );
      color: snow;
      box-shadow: 0 0 10px #bc1888;
    }
    &:nth-child(3):hover {
      background: #c4302b;
      color: snow;
      box-shadow: 0 0 10px #c4302b;
    }
    &:nth-child(4):hover {
      background: #0072b1;
      color: snow;
      box-shadow: 0 0 10px #0072b1;
    }
    &:nth-child(5):hover {
      background: #0056d2;
      color: snow;
      box-shadow: 0 0 10px #0056d2;
    }
  }
</style>
