"use client";

import Image from "next/image";
import { useState } from "react";

export default function CardCar({ imgFront, imgBack, model, type, marque, price, isNew }) {
	const [isHovering, setIsHovered] = useState(false);
	const onMouseEnter = () => setIsHovered(true);
	const onMouseLeave = () => setIsHovered(false);

	return (
		<div className="group lg:w-1/5 p-4 my-4">
			<div
				className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7 relative "
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				{isHovering ? (
					<Image
						className="h-full w-full object-cover object-center group-hover:opacity-75 relative"
						src={`https://back-concess.vi-paris-rp.fr${imgBack}`}
						alt=""
						width={306}
						height={226}
					/>
				) : (
					<Image
						className="h-full w-full object-cover object-center group-hover:opacity-75 relative"
						src={`https://back-concess.vi-paris-rp.fr${imgFront}`}
						alt=""
						width={306}
						height={226}
					/>
				)}
				{isNew ? (
					<div className="bg-pink-100 rounded p-1 absolute top-5 left-5 text-black font-semibold tracking-wide text-sm">
						Nouveauté
					</div>
				) : null}
			</div>
			<h3 className="mt-4 text-sm text-white">{marque}</h3>
			<p className="mt-1 text-lg font-medium text-white">{model}</p>
			<p className="mt-1 text-lg  text-white tracking-wider font-semibold">
				{new Intl.NumberFormat("fr-FR", {
					style: "currency",
					currency: "EUR",
					maximumSignificantDigits: 3,
				}).format(price)}
			</p>
		</div>
	);
}
