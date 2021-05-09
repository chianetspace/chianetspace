<template>
	<footer class="footer mt-auto py-4">
		<div class="container small text-uppercase">
			<div class="row">
				<div class="col">
					<div class="px-2">
						<button class="btn btn-light d-flex align-items-center btn-sm px-3 rounded-pill">
							<i class="bx bxs-brightness me-2"></i>
							Light
						</button>
					</div>
				</div>
				<div class="col d-flex justify-content-end align-items-center">
					Copyright &copy; {{ new Date().getFullYear() }} ChiaNetSpace.com - All Rights Reserved
				</div>
<!--				<div class="col text-end">-->
<!--					<div class="px-2">-->
<!--&lt;!&ndash;						<img src="https://camo.githubusercontent.com/bad3d579584bd4996af60a96735a0fdcb9f402933c139cc6c4c4a4577576411f/68747470733a2f2f616b612e6d732f6465706c6f79746f617a757265627574746f6e" />&ndash;&gt;-->
<!--					</div>-->
<!--				</div>-->
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer"
}
</script>

<style scoped>

</style>
