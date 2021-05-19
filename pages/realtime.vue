<template>
	<div>
		<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 5">
			<div id="popup" class="toast fade" role="alert">
				<div class="toast-body text-dark">
					<h6>🎉 Order Plots Now</h6>
					<p class="mb-0">Now you can order plots directly on our website.</p>
				</div>
			</div>
		</div>
		<div class="container text-center">
			<h1 class="display-4">
				Welcome to <strong class="fw-bold">Chia</strong>NetSpace<span>.com</span>
			</h1>
			<p class="lead text-center">
				Dive into statistics and graphs of Chia (XCH) Proof of Space and<br/>Time historical netspace and
				price data.
			</p>
			<h3 class="mt-4 mb-1">Chia Net Space Now:</h3>
			<h2 class="display-1 mb-0 text-success fw-bold">
				{{ summary.netSpace.largestWholeNumberBinaryValue.toFixed(0) }}<sub>.<span
				v-anime="{textContent: [this.lastNetspace, getDecimals(summary.netSpace.largestWholeNumberBinaryValue)],
				round: 1,
				easing: 'linear',
				}"></span></sub>
				{{ summary.netSpace.largestWholeNumberBinarySymbol }}
			</h2>
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
	name: 'realtime',
	layout: 'blank',
	data() {
		return {
			lastNetspace: 0,
			summary: {
				dailyVolume: 0,
				chiaPrice: 0,
				lastUpdateDate: null,
				allTimeHigh: 0,
				dailyHigh: 0,
				dailyLow: 0,
				netSpace: {
					largestWholeNumberBinarySymbol: '',
					largestWholeNumberBinaryValue: 0,
					largestWholeNumberDecimalValue: 0
				}
			}
		}
	},
	created() {
		this.init();
		setInterval(() => this.init(), 77000);
		setInterval(() => this.popup(), 15000);
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
		},
		init: function () {
			this.lastNetspace = this.summary.netSpace.largestWholeNumberBinaryValue;
			this.$axios.$get('data/summary').then((data) => {
				this.summary = data;
			});
		},
		popup: function () {
			if (process.client) {
				let bootstrap = require('bootstrap');
				let toast = document.getElementById('popup');
				new bootstrap.Toast(toast, {
					delay: 10000
				}).show();
			}
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
