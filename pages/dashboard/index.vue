<template>
	<div class="w-100 h-100 d-flex align-items-center">
		<div class="container my-5">
			<div class="px-lg-5 px-3 my-5 mb-4 bg-light rounded-3">
				<div class="container-fluid py-5">
					<h1 class="display-5 fw-normal">
						Welcome to
						<i class="fas fa-leaf text-primary mx-2"></i>
						<span>
						<strong>Chia</strong>NetSpace.com
					</span>
					</h1>
					<p class="col-md-8 mb-4 fs-4">Dive into statistics and graphs of Chia (XCH) Proof of Space and Time
						historical netspace and price data.</p>
					<NuxtLink class="btn btn-primary px-4 btn-lg rounded-pill" to="/dashboard/order-plots"
							  type="button">
						<i class="bx bx-basket me-1"></i>
						Order Plots
					</NuxtLink>
					<NuxtLink class="btn btn-secondary px-4 btn-lg rounded-pill ms-lg-2 mt-3 mt-lg-0"
							  to="/dashboard/pool"
							  type="button">
						<i class="bx bx-server me-1"></i>
						Join our Pool
					</NuxtLink>
				</div>
			</div>
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
