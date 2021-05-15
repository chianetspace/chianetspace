<template>
	<footer class="footer mt-auto py-4">
		<div class="container small text-uppercase">
			<div v-if="this.$route.name !== 'index'" class="row">
				<div class="col d-flex text-center justify-content-center align-items-center">
					<p class="mb-0">Copyright &copy; {{ new Date().getFullYear() }} ChiaNetSpace.com - Crafted with ❤️
						by Ug &amp; ApexDev &amp; Clint.network -
						<i class="bx bxl-github ms-1"></i>
						Fork me on <a class="text-inherit" href="https://github.com/chianetspace/chianetspace"
									  target="_blank">GitHub</a>
					</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer"
}
</script>

<style scoped>
.small {
	font-size: 9pt;
}
</style>
