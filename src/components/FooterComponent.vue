<script>
  import { Icon } from "@iconify/vue";

  export default {
    name: "Footer",

    data() {
      return {
        isGoingDown: false,
      };
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
    class="btm-nav lg:hidden md:hidden bg-base-300"
    :class="{ hidden: isGoingDown }"
  >
    <a
      href="#projects"
      class="text-primary hover:text-secondary active:text-secondary text-4xl"
    >
      <Icon icon="la:project-diagram" />
    </a>
    <a
      href="#socials"
      class="text-primary hover:text-secondary active:text-secondary text-4xl"
    >
      <Icon icon="grommet-icons:contact" />
    </a>
    <a
      href="#about"
      class="text-primary hover:text-secondary active:text-secondary text-4xl"
    >
      <Icon icon="fluent:person-info-20-regular" />
    </a>
  </div>
</template>
