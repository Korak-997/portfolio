<script>
  import ProjectCard from "../components/ProjectCard.vue";
  export default {
    name: "ProjectsSection",
    computed: {
      projects() {
        return this.$store.getters.getProjects;
      },
    },
    components: {
      ProjectCard,
    },
  };
</script>
<template>
  <div class="flex items-center justify-around flex-col bg-pattern w-full">
    <h1 class="my-4 text-white font-bold text-4xl md:text-6xl p-2">
      {{ $t("projects.title") }}
    </h1>
    <div class="flex items-center justify-around flex-wrap mx-auto w-11/12">
      <ProjectCard
        :project="project"
        v-for="project in projects"
        :key="project.id"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
  a {
    border: unset;
    color: var(--accent);
    z-index: 1;
    transition: all 250ms;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0;
      border-radius: 15px;
      z-index: -1;
      transition: all 250ms;
      background-color: var(--accent);
    }
    &:hover {
      color: #e8e8e8;
      &::before {
        width: 100%;
      }
    }
  }
</style>
