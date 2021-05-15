<template>
	<div>
		<div class="modal-dialog modal-dialog-centered">
			<form class="modal-content" @submit.prevent="login">
				<div class="modal-header d-block text-center" style="padding: 30px 0 23px;">
					<h4>
						<i class="fas fa-leaf logo"></i>
						<strong>Chia</strong>NetSpace<span class="">.com</span>
					</h4>
					<p class="lead mb-0">Log In To My Account 🎉</p>
				</div>
				<div class="modal-body px-4 py-0">
					<div class="mb-3">
						<label class="form-label" for="emailAddress">Email address</label>
						<input id="emailAddress" v-model="model.email" class="form-control form-control-lg"
							   placeholder="Enter your email address" required type="email">
						<div id="emailPrivacy" class="form-text">
							<i class="bx bxs-lock"></i> If you have lost your password, join our <a
							class="text-primary text-decoration-none" href="javascript:void(0);" @click="openChat">live
							chat</a>.
						</div>
					</div>
					<div class="mb-3">
						<label class="form-label" for="password">Password</label>
						<input id="password" v-model="model.password" class="form-control form-control-lg"
							   placeholder="Enter your password" required type="password"/>
					</div>
					<p class="text-center">I don't have any account.
						<NuxtLink class="text-decoration-none text-primary" to="/signup">Register Now</NuxtLink>
						.
					</p>
				</div>
				<div class="modal-footer pt-2 p-4">
					<button class="btn btn-secondary flex-grow-1" data-bs-dismiss="modal" type="button">Close</button>
					<button class="btn btn-primary flex-grow-1" type="submit">
						<i class="bx bx-log-in me-1"></i>
						Sign In
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: "login",
	data() {
		return {
			model: {
				email: '',
				password: ''
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
		login: function () {
			this.$auth.loginWith('local', {data: this.model})
				.then(() => this.$router.push('/dashboard'))
				.catch(error => console.log(error));
		}
	}
}
</script>

<style scoped>

</style>
