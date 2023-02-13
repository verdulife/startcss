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
				<button class="wfull w1/4@md" disabled>Disabled</button>
				<button class="outline wfull w1/4@md" disabled>Disabled</button>
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
				<div class="col wfull w1/3@lg">
					<label class="col wfull" for="input"> Labeled input </label>
					<input class="wfull" type="text" id="input" placeholder="Input..." />
				</div>

				<div class="col wfull w1/3@lg">
					<label class="col wfull" for="select"> Labeled input </label>
					<select class="wfull" id="select">
						<optgroup label="Optgroup">
							<option value="">Select</option>
							<option value="">Select</option>
						</optgroup>
					</select>
				</div>

				<div class="col wfull">
					<label class="wfull" for="textarea">Labeled input</label>
					<textarea class="wfull" id="textarea" placeholder="Textarea..." />
				</div>

				<div class="row acenter wfull w1/3@lg">
					<label for="checkbox">Checkbox</label>
					<input type="checkbox" id="checkbox" checked />
				</div>

				<div class="row acenter wfull w1/3@lg">
					<label for="radio">Radio</label>
					<input type="radio" id="radio" checked />
				</div>

				<div class="row acenter wfull w1/3@lg">
					<label for="checkbox">Indeterminate checkbox</label>
					<input type="checkbox" id="checkbox" indeterminate="true" />
				</div>
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
