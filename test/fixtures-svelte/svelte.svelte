<script>
	let title;

	$: document.title = title;

	export {title};
	export let item;
</script>

<svelte:head>
	<title>{item.name}</title>
</svelte:head>

<section>
	<h1>{item.name}</h1>
	<img src={item.image} alt={item.name}>
	<p>{item.description}</p>
</section>
