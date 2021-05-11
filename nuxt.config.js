export default {
	target: 'static',

	generate: {
		dir: 'public'
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'ChiaNetSpace.com | Chia (XCH) Cryptocurrency Netspace and Price Historical Data',
		htmlAttrs: {
			lang: 'en',
			class: 'h-100'
		},
		bodyAttrs: {
			class: 'd-flex flex-column h-100'
		},
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{name: 'theme-color', content: '#4285f4'},
			{
				hid: 'description',
				name: 'description',
				content: 'Dive into statistics and graphs of Chia (XCH) Proof of Space and  Time historical netSpace and price data.'
			},
			{
				hid: 'keywords',
				name: 'keywords',
				content: 'chia,chianet,xch,cryptocurrency,hard drive,smart transactions,'
			}
		],
		link: [
			{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' },
			{ rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' },
			{ rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css' },
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		"~/assets/scss/app.scss"
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/axios.js',
		'~/plugins/bootstrap.js',
		{src: '~/plugins/apexcharts.js', mode: 'client'}

	],

	env: {
		baseUrl: process.env.BASE_URL || 'https://localhost:5001/',
	},

	axios: {
		baseURL: process.env.BASE_URL || 'https://localhost:5001/'
	},

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'nuxt-animejs',
		'@nuxtjs/moment',
		['@nuxtjs/google-analytics', {
			id: 'G-F6WQ5SR60J'
		}]
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/sitemap',
		'@nuxtjs/robots',
		// '@nuxtjs/feed'
		// https://go.nuxtjs.dev/bootstrap
	],

	robots: {
		// UserAgent: '*',
		// Disallow: '/plots'
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		vendor: ['vue-apexchart'],
	},

	loading: {
		color: '#25c687',
	}
}
