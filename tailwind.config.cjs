module.exports = {
	content: ['./src/routes/**/*.{svelte,js,ts}', './src/components/**/*.{svelte,js,ts}'],
	plugins: [require('daisyui')],

	daisyui: {
		themes: ['business']
	}
};
