<script>
  import ContactForm from "../ContactForm.vue";
  import SocialsBar from "../SocialsBar.vue";
  export default {
    name: "SocialsSection",
    components: {
      ContactForm,
      SocialsBar,
    },

    methods: {},
  };
</script>
<template>
  <div class="flex items-center justify-around flex-col">
    <SocialsBar />
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
