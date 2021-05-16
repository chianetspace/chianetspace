<template>
	<div>
		<div class="modal-dialog modal-dialog-centered">
			<form class="modal-content" @submit.prevent="signup">
				<div class="modal-header d-block text-center" style="padding: 30px 0 23px;">
					<h4>
						<i class="fas fa-leaf logo"></i>
						<strong>Chia</strong>NetSpace<span class="">.com</span>
					</h4>
					<p class="lead mb-0">Create an Account 🎉</p>
				</div>
				<div class="modal-body px-4 py-0">
					<div class="mb-3">
						<label class="form-label" for="emailAddress">Email address <span
							class="text-danger fw-bold">*</span></label>
						<input id="emailAddress" v-model="model.email" class="form-control form-control-lg"
							   placeholder="Enter your email address" required type="email">
						<div id="emailPrivacy" class="form-text">
							<i class="bx bxs-lock"></i> Don't worry, we didn't share your email.
						</div>
					</div>
					<div class="mb-3">
						<label class="form-label" for="telegram">Telegram (Optional)</label>
						<input id="telegram" v-model="model.telegram" class="form-control form-control-lg"
							   placeholder="Enter your telegram" type="text">
					</div>
					<div class="row mb-3">
						<div class="col">
							<label class="form-label" for="password">Password <span class="text-danger fw-bold">*</span></label>
							<input id="password" v-model="model.password" class="form-control form-control-lg"
								   placeholder="Enter password" required type="password"/>
						</div>
						<div class="col">
							<label class="form-label" for="password">Confirmation <span
								class="text-danger fw-bold">*</span></label>
							<input id="password2" v-model="model.password2" class="form-control form-control-lg"
								   placeholder="Retype it" required type="password"/>
						</div>
					</div>
					<p class="text-center">I already have an account.
						<NuxtLink class="text-decoration-none text-primary" to="/login">Sign In</NuxtLink>
						.
					</p>
				</div>
				<div class="modal-footer pt-2 p-4">
					<button class="btn btn-secondary flex-grow-1" data-bs-dismiss="modal" type="button">Close</button>
					<button :disabled="this.isApplied" class="btn btn-primary flex-grow-1" type="submit">
						<i class="bx bx-log-in me-1"></i>
						Create an Account
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: "signup",
	auth: 'guest',
	data() {
		return {
			model: {
				email: '',
				telegram: '',
				password: '',
				password2: '',
			}
		}
	},
	mounted() {
		if (process.browser) {
			window.$crisp = [];
			window.CRISP_WEBSITE_ID = "bbe3eee7-878d-4c36-8912-cde8da9117f1";
			(function () {
				let d = document;
				let s = d.createElement("script");
				s.src = "https://client.crisp.chat/l.js";
				s.async = 1;
				d.getElementsByTagName("head")[0].appendChild(s);
			})();
		}
	},
	methods: {
		openChat: function () {
			if (process.browser) {
				window.$crisp.push(["do", "chat:open"]);
			}
		},
		signup: function () {
			this.$axios.post('authentication/register', this.model)
				.then(_ => {
					this.$auth.loginWith('local', {data: this.model})
						.then(() => this.$router.push('/dashboard'));
				});
		}
	}
}
</script>

<style scoped>

</style>
