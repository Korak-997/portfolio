<script>
  import Badge from "./Badge.vue";
  import CustBtn from "./CustBtn.vue";
  export default {
    name: "ProjectCard",
    props: {
      project: Object,
    },
    components: {
      Badge,
      CustBtn,
    },
    data() {
      return {
        showModal: false,
      };
    },
    methods: {
      getImgPath(name) {
        return name
          ? new URL(`../assets/imgs/projects/${name}`, import.meta.url)
          : "";
      },
    },
  };
</script>
<template>
  <div
    class="flex flex-col max-w-lg p-6 my-4 overflow-hidden rounded-lg shadow-sm shadow-secondary m-4 items-center justify-center"
  >
    <img
      :src="getImgPath(project.image)"
      alt="Project image"
      class="w-11/12"
      width="200"
      height="200"
    />

    <h2 class="text-4xl font-semibold m-4">{{ project.title }}</h2>
    <div
      v-if="project.tags"
      class="flex items-center justify-around w-11/12 flex-wrap"
    >
      <Badge
        v-for="(tag, idx) in project.tags"
        :key="idx"
        :text="tag.name"
        :color="tag.color"
      />
    </div>
    <p>{{ $t(`projects.${project.id}.des`) }}</p>
    <div class="flex flex-wrap justify-center items-center m-2">
      <CustBtn
        v-for="(link, idx) in project.links"
        :key="idx"
        :text="$t(`${link.name}`)"
        :link="link.url"
        out
      />
    </div>
  </div>
</template>
