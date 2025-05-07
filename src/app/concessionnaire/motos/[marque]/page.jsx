import React, { Suspense } from "react";
import CardCar from "@/components/Card/CardCar";
import MenuMotos from "@/components/MenuMotos";
import { getByMotoPathByMarque } from "@/utils/motoClient";

const MotosMarque = async ({ params }) => {
	const { marque } = await params;
	console.log("marque", marque);
	const vehicules = await getByMotoPathByMarque(`/motos/marque/${marque}`);

	const marqueVL = marque.charAt(0).toUpperCase() + marque.slice(1);

	return (
		<>
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
					<div className="mx-auto py-32">
						<div>
							<MenuMotos />
						</div>
						<div className="w-full mb-20">
							<h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-2 text-white">
								Moto de la marque {marqueVL}
							</h1>
							<div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 flex flex-wrap w-full flex-row items-center justify-between text-center">
								<h2 className="sr-only">Motos</h2>
								<Suspense fallback={<p>Chargement des motos ...</p>}>
									{vehicules.map((moto) => (
										<CardCar
											key={moto._id}
											marque={moto.marque?.marque}
											model={moto.model}
											type={moto.type}
											price={moto.price}
											imgFront={`/pictures/moto/${moto.marque?.slug}/${moto.slug}.webp`}
											imgBack={`/pictures/moto/${moto.marque?.slug}/${moto.slug}_a.webp`}
											isNew={moto.isNew}
										/>
									))}
								</Suspense>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default MotosMarque;
