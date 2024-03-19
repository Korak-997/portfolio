<script>
  import { Icon } from "@iconify/vue";
  export default {
    name: "CusBtn",
    props: {
      text: String,
      link: String,
      out: Boolean,
      colorClasses: String,
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
    :class="colorClasses"
    class="group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 duration-500 before:duration-500 hover:duration-500 hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none origin-left hover:decoration-2 relative bg-transparent h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:right-8 after:top-3 after:rounded-full after:blur m-2"
    :aria-label="link"
    target="_blank"
    rel="noopener noreferrer"
    >{{ $t(`${text}`)
    }}<Icon
      icon="iconoir:open-new-window"
      class="mx-2 inline"
    />
  </a>
  <a
    v-else
    :href="link"
    :class="colorClasses"
    class="group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 duration-500 before:duration-500 hover:duration-500 hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none origin-left hover:decoration-2 relative bg-transparent h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:right-8 after:top-3 after:rounded-full after:blur m-2"
    >{{ $t(`${text}`) }}</a
  >
</template>
