<template>
	<div>
		<apexchart id="apexchart" :options="chartOptions" :series="series"
				   class="position-fixed d-flex align-items-end bottom-0 start-0 end-0 w-100" height="421"
				   style="z-index: 99" type="area"></apexchart>
		<div class="container text-center pb-5">
			<h1 class="display-4">
				Welcome to <strong class="fw-bold">Chia</strong>NetSpace<span>.com</span>
			</h1>
			<p class="lead text-center">
				Dive into statistics and graphs of Chia (XCH) Proof of Space and<br/>Time historical netspace and
				price data.
			</p>
			<h3 class="mt-4">Chia Net Space Now:</h3>
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
			</h2>
			<div class="row mt-5 mb-4">
				<div class="col-10 offset-1">
					<div class="row">
						<div class="col text-center">
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
						<div class="col text-center">
							<h6 class="fw-bold">Last Update</h6>
							{{ $moment(summary.lastUpdateDate).format('LLL') }}
						</div>
						<div class="col text-center">
							<h6 class="fw-bold">Power Consumption</h6>
							≈ {{ (summary.netSpace.largestWholeNumberBinaryValue * 1.5).toFixed(0) }} kW
						</div>
					</div>
					<div class="row mt-4">
						<div class="col text-center">
							<h6 class="fw-bold">All Time High</h6>
							{{
								summary.allTimeHigh.toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD'
								})
							}}
						</div>
						<div class="col text-center">
							<h6 class="fw-bold">Chia (XCH) Price</h6>
							{{
								summary.chiaPrice.toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD'
								})
							}}
						</div>
						<div class="col text-center">
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
			counter: 77238,
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
		});
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
	z-index: 1;
	user-select: none;
	pointer-events: none;
}

.display-1 {
	font-size: 6rem;
}

sub {
	bottom: 0;
}
</style>
