<script>
  import ContactForm from "@/components/ContactForm.vue";
  import SocialsBar from "@/components/SocialsBar.vue";
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
