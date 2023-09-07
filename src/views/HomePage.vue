<script>
  import IntroSection from "../components/sections/IntroSection.vue";
  import SkillsSection from "../components/sections/SkillsSection.vue";
  import SocialsSection from "../components/sections/ContactsSection.vue";
  import TimelineSection from "../components/sections/TimelineSection.vue";
  export default {
    data() {
      return {};
    },
    components: {
      IntroSection,
      SkillsSection,
      TimelineSection,
      SocialsSection,
    },
    methods: {},
  };
</script>
<template>
  <div class="flex flex-col items-center justify-center">
    <div>
      <IntroSection />
    </div>
    <div class="my-6">
      <SkillsSection />
    </div>
    <div class="my-4">
      <TimelineSection />
    </div>
    <div class="my-4">
      <SocialsSection id="socials" />
    </div>
  </div>
</template>
