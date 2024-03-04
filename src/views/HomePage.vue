<script>
  import IntroSection from "../sections/IntroSection.vue";

  import SocialsSection from "../sections/ContactsSection.vue";
  import ProjectsSection from "../sections/ProjectsSection.vue";
  import AboutSection from "../sections/AboutSection.vue";

  export default {
    name: "HomePage",

    components: {
      IntroSection,
      SocialsSection,
      ProjectsSection,
      AboutSection,
    },
  };
</script>
<template>
  <div class="flex flex-col items-center justify-center w-full">
    <div class="h-screen">
      <IntroSection />
    </div>
    <div
      id="projects"
      class="flex items-center justify-center flex-wrap my-6"
    >
      <ProjectsSection />
    </div>
    <div id="about">
      <AboutSection />
    </div>
    <div>
      <SocialsSection id="socials" />
    </div>
  </div>
</template>
