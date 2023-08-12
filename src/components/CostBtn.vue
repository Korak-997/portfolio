<script>
  export default {
    name: "ContactBtn",
    props: {
      text: String,
      action: String,
    },
  };
</script>
<template>
  <button class="my-6">
    <a
      href="#socials"
      class="w-full h-full"
      >{{ $t(`${text}`) }}</a
    >
  </button>
</template>

<style lang="scss" scoped>
  button {
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
    border: none;
    outline: none;
    border-radius: 0.4rem;
    cursor: pointer;
    text-transform: uppercase;
    background-color: #00667a;
    color: rgb(234, 234, 234);
    font-weight: 700;
    transition: 0.6s;
    box-shadow: 0px 0px 60px #1f4c65;
    -webkit-box-reflect: below 10px
      linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
    &:active {
      scale: 0.92;
    }
    &:hover {
      background: #7ed957;
      background: linear-gradient(270deg, #201726 0%, #00667a 60%);
      color: rgb(4, 4, 38);
    }
  }
</style>
