<template>
	<div id="order-modal" class="modal -fade" tabindex="-1">
		<div v-if="isApplied" class="pyro">
			<div class="before"></div>
			<div class="after"></div>
		</div>
		<div class="modal-dialog modal-dialog-centered">
			<form class="modal-content" @submit.prevent="apply">
				<div class="modal-header d-block text-center" style="padding: 30px 0 23px;">
					<h4>
						<i class="fas fa-leaf logo"></i>
						<strong>Chia</strong>NetSpace<span class="">.com</span>
					</h4>
					<p class="lead mb-0">Plots Pre-Sales 🎉</p>
				</div>
				<div class="modal-body px-4 py-0">
					<p class="small">We are preparing to launch the sale of plots, if you are interested then you can
						fill in your email address.</p>
					<div v-if="!this.isApplied" class="mb-3">
						<label class="form-label" for="emailAddress">Email address</label>
						<input id="emailAddress" v-model="emailAddress" class="form-control form-control-lg" required
							   placeholder="Enter your email address" type="email">
						<div id="emailPrivacy" class="form-text"><i class="bx bxs-lock"></i> Your email will not be sold
							to any third-party.
						</div>
					</div>
					<div v-else class="text-center">
						<h3>Thank You!</h3>
						<p>We will contact you as soon as possible.</p>
					</div>
					<div class="d-flex justify-content-evenly">
						<a class="d-flex justify-content-center text-inherit text-muted flex-column mb-3 align-items-center"
						   href="https://t.me/chianetspace">
							<i class="display-6 bx bxl-telegram"></i>
							Join our Telegram
						</a>
						<a class="d-flex justify-content-center text-inherit text-muted flex-column mb-3 align-items-center"
						   href="https://discord.gg/D6bRh8ZugX">
							<i class="display-6 bx bxl-discord"></i>
							Join our Discord
						</a>
					</div>
				</div>
				<div class="modal-footer pt-2 p-4">
					<button class="btn btn-secondary flex-grow-1" data-bs-dismiss="modal" type="button">Close</button>
					<button :disabled="this.isApplied" class="btn btn-primary flex-grow-1" type="submit">
						<i class="bx bxs-basket me-1"></i>
						Apply for Pre-Sale
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: "NewsletterModal",
	data() {
		return {
			isApplied: false,
			emailAddress: null
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
