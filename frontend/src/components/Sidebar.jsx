import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import {
	BiHome,
	BiBookAlt,
	BiMessage,
	BiSolidReport,
	BiStats,
	BiTask,
	BiHelpCircle,
} from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { ImBlog } from "react-icons/im";

const Sidebar = () => {
	const [userData,setUserData] = useState(null);
	useEffect(() =>{
		const data = localStorage.getItem('token');
		setUserData(data);
	},[])
	const navigate = useNavigate();
	const handleLogout = (e) => {
		e.preventDefault();
		localStorage.clear();
		navigate("/");
	};

	return (
		<div className="flex flex-col gap-[2.3rem] h-[94vh] menu w-56 pr-2 border-r-4">
			<div className="logo flex items-center justify-evenly ">
				<BiBookAlt size="3em" />
				<h2 className="text-2xl font-bold">EduConsult</h2>
			</div>
			<div className="menu--list flex flex-col gap-[20px]">
				<Link
					to="/dashboard"
					className="p-3 item flex items-center gap-[20px] text-lg font-[600] hover:bg-blue-600 hover:text-white duration-500 ease-linear border-md rounded-lg">
					<BiHome size="1.5em" />
					Dashboard
				</Link>
				<Link
					to="#"
					className="p-3 item flex items-center gap-[20px] text-lg font-[600] rounded-lg hover:bg-blue-600 hover:text-white duration-500 ease-linear border-md ">
					<BiTask size="1.5em" />
					Assignment
				</Link>
				{userData?.role === "admin" && (
					<Link
						to="#"
						className="p-3 item flex items-center gap-[20px] text-lg font-[600] rounded-lg hover:bg-blue-600 hover:text-white duration-500 ease-linear border-md ">
						<BiSolidReport size="1.5em" />
						Reports
					</Link>
				)}
				{userData?.role === "admin" && (
					<Link
						to="#"
						className="p-3 item flex items-center gap-[20px] text-lg font-[600] rounded-lg hover:bg-blue-600 hover:text-white duration-500 ease-linear border-md ">
						<BiStats size="1.5em" />
						Stats
					</Link>
				)}
				<Link
					to="#"
					className="p-3 item flex items-center gap-[20px] text-lg font-[600] rounded-lg hover:bg-blue-600 hover:text-white duration-500 ease-linear border-md ">
					<BiMessage size="1.5em" />
					Message
				</Link>
				<Link
					to="/services"
					className="p-3 item flex items-center gap-[20px] text-lg font-[600] rounded-lg hover:bg-blue-600 hover:text-white duration-500 ease-linear border-md ">
					<IoIosSettings size={"1.5em"} />
					Services
				</Link>
				<Link
					to="/blog"
					className="p-3 item flex items-center gap-[20px] text-lg font-[600] rounded-lg hover:bg-blue-600 hover:text-white duration-500 ease-linear border-md ">
					<ImBlog size={"1.5em"} />
					Blogs
				</Link>
				<Link
					to="#"
					className="p-3 item flex items-center gap-[20px] text-lg font-[600] rounded-lg hover:bg-blue-600 hover:text-white duration-500 ease-linear border-md ">
					<BiHelpCircle size="1.5em" />
					Help
				</Link>
				<Link
					to="/feedback"
					className="p-3 item flex items-center gap-[20px] text-lg font-[600] rounded-lg hover:bg-blue-600 hover:text-white duration-500 ease-linear border-md ">
					<BiHelpCircle size="1.5em" />
					Feedback
				</Link>
				<button
					onClick={(e) => handleLogout(e)}
					className="p-3 item flex items-center gap-[20px] text-lg font-[600] rounded-lg hover:bg-blue-600 hover:text-white duration-500 ease-linear border-md ">
					<TbLogout size="1.5em" />
					Logout
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
