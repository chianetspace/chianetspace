<template>
	<div>
		<div id="layout-wrapper" class="d-flex flex-column vh-100">
			<main class="flex-shrink-0 flex-centered" role="main">
				<div class="container">
					<Nuxt/>
				</div>
			</main>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-F6WQ5SR60J');
	}
}
</script>

<style lang="scss">
main {
	display: flex;
	align-items: center;
}

main.flex-centered {
	flex-grow: 1;
}
</style>
