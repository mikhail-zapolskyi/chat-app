import React from "react";
import { ImEnter } from "react-icons/im";

interface IBasicLinkProps {
	href: string;
	text: string;
}

const CtaLink: React.FC<IBasicLinkProps> = ({ href, text }) => {
	return (
		<a
			href={href}
			className="flex items-center justify-center p-5 text-2xl font-medium text-gray-500 rounded-lg hover:text-gray-400"
		>
			<span className="w-full">{text}</span>
			<ImEnter className="text-4xl m-3" />
		</a>
	);
};

export default CtaLink;
