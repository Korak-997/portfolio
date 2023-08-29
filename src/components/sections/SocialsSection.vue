<script>
  import ContactForm from "../ContactForm.vue";
  export default {
    name: "SocialsSection",
    components: {
      ContactForm,
    },
    data() {
      return {
        socials: [
          {
            title: "Github",
            url: "https://github.com/Korak-997",
          },
          {
            title: "Instagram",
            url: "https://www.instagram.com/korak997/",
          },
          {
            title: "Youtube",
            url: "https://www.youtube.com/channel/UC9j6pieJxlXmpq0k7kV1VDg",
          },
        ],
      };
    },
    methods: {},
  };
</script>
<template>
  <div class="flex items-center justify-around flex-col">
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
    <ContactForm />
  </div>
</template>

<style lang="scss" scoped>
  a {
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
  }
</style>
