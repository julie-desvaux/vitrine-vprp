"use client";

import React from "react";
import { CardJob } from "@/components/Card/CarJob";
import prefet from "@/assets/metiers/prefet.png";
import tribunal from "@/assets/metiers/tribunal.png";
import barreau from "@/assets/metiers/barreau.png";
import mairie from "@/assets/metiers/mairie.png";
import pm from "@/assets/metiers/pm.png";
import gn from "@/assets/metiers/gn.png";
import pn from "@/assets/metiers/pn.png";
import samu from "@/assets/metiers/samu.png";
import bspp from "@/assets/metiers/bspp.png";
import brinks from "@/assets/metiers/brinks.png";
import parisien from "@/assets/metiers/parisien.png";
import auto from "@/assets/metiers/auto.png";
import parismoto from "@/assets/metiers/parismoto.png";
import parisoccasion from "@/assets/metiers/parisoccasion.png";
import norauto from "@/assets/metiers/norauto.png";
import depann from "@/assets/metiers/depann.png";
import dirif from "@/assets/metiers/dirif.png";
import bollore from "@/assets/metiers/bollore.png";
import ltd1 from "@/assets/metiers/ltd1.png";
import ltd2 from "@/assets/metiers/ltd2.png";
import ltd3 from "@/assets/metiers/ltd3.png";
import ltd4 from "@/assets/metiers/ltd4.png";
import ltd5 from "@/assets/metiers/ltd5.png";
import xpo from "@/assets/metiers/xpo.png";
import orpi from "@/assets/metiers/orpi.png";
import bucheron from "@/assets/metiers/bucheron.png";
import food2 from "@/assets/metiers/food2.png";
import fiveguys from "@/assets/metiers/fiveguys.png";
import food1 from "@/assets/metiers/food1.png";
import vigne from "@/assets/metiers/vigne.png";
import casino from "@/assets/metiers/casino.png";
import nightclub from "@/assets/metiers/nightclub.png";
import nightclub2 from "@/assets/metiers/nightclub2.png";
import tabac from "@/assets/metiers/tabac.png";
import taxi from "@/assets/metiers/taxi.png";

export default function Contact() {
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
					<div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
							Liste des métiers
						</h1>
						<p className="lg:w-1/2 w-full leading-relaxed text-gray-300">
							Voici tous les métiers présents sur VI Paris RP
						</p>
					</div>
					<div className="flex flex-wrap -m-4">
						<CardJob job="Préfecture de Paris" content="Pour taxer les impôts" src={prefet} />
						<CardJob job="Tribunal de Paris" content="Pour les délinquants" src={tribunal} />
						<CardJob
							job="Barreau de Paris"
							content="Un petit pépin ? Ils sauront vous aider"
							src={barreau}
						/>
						<CardJob job="Mairie de Paris" content="Vive le maire" src={mairie} />
						<CardJob job="Police Municipale" content="Ils ne font pas que poser des plots" src={pm} />
						<CardJob job="Gendarmerie Nationale" content="Ils ne sont pas qu'à la campagne" src={gn} />
						<CardJob job="Préfecture de Police" content="Allo le 17 ?" src={pn} />
						<CardJob job="SAMU de Paris" content="AP-HP Bichat Claude Bernard" src={samu} />
						<CardJob job="Pompier de Paris" content="Les beaux Pompiers" src={bspp} />
						<CardJob
							job="Brinks"
							content="Récupère l'argent auprès des banques et commercants"
							src={brinks}
						/>
						<CardJob job="Le Parisien" content="Parce que s'informer est primordial" src={parisien} />
						<CardJob job="Paris Auto" content="Le concessionnaire Auto de VI Paris RP" src={auto} />
						<CardJob job="Paris Moto" content="Le concessionnaire Moto de VI Paris RP" src={parismoto} />
						<CardJob
							job="Paris Occasion"
							content="Société de rachat/revente de véhicule d'occasion"
							src={parisoccasion}
						/>
						<CardJob job="Norauto" content="Pour réparer sa voiture" src={norauto} />
						<CardJob job="Depann 2000" content="Pour faire une petite custom" src={depann} />
						<CardJob
							job="Dirif"
							content="Direction Interdirection des routes d'Île-de-France"
							src={dirif}
						/>
						<CardJob
							job="Bolloré Logistics"
							content="Les restaurants doivent bien se réapprovisionner"
							src={bollore}
						/>
						<CardJob
							job="Total Energies Montparnasse"
							content="Pour faire le plein de carburant pour la voiture et pour vous !"
							src={ltd1}
						/>
						<CardJob
							job="Total Energies Olympiade"
							content="Pour faire le plein de carburant pour la voiture et pour vous !"
							src={ltd2}
						/>
						<CardJob
							job="Total Energies Saint Blaise"
							content="Pour faire le plein de carburant pour la voiture et pour vous !"
							src={ltd3}
						/>
						<CardJob
							job="Total Energies Bobigny"
							content="Pour faire le plein de carburant pour la voiture et pour vous !"
							src={ltd4}
						/>
						<CardJob
							job="Total Energies Clichy"
							content="Pour faire le plein de carburant pour la voiture et pour vous !"
							src={ltd5}
						/>
						<CardJob job="XPO Logistics" content="Transporteur de marchandises" src={xpo} />
						<CardJob job="Orpi" content="Envie d'une belle villa ou un petit appart ?" src={orpi} />
						<CardJob job="Bucheron de Paris" content="Toi aussi vient couper du bois" src={bucheron} />
						<CardJob job="Villa Dondelli" content="Restaurant Italien" src={food2} />
						<CardJob job="FiveGuys" content="Restauration rapide" src={fiveguys} />
						<CardJob job="O'Sullivans" content="Pour un bon cocktail et un petit billard" src={food1} />
						<CardJob job="Les Vignerons de Paris" content="Ils nous font du bon vin" src={vigne} />
						<CardJob job="Casino de Paris" content="Pour pouvoir dépenser son argent" src={casino} />
						<CardJob job="Club 77" content="Club de danse" src={nightclub} />
						<CardJob job="Le Tropical" content="Club de danse" src={nightclub2} />
						<CardJob job="Tabac de Paris" content="! Fumer est dangeureux pour la santé !!" src={tabac} />
						<CardJob job="Taxi de Paris" content="Pour vous emmener où vous voulez" src={taxi} />
					</div>
				</div>
			</div>
		</main>
	);
}
