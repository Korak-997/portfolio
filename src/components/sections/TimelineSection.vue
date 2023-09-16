<script>
  import Flag from "@/assets/flag.png";
  import Berlin from "@/assets/berlin.jpg";
  import ApprenticeShip from "@/assets/apprenticeShip.jpg";
  import DataProcessor from "@/assets/dataProcessor.jpg";
  import German from "@/assets/german.jpg";
  import Leave from "@/assets/leave.jpg";
  import Selftaught from "@/assets/selftaught.jpg";
  import yt from "@/assets/yt.png";

  export default {
    name: "Timeline",
    data() {
      return {
        stories: [
          {
            key: "first",
            img: Flag,
            title: "timeline.first.title",
            date: "18-03-1997",
            des: "timeline.first.des",
          },
          {
            key: "second",
            img: Leave,
            title: "timeline.second.title",
            date: "2016",
            des: "timeline.second.des",
          },
          {
            key: "third",
            img: Berlin,
            title: "timeline.third.title",
            date: "08/2018",
            des: "timeline.third.des",
          },
          {
            key: "fourth",
            img: German,
            title: "timeline.fourth.title",
            date: "2018-2020",
            des: "timeline.fourth.des",
          },
          {
            key: "fifth",
            img: Selftaught,
            title: "timeline.fifth.title",
            date: "2019",
            des: "timeline.fifth.des",
          },
          {
            key: "sixth",
            img: ApprenticeShip,
            title: "timeline.sixth.title",
            date: "08-2020",
            des: "timeline.sixth.des",
          },
          {
            key: "seventh",
            img: yt,
            title: "timeline.seventh.title",
            date: "13-02-2021",
            des: "timeline.seventh.des",
          },
          {
            key: "eighth",
            img: DataProcessor,
            title: "timeline.eighth.title",
            date: "18-09-2023",
            des: "timeline.eighth.des",
          },
        ],
      };
    },
    methods: {},
  };
</script>

<template>
  <div
    v-for="story in stories"
    :key="story.key"
    class="card w-96 h-64"
  >
    <div class="card-inner relative w-full h-full custom-shadow">
      <div
        class="card-front w-full h-full absolute bg-transparent"
        :style="`background:url(${story.img}); background-size:cover; background-repeat: no-repeat; background-position: center;`"
      >
        <div
          class="backdrop-brightness-50 w-full h-full flex items-center justify-center flex-col text-white"
        >
          <h1 class="md:text-4xl text-xl font-bold text-center">
            {{ $t(`${story.title}`) }}
          </h1>
          <p class="text-2xl">{{ $t(`${story.date}`) }}</p>
        </div>
      </div>
      <div
        class="card-back w-full h-full absolute flex items-center justify-center p-2 bg-transparent"
        v-if="story.des.length > 0"
      >
        <p>
          {{ $t(`${story.des}`) }}
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .custom-shadow {
    box-shadow: 0px 0px 6px #7ed957;
  }
  .card {
    perspective: 1000px;
  }

  .card-inner {
    transform-style: preserve-3d;
    transition: transform 0.999s;
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    backface-visibility: hidden;
  }

  .card-front {
    transform: rotateY(0deg);
  }

  .card-back {
    transform: rotateY(180deg);
  }
</style>
