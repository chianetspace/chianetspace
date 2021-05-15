<template>
	<div>
		<div class="row my-lg-5 mb-4">
			<div class="col text-center">
				<h1 class="display-4">NetSpace <strong class="fw-bold">History</strong></h1>
				<p>Monitor the growth of the netspace.</p>
			</div>
		</div>
		<table class="table">
			<thead>
			<tr>
				<th scope="col">Date</th>
				<th scope="col">Netspace</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="item in this.history">
				<td scope="row">{{ item.date }}</td>
				<td>{{ item.netspace }} PiB</td>
			</tr>
			</tbody>
		</table>

	</div>
</template>

<script>
export default {
	name: "statistics",
	data() {
		return {
			history: []
		}
	},
	mounted() {
		this.$axios.get('data/growth').then(response => {
			this.history = response.data.reverse();
		})
	}
}
</script>

<style scoped>

</style>
