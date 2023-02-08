<script>
	import Image from '$lib/components/Image.svelte';
</script>

<section class="col fcenter full">
	<article class="col acenter">
		<header class="row jcenter wfull">
			<picture class="w2/4" avatar>
				<Image src="/mobile.png" width="200px" height="200px" alt="avatar" />
			</picture>
		</header>

		<main class="col acenter wfull">
			<h3 class="tcenter">Lorem strong</h3>
			<p class="tcenter">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
		</main>

		<span class="xdiv" />

		<footer class="row jaround wfull">
			<span class="col acenter w1/3">
				<h5>105</h5>
				<p>LOREM</p>
			</span>
			<span class="col acenter w1/3">
				<h5>99</h5>
				<p>LOREM</p>
			</span>
			<span class="col acenter w1/3">
				<h5>245</h5>
				<p>LOREM</p>
			</span>
		</footer>

		<button class="accent wfull">BUTTON</button>
	</article>
</section>

<style lang="postcss">
	section {
		padding: 2em;
	}

	article {
		max-width: 300px;
		gap: 1.5em;
		background-color: var(--start);
		border: 1px solid var(--start-200);
		border-radius: 0.5em;
		box-shadow: 0 5px 20px -10px var(--start-300);
		padding: 1.5em;
	}

	picture {
		border-width: 4px;
		box-shadow: 0 2px 5px var(--start-200);
	}

	main {
		gap: 0.5em;

		& h3 {
			font-weight: bold;
		}
	}

	.xdiv {
		background-color: var(--start-200);
	}

	footer {
		& span {
			border-right: 1px solid var(--start-200);

			&:last-of-type {
				border-right: 0;
			}
		}

		& h5 {
			font-weight: bold;
		}

		& p {
			font-size: 12px;
		}
	}
</style>
