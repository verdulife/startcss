<script>
	import Image from '$lib/components/Image.svelte';
</script>

<section class="col acenter xfill">
	<article class="row sm:col xfill">
		<picture>
			<Image src="/mobile.png" width="100px" height="100px" alt="Verdu" />
		</picture>

		<h1>Lorem ipsum</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit quam eligendi incidunt,
			necessitatibus blanditiis illo nemo dicta accusamus alias sequi, quisquam excepturi ipsa
			aspernatur porro repellendus, explicabo error placeat.
		</p>

		<button>BUTTON</button>
	</article>
</section>

<style lang="postcss">
	article {
		max-width: 900px;
		gap: 2em;
		padding: 2em;

		& picture {
			border-radius: 50%;
			border: 2px solid var(--neutral-400);
			overflow: hidden;
		}

		& h1 {
			color: var(--neutral-700);
			font-weight: 551;
		}

		& button {
			background-color: var(--accent);
			border-radius: 0.5em;
			padding: 1em 2em;
		}
	}
</style>
