<nav class="col acenter wfull">
	<ul class="row jaround wrap wfull">
		<li class="col fcenter">
			<span>🎨</span>
			<p>Custom property first</p>
		</li>
		<li class="col fcenter">
			<span>⚡</span>
			<p>Fast prototyping</p>
		</li>
		<li class="col fcenter">
			<span>🎯</span>
			<p>Super scalable</p>
		</li>
		<li class="col fcenter">
			<span>🤯</span>
			<p>Reset based</p>
		</li>
		<li class="col fcenter">
			<span>🚀</span>
			<p>Layout classes</p>
		</li>
	</ul>
</nav>

<style lang="postcss">
	ul {
		max-width: var(--media-xl);
		padding: 2em;
	}
  
	li {
    min-width: 100px;
    min-height: 150px;
		gap: 0.75em;
    padding: 1em;

		& span {
			font-size: var(--font-static-4xl);
		}

		& p {
			text-align: center;
		}
	}
</style>
