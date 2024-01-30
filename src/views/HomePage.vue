<script>
  import IntroSection from "../sections/IntroSection.vue";

  import SocialsSection from "../sections/ContactsSection.vue";
  import ProjectsSection from "../sections/ProjectsSection.vue";

  export default {
    name: "HomePage",

    components: {
      IntroSection,
      SocialsSection,
      ProjectsSection,
    },
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
    <div class="w-11/12">
      <SocialsSection id="socials" />
    </div>
  </div>
</template>
