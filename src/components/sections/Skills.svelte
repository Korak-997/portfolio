<script>
	import skills from '../../store/skills.js';

	let icons;
	skills.subscribe((data) => {
		icons = data;
	});
</script>

<div class="shadow-xl w-11/12 p-4 my-4">
	<h1 class="text-primary font-bold text-4xl md:text-6xl p-2">Skills</h1>
	<div class="flex items-center justify-around flex-wrap">
		{#each icons as icon}
			<img class="w-20 m-2" src={icon.cdn} alt="skill logo" />
		{/each}
	</div>
</div>

<style>
</style>
