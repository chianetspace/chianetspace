<template>
	<div>
		<h3>
			<i class="bx bxs-server align-middle"></i>
			<span class="d-lg-inline-block d-none"><strong>Chia</strong>NetSpace.com &rarr;</span> Official Pool
		</h3>
		We are actually preparing the launch of our pool, really soon!
		<h5 class="mt-5">
			<i class="bx bx-envelope-open me-1"></i>
			Pre-Opening Sign Up
		</h5>
		<p class="mb-4">Please fill this form to know when we will open our pool.</p>
		<form @submit.prevent="apply">
			<div v-if="isApplied" class="mb-3">
				<h5>Thank You!</h5>
			</div>
			<div class="mb-3">
				<label class="form-label fw-bold" for="email">Email Address <span class="text-danger">*</span></label>
				<input id="email" v-model="emailAddress" class="form-control form-control-lg"
					   placeholder="Enter your email address" required type="email"/>
			</div>
			<button class="btn btn-secondary" type="reset">Clear</button>
			<button :disabled="isApplied" class="btn btn-primary ms-1" type="submit">
				<i class="bx bxs-save align-middle me-1"></i>
				Sign Up
			</button>
		</form>
	</div>
</template>

<script>
export default {
	name: "pool",
	layout: "dashboard",
	data() {
		return {
			isApplied: false,
			emailAddress: ''
		}
	},
	methods: {
		apply: function () {
			this.$axios.post(`newsletter/apply?email=${this.emailAddress}`).then(() => {
				this.isApplied = true;
			});
		}
	}
}
</script>

<style scoped>

</style>
