<header id="start" class="col fcenter full">
	<figure>
		<video class="full" src="/start.mp4" playsinline autoplay loop muted />
		<span class="row full" />
	</figure>

	<h1 class="tcenter">Enjoy again the<br /><strong>PureCSS</strong></h1>
	<p>Start your CSS with a reset for your project needs with modern CSS</p>

	<aside class="row jcenter w1/2">
		<button class="w1/4">Get started</button>
		<button class="base w1/4">!Framework</button>
	</aside>

	<div class="gradient row wfull h1/2" />
</header>

<style lang="postcss">
	header {
		position: relative;
		gap: 2em;

		& *:not(figure) {
			z-index: 2;
		}
	}

	figure {
		position: absolute;
		inset: 0;
    z-index: 0;

		& span {
			position: absolute;
			inset: 0;
			background-color: hsl(var(--base-900-hsl), 0.8);
			mix-blend-mode: multiply;
		}
	}

	p {
		font-size: var(--font-md);
	}

	aside {
		gap: 0.5em;
	}

	.gradient {
		position: absolute;
		bottom: 0;
		left: 0;
		background: linear-gradient(to top, var(--base-900), hsl(var(--base-900-hsl), 0));
    z-index: 1;
	}
</style>
