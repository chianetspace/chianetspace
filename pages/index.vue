<template>
	<div class="container">
		<div class="inner d-flex justify-content-center flex-column align-items-center">
			<h1 class="display-4">
				Welcome to <strong class="fw-bold">Chia</strong>NetSpace<span>.com</span>
			</h1>
			<p class="lead text-center">
				Dive into statistics and graphs of Chia (XCH) Proof of Space and<br />Time historical netspace and price data.
			</p>
			<h3 class="mt-4">Chia Netspace Now:</h3>
			<h2 class="display-1 mb-0 text-success fw-bold">
<!--				v-anime="{textContent: [70000, 77000],-->
<!--				round: 1,-->
<!--				easing: 'linear',-->
<!--				duration: 2100,-->
<!--				round: 1,-->
<!--				}"-->
				3.17<sub v-text="this.counter"></sub> EiB
			</h2>
<!--			<p class="lead text-uppercase">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>-->
			<div class="row mt-5 w-75">
				<div class="col-lg-4">
					<div class="text-center">
						<h6 class="fw-bold">Daily High / Daily Low</h6>
						$1400.57 / $1049.04
					</div>
				</div>
				<div class="col-lg-4 text-center">
					<h6 class="fw-bold">Last Update</h6>
					2021-05-09 16:00:03
				</div>
				<div class="col-lg-4 text-end">
					<div class="text-center">
						<h6 class="fw-bold">Power Consumption</h6>
						~ 4864 kW
					</div>
				</div>
			</div>
			<div class="row mt-4 w-75">
				<div class="col-lg-4">
					<div class="text-center">
						<h6 class="fw-bold">All Time High</h6>
						$1640.74
					</div>
				</div>
				<div class="col-lg-4 text-center">
					<h6 class="fw-bold">Chia (XCH) Price</h6>
					$1185.44
				</div>
				<div class="col-lg-4 text-end">
					<div class="text-center">
						<h6 class="fw-bold">Daily Volume</h6>
						Booming!
					</div>
				</div>
			</div>
		</div>
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
}
</style>
