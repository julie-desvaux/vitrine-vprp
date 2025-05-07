"use client";

import Link from "next/link";
import React from "react";

export default function Reglement() {
	return (
		<main>
			<div className="relative isolate pt-8">
				<div
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					aria-hidden="true"
					style={{ backgroundColor: "rgba(20, 0, 54, 0.5)" }}
				>
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#140036] to-[#d6a1f1] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/>
				</div>
				<div className="mx-auto py-32">
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white text-center">
						Règlements de la ville
					</h1>
					<h2 className="sm:text-2xl text-2xl font-medium title-font mt-10 mb-2 text-white underline text-center">
						Règlement FO / Civil
					</h2>
					<Link
						className="text-purple-300 md:text-rose hover:text-purple-500 block text-center"
						href="https://docs.google.com/presentation/d/16CTis7M0Vdu2x6mwW8TjJgrBH1ykz4VEbsJ5h4e04GE/"
					>
						Lien du règlement FO/Civil
					</Link>
					<iframe
						className="my-10 mx-auto"
						src="https://docs.google.com/presentation/d/16CTis7M0Vdu2x6mwW8TjJgrBH1ykz4VEbsJ5h4e04GE/"
						id="inlineFrameExample"
						title="Règlement FO/Civil"
						width="1024"
						height="600"
					/>
					<h2 className="sm:text-2xl text-2xl font-medium title-font mt-10 mb-2 text-white underline text-center">
						Règlement Illégal
					</h2>
					<Link
						className="text-purple-300 md:text-rose hover:text-purple-500 block text-center"
						href="https://docs.google.com/presentation/d/1UpNy1i8C-4LMHjtKCgrXELYvDB2F7rF5VobCn_Fxvxc"
					>
						Lien du règlement Illégal
					</Link>

					<iframe
						className="my-10 mx-auto"
						src="https://docs.google.com/presentation/d/1UpNy1i8C-4LMHjtKCgrXELYvDB2F7rF5VobCn_Fxvxc"
						id="inlineFrameExample"
						title="Règlement FO/Civil"
						width="1024"
						height="600"
					/>
				</div>
				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true"
					style={{ backgroundColor: "rgba(20, 0, 54, 0.5)" }}
				>
					<div
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#140036] to-[#d6a1f1] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/>
				</div>
			</div>
		</main>
	);
}
