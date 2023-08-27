<script>
  export default {
    name: "CusBtn",
    props: {
      text: String,
      action: String,
      link: String,
    },
  };
</script>
<template>
  <button>
    <a
      :href="link"
      class="w-full h-full"
      >{{ $t(`${text}`) }}</a
    >
  </button>
</template>

<style lang="scss" scoped>
  button {
    margin: 4rem 0;
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
    border: none;
    outline: none;
    border-radius: 0.4rem;
    cursor: pointer;
    text-transform: uppercase;
    background-color: darken($color: #7ed957, $amount: 20%);
    color: rgb(234, 234, 234);
    font-weight: 700;
    transition: 0.6s;
    box-shadow: 0px 0px 40px #7ed957;
    -webkit-box-reflect: below 10px
      linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
    &:active {
      scale: 0.92;
    }
    &:hover {
      background: #7ed957;
      background: linear-gradient(270deg, #1de4c0 10%, #7ed957 60%);
      color: rgb(4, 4, 38);
    }
  }
</style>
