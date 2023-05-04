import React from "react";

interface ITitleProps {
	message: string;
}

const Title: React.FC<ITitleProps> = ({ message }) => (
	<h1 className="text-white text-7xl p-3 mt-3 mb-3">{message}</h1>
);

export default Title;
