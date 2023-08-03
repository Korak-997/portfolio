<script>

	import timeline from '../store/timeline.js';
	let stories;
	timeline.subscribe((data) => {
		stories = data;
	});
</script>

<div class="timeline my-4">
	<div class="container">
		{#each stories as story}
			<div class="timeline-item my-4">
				<div class="timeline-img" />
				<div class="timeline-content shadow-xl rounded-md">
					<h2 class="m-4 font-bold text-2xl">{story.title}</h2>
					<div class="date bg-secondary inline-block absolute p-2 font-bold">{story.date}</div>
					<p class="m-4">{story.des}</p>
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

				&::after {
					content: '';
					position: absolute;
					border-style: solid;
					width: 0;
					height: 0;
					top: 20px;
					left: -15px;
					border-width: 10px 15px 10px 0;
					border-color: transparent #00667a transparent transparent;
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

		&::after {
			content: '';
			position: absolute;
			border-style: solid;
			width: 0;
			height: 0;
			top: 20px;
			right: -15px;
			border-width: 10px 0 10px 15px;
			border-color: transparent transparent transparent #00667a;
		}
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
	.date {
		top: 0;
		right: 0;
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
