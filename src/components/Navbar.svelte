<script>
	import Logo from './Logo.svelte';
	import LanguagePicker from './LanguagePicker.svelte';
	import { i } from '@inlang/sdk-js';
</script>

<div class="w-full flex justify-around items-center my-4 flex-wrap gap-2">
	<div class="w-12">
		<Logo />
	</div>
	<LanguagePicker />
	<div class="alert alert-error w-96">
		<span class="font-bold">{i(`construction`)} 🙁 🙏</span>
	</div>
</div>
