// import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import plans from "../data/data";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";

// function Services() {
// 	const navigate = useNavigate();

// 	const handleClick = (item, index) => {
// 		const token = localStorage.getItem("token");
// 		if (!token) {
// 			toast.error("please login first..");
// 			navigate("/signin");
// 			return;
// 		}
// 		navigate(`${index}`);
// 	};

// 	// useEffect(()=>{
// 	// 	const token = localStorage.getItem("token");
// 	// 	if(!token){
// 	// 		toast.error("please login first..")
// 	// 		navigate("/signin");
// 	// 	}
// 	// },[])

// 	return (
// 		<Layout>
// 			<div className="container mx-auto px-4 py-12 bg-gray-900 text-black">
// 				<section
// 					style={{
// 						background:
// 							"linear-gradient(135deg, hsla(276, 22%, 18%, 1) 50%, hsla(254, 74%, 65%, 1) 100%)",
// 					}}
// 					className=" rounded-xl h-[25vh] flex bg-[#39251c] py-2 border-4 ">
// 					<h1 className="text-8xl tracking-wide w-[50%] font-bold ml-40 flex items-center justify-center">
// 						<span className="left-20 text-[#6e511e]">SERVICES</span>
// 					</h1>
// 					<p className="text-lg relative bottom-5 w-[50%] text-white">
// 						<span className="absolute inset-x-0 text-4xl font-bold tracking-wide bottom-0 left-20">
// 							WHAT WE OFFER
// 						</span>
// 					</p>
// 				</section>

// 				<div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-4 gap-8">
// 					{plans.map((item, index) => (
// 						<div
// 							key={item.id}
// 							className="bg-white hover:shadow-slate-600 duration-200 rounded-lg shadow-md cursor-pointer text-center hover:shadow-2xl">
// 							<h2 className="text-2xl p-4 font-bold rounded-t-md mb-4 bg-green-500">
// 								{item.title}
// 							</h2>

// 							<p className="mb-4">
// 								<span className="text-xl font-bold text-green-500">
// 									{item.price[0]}
// 								</span>{" "}
// 								<span>{item.price[1]}</span>
// 							</p>
// 							<ul className="list-disc mb-6">
// 								{item.features.map((feature, indx) => (
// 									<li
// 										key={indx}
// 										className="list-none text-gray-900 font-medium ">
// 										{feature}
// 									</li>
// 								))}
// 							</ul>
// 							<section
// 								onClick={() => handleClick(item, item.id)} // Pass item and index correctly
// 								className="bg-green-500 underline hover:text-black hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline p-2">
// 								Subscribe Now
// 							</section>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 			<Footer/>
// 		</Layout>
// 	);
// }

// export default Services;

import React from "react";

const Services = () => {
	return (
		<Layout>
			<div className="bg-gray-700 px-4 py-16 min-h-screen">
				<div
					aria-hidden="true"
					className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
					<div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
					<div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
				</div>
				<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
					<div className="mb-10 space-y-4 px-6 md:px-0">
						<h2 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
							Pricing
						</h2>
					</div>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
							<h2 className="text-lg sm:text-xl font-medium text-white mb-2">
								Starter
							</h2>
							<p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
								<span className="text-3xl sm:text-4xl font-bold text-white">
									$19
								</span>{" "}
								/ Month
							</p>
							<ul className="list-none list-inside mb-6 text-center text-gray-300">
								<li className="font-bold text-orange-600">
									1 Website
								</li>
								<li>Custom Domain</li>
								<li>Basic SEO</li>
								<li>Limited Support</li>
							</ul>
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
								href="https://example.com/starter-plan">
								<span className="relative text-sm font-semibold text-black">
									Get Started
								</span>
							</a>
						</div>
						<div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
							<h2 className="text-lg sm:text-xl font-medium text-white mb-2">
								Pro
							</h2>
							<p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
								<span className="text-3xl sm:text-4xl font-bold text-white">
									$49
								</span>{" "}
								/ Month
							</p>
							<ul className="list-none list-inside mb-6 text-center text-gray-300">
								<li className="font-bold text-orange-600">
									3 Websites
								</li>
								<li>Custom Domain &amp; Subdomain</li>
								<li>Advanced SEO</li>
								<li>24/7 Support</li>
							</ul>
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
								href="https://example.com/pro-plan">
								<span className="relative text-sm font-semibold text-black">
									Get Started
								</span>
							</a>
						</div>
						<div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
							<h2 className="text-lg sm:text-xl font-medium text-white mb-2">
								Business
							</h2>
							<p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
								<span className="text-3xl sm:text-4xl font-bold text-white">
									$99
								</span>{" "}
								/ Month
							</p>
							<ul className="list-none list-inside mb-6 text-center text-gray-300">
								<li className="font-bold text-orange-600">
									Unlimited Websites
								</li>
								<li>Custom Domain &amp; Subdomain</li>
								<li>Enterprise SEO</li>
								<li>Premium Support</li>
							</ul>
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
								href="https://example.com/business-plan">
								<span className="relative text-sm font-semibold text-black">
									Get Started
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</Layout>
	);
};

export default Services;
