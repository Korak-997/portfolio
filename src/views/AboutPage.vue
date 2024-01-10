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
  <div
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
  </div>
</template>
<style lang="scss" scoped>
  $color: #4ca626;
  $lineColor: #4ca626;
  $fontColor: #bbb;
  $bgColor1: #222;
  $bgColor2: #444;
  $yearBgColor: #333;

  $breakpoint: 700px;

  h1 {
    text-align: center;
    font-family: "Raleway", sans-serif;
  }

  .timeline {
    position: relative;
    padding: 1rem;
    margin: 0 auto;
    max-width: 1300px;

    &:before {
      content: "";
      position: absolute;
      height: 100%;
      border: 1px solid $lineColor;
      right: 40px;
      top: 0;
    }

    &:after {
      content: "";
      display: table;
      clear: both;
    }

    @media screen and (min-width: $breakpoint) {
      padding: 2rem;
      &:before {
        left: calc(50% - 1px);
        right: auto;
      }
    }
    @media screen and (max-width: $breakpoint) {
      &:before {
        content: "";
        height: 0;
        border: none;
        right: 0;
        top: 0;
      }
    }
  }

  .timeline__item {
    padding: 1rem;
    border: 2px solid $lineColor;
    border-image: linear-gradient(to right, $color 0%, $lineColor 100%);
    border-image-slice: 1;
    position: relative;
    margin: 1rem 3rem 1rem 1rem;
    clear: both;

    &:after,
    &:before {
      content: "";
      position: absolute;
    }

    &:before {
      right: -10px;
      top: calc(50% - 5px);
      border-style: solid;
      border-color: $lineColor $lineColor transparent transparent;
      border-width: 10px;
      transform: rotate(45deg);
    }

    @media screen and (min-width: $breakpoint) {
      width: 44%;
      margin: 1rem;

      &:nth-of-type(2n) {
        float: right;
        margin: 1rem;
        border-image: linear-gradient(to right, $lineColor 0%, $color 100%);
        border-image-slice: 1;

        &:before {
          right: auto;
          left: -10px;
          border-color: transparent transparent $lineColor $lineColor;
        }
      }
    }
    @media screen and (max-width: $breakpoint) {
      &:before {
        right: 0;
        top: 0;
        border-style: none;
      }
    }
  }

  .timeline__item--year {
    text-align: center;
    max-width: 150px;
    margin: 0 48px 0 auto;
    background-color: $yearBgColor;
    line-height: 1;
    border-image: none;
    padding: 0.5rem 1rem 1rem;

    &:before {
      display: none;
    }

    @media screen and (min-width: $breakpoint) {
      text-align: center;
      margin: 0 auto;

      &:nth-of-type(2n) {
        float: none;
        margin: 0 auto;
        border-image: none;

        &:before {
          display: none;
        }
      }
    }
  }

  .timeline__title {
    margin: 0;
    font-size: 1.5em;
  }

  .timeline__blurb {
    line-height: 1.5;
    font-size: 1rem;
    margin: 0.5rem 0 0;
  }

  @media screen and (max-width: $breakpoint) {
    .timeline__item {
      float: right;
      clear: none;
      margin: 1rem;
    }
    .timeline__item--year {
      margin: 0 auto;
      float: none;
    }
  }
</style>
