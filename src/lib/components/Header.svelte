<header id="start" class="col fcenter wfull tcenter">
	<figure>
		<video class="full" src="/start.mp4" playsinline autoplay loop muted />
		<span class="row full" />
	</figure>

	<h1>Write pre-styled html by... <strong>you!</strong></h1>
	<p>A fresh start with <strong>modern</strong> CSS, framework agnostic, to enjoy again CSS</p>

	<aside class="row fcenter wfull col@md">
		<button class="w1/2 wfull@sm">Get started</button>
		<button class="base w1/2 wfull@sm">!Framework</button>
	</aside>

	<small class="row fcenter wrap">
		This two buttons are only <pre>{'<button>Get started</button>'}</pre>
		&
		<pre>{'<button class="base">!Framework</button>'}</pre>
	</small>

	<div class="gradient row wfull h1/2" />
</header>

<style lang="postcss">
	header {
		position: relative;
		min-height: calc(300vh / 4);
		gap: 2em;
		padding: clamp(150px, 20%, 20%) 2em 10% 2em;

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

		& button {
			max-width: 250px;

			@media (--sm) {
				max-width: none;
			}
		}
	}

	small {
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
