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
    ],
  },
  getters: {
    getProjects: (state) => state.projects,
  },
});
