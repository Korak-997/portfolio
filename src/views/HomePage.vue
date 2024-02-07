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
  <div class="flex flex-col items-center justify-center">
    <div class="h-screen w-full">
      <IntroSection />
    </div>
    <div
      id="projects"
      class="flex items-center justify-around gap-10 flex-wrap my-6"
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
