<script>
	import { i } from '@inlang/sdk-js';
</script>

<div class="shadow-xl">
	<h1
		class="text-primary font-bold border-r-2 border-primary mx-auto whitespace-nowrap overflow-hidden text-2xl md:text-6xl p-2"
	>
		{i("intro.title")}
	</h1>
</div>

<style lang="scss">
	div {
		h1 {
			animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
		}
	}

	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: #7ed957;
		}
	}
</style>
