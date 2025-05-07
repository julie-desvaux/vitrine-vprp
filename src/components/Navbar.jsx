"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/definitions/constants";
import Image from "next/image";
import Logo from "@/assets/viparisrprond.png";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();
	return (
		<div className="absolute inset-x-0 top-0 z-50">
			<header className="fixed w-full">
				<nav className="bg-vprp">
					<div className="max-w-screen-xl md:flex md:items-center md:justify-between md:mx-auto md:p-4">
						<div className="flex items-center justify-between p-4">
							<Link href="/" className="flex items-around space-x-3 rtl:space-x-reverse">
								<Image src={Logo} className="h-8" alt="VI Paris RP" width={35} />
								<span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
									VI Paris RP
								</span>
							</Link>
							<button
								data-collapse-toggle="navbar-default"
								type="button"
								className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
								aria-controls="navbar-default"
								aria-expanded="false"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
							>
								<span className="sr-only">Open main menu</span>
								<svg
									className="w-5 h-5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 17 14"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M1 1h15M1 7h15M1 13h15"
									/>
								</svg>
							</button>
						</div>
						<div
							className="w-full md:block md:w-auto {hidden} bg-regular-rose md:bg-transparent"
							id="navbar-default"
						>
							<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
								<li>
									<Link
										href="/"
										className={`block py-3 px-5 bg-rose rounded md:bg-transparent md:text-rose md:p-0 text-white md:text-rose hover:text-purple-500
 ${pathname === ROUTES["Accueil"] ? "font-bold text-purple-400" : ""}`}
										aria-current={pathname === ROUTES["Accueil"] ? "page" : null}
										onClick={() => setIsMenuOpen(false)}
									>
										Accueil
									</Link>
								</li>
								<li>
									<Link
										href="/equipe"
										className={`block py-2 px-3 rounded md:border-0 md:hover:text-rose md:p-0 text-white md:hover:text-rose hover:bg-rose hover:text-purple-500 ${
											pathname === ROUTES["Equipe"] ? "font-bold text-purple-400" : ""
										}
 md:hover:bg-transparent`}
										aria-current={pathname === ROUTES["Equipe"] ? "page" : null}
										onClick={() => setIsMenuOpen(false)}
									>
										Equipe
									</Link>
								</li>
								<li>
									<Link
										href="/reglement"
										className={`block py-2 px-3 rounded md:border-0 md:hover:text-rose md:p-0 text-white md:hover:text-rose hover:bg-rose hover:text-purple-500 ${
											pathname === ROUTES["Règlement"] ? "font-bold text-purple-400" : ""
										}
 md:hover:bg-transparent`}
										aria-current={pathname === ROUTES["Règlement"] ? "page" : null}
										onClick={() => setIsMenuOpen(false)}
									>
										Règlement
									</Link>
								</li>
								<li>
									<Link
										href="/metiers"
										className={`block py-2 px-3 rounded md:border-0 md:hover:text-rose md:p-0 text-white md:hover:text-rose hover:bg-rose hover:text-purple-500 ${
											pathname === ROUTES["Liste des métiers"] ? "font-bold text-purple-400" : ""
										}
 md:hover:bg-transparent`}
										aria-current={pathname === ROUTES["Liste des métiers"] ? "page" : null}
										onClick={() => setIsMenuOpen(false)}
									>
										Liste des métiers
									</Link>
								</li>
								{/* <!-- <li>
							<Link
								href="/concessionnaire/autos"
								className="block py-2 px-3 rounded md:border-0 md:hover:text-rose md:p-0 text-white md:hover:text-rose hover:bg-gray-700 hover:text-purple-500 {page
									.route.id === ROUTES['Concessionnaire']
									? 'font-bold text-purple-400'
									: ''}
 md:hover:bg-transparent"
								aria-current={pathname === ROUTES['Concessionnaire'] ? 'page' : null}
								onClick={() => (isMenuOpen = false)}>Concessionnaire</Link
							>
						</li> --> */}
								{/* <li>
									<button
										id="dropdownNavbarLink"
										data-dropdown-toggle="dropdownNavbar"
										className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
									>
										Concessionnaire{" "}
										<svg
											className="w-2.5 h-2.5 ms-2.5"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 10 6"
										>
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="m1 1 4 4 4-4"
											/>
										</svg>
									</button>
									{/* <!-- Dropdown menu --> */}
								{/* <div
										id="dropdownNavbar"
										className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
									>
										<ul
											className="py-2 text-sm text-gray-700 dark:text-gray-200"
											aria-labelledby="dropdownLargeButton"
										>
											<li>
												<Link
													href="/concessionnaire/autos"
													className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
														pathname === ROUTES["Concessionnaire Autos"]
															? "font-bold text-purple-400"
															: ""
													} md:hover:bg-transparent`}
													aria-current={
														pathname === ROUTES["Concessionnaire Autos"] ? "page" : null
													}
													onClick={() => setIsMenuOpen(false)}
												>
													Paris Auto
												</Link>
											</li>
											<li aria-labelledby="dropdownNavbarLink">
												<button
													id="doubleDropdownButton"
													data-dropdown-toggle="doubleDropdown"
													data-dropdown-placement="right-start"
													type="button"
													className={`flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
														pathname === ROUTES["Concessionnaire Motos"]
															? "font-bold text-purple-400"
															: ""
													} md:hover:bg-transparent`}
													aria-current={
														pathname === ROUTES["Concessionnaire Motos"] ? "page" : null
													}
												>
													Paris Moto
													<svg
														className="w-2.5 h-2.5 ms-2.5"
														aria-hidden="true"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 10 6"
													>
														<path
															stroke="currentColor"
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="m1 1 4 4 4-4"
														/>
													</svg>
												</button>
												<div
													id="doubleDropdown"
													className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
												>
													<ul
														className="py-2 text-sm text-gray-700 dark:text-gray-200"
														aria-labelledby="doubleDropdownButton"
													>
														<li>
															<Link
																href="/concessionnaire/motos"
																className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white ${
																	pathname === ROUTES["Concessionnaire Motos"]
																		? "font-bold text-purple-400"
																		: ""
																} md:hover:bg-transparent`}
																aria-current={
																	pathname === ROUTES["Concessionnaire Motos"]
																		? "page"
																		: null
																}
																onClick={() => setIsMenuOpen(false)}
															>
																Motos
															</Link>
														</li>
														<li>
															<Link
																href="/concessionnaire/scooters"
																className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white ${
																	pathname === ROUTES["Concessionnaire Scooters"]
																		? "font-bold text-purple-400"
																		: ""
																} md:hover:bg-transparent`}
																aria-current={
																	pathname === ROUTES["Concessionnaire Scooters"]
																		? "page"
																		: null
																}
																onClick={() => setIsMenuOpen(false)}
															>
																Scooters
															</Link>
														</li>
														<li>
															<Link
																href="/concessionnaire/quads"
																className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white ${
																	pathname === ROUTES["Concessionnaire Quads"]
																		? "font-bold text-purple-400"
																		: ""
																} md:hover:bg-transparent`}
																aria-current={
																	pathname === ROUTES["Concessionnaire Quads"]
																		? "page"
																		: null
																}
																onClick={() => setIsMenuOpen(false)}
															>
																Quads
															</Link>
														</li>
														<li>
															<Link
																href="/concessionnaire/velos"
																className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white ${
																	pathname === ROUTES["Concessionnaire Vélos"]
																		? "font-bold text-purple-400"
																		: ""
																} md:hover:bg-transparent`}
																aria-current={
																	pathname === ROUTES["Concessionnaire Vélos"]
																		? "page"
																		: null
																}
																onClick={() => setIsMenuOpen(false)}
															>
																Vélos
															</Link>
														</li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</li> */}
								<li>
									<Link
										href="/concessionnaire/autos"
										className={`block py-2 px-3 rounded md:border-0 md:hover:text-rose md:p-0 text-white md:hover:text-rose hover:bg-gray-700 hover:text-purple-500 ${
											pathname === ROUTES["Concessionnaire Autos"]
												? "font-bold text-purple-400"
												: ""
										}
 md:hover:bg-transparent`}
										aria-current={pathname === ROUTES["Concessionnaire Autos"] ? "page" : null}
										onClick={() => setIsMenuOpen(false)}
									>
										Concessionnaire Autos
									</Link>
								</li>
								<li>
									<Link
										href="/concessionnaire/motos"
										className={`block py-2 px-3 rounded md:border-0 md:hover:text-rose md:p-0 text-white md:hover:text-rose hover:bg-gray-700 hover:text-purple-500 ${
											pathname === ROUTES["Concessionnaire Motos"]
												? "font-bold text-purple-400"
												: ""
										}
 md:hover:bg-transparent`}
										aria-current={pathname === ROUTES["Concessionnaire Motos"] ? "page" : null}
										onClick={() => setIsMenuOpen(false)}
									>
										Concessionnaire Motos
									</Link>
								</li>
								<li>
									<Link
										href="/contact"
										className={`block py-2 px-3 rounded md:border-0 md:hover:text-rose md:p-0 text-white md:hover:text-rose hover:bg-gray-700 hover:text-purple-500 ${
											pathname === ROUTES["Contact"] ? "font-bold text-purple-400" : ""
										}
 md:hover:bg-transparent`}
										aria-current={pathname === ROUTES["Contact"] ? "page" : null}
										onClick={() => setIsMenuOpen(false)}
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
};
