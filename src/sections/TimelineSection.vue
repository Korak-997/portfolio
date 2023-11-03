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
            des: false,
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
          {
            key: "eighth",
            title: "timeline.eighth.title",
            date: "18-09-2023",
            des: "timeline.eighth.des",
          },
        ],
      };
    },
  };
</script>

<template>
  <ol
    class="border-l-2 border-accent w-11/12"
    v-for="story in stories"
    :key="story.key"
  >
    <li>
      <div class="flex-start flex items-center">
        <div
          class="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-accent"
        ></div>
        <h1 class="-mt-4 md:text-4xl text-xl font-bold text-center">
          {{ $t(`${story.title}`) }}
        </h1>
      </div>
      <div class="mb-6 ml-6 pb-6 w-11/12">
        <p class="text-2xl md:text-4xl text-primary">
          {{ $t(`${story.date}`) }}
        </p>
        <p
          v-if="story.des"
          class="mb-4 mt-2 text-neutral-600 dark:text-neutral-300"
        >
          {{ $t(`${story.des}`) }}
        </p>
      </div>
    </li>
  </ol>
</template>
