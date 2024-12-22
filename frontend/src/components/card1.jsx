import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { GrSend } from "react-icons/gr";

const data = [
	{
		title: "New Support Requests",
		count: 4,
		icon: <IoIosNotifications size="2.5em" />,
		color: "bg-sky-400",
	},
	{
		title: "TAT Crossed Support Requests",
		count: 2,
		icon: <IoMdNotificationsOutline size="2.5em" />,
		color: "bg-yellow-400",
	},
	{
		title: "Upcoming Service",
		count: 3,
		icon: <IoIosSend size="2.5em" />,
		color: "bg-green-400",
	},
	{
		title: "TAT Crossed Service Schedules",
		count: 3,
		icon: <GrSend size="2.5em" />,
		color: "bg-red-500",
	},
];
const Card1 = () => {
	return (
		<div className="card--container flex gap-[20px] items-center mt-[2rem]">
			<div className="container mx-auto">
				<div className="grid grid-cols-4 gap-2">
					{data.map((item, index) => (
						<div
							key={index}
							className={`p-4 ${item.color} rounded-lg shadow-md`}>
							<h2 className="text-lg font-bold text-gray-800 mb-2 h-[50%]">
								{item.title}
							</h2>
							<section className="flex items-center justify-between">
								<p className="text-4xl font-bold text-gray-900">
									{item.count}
								</p>
								<span className="w-[25%] h-[50%] text-black">
									{item.icon}
								</span>
							</section>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Card1;
