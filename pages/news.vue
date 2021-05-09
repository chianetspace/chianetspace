<template>
	<div>
		<div class="row my-5">
			<div class="col text-center">
				<h1 class="display-5">Latest <strong class="fw-bold">News</strong></h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>
		</div>
		<div class="row">
			<div v-for="article in articles" class="col-lg-4">
				<article class="card shadow border-0 mx-2">
					<a :href="article.link" target="_blank">
						<img class="card-img-top" :src="article.thumb" alt="Card thumb cap">
					</a>
					<div class="card-body">
						<h4 class="card-title">{{ article.title }}</h4>
						<p class="card-text">{{ article.tagline }}</p>
						<a href="#"
						   class="btn d-flex align-items-center justify-content-center btn-outline-secondary rounded-pill w-100">
							<i class="bx bxs-bookmark me-2"></i>
							Read Article
						</a>
					</div>
					<div class="card-footer py-3">
						Source: <a href="">{{ article.source }}</a>
					</div>
				</article>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "news",
	data() {
		return {
			articles: [
				{
					link: '',
					thumb: 'https://www.chia.net/assets/news-decrypt.png',
					title: 'A new green cryptocurrency called Chia uses a less energy.',
					tagline: 'Miners preparing to transact “proof of space” cryptocurrency Chia have been driving up the price of hard drives in Southeast Asia.',
					source: 'decrypt.co'
				},
				{
					link: '',
					thumb: 'https://www.chia.net/assets/news-techradar.jpg',
					title: 'Chia Currency Has Already Used 1 Exabyte of Storage',
					tagline: 'This new crypto currency relies on storage space, rather than processing power.',
					source: 'tomshardware.com'
				},
				{
					link: '',
					thumb: 'https://www.chia.net/assets/news-bitcoincom.jpg',
					title: 'Chinese coin miners flock to new cryptocurrency Chia resulting in hard drive shortages and price surges\n',
					tagline: 'Chia’s creators say they want to reduce some of the problems associated with traditional coin mining such as e-waste',
					source: 'scmp.com'
				},
			]
		}
	}
}
</script>

<style scoped>
.card img
{
	height: 210px;
	object-fit: cover;
}
</style>
