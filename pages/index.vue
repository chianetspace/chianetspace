<template>
	<div>
		<apexchart id="apexchart" :height="getHeight" :options="chartOptions" :series="series"
				   class="position-fixed d-flex align-items-end bottom-0 start-0 end-0 w-100" type="area"></apexchart>
		<div class="container text-center pb-5">
			<h1 class="display-4">
				Welcome to <strong class="fw-bold">Chia</strong>NetSpace<span>.com</span>
			</h1>
			<p class="lead text-center">
				Dive into statistics and graphs of Chia (XCH) Proof of Space and<br/>Time historical netspace and
				price data.
			</p>
			<h3 class="mt-4 mb-1">Chia Net Space Now:</h3>
			<!--			{{ summary }}-->
			<h2 class="display-1 mb-0 text-success fw-bold">
				{{ summary.netSpace.largestWholeNumberBinaryValue.toFixed(0) }}<sub>.<span
				v-anime="{textContent: [0, getDecimals(summary.netSpace.largestWholeNumberBinaryValue)],
				round: 1,
				easing: 'linear',
				// duration: 2100,
				round: 1,
				}"></span></sub>
				{{ summary.netSpace.largestWholeNumberBinarySymbol }}
				<!--				<sup class="text-white">+38%</sup>-->
			</h2>
			<div class="mt-4">
				<button class="btn btn-lg mx-2 px-4 btn-primary rounded-pill" data-bs-target="#order-modal"
						data-bs-toggle="modal">
					<i class="bx bxs-cart me-1"></i>
					Order Plots Now
					<!--					<i class="bx bxs-paper-plane me-1"></i>-->
					<!--					Get More Stats-->
				</button>
				<a class="btn btn-lg mx-2 px-4 btn-white rounded-pill" href="https://discord.gg/D6bRh8ZugX">
					<i class="bx bxl-discord"></i>
					Join Discord
				</a>
			</div>
			<div class="row mt-5 small">
				<div class="col-lg-10 offset-lg-1">
					<div class="row">
						<div class="col-lg-4 col-6 text-center mb-4">
							<h6 class="fw-bold">Daily High / Daily Low</h6>
							{{
								summary.dailyHigh.toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD'
								})
							}}
							/
							{{
								summary.dailyLow.toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD'
								})
							}}
						</div>
						<div class="col-lg-4 col-6 text-center mb-4">
							<h6 class="fw-bold">Last Update</h6>
							{{ $moment(summary.lastUpdateDate).format('LLL') }}
						</div>
						<div class="col-lg-4 col-6 text-center mb-4">
							<h6 class="fw-bold">Power Consumption</h6>
							≈ {{ (summary.netSpace.largestWholeNumberBinaryValue * 1.5).toFixed(0) }} kW
						</div>
						<div class="col-lg-4 col-6 text-center mb-4">
							<h6 class="fw-bold">All Time High</h6>
							{{
								summary.allTimeHigh.toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD'
								})
							}}
						</div>
						<div class="col-lg-4 col-6 text-center mb-4">
							<h6 class="fw-bold">Chia (XCH) Price</h6>
							{{
								summary.chiaPrice.toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD'
								})
							}}
						</div>
						<div class="col-lg-4 col-6 text-center mb-4">
							<h6 class="fw-bold">Daily Volume</h6>
							{{
								summary.dailyVolume.toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD',
									minimumFractionDigits: 0
								})
							}}
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
			series: [{
				name: "Net Space Growth",
				data: []
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
	async asyncData({$axios}) {
		const summary = await $axios.$get('data/summary')
		return {summary}
	},
	mounted() {
		this.$axios.$get('charts/net-space-growth').then((data) => {
			this.series = [{
				data: data
			}];
			this.chartOptions.chart.height = 50;
		});
	},
	computed: {
		getHeight: function () {
			if (process.client) {
				return window.innerWidth < 992 ? 121 : 421;
			}
			return 421;
		}
	},
	methods: {
		getDecimals: function (largestWholeNumberDecimalValue) {
			let decimals = Math.abs(largestWholeNumberDecimalValue) - Math.floor(largestWholeNumberDecimalValue);
			return parseInt(decimals.toString().substring(2, 5));
		}
	}
}
</script>

<style scoped>
#apexchart {
	z-index: -1;
	user-select: none;
	pointer-events: none;
//height: 100px !important; //min-height: 100px !important;
}

.display-1 {
	font-size: 6rem;
}

@media (max-width: 992px) {
	.display-1 {
		font-size: 3rem !important;
	}
}

sub {
	bottom: 0;
}
</style>
