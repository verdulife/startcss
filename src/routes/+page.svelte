<script>
	import Header from '$lib/components/Header.svelte';
	import FeaturesList from '$lib/components/FeaturesList.svelte';
</script>

<section id="start" class="col fcenter wfull">
	<Header />
	<FeaturesList />
</section>

<section id="why" class="col acenter wfull">
	<article class="col acenter wfull">
		<h2 class="tcenter"><strong>Why</strong> this is a thing?</h2>
		<br />
		<p class="tcenter wfull">
			The idea is simple, when you start a project for a site, be it an advertising page, a blog, a
			PWA or a personal project, you have to define some styles. You can choose from a multitude of
			frameworks with pre-styled utility classes, or work on your own styles. But you always work
			with classes, and the question is... why?
			<br /><br />
			Why does a button have to have a <strong>.button</strong> or <strong>.btn</strong> class, if
			it is already a button? Why does an input have to use a class to look like one?
			<strong>It's a stupid concept...</strong>
		</p>

		<main class="row wfull col@sm">
			<div class="ide col w2/3 wfull@sm">
				<pre>{'<input type="text" placeholder="Write here..."/>'}</pre>
				<pre>{'<button>Button</button>'}</pre>
			</div>

			<aside class="grow col wfull@sm">
				<input class="wfull" type="text" placeholder="Write here..." />
				<button class="wfull">Button</button>
			</aside>
		</main>
	</article>
</section>

<style lang="postcss">
	#why {
		margin-top: 4em;
	}

	article {
		max-width: var(--media-lg);
		padding: 1em;

		& main {
			margin-top: 4em;
			gap: 2em;

			& .ide {
				background-color: var(--base-900);
				border: 1px solid hsl(var(--base-hsl), 0.05);
				border-radius: 0.5em;
				padding: 1em;
			}

			& aside {
				gap: 1em;
			}
		}
	}
</style>
