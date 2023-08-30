<script>
  export default {
    name: "SocialsBar",
    data() {
      return {
        socials: [
          {
            title: "Github",
            icon: "",
            url: "https://github.com/Korak-997",
          },
          {
            title: "Instagram",
            icon: "",
            url: "https://www.instagram.com/korak997/",
          },
          {
            title: "Youtube",
            icon: "",
            url: "https://www.youtube.com/channel/UC9j6pieJxlXmpq0k7kV1VDg",
          },
        ],
      };
    },
  };
</script>
<template>
  <div class="w-11/12 flex items-center justify-around flex-wrap gap-4">
    <a
      v-for="social in socials"
      :key="social.title"
      class="uppercase relative text-2xl bg-transparent p-2 rounded-full font-bold"
      :href="social.url"
      target="_blank"
      :aria-label="social.title"
    >
      {{ social.title }}
    </a>
  </div>
</template>
