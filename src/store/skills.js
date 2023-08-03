import { writable } from 'svelte/store';

const skills = writable([
	{
		cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg'
	},
	{
		cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg'
	},
	{ cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg' },
	{ cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
	{ cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg' },
	{ cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg' },
	{ cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg' },
	{ cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' },
	{ cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
	{ cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg' },
	{ cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg' },
	{ cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg' },
	{ cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg' },
	{ cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original-wordmark.svg' },
	{
		cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg'
	},
	{
		cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original-wordmark.svg'
	},
	{ cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain-wordmark.svg' },
	{ cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg' },
	{ cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' }
]);

export default skills;
