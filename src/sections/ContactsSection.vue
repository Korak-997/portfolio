<script>
  import FlashMsg from "../components/FlashMsg.vue";
  import SocialsBar from "../components/SocialsBar.vue";
  import LoadingModal from "../components/LoadingModal.vue";
  export default {
    name: "ContactsSection",
    components: {
      LoadingModal,
      FlashMsg,
      SocialsBar,
    },
    data() {
      return {
        flashText: "form.sendSuccess",
        flashType: "alert-success",
        flashShow: false,
        loadingText: "form.loading",
        loadingShow: false,
      };
    },
    methods: {
      async send(e) {
        e.preventDefault();
        this.loadingShow = true;
        const data = new FormData(e.target);
        try {
          const res = await fetch("https://formspree.io/f/mjvqwjry", {
            method: "POST",
            body: data,
            headers: {
              Accept: "application/json",
            },
          });
          this.loadingShow = false;
          if (res.ok) {
            this.flashShow = true;
          } else {
            this.flashText = "form.sendFailed";
            this.flashType = "alert-error";
            this.flashShow = true;
          }
        } catch (err) {
          this.loadingShow = false;
          this.flashText = "form.sendFailed";
          this.flashType = "alert-error";
          this.flashShow = true;
        }
      },
    },
  };
</script>
<template>
  <div
    class="flex items-center justify-around flex-wrap gap-4 my-6 w-full text-center"
  >
    <FlashMsg
      :text="flashText"
      :type="flashType"
      :show="flashShow"
    />
    <LoadingModal
      :text="loadingText"
      :show="loadingShow"
    />
    <div>
      <h1
        class="text-4xl md:text-6xl text-neutral font-bold my-6 text-center w-full"
      >
        {{ $t("common.reachout") }}
      </h1>
      <SocialsBar :onlyIcon="false" />
    </div>
    <form
      @submit="send"
      class="backdrop-blur-2xl bg-transparent px-4 py-2 shadow-xl"
    >
      <div class="form-control w-full max-w-lg">
        <label
          class="label"
          for="email"
        >
          <span class="label-text text-2xl">{{ $t("form.yourEmail") }}</span>
        </label>
        <input
          type="email"
          id="email"
          placeholder="test@test.com"
          class="input input-bordered input-accent w-full max-w-lg"
          autocomplete="off"
          required
          name="email"
        />
      </div>
      <div class="form-control w-full max-w-lg">
        <label
          class="label"
          for="name"
        >
          <span class="label-text text-2xl">{{ $t("form.yourName") }}</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Joe Doe"
          class="input input-bordered input-accent w-full max-w-lg"
          autocomplete="off"
          required
          name="name"
        />
      </div>
      <div class="form-control w-full max-w-lg">
        <label
          class="label"
          for="text"
        >
          <span class="label-text text-2xl">{{ $t("form.text") }}</span>
        </label>
        <textarea
          id="text"
          class="textarea textarea-accent"
          required
          name="text"
        ></textarea>
      </div>
      <button
        type="submit"
        class="btn btn-md md:btn-xl my-6 text-2xl font-bold bg-transparent text-primary border-primary hover:bg-primary hover:text-white"
      >
        {{ $t("form.send") }}
      </button>
    </form>
  </div>
</template>
<style scoped>
  button {
    transition: all ease-in 0.6s;
  }
</style>
