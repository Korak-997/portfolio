<script>
  import Badge from "./Badge.vue";
  import CustBtn from "./CustBtn.vue";
  import AOS from "aos";
  import MockUp from "./MockUp.vue";
  import "aos/dist/aos.css";
  export default {
    name: "ProjectCard",
    props: {
      project: Object,
    },
    components: {
      Badge,
      CustBtn,
      MockUp,
    },
    data() {
      return {
        showModal: false,
      };
    },
    methods: {},
    mounted() {
      AOS.init();
    },
  };
</script>
<template>
  <div
    data-aos="fade-right"
    class="product bg-transparent m-4 w-96 flex items-center justify-center flex-col border border-neutral p-4 rounded-md"
  >
    <MockUp
      name="pc"
      :img="project.images.pc"
    />
    <div class="flex items-center justify-between">
      <MockUp
        name="tablet"
        :img="project.images.tablet"
      />
      <MockUp
        name="phone"
        :img="project.images.phone"
      />
    </div>
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
    <div class="flex flex-wrap justify-center items-center m-2 w-full">
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
