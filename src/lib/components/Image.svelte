<script>
	export let src, width, height, className, title;
	export let alt = src.split('/').at(-1).split('.')[0];
</script>

<img
	{alt}
	{src}
	{width}
	{height}
	decoding="async"
	class={className}
	loading="lazy"
	title={title && alt}
/>
