<script>
  import IntroSection from "../sections/IntroSection.vue";

  import SocialsSection from "../sections/ContactsSection.vue";
  import ProjectsSection from "../sections/ProjectsSection.vue";
  import TerminalSection from "../sections/TerminalSection.vue";
  export default {
    name: "HomePage",
    data() {
      return {
        showTerminal: false,
      };
    },
    components: {
      IntroSection,
      SocialsSection,
      ProjectsSection,
      TerminalSection,
    },
  };
</script>
<template>
  <div class="flex flex-col items-center justify-center">
    <div class="w-11/12">
      <IntroSection />
    </div>
    <div
      id="terminal"
      class="w-11/12 flex items-center justify-around gap-10 flex-wrap my-6"
    >
      <TerminalSection
        @closeTerminal="() => (showTerminal = false)"
        v-if="showTerminal"
      />

      <div
        v-else
        class="flex flex-col items-center justify-center gap-4"
      >
        <button
          class="btn btn-primary btn-outline"
          @click="() => (showTerminal = true)"
        >
          {{ $t("home.showTerminal") }}
        </button>
      </div>
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
