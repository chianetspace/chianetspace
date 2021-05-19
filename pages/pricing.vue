<template>
	<div>
		<div class="row my-5">
			<div class="col text-center">
				<h1 class="display-5">Order <strong class="fw-bold">Plots</strong> Now</h1>
				<p class="lead">You don't have enough specs for farming plots? You can directly order from us!</p>
				<p>Just say us the plots count you want, pay in cryptos and get download link the next day.</p>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 offset-lg-4">
				<div class="border border-primary rounded" style="border-width: 2px !important;">
					<div class="card shadow text-center">
						<div class="card-body px-4 py-5">
							<h5 class="display-6 fw-bold my-3">$12,00 / plot</h5>
							<p class="card-text small">Bulk order is possible, join our livechat.</p>
						</div>
						<ul class="list-group small list-group-flush">
							<li class="list-group-item text-start px-4">
								<div class="row">
									<div class="col">
										Plots delay
									</div>
									<div class="col text-end">
										about 1 day
									</div>
								</div>
							</li>
							<li class="list-group-item text-start px-4">
								<div class="row">
									<div class="col">
										K-size
									</div>
									<div class="col text-end">
										32 (108.9GB)
									</div>
								</div>
							</li>
							<li class="list-group-item text-start px-4">
								<div class="row">
									<div class="col-8">
										Download retention
									</div>
									<div class="col-4 text-end">
										2 weeks
									</div>
								</div>
							</li>
							<li class="list-group-item text-start px-4">
								<div class="row">
									<div class="col-8">
										Support Type
									</div>
									<div class="col-4 text-end">
										<i class="bx bx-support"></i>
										Live Chat
									</div>
								</div>
							</li>
						</ul>
						<div class="card-footer pt-5 pb-5">
							<NuxtLink class="btn btn-primary rounded-pill px-3" to="/dashboard/order-plots">
								<i class="bx bxs-cart me-1"></i>
								Order Now
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row my-5">
			<div class="col text-center">
				<h3>I need more help</h3>
				<p class="lead">We are available on Discord: <a class="text-primary text-decoration-none"
																href="https://discord.gg/D6bRh8ZugX">https://discord.gg/D6bRh8ZugX</a>
				</p>
			</div>
		</div>
		<div>
			<br/>
			<br/>
			<br/>
			<br/>
		</div>
	</div>
</template>

<script>
export default {
	name: "pricing",
	async asyncData({ $axios }) {
		const post = await $axios.$get('https://httpbin.org/ip')
		return { post }
	}
}
</script>

<style scoped>
</style>
