<template>
	<div id="main">
		<div class="d-flex flex-column border-end border-light flex-shrink-0 p-3 text-white bg-dark vh-100"
			 style="-width: 280px;">
			<a class="d-flex border-bottom justify-content-center border-light pt-3 pb-4 pt-lg-0 pb-lg-3 align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
			   href="/">
				<i class="fas fa-leaf text-primary me-lg-2"></i>
				<span class="fs-4 d-lg-inline-block d-none">
					<strong>Chia</strong>NetSpace.com
				</span>
			</a>
			<ul class="nav nav-pills pt-3 flex-column mb-auto">
				<li class="nav-item">
					<NuxtLink class="nav-link text-white" exact-active-class="active" to="/dashboard">
						<i class="bx bxs-category-alt me-lg-2"></i>
						<span class="d-lg-inline-block d-none">Welcome</span>
					</NuxtLink>
				</li>
				<li class="mt-3">
					<NuxtLink class="nav-link text-white" exact-active-class="active" to="/dashboard/order-plots">
						<i class="bx bxs-cart me-lg-2"></i>
						<span class="d-lg-inline-block d-none">Order Plots</span>
						<sup><label
							class="badge d-lg-inline-block d-none bg-primary text-uppercase ms-1">New</label></sup>
					</NuxtLink>
				</li>
				<li>
					<NuxtLink class="nav-link text-white" exact-active-class="active" to="/dashboard/plots">
						<i class="bx bxs-cube me-lg-2"></i>
						<span class="d-lg-inline-block d-none">My Plots</span>
						<!--						<sup><label class="badge bg-primary text-uppercase ms-1">New</label></sup>-->
					</NuxtLink>
				</li>
				<li class="mt-3">
					<NuxtLink class="nav-link text-white" exact-active-class="active" to="/dashboard/pool">
						<i class="bx bxs-server me-lg-2"></i>
						<span class="d-lg-inline-block d-none">ChiaNetSpace's Pool</span>
					</NuxtLink>
				</li>
				<li class="mt-3">
					<a class="nav-link text-white" href="javascript:void(0);" @click="openChat">
						<i class="bx bx-support me-lg-2"></i>
						<span class="d-lg-inline-block d-none">Support Center</span>
					</a>
				</li>
				<li>
					<a class="nav-link text-white" href="https://t.me/chianetspace" target="_blank">
						<i class="bx bxl-telegram me-lg-2"></i>
						<span class="d-lg-inline-block d-none">Telegram</span>
					</a>
				</li>
			</ul>
			<hr>
			<div class="dropdown">
				<div class="d-flex align-items-center justify-content-center text-white text-decoration-none">
					<v-gravatar :email="this.$auth.user.email" alt="gravatar" class="rounded-circle me-lg-2" height="32"
								width="32"/>
					<strong class="name d-lg-inline-block d-none" v-text="this.$auth.user.email"></strong>
					<a class="ms-auto d-lg-inline-block d-none" href="javascript:void(0);" @click="logout">
						<i class="bx bx-power-off mb-2 align-middle"></i>
					</a>
				</div>
			</div>
		</div>
		<main class="align-items-start w-100 h-100 overflow-scroll p-lg-3 p-2w">
			<div class="container my-lg-5 my-3">
				<Nuxt/>
			</div>
		</main>
	</div>
</template>

<script>
export default {
	name: "dashboard",
	middleware: 'auth',
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
		async logout() {
			await this.$auth.logout();
			await this.$router.push('/');
		}
	}
}
</script>

<style scoped>
#main {
	display: flex;
	flex-wrap: nowrap;
	height: 100vh;
	align-items: start;
	overflow-x: auto;
	overflow-y: hidden;
}

.text-muted.active {
	color: white !important;
}

.name {
	text-overflow: ellipsis;
	overflow: hidden;
	width: 70%;
	white-space: nowrap;
}

.active .badge {
	background-color: white !important;
	color: #25c687;
}

</style>
