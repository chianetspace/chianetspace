<template>
	<div class="alert alert-primary alert-dismissible fade show mb-5 mx-2" role="alert">
		<slot />
		<button v-if="dismissible" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
	</div>
</template>

<script>
export default {
	name: "Alert",
	props: {
		message: null,
		dismissible: false
	}
}
</script>

<style scoped>
.alert
{
	//opacity: 0.1;
}
</style>
