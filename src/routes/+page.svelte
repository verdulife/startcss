<script>
	import Image from '$lib/components/Image.svelte';
</script>

<section class="col acenter wfull">
	<h3>Buttons and anchors</h3>
	<button class="wfull wfull@sm w1/4@lg">Button</button>
	<button class="alt wfull wfull@sm w1/4@lg">Alt</button>
	<button class="disabled wfull wfull@sm w1/4@lg">Disabled</button>
	<button class="outline wfull wfull@sm w1/4@lg">Outline</button>
	<button class="info wfull wfull@sm w1/4@lg">Disabled</button>
	<button class="success wfull wfull@sm w1/4@lg">Disabled</button>
	<button class="warning wfull wfull@sm w1/4@lg">Disabled</button>
	<button class="error wfull wfull@sm w1/4@lg">Disabled</button>
	<a class="tcenter" href="/">Anchor</a>
	<a class="btn wfull wfull@sm w1/4@lg" href="/">Anchor as button</a>

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
