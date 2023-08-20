<script>
  import IntroSection from "../components/sections/IntroSection.vue";
  import SkillsSection from "../components/sections/SkillsSection.vue";
  import SocialsSection from "../components/sections/SocialsSection.vue";
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
    <IntroSection />
    <SkillsSection />
    <TimelineSection />
    <SocialsSection id="socials" />
  </div>
</template>
