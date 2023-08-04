<script>
	import { switchLanguage } from '@inlang/sdk-js';
	import { i } from '@inlang/sdk-js';
	import { language } from '@inlang/sdk-js';

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
			class="btn btn-circle hover:cursor-pointer"
			id="menu-button"
			aria-expanded="true"
			aria-haspopup="true"
		>
			<img src={`src/lib/assets/flags/${currentLang}.png`} class="w-full rounded-full" />
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
			class="flex flex-col items-center justify-center w-48 bg-base-300 p-2 rounded-md"
			role="none"
			class:hidden={showSelector === false}
		>
			{#each supportedLangs as lang}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class:bg-secondary={lang === currentLang}
					class="p-2 m-1 rounded-full w-full flex justify-between items-center"
					on:click={() => {
						currentLang = lang;
						switchLang(lang);
						showSelector = false;
					}}
				>
					<img src={`src/lib/assets/flags/${lang}.png`} class="w-10 rounded-full" />
					<p class="text-xl font-bold">{i(`common.locale.${lang}`)}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
