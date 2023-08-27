<script>
  import CloseBtn from "./CloseBtn.vue";
  export default {
    name: "FlashMsg",
    props: {
      code: String,
      show: Boolean,
    },
    components: { CloseBtn },
  };
</script>
<template>
  <div
    class="modal text-center"
    :class="{ 'modal-open': show }"
  >
    <div class="modal-box">
      <CloseBtn @close="() => $router.go('')" />
      <h1 class="my-4 text-6xl font-bold text-success">{{ code }}</h1>
      <div class="alert alert-success w-11/12 mx-auto">
        <h3>{{ $t("flash.appointmentSaved") }}</h3>
      </div>
    </div>
  </div>
</template>
