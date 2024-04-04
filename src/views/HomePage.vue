<script>
  import IntroSection from "../sections/IntroSection.vue";

  import SocialsSection from "../sections/ContactsSection.vue";
  import ProjectsSection from "../sections/ProjectsSection.vue";
  import SkillsSection from "../sections/SkillsSection.vue";

  export default {
    name: "HomePage",

    components: {
      IntroSection,
      SocialsSection,
      ProjectsSection,
      SkillsSection,
    },
  };
</script>
<template>
  <div class="flex flex-col items-center justify-center w-full">
    <div class="h-screen">
      <IntroSection />
    </div>
    <div>
      <SkillsSection />
    </div>
    <div
      id="projects"
      class="w-full"
    >
      <ProjectsSection />
    </div>
    <div>
      <SocialsSection id="socials" />
    </div>
  </div>
</template>
