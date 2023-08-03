<script>
	import socialLinks from '../../store/socials.js';
	import Icon from '@iconify/svelte';
	let socials;
	socialLinks.subscribe((data) => {
		socials = data;
	});
</script>

<div class="shadow-xl w-11/12 p-4 my-4">
	<h1 class="text-primary font-bold text-4xl md:text-6xl p-2">Reach Out</h1>
	<div class="flex items-center justify-around flex-wrap">
		{#each socials as account}
			<a
				class="btn rounded-full btn-ghost m-2 text-primary text-2xl hover:text-secondary hover:cursor-pointer hover:bg-transparent"
				href={account.url}
				target="_blank"
			>
				{#if account.icon}
					<Icon icon={account.icon} class="text-6xl"/>
				{:else}
					{account.title}
				{/if}
			</a>
		{/each}
	</div>
</div>

<style>
</style>
