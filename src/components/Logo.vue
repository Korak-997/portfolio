<script>
  export default {
    name: "logo",
    data() {
      return {
        hovered: false,
      };
    },
  };
</script>
<template>
  <div>
    <a
      href="/"
      aria-label="Homepage_link"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="hover:shadow-md"
        @mouseenter="() => (hovered = true)"
        @mouseleave="() => (hovered = false)"
      >
        <path
          d="M2.30737 0.866455V52.1879H10.6094C13.492 56.3852 16.3764 60.8576 19.3468 65.7544C22.4068 70.5078 26.3374 76.9413 31.1441 84.771C36.0387 92.6035 39.009 97.3569 40.0571 99.1746H51.0679L18.3865 46.735L48.884 0.866455H38.1347L10.6094 42.4001V0.866455H2.30737ZM2.30737 64.2148V99.1746H10.6094V64.2148H2.30737Z"
          fill="#7ED957"
          :class="{ 'path-hover': hovered }"
        />
        <path
          d="M98.2097 99.0204V47.6989H89.9076C87.025 43.5016 84.1406 39.0292 81.1703 34.1324C78.1103 29.379 74.1796 22.9455 69.3729 15.1159C64.4784 7.28332 61.508 2.52992 60.46 0.712271H49.4491L82.1305 53.1519L51.633 99.0204L62.3823 99.0204L89.9076 57.4867V99.0204H98.2097ZM98.2097 35.672L98.2097 0.712271H89.9076V35.672H98.2097Z"
          fill="#7ED957"
          :class="{ 'path-hover': hovered }"
        />
      </svg>
    </a>
  </div>
</template>

<style scoped>
  path {
    fill: none;
    stroke: #7ed957;
    pointer-events: all;
    transition: all ease-in 0.3s;
  }
  .path-hover {
    fill: #7ed957;
    filter: drop-shadow(3px 3px 5px #58f016);
    stroke: none;
    pointer-events: all;
  }
</style>
