<script>
  import CustBtn from "@/components/CustBtn.vue";
  import SocialsBar from "@/components/SocialsBar.vue";
  import CodeScroll from "../components/CodeScroll.vue";
  export default {
    name: "IntroSection",
    components: { CustBtn, SocialsBar, CodeScroll },
  };
</script>
<template>
  <div
    class="flex items-center justify-around flex-col text-center gap-4 h-full"
  >
    <SocialsBar :onlyIcon="true" />
    <div class="flex items-center justify-around flex-wrap w-11/12">
      <CustBtn
        :text="'common.reachout'"
        :link="'#socials'"
      />
      <CustBtn
        :text="'common.readMore'"
        :link="'/about'"
      />
      <CustBtn
        :text="'common.projects'"
        :link="'#projects'"
      />
    </div>
    <CodeScroll />
  </div>
</template>
<style scoped lang="scss">
  .cp-link {
    background-image: url("@/assets/sincBg.webp");
    text-shadow: none;
    background-repeat: no-repeat;
    background-clip: text;
    color: transparent;
    font-weight: bold;
    background-position: center;
    text-transform: uppercase;

    &:hover {
      transition: all ease-in 1s;
      cursor: pointer;
      background-position: top;
    }
  }
  p {
    text-shadow: 0 0 7px rgba(255, 255, 255, 0.3),
      0 0 3px rgba(255, 255, 255, 0.3);
  }
</style>
