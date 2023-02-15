<script>
	import Logo from './Logo.svelte';

	const routes = [
		{
			label: 'Start',
			href: '/#start'
		},
		{
			label: 'Why',
			href: '/#why'
		},
		{
			label: 'Examples',
			href: '/#examples'
		},
		{
			label: 'Docs',
			href: '/docs'
		}
	];
</script>

<nav class="row jcenter wfull">
	<main class="row jbetween acenter wfull">
		<a href="/"><Logo /></a>

		<ul class="row">
			{#each routes as { label, href }}
				<li>
					<a {href}>{label}</a>
				</li>
			{/each}
		</ul>
	</main>
</nav>

<style lang="postcss">
	nav {
		position: fixed;
		top: 0;
		left: 0;
		background-color: hsl(var(--base-900-hsl), 0.2);
		backdrop-filter: blur(6px);
		border-bottom: 1px solid hsl(var(--base-400-hsl), 0.1);
		padding: calc(var(--safe-top) + 1.5em) calc(var(--safe-right) + 1.5em) 1.5em
			calc(var(--safe-left) + 1.5em);
		z-index: 9;
	}

	main {
		max-width: var(--xl);

		& a {
			text-decoration: none;
		}
	}

	ul {
		gap: 2em;

		& a {
			color: var(--base-300);

			&:hover {
				color: var(--base);
			}
		}
	}
</style>
