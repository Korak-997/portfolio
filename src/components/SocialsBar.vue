<script>
  import { Icon } from "@iconify/vue";
  export default {
    name: "SocialsBar",
    props: {
      onlyIcon: Boolean,
    },
    components: {
      Icon,
    },
    computed: {
      socials() {
        return this.$store.getters.getSocials;
      },
    },
  };
</script>
<template>
  <div
    class="w-11/12 flex items-center justify-around flex-wrap gap-2 md:gap-6 md:my-6"
  >
    <li
      v-for="social in socials"
      :key="social.title"
      class="list-none rounded-full p-2"
    >
      <a
        class="text-6xl"
        :href="social.url"
        target="_blank"
        :aria-label="social.title"
        v-if="onlyIcon"
        rel="noopener noreferrer"
      >
        <Icon :icon="social.icon" />
      </a>
      <a
        class="uppercase relative text-4xl font-bold flex items-center justify-between"
        :href="social.url"
        target="_blank"
        :aria-label="social.title"
        rel="noopener noreferrer"
        v-else
      >
        <Icon
          :icon="social.icon"
          class="mx-2"
        />
        {{ social.title }}
      </a>
    </li>
  </div>
</template>
<style lang="scss" scoped>
  li {
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
