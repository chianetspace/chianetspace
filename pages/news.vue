<template>
	<div>
		<div class="row my-5">
			<div class="col text-center">
				<h1 class="display-5">Latest <strong class="fw-bold">News</strong></h1>
				<p>Get the latest news on the chia network.</p>
			</div>
		</div>
		<div class="row">
			<div v-for="article in articles" class="col-lg-4 d-flex">
				<article class="card mb-5 shadow border-0 mx-2">
					<a v-if="article.thumb" :href="article.link" target="_blank">
						<img :alt="article.title" :src="article.thumb" class="card-img-top">
					</a>
					<div class="card-body">
						<h4 class="card-title">
							<a :href="article.link" class="text-inherit" target="_blank">
								{{ article.title }}
							</a>
						</h4>
						<p class="card-text" v-html="article.description"></p>
						<a :href="article.link"
						   class="btn d-flex align-items-center justify-content-center btn-outline-secondary rounded-pill w-100"
						   target="_blank">
							<i class="bx bxs-bookmark me-2"></i>
							Read Article
						</a>
					</div>
					<div class="card-footer py-3">
						Source: <a :href="article.link">{{ article.source }}</a>
					</div>
				</article>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "news",
	async asyncData({$axios}) {
		const articles = await $axios.$get('news/latest')
		return {articles}
	},
}
</script>

<style scoped>
.card img
{
	height: 210px;
	object-fit: cover;
}
</style>
