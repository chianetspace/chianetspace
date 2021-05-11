<template>
	<div>
		<div id="signup-modal" class="modal fade" tabindex="-1">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header d-block text-center" style="padding: 30px 0 23px;">
						<h4>
							<i class="fas fa-leaf logo"></i>
							<strong>Chia</strong>NetSpace<span class="">.com</span>
							<!--							<sup><span class="badge small text-uppercase text-success">Beta</span></sup>-->
						</h4>
						<p class="lead mb-0">Login To Your Account.</p>
						<!--						<h5 class="modal-title fw-normal">-->
						<!--							<i class="bx bx-log-in"></i>-->
						<!--							<strong>Chia</strong>NetSpace.com <strong>Login</strong>-->
						<!--						</h5>-->
						<!--						<button type="button" class="btn-close text-white" data-bs-dismiss="modal"></button>-->
					</div>
					<div class="modal-body px-4 py-0">
						<form>
							<div class="mb-3">
								<label class="form-label" for="exampleInputEmail1">Email address</label>
								<input id="exampleInputEmail1" aria-describedby="emailHelp" class="form-control"
									   placeholder="Enter your email address" type="email">
								<div id="emailHelp" class="form-text">We'll never share your email with anyone else.
								</div>
							</div>
							<div class="mb-3">
								<label class="form-label" for="exampleInputPassword1">Password</label>
								<input id="exampleInputPassword1" class="form-control" placeholder="Enter your password"
									   type="password">
							</div>
							<div class="form-check">
								<input id="rememberme" class="form-check-input" type="checkbox" value=""/>
								<label class="form-check-label" for="rememberme">
									Keep me logged in
								</label>
							</div>
							<p class="small text-muted mt-4">I don't have an account.
								<NuxtLink class="text-muted" to="/signup">Sign Up</NuxtLink>
								.
							</p>
							<!--							<div class="mb-3 form-check">-->
							<!--								<input type="checkbox" class="form-check-input" id="exampleCheck1">-->
							<!--								<label class="form-check-label" for="exampleCheck1">Check me out</label>-->
							<!--							</div>-->
						</form>
					</div>
					<div class="modal-footer pb-4">
						<button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
						<button class="btn btn-primary" type="button">
							<i class="bx bx-paper-plane me-1"></i>
							Sign In
						</button>
					</div>
				</div>
			</div>
		</div>
		<div id="layout-wrapper" :class="'d-flex flex-column vh-100 ' + (this.blurred ? 'blurred' : '')">
			<Header :shadow="this.shadow"/>
			<main :class="'flex-shrink-0 ' + (this.$route.name !== 'frequently-asked-questions' ? 'flex-centered' : '')"
				  role="main">
				<div class="container">
					<Nuxt/>
				</div>
			</main>
			<Footer/>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			shadow: false,
			blurred: false
		}
	},
	methods: {
		handleScroll() {
			// Your scroll handling here
			// console.log(window.scrollY)
			this.shadow = window.scrollY !== 0;
		}
	},
	mounted() {
		let orderModal = document.getElementById('signup-modal');
		orderModal.addEventListener('show.bs.modal', _ => this.blurred = true);
		orderModal.addEventListener('hide.bs.modal', _ => this.blurred = false);

		(function (h, o, t, j, a, r) {
			h.hj = h.hj || function () {
				(h.hj.q = h.hj.q || []).push(arguments)
			};
			h._hjSettings = {hjid: 2391560, hjsv: 6};
			a = o.getElementsByTagName('head')[0];
			r = o.createElement('script');
			r.async = 1;
			r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
			a.appendChild(r);
		})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
	},
	beforeMount() {
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll);
	}
}
</script>

<style lang="scss">
:root {
	--grid-color: rgba(255, 255, 255, 0.01);
}

#layout-wrapper.blurred {
	filter: blur(5px);
	min-height: 100vh;
}

body, header {
	//background-image: linear-gradient(var(--grid-color) 0.1em, transparent 0.1em), linear-gradient(90deg, var(--grid-color) 0.1em, transparent 0.1em);
	//background-size: 3em 3em;
	//box-shadow: inset -10px 20px 30px #101927;
}

main {
	display: flex;
	align-items: center;
}

main.flex-centered {
	flex-grow: 1;
}
</style>
