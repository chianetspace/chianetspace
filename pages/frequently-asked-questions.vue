<template>
	<div>
		<div class="row my-lg-5 mb-4">
			<div class="col text-center">
				<h1 class="display-5">
					Frequently Asked <strong class="fw-bold">Questions</strong>
				</h1>
				<p>FAQ is generally to provide information on frequent questions or concerns</p>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-8 offset-lg-2">
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
								<strong>For Linux or MacOS</strong><br/><br/>
								Linux and MacOS In order to find your Chia
								Farmer and Pool keys on Linux or MacOS you
								should enter following command.<br/>
								<code>chia keys show | grep 'Pool\|Farmer'</code
								>.<br/><br/>
								<strong>For GUI client on MacOS</strong><br/><br/>
								<code>cd /Applications/Chia.app/Contents/Resources/app.asar.unpacked/daemon</code
								>.<br/><br/>
								<code>./chia keys show</code><br/><br/>
								<strong>For Windows</strong><br/><br/>
								Finding your farmer and pool keys on Windows is a bit trickier.<br/><br/>
								<ul>
									<li>Open the Command Prompt by going to Start and typing cmd and pressing enter.
									</li>
									<li>Paste the following command in the line
										%APPDATA%/../Local/chia-blockchain/app-1.1.4/resources/app.asar.unpacked/daemon/chia.exe
										keys show
									</li>
									<li>Never share your private keys ,only public keys are safe to be shared. You will
										find your keys in the output.
									</li>
									<li>If you got an error on the first line you might be on an other version of chia
										application.
									</li>
									<li>To figure out which version you need type cd %APPDATA%/../Local/chia-blockchain/
										followed by dir
									</li>
									<li>Hopefully you will see a version number that looks like app-1.0.5 or app-1.0.6
										etc. Replace the version number in the command on line 2 and try it again.
									</li>
									<li>If nothing works shoot us a message and we will look over it together</li>
								</ul>
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
								Is it safe to share your "Chia Farmer Key" and "Chia Pool Key"?
							</button>
						</h2>
						<div
							id="flush-collapseTwo"
							aria-labelledby="flush-headingTwo"
							class="accordion-collapse collapse"
							data-bs-parent="#accordionFlushExample"
						>
							<div class="accordion-body">
								Sharing your public keys is always safe. But don't trust our word for it, just ask
								around on the Chia forums or look up other resources.
								Your private keys should never be shared. Your private keys protect your Chia, if you
								give those out anybody can use your wallet to send transactions.
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
								What is the average Chia plot generation time?
							</button>
						</h2>
						<div
							id="flush-collapseThree"
							aria-labelledby="flush-headingThree"
							class="accordion-collapse collapse"
							data-bs-parent="#accordionFlushExample"
						>
							<div class="accordion-body">
								The plot generation time differs based on the used Chia software version and the various
								hardware we employ. The average plot generation time is currently around 7 hours per
								plot. This is not including any waiting time before the plot starts. Plots are always
								started staggered so there is some delay between the creation of an order and the actual
								starting time of the plotting process.
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
