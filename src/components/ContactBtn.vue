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
  <button>{{ $t(`${text}`) }}</button>
</template>

<style lang="scss" scoped>
  button {
    margin-top: 4rem;
    width: 10em;
    position: relative;
    height: 3.5em;
    border: 3px ridge #7ed957;
    outline: none;
    background-color: transparent;
    color: #00667a;
    transition: 1s;
    border-radius: 0.3em;
    font-size: 2rem;
    font-weight: bold;
    &::after {
      content: "";
      position: absolute;
      top: -10px;
      left: 3%;
      width: 95%;
      height: 40%;
      background-color: #181717;
      transition: 0.5s;
      transform-origin: center;
    }
    &::before {
      content: "";
      transform-origin: center;
      position: absolute;
      top: 80%;
      left: 3%;
      width: 95%;
      height: 40%;
      background-color: #181717;
      transition: 0.5s;
    }
    &:hover::before,
    &:hover::after {
      transform: scale(0);
    }
    &:hover {
      box-shadow: inset 0px 0px 25px #7ed957;
      color: #00a48c;
    }
  }
</style>
