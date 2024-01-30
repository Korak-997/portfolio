<script>
  import Badge from "./Badge.vue";
  import CustBtn from "./CustBtn.vue";
  export default {
    name: "ProjectCard",
    props: {
      project: Object,
    },
    components: {
      Badge,
      CustBtn,
    },
    data() {
      return {
        showModal: false,
      };
    },
    methods: {
      getImgPath(name) {
        return name
          ? new URL("../assets/imgs/projects/" + name, import.meta.url)
          : "";
      },
    },
  };
</script>
<template>
  <div
    class="flex flex-col max-w-lg p-6 my-4 overflow-hidden rounded-lg shadow-md shadow-primary m-4"
  >
    <ProjectDescriptionModal
      :text="project.description"
      :show="showModal"
    />
    <div class="flex items-center justify-between w-full">
      <svg
        v-if="project.images"
        class="w-2/3"
        viewBox="0 0 787 458"
        fill="none"
        version="1.1"
        id="svg9"
        xml:space="preserve"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"
      >
        <g
          filter="url(#filter0_d_602_4)"
          id="g7"
        >
          <rect
            x="121.07"
            y="13"
            width="544.94098"
            height="367.40799"
            rx="26"
            fill="#334155"
            id="rect1"
          />
          <rect
            x="123.444"
            y="15.3734"
            width="539.71899"
            height="362.186"
            rx="23"
            fill="#0f172a"
            id="rect2"
          />
          <path
            d="m 38,378.56 c 0,-0.553 0.4477,-1 1,-1 h 708.606 c 0.553,0 1,0.447 1,1 v 1.373 H 38 Z"
            fill="#0f172a"
            id="path3"
          />
          <path
            d="m 38,379.933 h 710.606 c -33.807,9.875 -63.75,12.031 -122.469,14.241 H 162.843 C 111.588,392.769 84.2516,389.616 38,379.933 Z"
            fill="#334155"
            id="path4"
          />
          <path
            d="m 333.255,377.56 h 119.147 v 1.272 c 0,1.657 -1.343,3 -3,3 H 336.255 c -1.657,0 -3,-1.343 -3,-3 z"
            fill="#d0d0d0"
            id="path5"
          />
          <path
            d="m 447.655,377.56 h 4.747 v 1.272 c 0,1.657 -1.343,3 -3,3 h -1.747 z"
            fill="#334155"
            id="path6"
          />
          <path
            d="m 338.002,377.56 h -4.747 v 1.272 c 0,1.657 1.343,3 3,3 h 1.747 z"
            fill="#334155"
            id="path7"
          />
          <image
            width="473.37595"
            height="307.84317"
            preserveAspectRatio="none"
            style="image-rendering: optimizeQuality"
            :xlink:href="getImgPath(project.images.pc)"
            id="image1"
            x="146.42326"
            y="38.694157"
            clip-path="url(#clipPath12)"
            transform="matrix(1.1358315,0,0,1,-20.086131,0)"
          />
        </g>
        <defs id="defs9">
          <filter
            id="filter0_d_602_4"
            x="0"
            y="0"
            width="786.60602"
            height="457.17401"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood
              flood-opacity="0"
              result="BackgroundImageFix"
              id="feFlood7"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
              id="feColorMatrix7"
            />
            <feMorphology
              radius="12"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_602_4"
              id="feMorphology7"
            />
            <feOffset
              dy="25"
              id="feOffset7"
            />
            <feGaussianBlur
              stdDeviation="25"
              id="feGaussianBlur7"
            />
            <feComposite
              in2="hardAlpha"
              operator="out"
              id="feComposite7"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              id="feColorMatrix8"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_602_4"
              id="feBlend8"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_602_4"
              result="shape"
              id="feBlend9"
            />
          </filter>
          <clipPath
            clipPathUnits="userSpaceOnUse"
            id="clipPath12"
          >
            <rect
              width="432.54745"
              height="307.59698"
              fill="#bcbcbc"
              id="rect12"
              x="147.8754"
              y="39.026039"
              style="stroke-width: 0.938303"
            />
          </clipPath>
        </defs>
      </svg>

      <svg
        v-if="project.images"
        class="w-1/3"
        viewBox="0 0 201 331"
        fill="none"
        version="1.1"
        id="svg11"
        xml:space="preserve"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"
      >
        <g
          filter="url(#filter0_d_602_2)"
          id="g9"
        >
          <path
            d="m 38,53.0707 c 0,-0.303 0.2456,-0.5486 0.5486,-0.5486 h 2.5792 c 0.303,0 0.5487,0.2456 0.5487,0.5486 v 9.013 c 0,0.303 -0.2457,0.5487 -0.5487,0.5487 H 38.5486 C 38.2456,62.6324 38,62.3867 38,62.0837 Z"
            fill="#ebecf0"
            id="path1"
          />
          <path
            d="m 38,71.4531 c 0,-0.303 0.2456,-0.5487 0.5486,-0.5487 h 2.5792 c 0.303,0 0.5487,0.2457 0.5487,0.5487 v 18.2042 c 0,0.303 -0.2457,0.5486 -0.5487,0.5486 H 38.5486 C 38.2456,90.2059 38,89.9603 38,89.6573 Z"
            fill="#ebecf0"
            id="path2"
          />
          <path
            d="m 38,96.2693 c 0,-0.303 0.2456,-0.5487 0.5486,-0.5487 h 2.5792 c 0.303,0 0.5487,0.2457 0.5487,0.5487 v 18.2037 c 0,0.303 -0.2457,0.549 -0.5487,0.549 H 38.5486 C 38.2456,115.022 38,114.776 38,114.473 Z"
            fill="#ebecf0"
            id="path3"
          />
          <path
            d="m 159.323,78.806 c 0,-0.303 0.246,-0.5486 0.549,-0.5486 h 2.579 c 0.303,0 0.549,0.2456 0.549,0.5486 v 28.315 c 0,0.303 -0.246,0.548 -0.549,0.548 h -2.579 c -0.303,0 -0.549,-0.245 -0.549,-0.548 z"
            fill="#ebecf0"
            id="path4"
          />
          <path
            d="M 38.919,23.4242 C 38.919,17.6671 43.5861,13 49.3432,13 H 151.657 c 5.757,0 10.424,4.6671 10.424,10.4242 V 257.171 c 0,5.758 -4.667,10.425 -10.424,10.425 H 49.3432 c -5.7571,0 -10.4242,-4.667 -10.4242,-10.425 z"
            fill="#0f172a"
            id="path5"
          />
          <path
            d="m 44.4338,25.5613 c 0,-3.8917 3.1549,-7.0466 7.0466,-7.0466 H 149.52 c 3.891,0 7.046,3.1549 7.046,7.0466 V 255.034 c 0,3.892 -3.155,7.047 -7.046,7.047 H 51.4804 c -3.8917,0 -7.0466,-3.155 -7.0466,-7.047 z"
            fill="#0f172a"
            id="path6"
          />
          <image
            width="112.06865"
            height="265.27139"
            preserveAspectRatio="none"
            style="image-rendering: optimizeQuality"
            :xlink:href="getImgPath(project.images.phone)"
            id="image1"
            x="45.86924"
            y="-3.5175574"
            clip-path="url(#clipPath11)"
            transform="translate(-1.6522584,1.0500512)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="m 39.8383,23.7947 c 0,-5.4541 4.4215,-9.8755 9.8756,-9.8755 H 151.286 c 5.454,0 9.876,4.4214 9.876,9.8755 V 256.801 c 0,5.454 -4.422,9.876 -9.876,9.876 H 49.7139 c -5.4541,0 -9.8756,-4.422 -9.8756,-9.876 z m 4.5957,2.401 c 0,-4.2421 3.4389,-7.681 7.681,-7.681 h 18.0543 v 5.3507 c 0,2.1211 1.7195,3.8405 3.8405,3.8405 h 52.9812 c 2.121,0 3.84,-1.7194 3.84,-3.8405 v -5.3507 h 18.054 c 4.242,0 7.681,3.4389 7.681,7.681 V 254.4 c 0,4.242 -3.439,7.681 -7.681,7.681 h -96.77 c -4.2421,0 -7.681,-3.439 -7.681,-7.681 z"
            fill="#0f172a"
            id="path7"
          />
          <path
            d="m 91.3084,21.2724 c 0,-0.5077 0.4115,-0.9192 0.9191,-0.9192 h 16.5445 c 0.507,0 0.919,0.4115 0.919,0.9192 0,0.5076 -0.412,0.9191 -0.919,0.9191 H 92.2275 c -0.5076,0 -0.9191,-0.4115 -0.9191,-0.9191 z"
            fill="#bebfc3"
            id="path8"
          />
          <path
            d="m 117.963,21.2721 c 0,1.0152 -0.823,1.8382 -1.838,1.8382 -1.015,0 -1.838,-0.823 -1.838,-1.8382 0,-1.0153 0.823,-1.8383 1.838,-1.8383 1.015,0 1.838,0.823 1.838,1.8383 z"
            fill="#bcbdbf"
            id="path9"
          />
        </g>
        <defs id="defs11">
          <filter
            id="filter0_d_602_2"
            x="0"
            y="0"
            width="201"
            height="331"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood
              flood-opacity="0"
              result="BackgroundImageFix"
              id="feFlood9"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
              id="feColorMatrix9"
            />
            <feMorphology
              radius="12"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_602_2"
              id="feMorphology9"
            />
            <feOffset
              dy="25"
              id="feOffset9"
            />
            <feGaussianBlur
              stdDeviation="25"
              id="feGaussianBlur9"
            />
            <feComposite
              in2="hardAlpha"
              operator="out"
              id="feComposite9"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              id="feColorMatrix10"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_602_2"
              id="feBlend10"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_602_2"
              result="shape"
              id="feBlend11"
            />
          </filter>
          <clipPath
            clipPathUnits="userSpaceOnUse"
            id="clipPath11"
          >
            <rect
              width="112.132"
              height="243.56599"
              fill="#bcbcbc"
              id="rect11"
              x="45.413345"
              y="18.284107"
              style="fill: #bcbcbc; fill-opacity: 0.565535"
            />
          </clipPath>
        </defs>
      </svg>
    </div>

    <h2 class="text-4xl font-semibold m-4">{{ project.title }}</h2>
    <div
      v-if="project.tags"
      class="flex items-center justify-around w-11/12 flex-wrap"
    >
      <Badge
        v-for="(tag, idx) in project.tags"
        :key="idx"
        :text="tag.name"
        :color="tag.color"
      />
    </div>
    <p>{{ $t(`projects.${project.id}.des`) }}</p>
    <div class="flex flex-wrap justify-between m-2">
      <CustBtn
        v-for="(link, idx) in project.links"
        :key="idx"
        :text="$t(`${link.name}`)"
        :link="link.url"
        out
      />
    </div>
  </div>
</template>
