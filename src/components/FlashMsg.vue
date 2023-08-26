<script>
  import CloseBtn from "./CloseBtn.vue";
  export default {
    name: "FlashMsg",
    props: {
      text: String,
      type: String,
      show: Boolean,
    },
    components: {
      CloseBtn,
    },
  };
</script>
<template>
  <div
    class="modal text-center"
    :class="{ 'modal-open': show }"
  >
    <div
      class="modal-box flex items-center justify-center w-full h-full flex-col"
    >
      <CloseBtn @close="() => $router.go('')" />
      <div
        class="alert w-full"
        :class="type"
      >
        <div>
          <h3 class="text-4xl md:text-6xl">{{ $t(text) }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
