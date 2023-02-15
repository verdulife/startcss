<script>
	import '$lib/startcss/startcss.css';
	import Footer from '../lib/components/Footer.svelte';
	import Nav from '../lib/components/Nav.svelte';
</script>

<main class="scrollbar">
	<Nav />
	<slot />
	<Footer />
</main>
