<template>
	<div id="main">
		<div class="d-flex flex-column border-end border-light flex-shrink-0 p-3 text-white bg-dark vh-100"
			 style="width: 280px;">
			<a class="d-flex border-bottom border-light pb-3 align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
			   href="/">
				<i class="fas fa-leaf text-primary me-2"></i>
				<span class="fs-4">
					<strong>Chia</strong>NetSpace.com
				</span>
			</a>
			<ul class="nav nav-pills flex-column mb-auto">
				<li class="nav-item">
					<NuxtLink class="nav-link text-white" exact-active-class="active" to="/dashboard">
						<i class="bx bxs-category-alt me-2"></i>
						Welcome
					</NuxtLink>
				</li>
				<li class="mt-3">
					<NuxtLink class="nav-link text-white" exact-active-class="active" to="/dashboard/order-plots">
						<i class="bx bxs-cart me-2"></i>
						Order Plots
						<sup><label class="badge bg-primary text-uppercase ms-1">New</label></sup>
					</NuxtLink>
				</li>
				<li>
					<NuxtLink class="nav-link text-white" exact-active-class="active" to="/dashboard/plots">
						<i class="bx bxs-cube me-2"></i>
						My Plots
						<!--						<sup><label class="badge bg-primary text-uppercase ms-1">New</label></sup>-->
					</NuxtLink>
				</li>
				<li class="mt-3">
					<NuxtLink class="nav-link text-white" exact-active-class="active" to="/dashboard/pool">
						<i class="bx bxs-server me-2"></i>
						ChiaNetSpace's Pool
					</NuxtLink>
				</li>
				<li class="mt-3">
					<a class="nav-link text-white" href="javascript:void(0);" @click="openChat">
						<i class="bx bx-support me-2"></i>
						Support Center
					</a>
				</li>
				<li>
					<a class="nav-link text-white" href="https://t.me/chianetspace" target="_blank">
						<i class="bx bxl-telegram me-2"></i>
						Telegram
					</a>
				</li>
			</ul>
			<hr>
			<div class="dropdown">
				<div class="d-flex align-items-center text-white text-decoration-none">
					<v-gravatar :email="this.$auth.user.email" alt="gravatar" class="rounded-circle me-2" height="32"
								width="32"/>
					<strong class="name" v-text="this.$auth.user.email"></strong>
					<a class="ms-auto" href="javascript:void(0);" @click="logout">
						<i class="bx bx-power-off mb-2 align-middle"></i>
					</a>
				</div>
			</div>
		</div>
		<main class="align-items-start w-100 h-100 p-3">
			<div class="container my-5">
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
