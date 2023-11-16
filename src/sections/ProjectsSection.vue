<script>
  import Badge from "@/components/Badge.vue";
  import CustBtn from "../components/CustBtn.vue";
  export default {
    name: "ProjectsSection",
    computed: {
      projects() {
        return this.$store.getters.getProjects;
      },
    },
    components: {
      Badge,
      CustBtn,
    },
  };
</script>
<template>
  <div class="flex items-center justify-around flex-col">
    <h1 class="my-4 text-primary font-bold text-4xl md:text-6xl p-2">
      {{ $t("projects.title") }}
    </h1>
    <div class="flex items-center justify-around flex-wrap p-4 w-11/12">
      <div
        class="card w-96 bg-base-100 border border-accent m-4"
        v-for="project in projects"
        :key="project.id"
      >
        <figure v-if="project.img">
          <img
            :src="project.img"
            :alt="`${project.name} Preview image`"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-primary text-4xl">
            {{ $t(`${project.title}`) }}
          </h2>
          <p class="text-2xl">{{ $t(`projects.${project.id}.des`) }}</p>
          <div class="card-actions flex items-center justify-around flex-col">
            <div>
              <Badge
                v-for="(tag, idx) in project.tags"
                :key="idx"
                :text="tag.name"
                :color="tag.color"
              />
            </div>
            <div
              class="w-full mt-4 flex items-center justify-around flex-wrap gap-4"
            >
              <CustBtn
                v-for="(link, idx) in project.links"
                :key="idx"
                :text="$t(`${link.name}`)"
                :link="link.url"
                out
              />
            </div>
          </div>
        </div>
      </div>
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
