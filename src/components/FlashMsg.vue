<script>
export default {
  name: "FlashMsg",
  props: {
    text: String,
    type: String,
    show: Boolean
  },
};
</script>
<template>
  <div class="modal text-center" :class="{ 'modal-open': show }">
    <div class="modal-box">
      <div class="alert shadow-lg w-11/12" :class="type">
        <div>
          <h3>{{ $t(text) }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
