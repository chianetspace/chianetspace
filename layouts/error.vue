<template>
	<div
		class="position-fixed top-0 bottom-0 start-0 end-0 bottom-0 pb-5 d-flex justify-content-center align-items-center flex-column">

		<h1 class="display-5">Page <strong class="fw-bold">Not Found</strong></h1>
		<p class="lead">This page does not exists on our website :(</p>
	</div>
</template>

<script>
export default {
	props: ['error'],
	layout: 'error'
}
</script>

<style scoped>
</style>
