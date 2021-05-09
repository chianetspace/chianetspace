<template>
	<header class="navbar navbar-expand-lg bg-dark position-sticky top-0 navbar-dark">
		<div class="container">
			<NuxtLink to="/" class="navbar-brand h4 fw-normal mb-0">
<!--				<i class="bx bxl-kubernetes"></i>-->
				<i class="fas fa-leaf logo"></i>
				<strong>Chia</strong>NetSpace<span class="">.com</span>
<!--				<img src="https://demo.themenio.com/ico/images/logo-s2-white2x.png" class="logo" alt="logo" />-->
<!--				<span class="badge bg-success">Beta</span>-->
			</NuxtLink>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse ms-4 navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav text-uppercase me-auto mb-2 mb-lg-0">
					<li class="nav-item mx-3">
						<NuxtLink to="/" class="nav-link px-0">
							<i class="bx bxs-dashboard"></i>
							Overview
						</NuxtLink>
					</li>
					<li class="nav-item mx-3">
						<NuxtLink to="/news" class="nav-link px-0">
							<i class="bx bxs-news"></i>
							News
						</NuxtLink>
					</li>
					<li class="nav-item mx-3">
						<NuxtLink to="/pricing" class="nav-link px-0">
							<i class="bx bxs-server"></i>
							Buy Plots
						</NuxtLink>
					</li>
					<li class="nav-item mx-3">
						<NuxtLink to="/faq" class="nav-link px-0">
							<i class="bx bxs-book-content"></i>
							FAQ
						</NuxtLink>
					</li>
					<li class="nav-item mx-3">
						<NuxtLink to="/about" class="nav-link px-0">
							<i class="bx bxs-info-circle"></i>
							About
						</NuxtLink>
					</li>
				</ul>
			</div>
<!--			<button class="btn btn-secondary px-4 me-2">-->
<!--				Get Started-->
<!--			</button>-->
			<button class="btn btn-primary px-4 rounded-pill">
				<i class="bx bxs-cart me-1"></i>
				Order a Plot
			</button>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header"
}
</script>

<style scoped>
header
{
	padding-top: 2.5rem;
	padding-bottom: 2.1rem;
	box-shadow: inset -10px 20px 30px #101927;
	z-index: 9;
}

.badge.bg-success
{
	opacity: 0.7;
	background-color: lightgreen !important;
}

i.bx
{
	vertical-align: bottom;
	margin-bottom: 0.21rem;
}

.nav-link
{
	color: #eeeeee !important;
	font-size: 0.9em;
}

.nav-link {
	display: inline-block;
	position: relative;
	color: #0087ca;
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

.nav-link.nuxt-link-exact-active:after,
.nav-link:hover:after
{
	transform: scaleX(1);
	transform-origin: bottom left;
}
</style>
