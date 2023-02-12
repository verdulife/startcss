<script>
	import Header from '$lib/components/Header.svelte';
</script>

<section class="col fcenter wfull">
	<Header />

	<nav class="col acenter wfull">
		<ul class="row fcenter wrap col@sm">
			<li class="col acenter">
				<h2>🎨</h2>
				Custom property first
			</li>
			<li class="col acenter">
				<h2>⚡</h2>
				Fast prototyping
			</li>
			<li class="col acenter">
				<h2>🎯</h2>
				Super scalable
			</li>
			<li class="col acenter">
				<h2>🤯</h2>
				Reset based
			</li>
			<li class="col acenter">
				<h2>🚀</h2>
				Layout classes
			</li>
		</ul>
	</nav>
</section>

<style lang="postcss">
	ul {
		gap: 4em;
		padding: 2em;
	}

	li {
		gap: 0.5em;
	}
</style>
