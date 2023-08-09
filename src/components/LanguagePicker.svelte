<script>
	import { switchLanguage } from '@inlang/sdk-js';
	import { i } from '@inlang/sdk-js';
	import { language } from '@inlang/sdk-js';
  import Icon from '@iconify/svelte';

	const switchLang = async (newLang) => await switchLanguage(newLang);
	let supportedLangs = ['de', 'en'];
	let currentLang = language;
	let showSelector = false;
</script>

<div class="relative inline-block text-left">
	<div>
		<button
			on:click={() => (showSelector = !showSelector)}
			type="button"
			class="btn btn-ghost btn-circle hover:cursor-pointer hover:btn-primary text-4xl"
			id="menu-button"
			aria-expanded="true"
			aria-haspopup="true"
		>
      <Icon icon="mdi:language"/>
		</button>
	</div>
	<div
		class="absolute right-0 z-10 w-56 origin-top-right rounded-md ring-opacity-5 focus:outline-none"
		role="menu"
		aria-orientation="vertical"
		aria-labelledby="menu-button"
		tabindex="-1"
	>
		<div
			class="flex flex-col items-center justify-center w-48"
			role="none"
			class:hidden={showSelector === false}
		>
			{#each supportedLangs as lang}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class:bg-secondary={lang === currentLang}
					class="p-2 gap-2 rounded-full hover:cursor-pointer hover:bg-accent"
					on:click={() => {
						currentLang = lang;
						switchLang(lang);
						showSelector = false;
					}}
				>
					<p class="text-2xl font-bold">{i(`common.locale.${lang}`)}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
