<template>
	<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 5;">
		<div id="popup" class="toast fade show text-dark border-0 rounded-3" role="alert">
			<a class="toast-body px-3 py-3 d-flex" href="https://parasol.finance/" target="_blank">
				<img alt="parasol.finance ads" class="ads me-3 p-2" src="https://parasol.finance/icon.png">
				<div>
					<h6 class="fw-normal">Parasol.Finance Presale</h6>
					<p class="mb-0 small">The First Community Governed IDO Platform on Solana. Join Presale &rarr;</p>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "Ads"
}
</script>

<style scoped>
#popup {
	box-shadow: 0 0 2.1rem rgba(0, 0, 0, .07);
}

.toast {
	background-color: rgb(21 36 64);
}

a.toast-body {
	text-decoration: none;
}

.ads {
	max-height: 70px;
}
</style>
