"use client";

import { useState } from "react";
import { Modal } from "@/components/Modal";
import emailjs from "emailjs-com";

export default function Contact() {
	const [showModal, setShowModal] = useState(false);
	const [modalH2, setModalH2] = useState("");
	const [modalP, setModalP] = useState("");

	const closeModal = () => {
		setShowModal(false);
	};

	const sendEmail = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);

		console.log({ form });
		const nomRP = form.get("nomrp");
		const prenomRP = form.get("prenomrp");
		const pseudoDiscord = form.get("pseudodiscord");
		const email = form.get("email");
		const message = form.get("message");
		if (!nomRP) {
			return fail(400, { nomRP, missing: true });
		}

		if (!prenomRP) {
			return fail(400, { prenomRP, missing: true });
		}
		if (!pseudoDiscord) {
			return fail(400, { pseudoDiscord, missing: true });
		}
		if (!email) {
			return fail(400, { email, missing: true });
		}
		if (!message) {
			return fail(400, { message, missing: true });
		}
		emailjs.sendForm("service_cdp78uy", "template_boe5cld", e.target, "fMffS73BSqkml4RLE").then(
			(result) => {
				console.log("SUCCESS!", result.text);
				setModalH2("Message envoyé.");
				setModalP("Vous aurez une réponse dans les plus brefs délais.");
				setShowModal(true);
			},
			(error) => {
				console.log("FAILED...", error.text);
				setModalH2("Erreur");
				setModalP("Merci de réessayer");
				setShowModal(true);
			}
		);
	};

	return (
		<main className="contact">
			<Modal showModal={showModal} closeModal={() => closeModal()}>
				<h2 slot="header">{modalH2}</h2>
				<p>{modalP}</p>
			</Modal>
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
				<div className="mx-auto max-w-2xl py-32">
					<div className="text-white">
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center">Contact</h1>
						<form onSubmit={(e) => sendEmail(e)} className="mx-auto mt-16 max-w-xl sm:mt-20">
							<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
								<div>
									<label htmlFor="nomrp" className="block text-sm font-semibold leading-6">
										Nom RP
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="nomrp"
											id="nomrp"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div>
									<label htmlFor="prenomrp" className="block text-sm font-semibold leading-6">
										Prénom RP
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="prenomrp"
											id="prenomrp"
											autoComplete="family-name"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label htmlFor="pseudodiscord" className="block text-sm font-semibold leading-6">
										Pseudo Discord
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="pseudodiscord"
											id="pseudodiscord"
											autoComplete="organization"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label htmlFor="email" className="block text-sm font-semibold leading-6">
										Email
									</label>
									<div className="mt-2.5">
										<input
											type="email"
											name="email"
											id="email"
											autoComplete="email"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label htmlFor="message" className="block text-sm font-semibold leading-6">
										Message
									</label>
									<div className="mt-2.5">
										<textarea
											name="message"
											id="message"
											rows={4}
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
							</div>
							<div className="mt-10">
								<button
									type="submit"
									className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Envoyer
								</button>
							</div>
						</form>
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
}
