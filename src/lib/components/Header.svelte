<header id="start" class="col fcenter wfull tcenter">
	<figure>
		<video class="full" src="/start.mp4" playsinline autoplay loop muted />
		<span class="row full" />
	</figure>

	<h1>Write pre-styled html by... <strong>you!</strong></h1>
	<p>A fresh start with <strong>modern</strong> CSS, framework agnostic, to enjoy again CSS</p>

	<aside class="row fcenter wfull col@md">
		<button class="w1/2 wfull@sm">Get started</button>
	</aside>

	<footer class="col acenter">
		<small>This button is only</small>
		<pre><b>{'<button>'}</b>Get started<b>{'</button>'}</b></pre>
	</footer>

	<div class="gradient row full" />
</header>

<style lang="postcss">
	header {
		position: relative;
		padding: clamp(120px, 12%, 16%) 2em 6% 2em;

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
			mix-blend-mode: multiply;
		}
	}

	p {
		margin-top: 0.5em;
		font-size: var(--font-md);
	}

	aside {
		margin-top: 4em;

		& button {
			max-width: 200px;

			@media (--sm) {
				max-width: 70%;
			}
		}
	}

	footer {
		margin-top: 4em;
	}

	.gradient {
		position: absolute;
		bottom: 0;
		left: 0;
		background: radial-gradient(ellipse at top, hsl(var(--base-900-hsl), 0), var(--base-900)),
			linear-gradient(to bottom, hsl(var(--base-900-hsl), 0), var(--base-900) 90%);
		z-index: 1;
	}
</style>
