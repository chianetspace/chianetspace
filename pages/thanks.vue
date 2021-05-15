<template>
	<div
		class="position-fixed top-0 bottom-0 start-0 end-0 bottom-0 pb-5 d-flex justify-content-center align-items-center flex-column">
		<h1 class="display-5">Thank <strong class="fw-bold">You</strong></h1>
		<p class="lead">You can follow the state of your order in the dashboard.</p>
		<p class="text-warning">Information: Actually our service is in beta, please be patient if your order is a bit
			delayed!</p>
	</div>
</template>

<script>
export default {
	name: 'thanks',
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
	}
}
</script>

<style scoped>
</style>
