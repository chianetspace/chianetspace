<template>
	<div>
		<apexchart id="apexchart" :options="chartOptions" :series="series"
				   class="position-fixed d-flex align-items-end bottom-0 start-0 end-0 w-100" height="421"
				   style="z-index: 99" type="area"></apexchart>
		<div class="container">
			<div class="inner d-flex justify-content-center flex-column pb-5 align-items-center">
				<h1 class="display-4">
					Welcome to <strong class="fw-bold">Chia</strong>NetSpace<span>.com</span>
				</h1>
				<p class="lead text-center">
					Dive into statistics and graphs of Chia (XCH) Proof of Space and<br/>Time historical netspace and
					price data.
				</p>
				<h3 class="mt-4">Chia Netspace Now:</h3>
				<h2 class="display-1 mb-0 text-success fw-bold">
					<!--				v-anime="{textContent: [70000, 77000],-->
					<!--				round: 1,-->
					<!--				easing: 'linear',-->
					<!--				duration: 2100,-->
					<!--				round: 1,-->
					<!--				}"-->
					3.17<sub>000</sub>
					<!--					<sub v-text="this.counter"></sub>-->
					EiB
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
	</div>
</template>

<script>
export default {
	data() {
		return {
			counter: 77238,
			series: [{
				name: "STOCK ABC",
				data: ["274.99", "280.95", "295.59", "298.09", "319.18", "329.26", "348.34", "363.02", "391.34", "417.02", "469.85", "505.94", "574.24", "639.13", "722.27", "831.75", "881.49", "1006.14", "1166.58", "1232.21", "1375.04", "1561.34", "1743.03", "1881.04", "2186.16", "2480.45", "2704.22", "2916.48", "3145.26", "2905.08"]
			}],
			chartOptions: {
				chart: {
					type: 'area',
					offsetY: 10,
					zoom: {
						enabled: false
					},
					toolbar: {
						show: false,
					},
				},
				xaxis: {
					floating: true,
					axisTicks: {
						show: false
					},
					axisBorder: {
						show: false
					},
					crosshairs: {
						show: false
					},
					show: false,
					tooltip: {
						enabled: false
					},
					labels: {
						show: false
					}
				},
				yaxis: {
					show: false
				},
				grid: {
					show: false,
					padding: {
						top: 0,
						right: 0,
						bottom: 0,
						left: 0
					}
				},
				colors: ['rgba(37, 198, 135, 1)'],
				dataLabels: {
					enabled: false
				},
				stroke: {
					curve: 'smooth',
					// lineCap: 'butt',
					// colors: undefined,
					width: 7,
					// dashArray: 10,
				},
				markers: {
					// size: 5,
					strokeWidth: 0,
				}
			},
		}
	},
	created() {
		setInterval(() => this.counter++, 777);
	}
}
</script>

<style scoped>
.inner {
	height: calc(100vh - 210px);
}

#apexchart {
	z-index: 1;
	user-select: none;
	pointer-events: none;
//opacity: 0.21;
}

.display-1 {
	font-size: 6rem;
}

sub {
	bottom: 0;
}
</style>
