/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";

const TeamCard = ({member}) => {
	return (
		<div
			className="bg-white shadow-md rounded-lg p-6 min-w-[250px] lg:min-w-[300px] flex-shrink-0">
			{member.image.length != 0 ? (
				<img
					src={member.image}
					alt={`${member.name}`}
					className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
				/>
			) : (
				<div className="rounded-full mx-auto mb-4 w-32 h-32 object-cover">
					<IoPersonCircleSharp size={"10em"} />
				</div>
			)}
			<h3 className="text-xl font-semibold text-gray-800">
				{member.name}
			</h3>
			<p className="text-blue-600">{member.role}</p>
			<p className="text-gray-600 mt-2">{member.description}</p>
		</div>
	);
};

export default TeamCard;
