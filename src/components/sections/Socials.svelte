<script>
	import socialLinks from '../../store/socials.js';
	import Icon from '@iconify/svelte';
	let socials;
	socialLinks.subscribe((data) => {
		socials = data;
	});
</script>

<div class="w-11/12 p-4 my-4">
	<h1 class="text-primary font-bold text-4xl md:text-6xl p-2 mb-10">Reach Out</h1>
	<ul class="flex items-center justify-around flex-wrap">
		{#each socials as social}
			<li class="list-none my-6">
				<a
					href={social.url}
					target="_blank"
					class="w-48 h-16 decoration-none bg-secondary text-left flex items-center justify-center
          shadow-xl
          "
				>
					<Icon icon={social.icon} class="text-6xl text-neutral-50" />
					<p class="text-2xl font-bold text-neutral-50">{social.title}</p>
				</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	li {
		a {
			transition: 0.5s;
			&:before {
				content: '';
				position: absolute;
				top: 10px;
				left: -20px;
				height: 100%;
				width: 20px;
				background: #00667a;
				transform: 0.5s;
				transform: rotate(0deg) skewY(-45deg);
			}
			&:after {
				content: '';
				position: absolute;
				bottom: -20px;
				left: -10px;
				height: 20px;
				width: 100%;
				background: #00667a;
				transform: 0.5s;
				transform: rotate(0deg) skewX(-45deg);
			}
			&:hover {
				transform: rotate(-30deg) skew(25deg) translate(20px, -15px);
				box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5);
			}
		}
		&:hover:nth-child(1) a {
			background: #000000;
			&:before {
				background: #000000;
			}
			&:after {
				background: #000000;
			}
		}
		&:hover:nth-child(2) a {
			background: linear-gradient(
				45deg,
				#f09433 0%,
				#e6683c 25%,
				#dc2743 50%,
				#cc2366 75%,
				#bc1888 100%
			);
			&:before {
				background: linear-gradient(
					45deg,
					#f09433 0%,
					#e6683c 25%,
					#dc2743 50%,
					#cc2366 75%,
					#bc1888 100%
				);
			}
			&:after {
				background: linear-gradient(
					45deg,
					#f09433 0%,
					#e6683c 25%,
					#dc2743 50%,
					#cc2366 75%,
					#bc1888 100%
				);
			}
		}
		&:hover:nth-child(3) a {
			background: #cd201f;
			&:before {
				background: #cd201f;
			}
			&:after {
				background: #cd201f;
			}
		}
	}
</style>
