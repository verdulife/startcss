<script>
	import Header from '$lib/components/Header.svelte';
</script>

<section class="col fcenter wfull">
	<Header />

	<nav class="col acenter wfull">
		<ul class="row jevenly wrap wfull">
			<li class="col acenter wauto w1/2@sm">
				<h2>🎨</h2>
				Custom property first
			</li>
			<li class="col acenter w1/2@sm">
				<h2>⚡</h2>
				Fast prototyping
			</li>
			<li class="col acenter w1/2@sm">
				<h2>🎯</h2>
				Super scalable
			</li>
			<li class="col acenter w1/2@sm">
				<h2>🤯</h2>
				Reset based
			</li>
			<li class="col acenter w1/2@sm">
				<h2>🚀</h2>
				Layout classes
			</li>
		</ul>
	</nav>
</section>

<style lang="postcss">
	ul {
		padding: 2em;
	}

	li {
		gap: 0.5em;
	}
</style>
