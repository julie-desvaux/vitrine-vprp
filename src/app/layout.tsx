import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
	title: "VI Paris RP",
	description: "Site du serveur FiveM VI Paris RP",
	keywords: ["FiveM", "VI Paris RP", "Roleplay", "GTA V", "Serveur RP"],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body>
				<div className="bg-gray-900 flex flex-col min-h-screen">
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
