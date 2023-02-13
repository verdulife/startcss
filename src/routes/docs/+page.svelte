<script>
	import Image from '$lib/components/Image.svelte';
</script>

<main class="col acenter wfull">
	<section class="col wfull">
		<h3>Buttons and anchors</h3>

		<article class="col wfull">
			<h4>Base buttons</h4>

			<div class="row wfull wrap">
				<button class="w1/2 wfull@sm">Button</button>
				<button class="base w1/2 wfull@sm">Base</button>
				<button class="alt w1/2 wfull@sm">Alt</button>
				<button class="info w1/2 wfull@sm">Info</button>
				<button class="success w1/2 wfull@sm">Success</button>
				<button class="warning w1/2 wfull@sm">Warning</button>
				<button class="error w1/2 wfull@sm">Error</button>
			</div>
		</article>

		<article class="col wfull">
			<h4>Outline buttons</h4>

			<div class="row wfull wrap">
				<button class="outline w1/2 wfull@sm">Button</button>
				<button class="outline base w1/2 wfull@sm">Base</button>
				<button class="outline alt w1/2 wfull@sm">Alt</button>
				<button class="outline info w1/2 wfull@sm">Info</button>
				<button class="outline success w1/2 wfull@sm">Success</button>
				<button class="outline warning w1/2 wfull@sm">Warning</button>
				<button class="outline error w1/2 wfull@sm">Error</button>
			</div>
		</article>

		<article class="col wfull">
			<h4>Special buttons</h4>

			<div class="row wfull wrap">
				<button class="w1/2 wfull@sm" disabled>Disabled</button>
				<button class="outline w1/2 wfull@sm" disabled>Disabled</button>
			</div>
		</article>

		<article class="col wfull">
			<h4>Anchors</h4>

			<div class="row acenter wfull wrap">
				<a class="btn w1/2 wfull@sm" href="/">Anchor as button</a>
				<a class="btn outline w1/2 wfull@sm" href="/">Anchor as button</a>
				<a class="tcenter w1/2 wfull@sm" href="/">Anchor</a>
			</div>
		</article>
	</section>

	<section class="col wfull">
		<h3>Inputs</h3>

		<article class="col wfull">
			<h4>Base inputs</h4>

			<div class="row aend wfull wrap">
				<div class="col w1/2 wfull@sm">
					<label for="input"> Labeled input </label>
					<input class="wfull" type="text" id="input" placeholder="Input..." />
				</div>

				<div class="col w1/2 wfull@sm">
					<label for="input"> Labeled input </label>
					<input class="wfull" type="text" id="input" placeholder="Input..." disabled />
				</div>

				<div class="col w1/2 wfull@sm">
					<label for="select"> Labeled input </label>
					<select class="wfull" id="select">
						<optgroup label="Optgroup">
							<option value="">Select</option>
							<option value="">Select</option>
						</optgroup>
					</select>
				</div>

				<div class="col w1/2 wfull@sm">
					<label for="textarea">Labeled input</label>
					<textarea class="wfull" id="textarea" placeholder="Textarea..." />
				</div>

				<div class="row acenter w1/2 wfull@sm">
					<label for="checkbox">Checkbox</label>
					<input type="checkbox" id="checkbox" checked />
				</div>

				<div class="row acenter w1/2 wfull@sm">
					<label for="radio">Radio</label>
					<input type="radio" id="radio" checked />
				</div>

				<div class="row acenter w1/2 wfull@sm">
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
