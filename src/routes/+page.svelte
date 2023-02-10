<script>
	import Image from '$lib/components/Image.svelte';
</script>

<main class="col acenter wfull">
	<section class="col wfull">
		<h3>Buttons and anchors</h3>

		<article class="col wfull">
			<h4>Base buttons</h4>

			<div class="row wfull wrap">
				<button class="wfull w1/4@md">Button</button>
				<button class="base wfull w1/4@md">Base</button>
				<button class="alt wfull w1/4@md">Alt</button>
				<button class="info wfull w1/4@md">Info</button>
				<button class="success wfull w1/4@md">Success</button>
				<button class="warning wfull w1/4@md">Warning</button>
				<button class="error wfull w1/4@md">Error</button>
			</div>
		</article>

		<article class="col wfull">
			<h4>Outline buttons</h4>

			<div class="row wfull wrap">
				<button class="outline wfull w1/4@md">Button</button>
				<button class="outline base wfull w1/4@md">Base</button>
				<button class="outline alt wfull w1/4@md">Alt</button>
				<button class="outline info wfull w1/4@md">Info</button>
				<button class="outline success wfull w1/4@md">Success</button>
				<button class="outline warning wfull w1/4@md">Warning</button>
				<button class="outline error wfull w1/4@md">Error</button>
			</div>
		</article>

		<article class="col wfull">
			<h4>Special buttons</h4>

			<div class="row wfull wrap">
				<button class="disabled wfull w1/4@md">Disabled</button>
				<button class="outline disabled wfull w1/4@md">Disabled</button>
			</div>
		</article>

		<article class="col wfull">
			<h4>Anchors</h4>

			<div class="row acenter wfull wrap">
				<a class="btn wfull w1/4@md" href="/">Anchor as button</a>
				<a class="btn outline wfull w1/4@md" href="/">Anchor as button</a>
				<a href="/">Anchor</a>
			</div>
		</article>
	</section>

	<section class="col wfull">
		<h3>Inputs</h3>

		<article class="col wfull">
			<h4>Base inputs</h4>

			<div class="row aend wfull wrap">
				<input class="wfull w1/3@lg" type="text" placeholder="Input..." />

				<label class="col wfull w1/3@lg" for="input">
					<span>Labeled input</span>
					<input class="wfull" type="text" id="input" placeholder="Input..." />
				</label>
			</div>
		</article>

		<article class="col wfull">
			<h4>Base selects</h4>

			<div class="row aend wfull wrap">
				<select class="wfull w1/3@lg">
					<optgroup label="Optgroup">
						<option value="">Select</option>
						<option value="">Select</option>
					</optgroup>
				</select>

				<label class="col wfull w1/3@lg" for="select">
					<span>Labeled input</span>
					<select class="wfull" id="select">
						<optgroup label="Optgroup">
							<option value="">Select</option>
							<option value="">Select</option>
						</optgroup>
					</select>
				</label>
			</div>
		</article>

		<article class="col wfull">
			<h4>Base textarea</h4>

			<div class="row aend wfull wrap">
				<textarea class="wfull w1/3@lg" placeholder="Textarea..." />

				<label class="col wfull w1/3@lg" for="textarea">
					<span>Labeled input</span>
					<textarea class="wfull" id="textarea" placeholder="Textarea..." />
				</label>
			</div>
		</article>

		<article class="col wfull">
			<h4>Base input ui</h4>

			<div class="row aend wfull wrap">
				<label class="row acenter wfull w1/3@lg" for="checkbox">
					<span>Checkbox</span>
					<input type="checkbox" id="checkbox" checked />
				</label>

				<label class="row acenter wfull w1/3@lg" for="checkbox">
					<span>Indeterminate checkbox</span>
					<input type="checkbox" id="checkbox" indeterminate="true" />
				</label>

				<label class="row acenter wfull w1/3@lg" for="radio">
					<span>Radio</span>
					<input type="radio" id="radio" checked />
				</label>
			</div>
		</article>
	</section>

	<h3>Headings</h3>
	<h1>Heading <strong>h1</strong></h1>
	<h2>Heading <strong>h2</strong></h2>
	<h3>Heading <strong>h3</strong></h3>
	<h4>Heading <strong>h4</strong></h4>
	<h5>Heading <strong>h5</strong></h5>
	<h6>Heading <strong>h6</strong></h6>

	<h3>Texts</h3>
	<p class="tcenter">Lorem ipsum dolor sit amet <b>consectetur</b> adipisicing elit.</p>

	<h3>Media</h3>
	<picture>
		<Image src="/mobile.png" />
	</picture>
	<picture icon>
		<Image src="/mobile.png" />
	</picture>
	<picture avatar>
		<Image src="/mobile.png" />
	</picture>
</main>

<style lang="postcss">
	main {
		gap: 4em;
		padding: 2em;

		@media (--md) {
			padding: 4em;
		}
	}

	section {
		max-width: var(--lg);
		gap: 2em;
	}

	article {
		gap: 1em;
		background-color: var(--base-100);
		border-radius: 0.5em;
		padding: 2em;

		@media (--dark) {
			background-color: var(--base-800);
		}

		& > div {
			gap: 1em;
		}
	}
</style>
