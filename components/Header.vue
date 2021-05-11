<template>
	<header
		:class="'navbar py-3 py-lg-5 mb-lg-0 mb-3 navbar-expand-lg position-sticky top-0 navbar-dark ' + (this.shadow ? 'shadow' : '')">
		<div class="container">
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
					<li class="nav-item text-lg-start text-center">
						<NuxtLink class="nav-link px-0" exact-active-class="active" to="/">
							<i class="bx bxs-dashboard me-1"></i>
							Overview
						</NuxtLink>
					</li>
					<li class="nav-item text-lg-start text-center">
						<NuxtLink class="nav-link px-0" exact-active-class="active" to="/news">
							<i class="bx bxs-news me-1"></i>
							News
						</NuxtLink>
					</li>
					<!--					<li class="nav-item">-->
					<!--						<NuxtLink class="nav-link px-0" exact-active-class="active" to="/statistics">-->
					<!--							<i class="bx bxs-pie-chart-alt me-1"></i>-->
					<!--							Statistics-->
					<!--						</NuxtLink>-->
					<!--					</li>-->
					<!--					<li class="nav-item">-->
					<!--						<NuxtLink class="nav-link px-0" exact-active-class="active" to="/pricing">-->
					<!--							<i class="bx bxs-server me-1"></i>-->
					<!--							Buy Plots-->
					<!--						</NuxtLink>-->
					<!--					</li>-->
					<!--					<li class="nav-item">-->
					<!--						<NuxtLink class="nav-link px-0" exact-active-class="active" to="/frequently-asked-questions">-->
					<!--							<i class="bx bxs-book-content me-1"></i>-->
					<!--							Frequently Asked Questions-->
					<!--						</NuxtLink>-->
					<!--					</li>-->
					<li class="nav-item text-lg-start text-center">
						<NuxtLink class="nav-link px-0" exact-active-class="active" to="/about">
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
			<!--			<button class="btn btn-secondary px-4 me-2">-->
			<!--				Get Started-->
			<!--			</button>-->
			<div class="w-25 d-none d-lg-block text-end">
				<a class="btn btn-primary ms-auto px-4 rounded-pill" href="https://discord.gg/D6bRh8ZugX">
					<i class="bx bxl-discord me-1"></i>
					Join Discord
				</a>
				<!--				<button data-bs-toggle="modal" data-bs-target="#signup-modal" class="btn btn-primary ms-auto px-4 rounded-pill">-->
				<!--					<i class="bx bxs-cart me-1"></i>-->
				<!--					Order a Plot-->
				<!--				</button>-->
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
	props: {
		shadow: false
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
