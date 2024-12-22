/* eslint-disable no-unused-vars */
// TeamSection.js
import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import TeamCard from "./TeamCard";
const teamMembers = [
	{
		name: "John Doe",
		role: "Senior Education Consultant",
		description:
			"With over 10 years in education consultancy, John specializes in international admissions and career counseling.",
		image: "",
	},
	{
		name: "Jane Smith",
		role: "Scholarship Advisor",
		description:
			"Jane has helped hundreds of students secure scholarships and financial aid, focusing on accessibility.",
		image: "",
	},
	{
		name: "Emily Brown",
		role: "Test Prep Specialist",
		description:
			"Emily provides expert coaching in SAT, GRE, and IELTS, ensuring students achieve their best scores.",
		image: "",
	},
	{
		name: "Michael Lee",
		role: "Visa Consultant",
		description:
			"Michael specializes in visa application processes, helping students transition smoothly to studying abroad.",
		image: "",
	},
	{
		name: "Sophia Green",
		role: "Career Counselor",
		description:
			"Sophia offers guidance in career planning, connecting students with internships and job opportunities.",
		image: "",
	},
	{
		name: "David Wang",
		role: "Financial Advisor",
		description:
			"David provides financial advice, helping students budget and manage finances during their studies abroad.",
		image: "",
	},
	{
		name: "Isabella Wilson",
		role: "Application Specialist",
		description:
			"Isabella assists students in crafting compelling applications, from writing essays to interview preparation.",
		image: "",
	},
	{
		name: "Dr. Albert Lin",
		role: "Chief Mentor",
		description:
			"With 20+ years in academia, Dr. Lin mentors our team and provides invaluable insights into global education trends.",
		image: "",
	},
];

const TeamSection = () => {
	return (
		<section className="py-16 bg-gray-100 flex flex-col items-center">
			<h2 className="text-3xl font-bold text-gray-800 mb-14">
				Meet Our Team
			</h2>
			<div className="container mx-auto px-6 text-center">
				<div className="flex space-x-6 overflow-x-scroll w-[57.5%] ml-[20%]">
					{teamMembers.map((member, index) => (
						<TeamCard member={member} key={index}/>
					))}
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
