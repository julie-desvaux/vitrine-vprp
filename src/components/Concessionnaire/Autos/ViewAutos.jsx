"use client";

import React, { useState } from "react";
import { getByAutoPath } from "@/utils/autoClient";

const ViewAutos = async () => {
	const results = await getByAutoPath("/autos/type");
	console.log(results);
	// console.log({ results });
	const [marques, setMarques] = useState([]);
	const [cars, setCars] = useState([]);
	const [selectedMarque, setSelectedMarque] = useState("");
	const [priceRange, setPriceRange] = useState(1000);
	return (
		<main>
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
				<div className="container px-5 py-24 mx-auto">
					<aside
						id="default-sidebar"
						className="mb-10 md:mb-0 md:fixed md:top-20 md:left-0 z-40 md:w-64 md:h-screen"
						aria-label="Sidebar"
					>
						<h2 className="mt-40 ps-4 text-white text-2xl">Filtres</h2>
						<div className="h-4/6 px-3 pt-2 overflow-y-auto bg-gray-900 lg:bg-transparent">
							<form className="max-w-sm mx-auto mt-10">
								<label htmlFor="underline_select" className="block text-sm/4 font-medium text-gray-200">
									Marque
								</label>
								<select
									id="underline_select"
									className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
									value={selectedMarque}
									onChange={(e) => setSelectedMarque(e.target.value)}
								>
									{marques.map((marque) => (
										<option value={marque.slug}>{marque.type}</option>
									))}
								</select>

								<div className="relative my-6">
									<div className="mt-3">
										<label htmlFor="minPrice" className="block text-sm/4 font-medium text-gray-200">
											Prix Min
										</label>
										<div className="mt-2">
											<div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
												<div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
													€
												</div>
												<input
													id="minPrice"
													name="minPrice"
													type="text"
													placeholder="0.00"
													className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
												/>
											</div>
										</div>
									</div>
									<div className="mt-3">
										<label htmlFor="maxPrice" className="block text-sm/4 font-medium text-gray-200">
											Prix Max
										</label>
										<div className="mt-2">
											<div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
												<div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
													€
												</div>
												<input
													id="maxPrice"
													name="maxPrice"
													type="text"
													placeholder="0.00"
													className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
												/>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</aside>

					<div className="sm:ml-64">
						<div className="flex flex-wrap w-full mb-20 flex-row items-center text-center">
							<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
								Voiture récemment ajoutées
							</h1>
							<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex flex-wrap w-full flex-row items-center justify-between text-center">
								<h2 className="sr-only">Véhicules</h2>

								{cars.map((car) => (
									<CardCar
										marque={car.type?.type}
										model={car.model}
										price={car.price}
										image={car.images[0]}
										image2={`/pictures/autos/${car.slug}_a.webp`}
										href={`/concessionnaire/autos/${car.type?.slug}/${car._id}`}
										isNew={car.isNew}
									/>
								))}
							</div>
						</div>
					</div>
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
};

export default ViewAutos;
