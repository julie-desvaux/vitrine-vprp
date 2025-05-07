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
					id: "marque-gta-a-z",
					name: "",
					items: [
						{ name: "Coil", href: "/concessionnaire/motos/coil" },
						{ name: "Dinka", href: "/concessionnaire/motos/dinka" },
						{ name: "LCC", href: "/concessionnaire/motos/lcc" },
						{ name: "Maibatsu", href: "/concessionnaire/motos/maibatsu" },
						{ name: "Nagasaki", href: "/concessionnaire/motos/nagasaki" },
						{ name: "Pegassi", href: "/concessionnaire/motos/pegassi" },
						{ name: "Principe", href: "/concessionnaire/motos/principe" },
						{ name: "Shitzu", href: "/concessionnaire/motos/shitzu" },
						{ name: "Western", href: "/concessionnaire/motos/western" },
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
						{ name: "Azara", href: "/concessionnaire/motos/azara" },
						{ name: "BMW", href: "/concessionnaire/motos/bmw" },
						{ name: "Can-am", href: "/concessionnaire/motos/can-am" },
						{ name: "Ducati", href: "/concessionnaire/motos/ducati" },
						{ name: "Harley", href: "/concessionnaire/motos/harley" },
						{ name: "Honda", href: "/concessionnaire/motos/honda" },
						{ name: "Indian", href: "/concessionnaire/motos/indian" },
						{ name: "Kawasaki", href: "/concessionnaire/motos/kawasaki" },
						{ name: "KTM", href: "/concessionnaire/motos/ktm" },
						{ name: "MV", href: "/concessionnaire/motos/mv" },
					],
				},
				{
					id: "accessories",
					name: "",
					items: [
						{ name: "Piaggio", href: "/concessionnaire/motos/piaggio" },
						{ name: "Polaris", href: "/concessionnaire/motos/polaris" },
						{ name: "Suzuki", href: "/concessionnaire/motos/suziki" },
						{ name: "Vespa", href: "/concessionnaire/motos/vespa" },
						{ name: "Yamaha", href: "/concessionnaire/motos/yamaha" },
					],
				},
			],
		},
	],
	pages: [
		{ name: "Buggy / Quad", href: "/concessionnaire/motos/type/buggy" },
		{ name: "Scooters", href: "/concessionnaire/motos/type/scooters" },
		{ name: "Vélos", href: "/concessionnaire/motos/type/velos" },
	],
};

export default function MenuMotos() {
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
								className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-purple-400 font-bold cursor-pointer"
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
																			className="font-medium text-white hover:text-purple-800  cursor-pointer"
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
																						className="text-white hover:text-purple-400"
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
											className="flex items-center text-sm font-medium text-purple-400 hover:text-purple-600 data-open:border-purple-600 data-open:text-purple-600"
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
