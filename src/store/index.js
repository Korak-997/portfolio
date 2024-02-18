import { createStore } from "vuex";

export default createStore({
  state: {
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
        images: {
          pc: "dreamstyle-pc.webp",
          tablet: "dreamstyle-tablet.webp",
          phone: "dreamstyle-phone.webp",
        },
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
        images: {
          pc: "mybooks-pc.webp",
          tablet: "mybooks-tablet.webp",
          phone: "mybooks-phone.webp",
        },
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
  },
});
