<script>
  export default {
    name: "AlertMsg",
    props: {
      text: String,
      show: Boolean,
    },
  };
</script>
<template>
  <div
    class="modal text-center"
    :class="{ 'modal-open': show }"
  >
    <div class="modal-box">
      <div class="alert w-11/12">
        <div>
          <h3>{{ $t(text) }}</h3>
        </div>
        <div class="flex-none">
          <button
            @click="$emit('deny')"
            class="btn btn-sm btn-ghost"
          >
            {{ $t("common.deny") }}
          </button>
          <button
            @click="$emit('accept')"
            class="btn btn-sm"
            :class="{ 'btn-error': text == 'proveCancel' }"
          >
            {{ $t("common.accept") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
