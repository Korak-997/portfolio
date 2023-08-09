<script>
	import '../app.scss';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="app">
	<Navbar />
  <div class="alert alert-error w-96 mx-auto">
		<span class="font-bold">{i(`construction`)} 🙁 🙏</span>
	</div>
	<main class="flex items-center justify-center flex-col">
		<slot />
	</main>
</div>

<style>
</style>
