<script>
  import IntroSection from "../sections/IntroSection.vue";
  import SkillsSection from "../sections/SkillsSection.vue";
  import SocialsSection from "../sections/ContactsSection.vue";
  import TimelineSection from "../sections/TimelineSection.vue";
  import ProjectsSection from "../sections/ProjectsSection.vue";
  export default {
    name: "HomePage",
    data() {
      return {};
    },
    components: {
      IntroSection,
      SkillsSection,
      TimelineSection,
      SocialsSection,
      ProjectsSection,
    },
    methods: {},
  };
</script>
<template>
  <div class="flex flex-col items-center justify-center">
    <div class="w-11/12">
      <IntroSection />
    </div>
    <div
      id="projects"
      class="w-11/12 flex items-center justify-around gap-10 flex-wrap my-6"
    >
      <ProjectsSection />
    </div>
    <div
      id="timeline"
      class="w-11/12 flex items-center justify-around gap-10 flex-wrap my-6"
    >
      <TimelineSection />
    </div>
    <div class="w-11/12">
      <SocialsSection id="socials" />
    </div>
  </div>
</template>
