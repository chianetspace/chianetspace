<template>
	<div>
		<h3>
			<i class="fas fa-leaf text-primary me-2"></i>
			<span class="d-lg-inline-block d-none"><strong>Chia</strong>NetSpace.com &rarr;</span> Order Plots
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
				<label class="form-label fw-bold" for="farmerprivatekey">Farmer Public Key <span
					class="text-danger">*</span></label>
				<input id="farmerprivatekey" v-model="model.farmerPrivateKey" class="form-control form-control-lg"
					   placeholder="Enter your farmer public key here" required type="text"/>
				<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
			</div>
			<div class="mb-3">
				<label class="form-label fw-bold" for="poolkey">Pool Key <span class="text-danger">*</span></label>
				<input id="poolkey" v-model="model.poolPrivateKey" class="form-control form-control-lg"
					   placeholder="Enter the pool key here" required type="text"/>
			</div>
			<div class="mb-3">
				<label class="form-label fw-bold" for="plotnumber">Plots Number: {{ model.plotsCount }}</label>
				<input id="plotnumber" v-model="model.plotsCount" class="form-range" max="210" min="1" type="range">
			</div>
			<p>Order Amount: ${{ totalAmount() }}</p>
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
				farmerPrivateKey: '',
				poolPrivateKey: '',
				plotsCount: 1
			}
		}
	},
	created() {
		if (process.browser) {
			try {
				window.$crisp.push(["do", "chat:open"]);
				if (localStorage.getItem("shown") === null) {
					window.$crisp.push(["do", "message:show", ["text", "If you need any help for order, we are there!"]])
					localStorage.setItem("shown", "true");
				}
			} catch {
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
			return this.model.plotsCount * 12;
		}
	}
}
</script>

<style scoped>

</style>
