<script>
  import Badge from "@/components/Badge.vue";
  export default {
    name: "ProjectsSection",
    computed: {
      projects() {
        return this.$store.getters.getProjects;
      },
    },
    components: {
      Badge,
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
        class="card w-96 bg-base-100 shadow-md shadow-accent m-4"
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
              class="w-full mt-4 flex items-center justify-between flex-wrap"
            >
              <a
                v-for="(link, idx) in project.links"
                :key="idx"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-transparent p-2 text-accent rounded-full relative text-md shadow-sm shadow-accent overflow-hidden"
                >{{ $t(`${link.name}`) }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-around flex-wrap p-4">
    <div
      class="card w-96 bg-base-100 shadow-md shadow-primary"
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
        <h2 class="card-title text-primary">
          {{ $t(`${project.title}`) }}
        </h2>
        <p>{{ $t(`projects.${project.id}.des`) }}</p>
        <div class="card-actions flex items-center justify-around flex-col">
          <div>
            <Badge
              v-for="(tag, idx) in project.tags"
              :key="idx"
              :text="tag.name"
              :color="tag.color"
            />
          </div>
          <div class="w-11/12 mt-4 flex items-center justify-between flex-wrap">
            <a
              v-for="(link, idx) in project.links"
              :key="idx"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-sm btn-outline btn-accent"
              >{{ $t(`${link.name}`) }}</a
            >
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
