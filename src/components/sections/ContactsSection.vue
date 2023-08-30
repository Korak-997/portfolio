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
    <SocialsBar :onlyIcon="false" />
    <ContactForm />
  </div>
</template>
