<svelte:head>
	<title>{item.name}</title>
</svelte:head>

<section>
	<h1>{item.name}</h1>
	<img src={item.image} alt={item.name}>
	<p>{item.description}</p>
</section>

<script>
	export default {
		oncreate() {
			if (location.pathname === '/index.html') {
				history.replaceState({}, null, '/');
			}
		}
	};
</script>
