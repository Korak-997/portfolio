<script>
	import skills from '../store/skills.js';

	let icons;
	skills.subscribe((data) => {
		icons = data;
	});
</script>

<div>
	<h1 class="text-primary font-bold text-4xl md:text-6xl p-2">Skills</h1>
	<div class="flex items-center justify-around flex-wrap">
		{#each icons as icon}
			<img class="w-24 m-2" src={icon.cdn} alt="skill logo" />
		{/each}
	</div>
</div>

<style>
</style>
