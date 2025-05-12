"use client";

import Image from "next/image";
import React from "react";

import Tritu from "@/assets/team/tritu.gif";
import Waltz from "@/assets/team/waltz.gif";
import Chachou from "@/assets/team/chachou.png";
import Hoodoo from "@/assets/team/hoodoo.gif";
import Rossa from "@/assets/team/rossa.jpg";
import Stark from "@/assets/team/stark.png";

export default function Equipe() {
	return (
		<main className="pt-40">
			<div className="relative isolate px-6 pt-8 lg:px-8">
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
				<div className="text-white">
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center">
						L&apos;équipe du serveur
					</h1>

					<div className="my-20">
						<h2 className="my-8 text-2xl text-center">La Fondation</h2>
						<div className="w-full flex gap-4 justify-around flex-wrap">
							<div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
								<div className="flex flex-col items-center pb-10">
									<Image
										className="mt-4 w-24 h-24 mb-3 rounded-full shadow-lg"
										src={Tritu}
										alt=""
										width={100}
									/>
									<h5 className="mb-1 text-xl font-medium text-white">Tritu Tachel</h5>
									<div className="flex gap-4 mt-4">
										<span className="bg-purple-900 text-purple-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
											Fondateur
										</span>
										<span className="bg-pink-900 text-pink-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
											Développeur
										</span>
									</div>
								</div>
							</div>
							<div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
								<div className="flex flex-col items-center pb-10">
									<Image
										className="mt-4 w-24 h-24 mb-3 rounded-full shadow-lg"
										src={Waltz}
										alt=""
										width={100}
									/>
									<h5 className="mb-1 text-xl font-medium text-white">Waltz</h5>
									<div className="flex gap-4 mt-4 flex-wrap">
										<span className="bg-purple-900 text-purple-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
											Fondateur
										</span>
										<span className="bg-pink-900 text-pink-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
											Développeur
										</span>
										<span className="bg-gray-700 text-gray-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
											Gérant FO
										</span>
									</div>
								</div>
							</div>
							<div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
								<div className="flex flex-col items-center pb-10">
									<Image
										className="mt-4 w-24 h-24 mb-3 rounded-full shadow-lg"
										src={Chachou}
										alt=""
										width={100}
									/>
									<h5 className="mb-1 text-xl font-medium text-white">Chachou</h5>
									<div className="flex gap-4 mt-4">
										<span className="bg-purple-900 text-purple-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
											Fondatrice
										</span>
										<span className="bg-gray-700 text-gray-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
											Gérante Illégale
										</span>
										<span className="bg-yellow-900 text-yellow-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
											Gérante Staff
										</span>
									</div>
								</div>
							</div>
							<div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
								<div className="flex flex-col items-center pb-10">
									<Image
										className="mt-4 w-24 h-24 mb-3 rounded-full shadow-lg"
										src={Hoodoo}
										alt=""
										width={100}
									/>
									<h5 className="mb-1 text-xl font-medium text-white">Hoodoo</h5>
									<div className="flex gap-4 mt-4">
										<span className="bg-cyan-900 text-cyan-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
											Co-Fondatrice
										</span>
										<span className="bg-pink-900 text-pink-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
											Développeuse Principale
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="my-20">
						<h2 className="my-8 text-2xl text-center">Les "Développeurs"</h2>
						<div className="w-full flex gap-4 justify-around flex-wrap">
							<div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
								<div className="flex flex-col items-center pb-10">
									<Image
										className="mt-4 w-24 h-24 mb-3 rounded-full shadow-lg"
										src={Rossa}
										alt=""
										width={100}
									/>
									<h5 className="mb-1 text-xl font-medium text-white">Julien Rossa | Laberlu</h5>
									<div className="flex gap-4 mt-4">
										<span className="bg-pink-900 text-pink-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
											Développeur
										</span>
									</div>
								</div>
							</div>
							<div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
								<div className="flex flex-col items-center pb-10">
									<Image
										className="mt-4 w-24 h-24 mb-3 rounded-full shadow-lg"
										src={Stark}
										alt=""
										width={100}
									/>
									<h5 className="mb-1 text-xl font-medium text-white">Tonton | L.Stark</h5>
									<div className="flex gap-4 mt-4">
										<span className="bg-pink-900 text-pink-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
											Retexture
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-auto max-w-2xl py-32">
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
			</div>
		</main>
	);
}
