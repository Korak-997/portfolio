<script>
	import socialLinks from '../../store/socials.js';
	import Icon from '@iconify/svelte';
	import { i } from '@inlang/sdk-js';

	let socials;
	socialLinks.subscribe((data) => {
		socials = data;
	});
</script>

<div class="w-11/12 p-4 my-4">
	<h1 class="text-primary font-bold text-4xl md:text-6xl p-2 mb-10">{i('socials.title')}</h1>
	<div class="flex justify-around items-center flex-wrap">
		{#each socials as social}
			<a
				href={social.url}
				target="_blank"
				class="w-48 h-16 button text-secondary flex items-center justify-center text-2xl font-bold my-2 p-2"
			>
				<Icon icon={social.icon} class="text-6xl" />
				{social.title}
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	.button {
		position: relative;
		background-color: transparent;
		cursor: pointer;
		border: 2px solid #252525;
		overflow: hidden;
		border-radius: 30px;
		transition: all 0.5s ease-in-out;
		p {
			z-index: 1;
			font-weight: 800;
			letter-spacing: 4px;
		}
		&:nth-child(1) {
			&::after {
				background-color: #000000;
			}
		}

		&:nth-child(2) {
			&::after {
				background: linear-gradient(
					45deg,
					#f09433 0%,
					#e6683c 25%,
					#dc2743 55%,
					#cc2366 90%,
					#bc1888 100%
				);
			}
		}

		&:nth-child(3) {
			&::after {
				background-color: #cd201f;
			}
		}
		&::after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			transition: all 0.5s ease-in-out;
			border-radius: 30px;
			visibility: hidden;
			height: 10px;
			width: 10px;
			z-index: -1;
		}

		&:hover {
			box-shadow: 1px 1px 200px #252525;
			color: #fff;
			border: none;
			&::after {
				visibility: visible;
				transform: scale(100) translateX(2px);
			}
		}
	}
</style>
