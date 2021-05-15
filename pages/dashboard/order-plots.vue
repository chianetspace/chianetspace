<template>
	<div>
		<h3>
			<i class="fas fa-leaf text-primary me-2"></i>
			<strong>Chia</strong>NetSpace.com &rarr; Order Plots
		</h3>
		<p class="lead mb-3">Tired to generate your plots yourself? We are here 🙌</p>
		<h5 class="mt-5">
			<i class="bx bx-basket me-1"></i>
			Create a New Order
		</h5>
		<p class="mb-4">Please fill the form to create a new order.</p>
		<div class="alert alert-primary alert-dismissible mb-4" role="alert">
			<span class="fw-bold">Information: </span>
			Please read
			<NuxtLink class="text-decoration-none text-secondary" to="/frequently-asked-questions">our FAQ</NuxtLink>
			before creating an order.
			<button class="btn btn-close btn-close-white"></button>
		</div>
		<form method="post" @submit.prevent="createOrder">
			<div class="mb-3">
				<label class="form-label fw-bold" for="farmerprivatekey">Farmer Private Key <span
					class="text-danger">*</span></label>
				<input id="farmerprivatekey" v-model="model.farmerPrivateKey" class="form-control form-control-lg"
					   placeholder="Enter your farmer private key here" required type="password"/>
				<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
			</div>
			<div class="mb-3">
				<label class="form-label fw-bold" for="poolkey">Pool Key <span class="text-danger">*</span></label>
				<input id="poolkey" v-model="model.poolPrivateKey" class="form-control form-control-lg"
					   placeholder="Enter the pool key here" required type="password"/>
			</div>
			<div class="mb-3">
				<label class="form-label fw-bold" for="plotnumber">Plots Number: {{ model.plotsCount }}</label>
				<input id="plotnumber" v-model="model.plotsCount" class="form-range" max="500" min="1" type="range">
			</div>
			<button class="btn btn-secondary" type="reset">Clear</button>
			<button class="btn btn-primary ms-1" type="submit">
				<i class="bx bxs-paper-plane me-1"></i>
				Create Order
			</button>
		</form>
		<form id="coinpayments" action="https://www.coinpayments.net/index.php" method="post" name="coinpayments">
			<input name="cmd" type="hidden" value="_pay_simple">
			<input name="reset" type="hidden" value="1">
			<input name="merchant" type="hidden" value="17deb20d22ffd6c6c4a60c3877ab889c">
			<input name="want_shipping" type="hidden" value="0">
			<input name="currency" type="hidden" value="USD">
			<input :value="totalAmount()" name="amountf" type="hidden">
			<input name="item_name" type="hidden" value="Chia Plot">
			<input name="success_url" type="hidden" value="https://chianetspace.com/thanks">
			<input name="cancel_url" type="hidden" value="https://chianetspace.com/dashboard/order-plots">
		</form>
	</div>
</template>

<script>
export default {
	name: "order-plots",
	layout: "dashboard",
	data() {
		return {
			model: {
				farmerPrivateKey: "string",
				poolPrivateKey: "string",
				plotsCount: 1
			}
		}
	},
	methods: {
		createOrder: function () {
			this.$axios.post('plots/order', this.model).then(response => {
				document.forms["coinpayments"].submit();
			})
		},
		totalAmount: function () {
			return this.model.count * 12;
		}
	}
}
</script>

<style scoped>

</style>
