import React from "react";
import { BiEdit } from "react-icons/bi";

const ProfileHeader = () => {
	return (
		<div className="profile--header flex items-center justify-between">
			<div className="header--title text-white text-2xl font-semibold"> Profile</div>
			<div className="edit bg-[#d8dee4] font-semibold p-[10px] rounded-xl text-black  flex items-center justify-center cursor-pointer ease-in-out">
				<BiEdit
					className="icon hover:scale-110 duration-200"
					size="1.5em"
				/>
			</div>
		</div>
	);
};

export default ProfileHeader;
