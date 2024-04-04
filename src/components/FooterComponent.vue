<script>
  import { Icon } from "@iconify/vue";

  export default {
    name: "FooterComponent",

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
    class="btm-nav lg:hidden md:hidden bg-base-100 text-neutral z-50"
    :class="{ hidden: isGoingDown }"
  >
    <a
      href="#projects"
      class="hover:text-secondary text-4xl"
    >
      <Icon icon="la:project-diagram" />
    </a>
    <a
      href="#socials"
      class="hover:text-secondary text-4xl"
    >
      <Icon icon="grommet-icons:contact" />
    </a>
    <a
      href="#about"
      class="hover:text-secondary text-4xl"
    >
      <Icon icon="fluent:person-info-20-regular" />
    </a>
  </div>
</template>
