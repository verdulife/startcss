<script>
	import Image from '$lib/components/Image.svelte';
</script>

<section class="col acenter wfull">
	<h3>Buttons and anchors</h3>
	<button class="wfull w1/4@md">Button</button>
	<button class="alt wfull w1/4@md">Alt</button>
	<button class="disabled wfull w1/4@md">Disabled</button>
	<button class="outline wfull w1/4@md">Outline</button>
	<button class="info wfull w1/4@md">Info</button>
	<button class="success wfull w1/4@md">Success</button>
	<button class="warning wfull w1/4@md">Warning</button>
	<button class="error wfull w1/4@md">Error</button>
	<a class="tcenter" href="/">Anchor</a>
	<a class="btn wfull w1/4@md" href="/">Anchor as button</a>

	<h3>Inputs</h3>
	<input class="wfull w2/4@lg" type="text" placeholder="Input..." />
	<select class="wfull w2/4@lg">
		<optgroup label="Optgroup">
			<option value="">Select</option>
			<option value="">Select</option>
		</optgroup>
	</select>
	<textarea class="wfull w2/4@lg" placeholder="Textarea..." />
	<label class="col wfull w2/4@lg" for="labeled">
		<span>Labeled input</span>
		<input class="wfull" type="text" id="labeled" placeholder="Input..." />
	</label>
	<label class="row acenter wfull w2/4@lg" for="checkbox">
		<span>Checkbox</span>
		<input type="checkbox" id="checkbox" />
	</label>
	<label class="row acenter wfull w2/4@lg" for="radio">
		<span>Radio</span>
		<input type="radio" id="radio" />
	</label>

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
</section>

<style lang="postcss">
	section {
		gap: 2em;
		padding: 2em;

		@media (--md) {
			padding: 4em;
		}
	}
</style>
