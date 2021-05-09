<template>
	<div class="container">
		<div class="inner d-flex justify-content-center flex-column align-items-center">
			<h1 class="display-4">
				Welcome to <strong class="fw-bold">Chia</strong>NetSpace.com
			</h1>
			<p class="lead text-center">
				Dive into statistics and graphs of Chia (XCH) Proof of Space and<br />Time historical netspace and price data.
			</p>
			<h3 class="mt-4">Chia Netspace Now:</h3>
			<h2 class="display-1 text-success fw-bold">
<!--				v-anime="{textContent: [70000, 77000],-->
<!--				round: 1,-->
<!--				easing: 'linear',-->
<!--				duration: 2100,-->
<!--				round: 1,-->
<!--				}"-->
				3.17<sub v-text="this.counter"></sub> EiB
			</h2>
			<div class="row mt-5 w-75">
				<div class="col">
					<div class="text-center">
						<h6>Daily High / Daily Low:</h6>
						$1400.57 / $1049.04
					</div>
				</div>
				<div class="col text-center">
					<h6>Last Update:</h6>
					2021-05-09 16:00:03
				</div>
				<div class="col text-end">
					<div class="text-center">
						<h6>Power Consumption:</h6>
						~ 4864 kW
					</div>
				</div>
			</div>
		</div>
		<!--		<div class="px-4 pt-5 my-5 text-center">-->
		<!--			<h1 class="display-4 fw-bold">Welcome to ChiaGang.com</h1>-->
		<!--			<div class="col-lg-6 mx-auto">-->
		<!--				<p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>-->
		<!--				<div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">-->
		<!--					<button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button>-->
		<!--					<button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>-->
		<!--				</div>-->
		<!--			</div>-->
		<!--			<div class="overflow-hidden" style="max-height: 30vh;">-->
		<!--				<div class="container px-5">-->
		<!--					<img src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-docs.png" class="img-fluid rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy">-->
		<!--				</div>-->
		<!--			</div>-->
		<!--		</div>-->
	</div>
</template>

<script>
export default {
	data() {
		return {
			counter: 77238
		}
	},
	created() {
		setInterval(() => this.counter++, 777);
	}
}
</script>

<style scoped>
.inner
{
	height: calc(100vh - 210px);
}

.display-1
{
	font-size: 6rem;
}

sub
{
	bottom: 0;
	color: #baccc5;
}
</style>
