import React from "react";
import { BiNotification, BiSearch } from "react-icons/bi";

const ContentHeader = () => {
	return (
		<div className="content--header text-black flex items-center justify-between ">
			<h1 className="header--title text-[#526d82] text-4xl font-[650]">
				Dashboard
			</h1>
			<div className="header-activity flex items-center gap-[20px] ">
				<div className="search-box flex items-center px-8 py-5 rounded-lg text-black">
					<input
						className="p-[5px] w-72 h-[36px] bg-gray-950 rounded-l-md border-none outline-none"
						type="text"
						placeholder="Search anything here........."
					/>
					<span className="bg-gray-300 text-[#2b2a33] p-[8.8px] rounded-r-md flex items-center justify-center">
						<BiSearch
							size="1.8em"
							className="icon cursor-pointer text-[10px] transition duration-500 ease-in-out hover:scale-125"
						/>
					</span>
				</div>
				<div className="notify bg-gray-600 text-[969393] p-[12px] rounded-xl flex items-center justify-center">
					<BiNotification
						size="1.8em"
						className="icon cursor-pointer text-[10px] transition duration-500 ease-in-out hover:scale-125"
					/>
				</div>
			</div>
		</div>
	);
};

export default ContentHeader;
