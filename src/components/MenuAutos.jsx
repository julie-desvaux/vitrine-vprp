"use client";

import { Fragment, useState } from "react";
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
	Tab,
	TabGroup,
	TabList,
	TabPanel,
	TabPanels,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = {
	categories: [
		{
			id: "marque-gta",
			name: "Marque GTA",
			sections: [
				{
					id: "marque-gta-a-b-c",
					name: "",
					items: [
						{ name: "Albany", href: "/concessionnaire/autos/albany" },
						{ name: "Annis", href: "/concessionnaire/autos/annis" },
						{ name: "Benefactor", href: "/concessionnaire/autos/benefactor" },
						{ name: "BF", href: "/concessionnaire/autos/bf" },
						{ name: "Bollokan", href: "/concessionnaire/autos/bollokan" },
						{ name: "Bravado", href: "/concessionnaire/autos/bravado" },
						{ name: "Brute", href: "/concessionnaire/autos/brute" },
						{ name: "Canis", href: "/concessionnaire/autos/canis" },
						{ name: "Chariot", href: "/concessionnaire/autos/chariot" },
						{ name: "Cheval", href: "/concessionnaire/autos/cheval" },
						{ name: "Coil", href: "/concessionnaire/autos/coil" },
					],
				},
				{
					id: "marque-gta-d-e-f-g-h",
					name: "",
					items: [
						{ name: "Declasse", href: "/concessionnaire/autos/declasse" },
						{ name: "Dewbauchee", href: "/concessionnaire/autos/dewbauchee" },
						{ name: "Dinka", href: "/concessionnaire/autos/dinka" },
						{ name: "Dundreary", href: "/concessionnaire/autos/dundreary" },
						{ name: "Emperor", href: "/concessionnaire/autos/emperor" },
						{ name: "Enus", href: "/concessionnaire/autos/enus" },
						{ name: "Fathom", href: "/concessionnaire/autos/fathom" },
						{ name: "Gallivanter", href: "/concessionnaire/autos/gallivanter" },
						{ name: "Grotti", href: "/concessionnaire/autos/grotti" },
						{ name: "Hijak", href: "/concessionnaire/autos/hijak" },
						{ name: "HVY", href: "/concessionnaire/autos/hvy" },
					],
				},
				{
					id: "marque-gta-i-j-k-l-m-n",
					name: "",
					items: [
						{ name: "Imponte", href: "/concessionnaire/autos/imponte" },
						{ name: "Invetero", href: "/concessionnaire/autos/invetero" },
						{ name: "Karin", href: "/concessionnaire/autos/karin" },
						{ name: "Lampadati", href: "/concessionnaire/autos/lampadati" },
						{ name: "Maibatsu", href: "/concessionnaire/autos/maibatsu" },
						{ name: "Mammoth", href: "/concessionnaire/autos/mammoth" },
						{ name: "Maxwell", href: "/concessionnaire/autos/maxwell" },
						{ name: "MTL", href: "/concessionnaire/autos/mtl" },
						{ name: "Nagasaki", href: "/concessionnaire/autos/nagasaki" },
					],
				},
				{
					id: "marque-gta-o-p-q-r-s",
					name: "",
					items: [
						{ name: "Obey", href: "/concessionnaire/autos/obey" },
						{ name: "Ocelot", href: "/concessionnaire/autos/ocelot" },
						{ name: "Overflod", href: "/concessionnaire/autos/overflod" },
						{ name: "Pegassi", href: "/concessionnaire/autos/pegassi" },
						{ name: "Pfister", href: "/concessionnaire/autos/pfister" },
						{ name: "Principe", href: "/concessionnaire/autos/principe" },
						{ name: "Progen", href: "/concessionnaire/autos/progen" },
						{ name: "Rune", href: "/concessionnaire/autos/rune" },
						{ name: "Schyster", href: "/concessionnaire/autos/schyster" },
						{ name: "Shitzu", href: "/concessionnaire/autos/shitzu" },
					],
				},
				{
					id: "marque-gta-t-u-v-w-x-y-z",
					name: "",
					items: [
						{ name: "Truffade", href: "/concessionnaire/autos/truffade" },
						{ name: "Ubermacht", href: "/concessionnaire/autos/ubermacht" },
						{ name: "Vapid", href: "/concessionnaire/autos/vapid" },
						{ name: "Vulcar", href: "/concessionnaire/autos/vulcar" },
						{ name: "Vysser", href: "/concessionnaire/autos/vysser" },
						{ name: "Weeny", href: "/concessionnaire/autos/weeny" },
						{ name: "Willard", href: "/concessionnaire/autos/willard" },
						{ name: "Zirconium", href: "/concessionnaire/autos/zirconium" },
					],
				},
			],
		},
		{
			id: "marque-import",
			name: "Marque Import",
			sections: [
				{
					id: "marque-import-a-b-c",
					name: "",
					items: [
						{ name: "Alfa Roméo", href: "/concessionnaire/autos/alfa-romeo" },
						{ name: "Audi", href: "/concessionnaire/autos/audi" },
						{ name: "BMW", href: "/concessionnaire/autos/bmw" },
						{ name: "Camion", href: "/concessionnaire/autos/camion" },
						{ name: "Chevrolet", href: "/concessionnaire/autos/chevrolet" },
						{ name: "Citroën", href: "/concessionnaire/autos/citroen" },
						{ name: "Dodge", href: "/concessionnaire/autos/dodge" },
						{ name: "Fiat", href: "/concessionnaire/autos/fiat" },
						{ name: "Ford", href: "/concessionnaire/autos/ford" },
						{ name: "Honda", href: "/concessionnaire/autos/honda" },
						{ name: "Hyundai", href: "/concessionnaire/autos/hyundai" },
					],
				},
				{
					id: "accessories",
					name: "",
					items: [
						{ name: "Kia", href: "/concessionnaire/autos/kia" },
						{ name: "Lamborghini", href: "/concessionnaire/autos/lamborghini" },
						{ name: "Land Rover", href: "/concessionnaire/autos/land-rover" },
						{ name: "Mercedes", href: "/concessionnaire/autos/mercedes" },
						{ name: "Mini", href: "/concessionnaire/autos/mini" },
						{ name: "Nissan", href: "/concessionnaire/autos/nissan" },
						{ name: "Peugeot", href: "/concessionnaire/autos/peugeot" },
						{ name: "Porsche", href: "/concessionnaire/autos/porsche" },
						{ name: "Remorque", href: "/concessionnaire/autos/remorque" },
						{ name: "Renault", href: "/concessionnaire/autos/renault" },
					],
				},
				{
					id: "brands",
					name: "",
					items: [
						{ name: "Seat", href: "/concessionnaire/autos/seat" },
						{ name: "Skoda", href: "/concessionnaire/autos/skoda" },
						{ name: "Subaru", href: "/concessionnaire/autos/subaru" },
						{ name: "Tesla", href: "/concessionnaire/autos/tesla" },
						{ name: "Toyota", href: "/concessionnaire/autos/toyota" },
						{ name: "Volkswagen", href: "/concessionnaire/autos/volkswagen" },
						{ name: "Volvo", href: "/concessionnaire/autos/volvo" },
					],
				},
			],
		},
	],
	pages: [
		{ name: "Camions", href: "/concessionnaire/autos/type/camions" },
		{ name: "Remorques", href: "/concessionnaire/autos/type/remorques" },
	],
};

export default function MenuAutos() {
	const [open, setOpen] = useState(false);

	return (
		<div className="bg-transparent">
			{/* Mobile menu */}
			<Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
				/>

				<div className="fixed inset-0 z-40 flex">
					<DialogPanel
						transition
						className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
					>
						<div className="flex px-4 pt-5 pb-2">
							<button
								type="button"
								onClick={() => setOpen(false)}
								className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-purple-400 font-bold"
							>
								<span className="absolute -inset-0.5" />
								<span className="sr-only">Close menu</span>
								<XMarkIcon aria-hidden="true" className="size-6" />
							</button>
						</div>

						{/* Links */}
						<TabGroup className="mt-2">
							<div className="border-b border-gray-200">
								<TabList className="-mb-px flex space-x-8 px-4">
									{navigation.categories.map((category) => (
										<Tab
											key={category.name}
											className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
										>
											{category.name}
										</Tab>
									))}
								</TabList>
							</div>
							<TabPanels as={Fragment}>
								{navigation.categories.map((category) => (
									<TabPanel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
										{category.sections.map((section) => (
											<div key={section.name}>
												<p
													id={`${category.id}-${section.id}-heading-mobile`}
													className="font-medium text-gray-900"
												>
													{section.name}
												</p>
												<ul
													role="list"
													aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
													className="mt-6 flex flex-col space-y-6"
												>
													{section.items.map((item) => (
														<li key={item.name} className="flow-root">
															<a
																href={item.href}
																className="-m-2 block p-2 text-purple-500"
															>
																{item.name}
															</a>
														</li>
													))}
												</ul>
											</div>
										))}
									</TabPanel>
								))}
							</TabPanels>
						</TabGroup>

						<div className="space-y-6 border-t border-gray-200 px-4 py-6">
							{navigation.pages.map((page) => (
								<div key={page.name} className="flow-root">
									<a href={page.href} className="-m-2 block p-2 font-medium text-purple-900">
										{page.name}
									</a>
								</div>
							))}
						</div>
					</DialogPanel>
				</div>
			</Dialog>

			<header className="relative bg-transparent">
				<nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="">
						<div className="flex h-16 items-center">
							<button
								type="button"
								onClick={() => setOpen(true)}
								className="relative rounded-md bg-transparent p-2 text-purple-400 lg:hidden"
							>
								<span className="absolute -inset-0.5" />
								<span className="sr-only">Open menu</span>
								<Bars3Icon aria-hidden="true" className="size-6" />
							</button>

							{/* Logo */}
							<div className="ml-4 flex lg:ml-0">
								<span className="text-white">Menu Véhicules</span>
							</div>

							{/* Flyout menus */}
							<PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
								<div className="flex h-full space-x-8">
									{navigation.categories.map((category) => (
										<Popover key={category.name} className="flex">
											<div className="relative flex">
												<PopoverButton className="relative z-10 -mb-px flex items-center font-bold border-b-2 border-transparent pt-px text-sm font-medium text-purple-400 transition-colors duration-200 ease-out hover:text-purple-600 data-open:border-purple-600 data-open:text-purple-600 cursor-pointer">
													{category.name}
												</PopoverButton>
											</div>

											<PopoverPanel
												transition
												className="absolute inset-x-0 top-full text-sm text-purple-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
											>
												{/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
												<div
													aria-hidden="true"
													className="absolute inset-0 top-1/2 bg-transparent shadow-sm"
												/>

												<div className="relative bg-gradient-to-tr from-[#140036] to-[#c773f1] z-10 rounded-2xl">
													<div className="mx-auto max-w-7xl px-8">
														<div className="flex gap-x-8 gap-y-10 py-16">
															<div className="flex gap-x-24 gap-y-10 text-sm">
																{category.sections.map((section) => (
																	<div key={section.name}>
																		<p
																			id={`${section.name}-heading`}
																			className="font-medium text-white hover:text-purple-800"
																		>
																			{section.name}
																		</p>
																		<ul
																			role="list"
																			aria-labelledby={`${section.name}-heading`}
																			className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																		>
																			{section.items.map((item) => (
																				<li key={item.name} className="flex">
																					<a
																						href={item.href}
																						className="text-white hover:text-purple-600"
																					>
																						{item.name}
																					</a>
																				</li>
																			))}
																		</ul>
																	</div>
																))}
															</div>
														</div>
													</div>
												</div>
											</PopoverPanel>
										</Popover>
									))}

									{navigation.pages.map((page) => (
										<a
											key={page.name}
											href={page.href}
											className="flex items-center text-sm font-medium text-purple-400 hover:text-purple-600"
										>
											{page.name}
										</a>
									))}
								</div>
							</PopoverGroup>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}
