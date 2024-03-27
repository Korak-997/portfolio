import { Icon } from "@iconify/react";
function IntroSection() {
  return (
    <div className="w-full h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 1422 800"
        className="h-full -z-40 absolute top-0 left-0"
      >
        <defs>
          <linearGradient
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="oooscillate-grad"
          >
            <stop
              stopColor="hsl(105, 69%, 40%)"
              stopOpacity="1"
              offset="0%"
            ></stop>
            <stop
              stopColor="hsl(105, 69%, 60%)"
              stopOpacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <g
          strokeWidth="3"
          stroke="url(#oooscillate-grad)"
          fill="none"
          strokeLinecap="round"
        >
          <path
            d="M 0 1185 Q 355.5 325 711 400 Q 1066.5 475 1422 1185"
            strokeDasharray="125 125"
            opacity="0.96"
          ></path>
          <path
            d="M 0 1106 Q 355.5 325 711 400 Q 1066.5 475 1422 1106"
            strokeDasharray="11 74"
            opacity="0.12"
          ></path>
          <path
            d="M 0 1027 Q 355.5 325 711 400 Q 1066.5 475 1422 1027"
            strokeDasharray="28 124"
            opacity="0.87"
          ></path>
          <path
            d="M 0 948 Q 355.5 325 711 400 Q 1066.5 475 1422 948"
            strokeDasharray="124 63"
            opacity="0.13"
          ></path>
          <path
            d="M 0 869 Q 355.5 325 711 400 Q 1066.5 475 1422 869"
            strokeDasharray="131 95"
            opacity="0.56"
          ></path>
          <path
            d="M 0 790 Q 355.5 325 711 400 Q 1066.5 475 1422 790"
            strokeDasharray="69 8"
            opacity="0.36"
          ></path>
          <path
            d="M 0 711 Q 355.5 325 711 400 Q 1066.5 475 1422 711"
            strokeDasharray="24 58"
            opacity="0.50"
          ></path>
          <path
            d="M 0 632 Q 355.5 325 711 400 Q 1066.5 475 1422 632"
            strokeDasharray="50 88"
            opacity="0.08"
          ></path>
          <path
            d="M 0 553 Q 355.5 325 711 400 Q 1066.5 475 1422 553"
            strokeDasharray="80 16"
            opacity="0.43"
          ></path>
          <path
            d="M 0 474 Q 355.5 325 711 400 Q 1066.5 475 1422 474"
            strokeDasharray="22 12"
            opacity="0.51"
          ></path>
          <path
            d="M 0 395 Q 355.5 325 711 400 Q 1066.5 475 1422 395"
            strokeDasharray="65 132"
            opacity="0.10"
          ></path>
          <path
            d="M 0 316 Q 355.5 325 711 400 Q 1066.5 475 1422 316"
            strokeDasharray="64 127"
            opacity="0.99"
          ></path>
          <path
            d="M 0 237 Q 355.5 325 711 400 Q 1066.5 475 1422 237"
            strokeDasharray="2 79"
            opacity="0.75"
          ></path>
          <path
            d="M 0 158 Q 355.5 325 711 400 Q 1066.5 475 1422 158"
            strokeDasharray="72 62"
            opacity="0.61"
          ></path>
        </g>
      </svg>
      <div className="h-full w-full z-10 flex items-center justify-center">
        <div className="backdrop-blur-md w-11/12 flex items-center justify-center p-4 rounded-md">
          <h1 className="text-6xl">Hi i am</h1>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
