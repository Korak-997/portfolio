<script>
export default {
  name: "SpinnerModal",
  props: {
    show: Boolean,
  },
};
</script>
<template>
  <div class="modal text-center" :class="{ 'modal-open': show }">
    <div class="spinner"></div>
  </div>
</template>
<style scoped>
.spinner {
  width: 88px;
  height: 88px;
  display: grid;
  border: 7px solid #0000;
  border-radius: 50%;
  border-color: #dbdcef #0000;
  animation: spinner-e04l1k 1.2s infinite linear;
}

.spinner::before,
.spinner::after {
  content: "";
  grid-area: 1/1;
  margin: 3.5px;
  border: inherit;
  border-radius: 50%;
}

.spinner::before {
  border-color: #f7f7fb #0000;
  animation: inherit;
  animation-duration: 0.6s;
  animation-direction: reverse;
}

.spinner::after {
  margin: 14px;
}

@keyframes spinner-e04l1k {
  100% {
    transform: rotate(1turn);
  }
}
</style>
