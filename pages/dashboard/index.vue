<template>
	<div class="w-100 h-100 d-flex align-items-center">
		<div class="container my-5">
			<div class="px-5 my-5 mb-4 bg-light rounded-3">
				<div class="container-fluid py-5">
					<h1 class="display-5 fw-normal">
						Welcome to
						<i class="fas fa-leaf text-primary mx-2"></i>
						<span>
						<strong>Chia</strong>NetSpace.com
					</span>
					</h1>
					<p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the
						one in previous versions of Bootstrap. Check out the examples below for how you can remix and
						restyle it to your liking.</p>
					<NuxtLink class="btn btn-primary px-4 btn-lg rounded-pill" to="/dashboard/plots" type="button">
						<i class="bx bx-basket me-1"></i>
						Order Plots
					</NuxtLink>
					<NuxtLink class="btn btn-secondary px-4 btn-lg rounded-pill ms-2" to="/dashboard/pool"
							  type="button">
						<i class="bx bx-server me-1"></i>
						Join our Pool
					</NuxtLink>
				</div>
			</div>
			<!--			<div class="row justify-content-center text-center justify-content-center mt-5">-->
			<!--				<div class="col">-->
			<!--					<a href="https://twitter.com/chia_project" target="_blank">-->
			<!--						<i class="bx display-6 bxl-github"></i>-->
			<!--					</a>-->
			<!--				</div>-->
			<!--				<div class="col">-->
			<!--					<a href="https://twitter.com/chia_project" target="_blank">-->
			<!--						<i class="bx display-6 bxl-twitter"></i>-->
			<!--					</a>-->
			<!--				</div>-->
			<!--				<div class="col">-->
			<!--					<a href="https://www.facebook.com/ChiaProject" target="_blank">-->
			<!--						<i class="bx display-6 bxl-facebook"></i>-->
			<!--					</a>-->
			<!--				</div>-->
			<!--				<div class="col">-->
			<!--					<a href="https://instagram.com/chia_project" target="_blank">-->
			<!--						<i class="bx display-6 bxl-instagram"></i>-->
			<!--					</a>-->
			<!--				</div>-->
			<!--				<div class="col">-->
			<!--					<a href="https://medium.com/@chia.net" target="_blank">-->
			<!--						<i class="bx display-6 bxl-medium"></i>-->
			<!--					</a>-->
			<!--				</div>-->
			<!--			</div>-->

			<!--			<div class="mt-5">-->
			<!--				<div class="d-flex justify-content-evenly">-->
			<!--					<a class="d-flex justify-content-center text-inherit text-white flex-column mb-3 align-items-center"-->
			<!--					   href="https://t.me/chianetspace">-->
			<!--						<i class="display-6 bx bxl-telegram"></i>-->
			<!--						Join our Telegram-->
			<!--					</a>-->
			<!--					<a class="d-flex justify-content-center text-inherit text-white flex-column mb-3 align-items-center"-->
			<!--					   href="https://discord.gg/D6bRh8ZugX">-->
			<!--						<i class="display-6 bx bxl-discord"></i>-->
			<!--						Join our Discord-->
			<!--					</a>-->
			<!--				</div>-->
			<!--			</div>-->
		</div>
	</div>
</template>

<script>
export default {
	name: "index",
	layout: 'dashboard'
}
</script>

<style scoped>

</style>
