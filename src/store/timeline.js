import { writable } from 'svelte/store';

const skills = writable([
	{
    key: "first",
    title: "timeline.first.title",
    date: "18-03-1997",
    des: "timeline.first.des"
  },
  {
    key: "second",
    title: "timeline.second.title",
    date: "2016",
    des: "timeline.second.des"
  },
  {
    key: "third",
    title: "timeline.third.title",
    date: "08/2018",
    des: "timeline.third.des"
  },
  {
    key: "fourth",
    title: "timeline.fourth.title",
    date: "2018-2020",
    des: "timeline.fourth.des"
  },
  {
    key: "fifth",
    title: "timeline.fifth.title",
    date: "2019",
    des: "timeline.fifth.des"
  },
  {
    key: "sixth",
    title: "timeline.sixth.title",
    date: "08-2020",
    des: "timeline.sixth.des"
  },
  {
    key: "seventh",
    title: "timeline.seventh.title",
    date: "13-02-2021",
    des: "timeline.seventh.des"
  }
]);

export default skills;
