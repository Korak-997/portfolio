<script>
  export default {
    name: "Badge",
    props: {
      color: String,
      text: String,
    },
    data() {
      return {
        colorNames: "",
      };
    },
    methods: {
      getColorNames(color) {
        switch (color) {
          case "red":
            return "text-red-700 ring-red-600/10 bg-red-300";
          case "green":
            return "text-green-700 ring-green-600/10 bg-green-300";
          case "blue":
            return "text-blue-700 ring-blue-600/10 bg-blue-300";
          case "indigo":
            return "text-indigo-700 ring-indigo-600/10 bg-indigo-300";
          case "yellow":
            return "text-yellow-700 ring-yellow-600/10 bg-yellow-300";
        }
      },
    },
  };
</script>
<template>
  <span
    class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset m-2"
    :class="getColorNames(color)"
    >{{ text }}</span
  >
</template>
