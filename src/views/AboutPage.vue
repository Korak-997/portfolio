<script>
  export default {
    name: "HomePage",
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
    components: {},
    methods: {},
  };
</script>
<template>
  <!-- <div
    class="timeline"
    v-for="story in stories"
    :key="story.key"
  >
    <h2 class="timeline__item timeline__item--year">
      {{ $t(`${story.date}`) }}
    </h2>
    <div class="timeline__item">
      <h3 class="timeline__title">{{ $t(`${story.title}`) }}</h3>
      <p
        v-if="story.des"
        class="mb-4 mt-2 text-neutral-600 dark:text-neutral-300"
      >
        {{ $t(`${story.des}`) }}
      </p>
    </div>
  </div> -->

  <ul
    class="p-4 lg:p-8"
    v-for="story in stories"
    :key="story.key"
  >
    <li>
      <article
        class="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 bg-base-200 shadow-xl"
      >
        <h3
          class="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9 text-2xl text-primary"
        >
          {{ $t(`${story.title}`) }}
        </h3>
        <time
          datetime=""
          class="row-start-1 mb-1 md:col-start-1 xl:col-span-2 text-2xl text-accent"
          >{{ $t(`${story.date}`) }}</time
        >
        <p
          class="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0"
          v-if="story.des"
        >
          {{ $t(`${story.des}`) }}
        </p>
      </article>
    </li>
  </ul>
</template>
