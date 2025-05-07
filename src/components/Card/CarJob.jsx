import Image from "next/image";
import React from "react";

export const CardJob = ({ job, content, src }) => {
	return (
		<div className="xl:w-1/3 md:w-1/2 p-4">
			<div className="border border-gray-200 p-6 rounded-lg">
				<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 overflow-hidden">
					<Image className="" src={src} alt="" width={50} />
				</div>
				<h2 className="text-lg text-gray-200 font-medium title-font mb-2">{job}</h2>
				<p className="leading-relaxed text-gray-300">{content}</p>
			</div>
		</div>
	);
};
