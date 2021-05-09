<template>
	<header :class="'navbar navbar-expand-lg position-sticky top-0 navbar-dark ' + (this.shadow ? 'shadow' : '')">
		<div class="container">
			<NuxtLink to="/" class="navbar-brand h4 fw-normal mb-0">
				<i class="fas fa-leaf logo"></i>
				<strong>Chia</strong>NetSpace<span class="">.com</span>
				<sup><span class="badge small text-uppercase text-success">Beta</span></sup>
			</NuxtLink>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
					aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse ms-4 navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav text-uppercase me-auto mb-2 mb-lg-0">
					<li class="nav-item mx-3">
						<NuxtLink class="nav-link px-0" exact-active-class="active" to="/">
							<i class="bx bxs-dashboard me-1"></i>
							Overview
						</NuxtLink>
					</li>
					<li class="nav-item mx-3">
						<NuxtLink class="nav-link px-0" exact-active-class="active" to="/news">
							<i class="bx bxs-news me-1"></i>
							News
						</NuxtLink>
					</li>
					<li class="nav-item mx-3">
						<NuxtLink class="nav-link px-0" exact-active-class="active" to="/pricing">
							<i class="bx bxs-server me-1"></i>
							Buy Plots
						</NuxtLink>
					</li>
					<li class="nav-item mx-3">
						<NuxtLink class="nav-link px-0" exact-active-class="active" to="/faq">
							<i class="bx bxs-book-content me-1"></i>
							FAQ
						</NuxtLink>
					</li>
					<li class="nav-item mx-3">
						<NuxtLink class="nav-link px-0" exact-active-class="active" to="/about">
							<i class="bx bxs-info-circle me-1"></i>
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
	name: "Header",
	props: {
		shadow: false
	}
}
</script>

<style scoped>
header
{
	padding-top: 2.5rem;
	padding-bottom: 2.1rem;
	z-index: 9;
}

header.navbar-dark {
	transition: box-shadow 0.3s ease-in-out;
}

.nav-link
{
	font-size: 0.9em;
}

.nav-link {
	display: inline-block;
	position: relative;
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
