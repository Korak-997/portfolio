<script>
  import Badge from "./Badge.vue";
  import CustBtn from "./CustBtn.vue";
  import AOS from "aos";
  import { Icon } from "@iconify/vue";
  import "aos/dist/aos.css";
  export default {
    name: "ProjectCard",
    props: {
      project: Object,
    },
    components: {
      Badge,
      CustBtn,
      Icon,
    },
    data() {
      return {
        showModal: false,
      };
    },
    methods: {
      getImgPath(name) {
        return name
          ? new URL(`../assets/ScreenShots/${name}`, import.meta.url)
          : "";
      },
    },
    mounted() {
      AOS.init();
    },
  };
</script>
<template>
  <div
    data-aos="fade-right"
    class="product m-4 w-96 flex items-center justify-center flex-col rounded-md backdrop-blur-2xl bg-transparent shadow-xl"
  >
    <img
      :src="getImgPath(project.img)"
      alt="project preview"
    />

    <h1 class="text-4xl font-semibold m-4">{{ project.title }}</h1>
    <p>{{ $t(`projects.${project.id}.des`) }}</p>
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
    <div
      v-if="project.techstack"
      class="my-4"
    >
      <h3 class="my-2 text-2xl">{{ $t("projects.tech") }}</h3>
      <div class="flex items-center gap-4 justify-around w-11/12 flex-wrap">
        <Icon
          v-for="tech in project.techstack"
          :key="tech.icon"
          :icon="tech.icon"
          class="text-4xl"
        />
      </div>
    </div>

    <div class="flex flex-wrap justify-center items-center m-2 w-full">
      <CustBtn
        v-for="(link, idx) in project.links"
        :key="idx"
        :text="$t(`${link.name}`)"
        :link="link.url"
        colorClasses="hover:text-secondary before:bg-secondary after:bg-cyan-600 hover:border-cyan-600 w-11/12"
        out
      />
    </div>
  </div>
</template>
