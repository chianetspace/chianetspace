<template>
	<div>
		<div class="row my-5">
			<div class="col text-center">
				<h1 class="display-5">Our <strong class="fw-bold">Amazing</strong> Pricing</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<Alert>
					A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
				</Alert>
			</div>
		</div>
		<div class="row">
			<div v-for="t in ['Plan 1', 'Plan 2', 'Plan 3']" class="col">
				<div class="card mx-2 shadow border-0 text-center">
					<!--				<img src="..." class="card-img-top" alt="...">-->
					<div class="card-body px-4 py-5">
						<h5 class="card-title">{{ t }}</h5>
						<h5 class="display-6 fw-bold my-3">$324,00</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of
							the card's content.</p>
						<!--						<a href="#" class="btn btn-primary">Go somewhere</a>-->
					</div>
					<ul class="list-group small list-group-flush">
						<li class="list-group-item text-start px-4">
							<div class="row">
								<div class="col">
									Plotting starts in
								</div>
								<div class="col text-end">
									about 20 hours
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
									1 month
								</div>
							</div>
						</li>
					</ul>
					<div class="card-footer pt-5 pb-5">
						<button class="btn btn-primary rounded-pill px-3">
							<i class="bx bxs-cart me-1"></i>
							Order Now
						</button>
					</div>
				</div>
			</div>
		</div>
		<div>
			<br />
			<br />
			<br />
			<br />
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
