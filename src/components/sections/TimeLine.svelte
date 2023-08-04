<script>
	import { i } from '@inlang/sdk-js';
	import timeline from '../../store/timeline.js';
	let stories;
	timeline.subscribe((data) => {
		stories = data;
	});
</script>

<div class="timeline shadow-xl w-11/12 p-4 my-4">
	<div class="container">
		{#each stories as story}
			<div class="timeline-item my-4">
				<div class="timeline-img" />
				<div class="timeline-content shadow-xl rounded-md">
          <div class="bg-secondary p-2 font-bold text-center">{story.date}</div>
					<h2 class="m-4 font-bold text-2xl">{i(`${story.title}`)}</h2>
					<p class="m-4">{i(`${story.des}`)}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.timeline {
		position: relative;

		&::before {
			content: '';
			background: darken(#212121, 2%);
			width: 5px;
			height: 95%;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	.timeline-item {
		width: 100%;
		&:nth-child(even) {
			.timeline-content {
				float: right;
				padding: 40px 30px 10px 30px;
				.date {
					right: auto;
					left: 0;
				}
			}
		}

		&::after {
			content: '';
			display: block;
			clear: both;
		}
	}

	.timeline-content {
		position: relative;
		width: 45%;
		padding: 10px 30px;
	}

	.timeline-img {
		width: 30px;
		height: 30px;
		background: lighten(#212121, 2%);
		border-radius: 50%;
		position: absolute;
		left: 50%;
		margin-top: 25px;
		margin-left: -15px;
	}

	@media screen and (max-width: 768px) {
		.timeline {
			&::before {
				left: 50px;
			}

			.timeline-img {
				left: 50px;
			}

			.timeline-content {
				max-width: 100%;
				width: auto;
				margin-left: 70px;
			}

			.timeline-item {
				&:nth-child(even) {
					.timeline-content {
						&::after {
							display: none;
						}
					}
				}

				&:nth-child(odd) {
					.timeline-content {
						&::after {
							display: none;
						}
					}
				}
			}
		}
	}
</style>
