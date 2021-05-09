<template>
	<div class="d-flex flex-column vh-100">
		<Header />
		<main role="main" class="flex-shrink-0 mb-3">
			<div class="container">
				<Nuxt />
			</div>
		</main>
		<Footer />
	</div>
</template>

<style lang="scss">
:root
{
	--grid-color: rgba(255, 255, 255, 0.01);
}
body, header
{
	//background-image: linear-gradient(var(--grid-color) 0.1em, transparent 0.1em), linear-gradient(90deg, var(--grid-color) 0.1em, transparent 0.1em);
	//background-size: 3em 3em;
}
</style>
