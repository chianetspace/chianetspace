<template>
	<div>
		<h3>
			<i class="fas fa-leaf text-primary me-2"></i>
			<span class="d-lg-block d-none"><strong>Chia</strong>NetSpace.com &rarr;</span> My Plots
		</h3>
		<p class="lead mb-4">Tired to generate your plots yourself? We are here 🙌</p>
		<p v-if="plots.length === 0" class="text-warning">You actually don't have any plots, order
			<NuxtLink to="/dashboard/order-plots">here</NuxtLink>
			.
		</p>
		<div v-else class="row">
			<div v-for="plot in this.plots" class="col-3">
				<div class="card mb-4">
					<div class="card-body">
						<h5 class="card-title">
							<i class="bx bxs-file-blank"></i>
							Plot #{{ plot.id.toString().substr(0, 8) }}
						</h5>
						<p class="lead">Status: {{ getStatus(plot.status) }}</p>
						<p v-if="plot.status > 1" class="card-text">You can download here: <a :href="plot.downloadUri">{{
								plot.downloadUri
							}}</a>.</p>
						<!--				<ul class="list-group list-group-flush">-->
						<!--					<li class="list-group-item">An item</li>-->
						<!--				</ul>-->
						<!--				<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
						<!--				<a href="#" class="btn btn-primary">Go somewhere</a>-->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "plots",
	layout: "dashboard",
	data() {
		return {
			plots: []
		}
	},
	mounted() {
		this.$axios.get("plots").then((response) => {
			console.log(response.data);
			this.plots = response.data;
		})
	},
	methods: {
		getStatus: function (status) {
			switch (status) {
				default:
					return "Just Created";

				case 1:
					return "Paid";

				case 2:
					return "Available";

				case 3:
					return "Deleted";

			}
		}
	}
}
</script>

<style scoped>

</style>
