/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({data}) => {
	return (
		<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
			<div className="text-4xl text-blue-500 mb-4">{data.icon}</div>
			<h3 className="text-xl font-semibold mb-2">{data.title}</h3>
			<p className="text-gray-600">{data.description}</p>
		</div>
	);
};

export default Card;
