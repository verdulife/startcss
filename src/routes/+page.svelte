<script>
	import Image from '$lib/components/Image.svelte';
</script>

<section class="col acenter wfull">
	<button>Button</button>
	<a class="btn">Anchor as button</a>
	<input type="text" placeholder="Input..." />
	<h1>Heading <strong>h1</strong></h1>
	<h2>Heading <strong>h2</strong></h2>
	<h3>Heading <strong>h3</strong></h3>
	<h4>Heading <strong>h4</strong></h4>
	<h5>Heading <strong>h5</strong></h5>
	<h6>Heading <strong>h6</strong></h6>
	<p>Lorem ipsum dolor sit amet <b>consectetur</b> adipisicing elit.</p>
</section>

<style lang="postcss">
	section {
		gap: 2em;
		padding: 4em;
	}
</style>
