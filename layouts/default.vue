<template>
	<div>
		<NewsletterModal/>
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
	auth: 'guest',
	methods: {
		handleScroll: function () {
			this.shadow = window.scrollY !== 0;
		}
	},
	mounted() {
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-F6WQ5SR60J');

		let orderModal = document.getElementById('order-modal');
		if (orderModal !== null) {
			orderModal.addEventListener('show.bs.modal', _ => this.blurred = true);
			orderModal.addEventListener('hide.bs.modal', _ => this.blurred = false);
		}

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
