import React, { useEffect, useState } from "react";
import ProfileHeader from "./ProfileHeader";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import axios from "axios";
const Profile = () => {
	const [userData, setUserData] = useState(null);
	const [editable,setEditable] = useState(false);
	useEffect(() => {
		const token = JSON.parse(localStorage.getItem("token"));
		let config = {
			method: "get",
			maxBodyLength: Infinity,
			url: "http://localhost:8080/profile",
			headers: {
				Authorization: `Bearer ${token?.data?.accessToken}`,
			},
		};
		axios
			.request(config)
			.then((response) => {
				console.log(response.data, "user details");
				setUserData(response.data);
				console.log(userData);
			})
			.catch((error) => {
				console.log(error);
			});
		console.log(token);
		setUserData(token);
	}, []);
	return (
		<div className="profile flex-1">
			<ProfileHeader setEditable={setEditable}/>
			<div className="user--profile h-[85%] mt-[2rem] bg-gray-600 rounded-lg p-[10px] flex flex-col items-center justify-center">
				<div className="user--detail w-[100%] h-[250px] mb-5 flex flex-col items-center justify-center">
					{ editable ? <input type="text" className=""/> : ""}
					{userData?.image != null ? (
						<img
							className="h-[85%] w-[150px] bg-white rounded-full"
							src=""
							alt=""
						/>
					) : (
						<IoPersonCircleSharp
							size="12em"
							className="bg-white rounded-full"
						/>
					)}
					<h3 className="username text-black text-xl mt-4 font-semibold">
						{ userData
							? userData.firstName + " " + userData.lastName
							: "unknown"}
					</h3>
				</div>
				<span className="mt-4 text-center text-black font-bold text-2xl">
					Details
				</span>
				<section className="flex text-white items-start flex-col gap-2 mt-5 pl-2">
					<div className=" flex text-center items-center justify-center text-xl">
						<MdOutlinePhoneInTalk className="font-semibold" />
						<span className="pl-1 font-semibold">
							{userData?.contactNo
								? userData?.contactNo
								: 7854123696}
						</span>
					</div>
					<div className="flex text-center items-center justify-center text-xl">
						<MdEmail className="font-semibold" />
						<span className="pl-1 font-semibold">
							{userData?.email
								? userData?.email
								: "dummyemail@edu.com"}
						</span>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Profile;
