import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token) {
			navigate("/signin");
		}
	}, []);
	return (
		<div className="p-4 h-screen w-full bg-gray-900 flex gap-[20px]">
			<Sidebar />
			<div className="dashboard-content bg-gray-800 flex-1 rounded-2xl p-[2rem] flex justify-between gap-[1.5rem]">
				<Content />
				<Profile />
			</div>
		</div>
	);
};

export default UserDashboard;
