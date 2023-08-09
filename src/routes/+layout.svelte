<script>
	import '../app.scss';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="app">
	<Navbar />
	<main class="flex items-center justify-center flex-col">
		<slot />
	</main>
</div>

<style>
</style>
