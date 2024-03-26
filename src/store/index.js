import { createStore } from "vuex";

export default createStore({
  state: {
    skills: [
      {
        name: "Github",
        icon: "mdi:github",
        color1: "bg-white0 shadow-white",
        color2: "after:bg-white before:bg-white",
      },
      {
        name: "Git",
        icon: "devicon:git",
        color1: "bg-orange-700 shadow-orange-500",
        color2: "after:bg-orange-700 before:bg-orange-400",
      },
      {
        name: "NodeJs",
        icon: "logos:nodejs-icon",
        color1: "bg-green-700 shadow-green-500",
        color2: "after:bg-green-700 before:bg-green-400",
      },
      {
        name: "Html",
        icon: "devicon:html5",
        color1: "bg-orange-700 shadow-orange-500",
        color2: "after:bg-orange-700 before:bg-orange-400",
      },
      {
        name: "Css",
        icon: "devicon:css3",
        color1: "bg-blue-700 shadow-blue-500",
        color2: "after:bg-blue-700 before:bg-blue-400",
      },
      {
        name: "Javascript",
        icon: "logos:javascript",
        color1: "bg-yellow-700 shadow-yellow-500",
        color2: "after:bg-yellow-700 before:bg-yellow-400",
      },
      {
        name: "TailwindCss",
        icon: "devicon:tailwindcss",
        color1: "bg-cyan-700 shadow-cyan-500",
        color2: "after:bg-cyan-700 before:bg-cyan-400",
      },
      {
        name: "Scss",
        icon: "vscode-icons:file-type-scss",
        color1: "bg-pink-700 shadow-pink-500",
        color2: "after:bg-pink-700 before:bg-pink-400",
      },
      {
        name: "VueJs",
        icon: "devicon:vuejs",
        color1: "bg-green-700 shadow-green-500",
        color2: "after:bg-green-700 before:bg-green-400",
      },
      {
        name: "Svelte",
        icon: "devicon:svelte",
        color1: "bg-orange-700 shadow-orange-500",
        color2: "after:bg-orange-700 before:bg-orange-400",
      },
      {
        name: "Ruby",
        icon: "logos:ruby",
        color: "rose",
        color1: "bg-rose-700 shadow-rose-500",
        color2: "after:bg-rose-700 before:bg-rose-400",
      },
      {
        name: "Ruby On Rails",
        icon: "logos:rails",
        color1: "bg-rose-700 shadow-rose-500",
        color2: "after:bg-rose-700 before:bg-rose-400",
      },
      {
        name: "PostgreSql",
        icon: "logos:postgresql",
        color1: "bg-blue-700 shadow-blue-500",
        color2: "after:bg-blue-700 before:bg-blue-400",
      },
      {
        name: "MySQL",
        icon: "logos:mysql",
        color1: "bg-blue-700 shadow-blue-500",
        color2: "after:bg-blue-700 before:bg-blue-400",
      },
      {
        name: "Supabase",
        icon: "devicon:supabase",
        color1: "bg-green-700 shadow-green-500",
        color2: "after:bg-green-700 before:bg-green-400",
      },
      {
        name: "Windows",
        icon: "devicon:windows11",
        color1: "bg-blue-700 shadow-blue-500",
        color2: "after:bg-blue-700 before:bg-blue-400",
      },
      {
        name: "Linux",
        icon: "devicon:linux",
        color: "white",
        color1: "bg-white shadow-white",
        color2: "after:bg-white before:bg-white",
      },
      {
        name: "Ubuntu",
        icon: "logos:ubuntu",
        color1: "bg-orange-700 shadow-orange-500",
        color2: "after:bg-orange-700 before:bg-orange-400",
      },
    ],
    projects: [
      {
        id: "001",
        title: "Dream Style",
        description: "projects.001.des",
        tags: [
          {
            name: "In Progress",
            color: "indigo",
          },
          {
            name: "Online",
            color: "green",
          },
          {
            name: "Responsive",
            color: "blue",
          },
        ],
        techstack: [
          {
            icon: "devicon:vuejs",
          },
          {
            icon: "devicon:html5",
          },
          {
            icon: "devicon:css3",
          },
          {
            icon: "logos:javascript",
          },
          {
            icon: "mdi:github",
          },
          {
            icon: "devicon:git",
          },
        ],
        img: "dreamstyle.webp",
        links: [
          {
            name: "projects.live",
            url: "https://dream-style.vercel.app/",
          },
          {
            name: "Github",
            url: "https://github.com/Korak-997/dreamStyle",
          },
        ],
      },
      {
        id: "002",
        title: "My Books",
        description: "projects.002.des",
        img: "mybooks.webp",
        techstack: [
          {
            icon: "devicon:svelte",
          },
          {
            icon: "devicon:supabase",
          },
          {
            icon: "devicon:html5",
          },
          {
            icon: "devicon:css3",
          },
          {
            icon: "logos:javascript",
          },
          {
            icon: "mdi:github",
          },
          {
            icon: "devicon:git",
          },
        ],
        tags: [
          {
            name: "In Progress",
            color: "indigo",
          },
          {
            name: "Online",
            color: "green",
          },
          {
            name: "Responsive",
            color: "blue",
          },
          {
            name: "PWA",
            color: "yellow",
          },
        ],
        links: [
          {
            name: "projects.live",
            url: "https://my-books-seven.vercel.app/",
          },
          {
            name: "Github",
            url: "https://github.com/Korak-997/MyBooks",
          },
        ],
      },
    ],
  },
  getters: {
    getProjects: (state) => state.projects,
    getSkills: (state) => state.skills,
  },
});
