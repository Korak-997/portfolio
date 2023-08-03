import { writable } from 'svelte/store';

const skills = writable([
	{
    title: "Born",
    date: "18-03-1997",
    des: "Born and raised in the city of Al-Sulaimanya in the iraqi kurdistan"
  },
  {
    title: "Finished Highschool",
    date: "2015",
    des: "Finished Highschool in the city of Al-Sulaimanya in the iraqi kurdistan"
  },
  {
    title: "Left the country",
    date: "2016",
    des: "Left the country in 2016 searching for a brighter and safer future"
  },
  {
    title: "Arrived in Germany",
    date: "08/2018",
    des: "In August 2018 i finally arrived in Germany."
  },
  {
    title: "Learning German language",
    date: "2018-2020",
    des: "I directly started learning German language in 2018-2020 and received level B2 certificate"
  },
  {
    title: "Self-taught developer journey started",
    date: "2019",
    des: "Alongside my german language course i started learning Coding and Programming by myself"
  },
  {
    title: "Started Apprenticeship",
    date: "08-2020",
    des: "August 2020 i started my apprenticeship in the field of as a Software Developer"
  },
]);

export default skills;
