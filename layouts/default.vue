<template>
	<div class="d-flex flex-column vh-100">
		<Header :shadow="this.shadow"/>
		<main role="main" class="flex-shrink-0 mb-3">
			<div class="container">
				<Nuxt/>
			</div>
		</main>
		<Footer/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			shadow: false
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

body, header {
	//background-image: linear-gradient(var(--grid-color) 0.1em, transparent 0.1em), linear-gradient(90deg, var(--grid-color) 0.1em, transparent 0.1em);
	//background-size: 3em 3em;
	//box-shadow: inset -10px 20px 30px #101927;
}
</style>
