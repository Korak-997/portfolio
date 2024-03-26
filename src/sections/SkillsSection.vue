<script>
  import { Icon } from "@iconify/vue";
  export default {
    name: "SkillsSection",
    computed: {
      skills() {
        return this.$store.getters.getSkills;
      },
    },
    components: {
      Icon,
    },
  };
</script>
<template>
  <div
    class="flex items-center justify-around text-center gap-20 flex-col w-full"
  >
    <h1 class="text-6xl font-extrabold">{{ $t("skills.title") }}</h1>
    <div
      class="flex items-center justify-around text-center gap-10 w-full flex-wrap"
    >
      <div
        v-for="skill in skills"
        :key="skill.name"
        :class="`rounded-2xl shadow-sm ${skill.color1}`"
      >
        <div
          :class="`${skill.color2} group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24  after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20  before:rounded-full before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 flex justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8`"
        >
          <div class="z-10 flex flex-col items-center gap-2">
            <span class="text-6xl font-bold"><Icon :icon="skill.icon" /></span>
            <p class="text-gray-50">{{ skill.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
