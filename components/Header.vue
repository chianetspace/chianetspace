<template>
	<header
		:class="'navbar py-3 py-lg-5 mb-lg-0 mb-3 navbar-expand-lg position-sticky top-0 navbar-dark ' + (this.shadow ? 'shadow' : '')">
		<div class="container-fluid">
			<NuxtLink class="navbar-brand w-25 ms-lg-0 ms-2 h4 me-auto fw-normal mb-0" to="/">
				<i class="fas fa-leaf logo"></i>
				<strong>Chia</strong>NetSpace<span class="">.com</span>
				<sup><span class="badge small text-uppercase text-success">Beta</span></sup>
			</NuxtLink>
			<button class="navbar-toggler border-0 p-0" data-bs-toggle="collapse" type="button"
					data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
					aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div id="navbarSupportedContent" class="collapse navbar-collapse justify-content-center">
				<ul class="navbar-nav text-uppercase mb-2 mb-lg-0">
					<li class="nav-item text-lg-start text-center d-none d-xl-block d-md-none d-sm-none">
						<NuxtLink class="nav-link px-1" exact-active-class="active" to="/">
							<i class="bx bxs-dashboard me-1"></i>
							Home
						</NuxtLink>
					</li>
					<li class="nav-item text-lg-start text-center">
						<NuxtLink class="nav-link px-1" exact-active-class="active" to="/news">
							<i class="bx bxs-news me-1"></i>
							News
						</NuxtLink>
					</li>
					<li class="nav-item text-lg-start text-center">
						<NuxtLink class="nav-link px-1" exact-active-class="active" to="/statistics">
							<i class="bx bxs-pie-chart-alt me-1"></i>
							Stats
						</NuxtLink>
					</li>
					<li class="nav-item text-lg-start text-center">
						<NuxtLink class="nav-link px-0" to="/pricing">
							<i class="bx bxs-cart me-1"></i>
							Order Plots
						</NuxtLink>
					</li>
					<li class="nav-item text-lg-start text-center">
						<NuxtLink class="nav-link px-1" to="/dashboard/pool">
							<i class="bx bxs-server me-1"></i>
							Pool
						</NuxtLink>
					</li>
					<!--					<li class="nav-item text-lg-start text-center">-->
					<!--						<NuxtLink class="nav-link px-1" exact-active-class="active" to="/frequently-asked-questions">-->
					<!--							<i class="bx bxs-book-content me-1"></i>-->
					<!--							FAQ-->
					<!--						</NuxtLink>-->
					<!--					</li>-->
					<li class="nav-item text-lg-start text-center">
						<NuxtLink class="nav-link px-1" exact-active-class="active" to="/about">
							<i class="bx bxs-info-circle me-1"></i>
							About
						</NuxtLink>
					</li>
					<li class="nav-item text-lg-start text-center d-block d-lg-none">
						<a class="nav-link px-0" href="https://discord.gg/D6bRh8ZugX">
							<i class="bx bxl-discord me-1"></i>
							Join Discord
						</a>
					</li>
				</ul>
			</div>
			<div class="w-25 d-none d-lg-block text-end">
				<!--				<a class="btn btn-white- btn-link align-items-center text-inherit rounded-pill me-1"-->
				<!--				   href="https://discord.gg/D6bRh8ZugX">-->
				<!--					<i class="bx bxl-discord me-1"></i>-->
				<!--					Discord-->
				<!--				</a>-->
				<NuxtLink v-if="this.$auth.loggedIn" class="btn btn-primary ms-auto px-4 rounded-pill" to="/dashboard">
					<i class="bx bxs-dashboard align-middle me-1"></i>
					Dashboard
				</NuxtLink>
				<a href="https://www.okex.com/join/7490678" v-else class="btn btn-primary ms-auto px-4 rounded-pill">
					<i class="bx bx-money align-middle me-1"></i>
					Buy/Sell Chia
				</a>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
	props: {
		shadow: false,
	}
}
</script>

<style scoped>
header {
	z-index: 9;
	box-shadow: inset 0 30px 30px #111b2b;
}

@media (min-width: 992px) {
	.py-lg-5 {
		padding-top: 2.5rem !important;
		padding-bottom: 2.1rem !important;
	}
}

header.navbar-dark {
	transition: box-shadow 0.3s ease-in-out;
}

.nav-link {
	font-size: 0.9em;
}

.nav-link {
	display: inline-block;
	position: relative;
	margin: 0 12px;
}

.nav-link:after {
	content: '';
	position: absolute;
	width: 100%;
	transform: scaleX(0);
	height: 2px;
	bottom: 0;
	left: 0;
	background-color: #ffffff;
	transform-origin: bottom right;
	transition: transform 0.25s ease-out;
}

.nav-link.active:after,
.nav-link:hover:after
{
	transform: scaleX(1);
	transform-origin: bottom left;
}
</style>
