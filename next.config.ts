import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "back-concess.vi-paris-rp.fr",
				pathname: "/pictures/**",
			},
		],
	},
};

export default nextConfig;
