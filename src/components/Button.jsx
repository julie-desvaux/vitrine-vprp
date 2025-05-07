import React from "react";

export const Button = ({ href, children }) => {
	return (
		<a
			target="_blank"
			href={href}
			className="rounded-md bg-purple-600 px-6 py-5 text-2xl font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
		>
			{children}
		</a>
	);
};
