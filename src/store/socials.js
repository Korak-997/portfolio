import { writable } from 'svelte/store';

const socials = writable([
	{
    title: 'Github',
    url: 'https://github.com/Korak-997',
    icon: 'mdi:github'
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/korak997/',
    icon: 'mdi:instagram'
  },
  {
    title: 'Youtube',
    url: 'https://www.youtube.com/channel/UC9j6pieJxlXmpq0k7kV1VDg',
    icon: 'mdi:youtube'
  }
]);

export default socials;
