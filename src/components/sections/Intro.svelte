<script>
	import { i } from '@inlang/sdk-js';
</script>

<div class="shadow-xl h-screen w-full">
	<div class="text-center uppercase font-bold text-white intro-text">
		<h1>{i(`intro.hi`)}</h1>
		<h1>{i(`intro.iam`)}</h1>
		<h1>{i(`intro.korak`)}</h1>
	</div>
	<div class="wrap -z-10 absolute">
		{#each { length: 500 } as _, i}
			<div class="c" />
		{/each}
	</div>
</div>

<style lang="scss">
	$total: 500;
	$orb-size: 200px;
	$particle-size: 2px;
	$time: 14s;
	$base-hue: 150;

  .intro-text{
    font-family: "vina";
    font-size: 6rem;
  }

	.wrap {
		top: 50%;
		left: 50%;
		width: 0;
		height: 0;
		transform-style: preserve-3d;
		perspective: 1000px;
		animation: rotate $time infinite linear;
	}

	@keyframes rotate {
		100% {
			transform: rotateY(360deg) rotateX(360deg);
		}
	}

	.c {
		position: absolute;
		width: $particle-size;
		height: $particle-size;
		border-radius: 50%;
		opacity: 0;
	}

	@for $i from 1 through $total {
		$z: (random(360) * 1deg);
		$y: (random(360) * 1deg);
		$hue: ((40 / $total * $i) + $base-hue);

		.c:nth-child(#{$i}) {
			animation: orbit#{$i} $time infinite;
			animation-delay: ($i * 0.01s);
			background-color: hsla($hue, 100%, 50%, 1);
		}

		@keyframes orbit#{$i} {
			20% {
				opacity: 1;
			}
			30% {
				transform: rotateZ(-$z) rotateY($y) translateX($orb-size) rotateZ($z);
			}
			80% {
				transform: rotateZ(-$z) rotateY($y) translateX($orb-size) rotateZ($z);
				opacity: 1;
			}
			100% {
				transform: rotateZ(-$z) rotateY($y) translateX(($orb-size * 3)) rotateZ($z);
			}
		}
	}
</style>
