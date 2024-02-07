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
    class="relative py-2 px-8 text-white text-base font-bold nded-full overflow-hidden bg-primary rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-primary before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
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
    class="relative py-2 px-8 text-white text-base font-bold nded-full overflow-hidden bg-primary rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-primary before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
    >{{ $t(`${text}`) }}</a
  >
</template>
