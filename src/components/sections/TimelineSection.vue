<script>
  export default {
    name: "Timeline",
    data() {
      return {
        stories: [
          {
            key: "first",
            title: "timeline.first.title",
            date: "18-03-1997",
            des: "timeline.first.des",
          },
          {
            key: "second",
            title: "timeline.second.title",
            date: "2016",
            des: "timeline.second.des",
          },
          {
            key: "third",
            title: "timeline.third.title",
            date: "08/2018",
            des: "timeline.third.des",
          },
          {
            key: "fourth",
            title: "timeline.fourth.title",
            date: "2018-2020",
            des: "timeline.fourth.des",
          },
          {
            key: "fifth",
            title: "timeline.fifth.title",
            date: "2019",
            des: "timeline.fifth.des",
          },
          {
            key: "sixth",
            title: "timeline.sixth.title",
            date: "08-2020",
            des: "timeline.sixth.des",
          },
          {
            key: "seventh",
            title: "timeline.seventh.title",
            date: "13-02-2021",
            des: "timeline.seventh.des",
          },
        ],
      };
    },
    methods: {},
  };
</script>
<template>
  <section class="text-accent">
    <div class="container max-w-5xl px-4 py-12 mx-auto">
      <div class="grid gap-4 mx-4 sm:grid-cols-12">
        <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
          <div
            class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700"
          >
            <div
              v-for="story in stories"
              :key="story.key"
              class="shadow-2xl p-2 flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary"
            >
              <h3 class="text-xl md:text-6xl font-semibold text-primary tracki">
                {{ $t(`${story.title}`) }}
              </h3>
              <time
                class="tracki uppercase md:text-4xl text-2xl font-bold text-indigo-500"
                >{{ story.date }}</time
              >
              <p class="mt-3 md:text-4xl text-neutral">
                {{ $t(`${story.des}`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
