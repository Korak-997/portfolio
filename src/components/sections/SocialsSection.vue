<script>
  import Icon from "@iconify/svelte";
  export default {
    name: "SocialsSection",
    data() {
      return {
        socials: [
          {
            title: "Github",
            url: "https://github.com/Korak-997",
            icon: "mdi:github",
          },
          {
            title: "Instagram",
            url: "https://www.instagram.com/korak997/",
            icon: "mdi:instagram",
          },
          {
            title: "Youtube",
            url: "https://www.youtube.com/channel/UC9j6pieJxlXmpq0k7kV1VDg",
            icon: "mdi:youtube",
          },
        ],
      };
    },
    methods: {},
  };
</script>
<template>
  <div class="w-11/12 flex items-center justify-around flex-wrap shadow-2xl">
    <button
      v-for="social in socials"
      :key="social.title"
      class="my-6 uppercase p-4 relative text-4xl bg-transparent border-none"
    >
      <a
        :href="social.url"
        target="_blank"
        class="relative z-10"
      >
        <Icon :icon="social.icon" />
        {{ social.title }}
      </a>
      <i class="absolute block inset-0"></i>
    </button>
  </div>
</template>

<style lang="scss" scoped>
  button {
    transition: 0.5s;
    &:hover {
      letter-spacing: 0.25em;
    }
    &::before {
      content: "";
      position: absolute;
      inset: 2px;
      background: transparent;
    }
    &:nth-child(1) {
      &:hover {
        background: #000;
        color: snow;
        box-shadow: 0 0 45px snow;
      }
    }
    &:nth-child(2) {
      &:hover {
        background: linear-gradient(
          45deg,
          #f09433 0%,
          #e6683c 25%,
          #dc2743 55%,
          #cc2366 90%,
          #bc1888 100%
        );
        color: snow;
        box-shadow: 0 0 45px #bc1888;
      }
    }
    &:nth-child(3) {
      &:hover {
        background: #c4302b;
        color: snow;
        box-shadow: 0 0 45px #c4302b;
      }
    }
    i {
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 0.5em;
        height: 0.1em;
        transform: translateX(-50%);
        transition: 0.5s;
      }
      &::before {
        top: -0.3em;
        left: 90%;
      }
      &::after {
        bottom: -0.3em;
        left: 10%;
      }
      &:nth-child(1) {
        &::before,
        &::after {
          border: 2px solid #00a48c;
          background: red;
        }
      }
      &:nth-child(2) {
        &::before,
        &::after {
          border: 2px solid #bc1888;
          background: linear-gradient(
            45deg,
            #f09433 0%,
            #e6683c 25%,
            #dc2743 55%,
            #cc2366 90%,
            #bc1888 100%
          );
        }
      }
      &:nth-child(3) {
        &::before,
        &::after {
          border: 2px solid #c4302b;
          background: #c4302b;
        }
      }
    }
    &:hover i::before {
      width: 20px;
      left: 20%;
    }
    &:hover i::after {
      width: 20px;
      left: 80%;
    }
  }
</style>
