<template>
	<div>
		<div class="row my-5">
			<div class="col text-center">
				<h1 class="display-5">
					Frequently Asked <strong class="fw-bold">Questions</strong>
				</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>
		</div>
		<div class="row">
			<div class="col-8 offset-2">
				<div
					id="accordionFlushExample"
					class="accordion accordion-flush"
				>
					<div class="accordion-item">
						<h2 id="flush-headingOne" class="accordion-header">
							<button
								aria-controls="flush-collapseOne"
								aria-expanded="false"
								class="accordion-button"
								data-bs-target="#flush-collapseOne"
								data-bs-toggle="collapse"
								type="button"
							>
								Where should you find your "Chia Farmer Key" and
								"Chia Pool Key"?
							</button>
						</h2>
						<div
							id="flush-collapseOne"
							aria-labelledby="flush-headingOne"
							class="accordion-collapse collapse show"
							data-bs-parent="#accordionFlushExample"
						>
							<div class="accordion-body">
								Linux and MacOS In order to find your Chia
								Farmer and Pool keys on Linux or MacOS you
								should enter following command.
								<code>chia keys show | grep 'Pool\|Farmer'</code
								>.
							</div>
						</div>
					</div>
					<div class="accordion-item">
						<h2 id="flush-headingTwo" class="accordion-header">
							<button
								aria-controls="flush-collapseTwo"
								aria-expanded="false"
								class="accordion-button collapsed"
								data-bs-target="#flush-collapseTwo"
								data-bs-toggle="collapse"
								type="button"
							>
								Accordion Item #2
							</button>
						</h2>
						<div
							id="flush-collapseTwo"
							aria-labelledby="flush-headingTwo"
							class="accordion-collapse collapse"
							data-bs-parent="#accordionFlushExample"
						>
							<div class="accordion-body">
								Placeholder content for this accordion, which is
								intended to demonstrate the
								<code>.accordion-flush</code> class. This is the
								second item's accordion body. Let's imagine this
								being filled with some actual content.
							</div>
						</div>
					</div>
					<div class="accordion-item">
						<h2 id="flush-headingThree" class="accordion-header">
							<button
								aria-controls="flush-collapseThree"
								aria-expanded="false"
								class="accordion-button collapsed"
								data-bs-target="#flush-collapseThree"
								data-bs-toggle="collapse"
								type="button"
							>
								Accordion Item #3
							</button>
						</h2>
						<div
							id="flush-collapseThree"
							aria-labelledby="flush-headingThree"
							class="accordion-collapse collapse"
							data-bs-parent="#accordionFlushExample"
						>
							<div class="accordion-body">
								Placeholder content for this accordion, which is
								intended to demonstrate the
								<code>.accordion-flush</code> class. This is the
								third item's accordion body. Nothing more
								exciting happening here in terms of content, but
								just filling up the space to make it look, at
								least at first glance, a bit more representative
								of how this would look in a real-world
								application.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "frequently-asked-questions",
};
</script>

<style scoped></style>
