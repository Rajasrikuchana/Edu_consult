import React, { useState, useEffect } from "react";
import image from "../assets/new.jpeg";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Homepage = () => {
	const data = [
		{
			icon: "🎓",
			title: "Academic Counseling",
			description: "Personalized guidance for your academic goals",
		},
		{
			icon: "🌍",
			title: "Study Abroad",
			description: "International education consulting",
		},
		{
			icon: "📚",
			title: "Career Planning",
			description: "Strategic career development advice",
		},
		{
			icon: "👥",
			title: "Admission Support",
			description: "Complete admission assistance",
		},
	];
	return (
		<Layout>
			{/* Hero Section */}
			<section
				data-theme="dark"
				id="home"
				className="bg-gradient-to-r scroll-smooth focus:scroll-auto bg-gray-100 from-blue-500 to-indigo-600 text-white min-h-screen flex items-center"
				style={{
					backgroundImage: `url(${image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				<div className="container mx-auto text-left px-6">
					<h1 className="text-5xl font-bold mb-4">
						Your Path to Academic Excellence
					</h1>
					<p className="text-xl mb-8">
						Expert guidance for your educational journey
					</p>
					<button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">
						Get Started
					</button>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className="px-20 bg-gray-100 py-10">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
						Our Services
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{data.map((item, indx) => {
							return <Card key={indx} data={item} />;
						})}
					</div>
				</div>
			</section>

			{/* About Section */}
			<AboutUs />

			{/* Contact Section */}
			<div className="bg-gray-50 flex flex-col items-center justify-center px-20 py-10">
				<h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
					Contact Us
				</h3>
				<div className="container text-gray-950 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Left Section - Information */}
					<div className="bg-blue-500 text-gray-950 p-8 rounded-lg flex flex-col justify-center">
						<h1 className="text-4xl font-bold mb-4">
							Get in Touch
						</h1>
						<p className="text-lg mb-6">
							We’d love to hear from you! Whether you have a
							question about our services, need advice, or just
							want to talk about your career goals, our team is
							here to help.
						</p>

						<p className="text-lg font-semibold mt-4">
							Working Hours
						</p>
						<p>Monday - Friday: 9:00 AM - 6:00 PM</p>
					</div>
					<div className="bg-blue-500 text-gray-950 p-8 rounded-lg flex flex-col justify-center">
						<p className="text-lg font-semibold mb-2">
							Contact Details
						</p>
						<p className="mb-2">📞 Phone: +1 123-456-7890</p>
						<p className="mb-2">
							📧 Email: info@educonsultancy.com
						</p>
						<p className="mb-2">
							🏢 Address: 1234 Education Street, Knowledge City,
							State, Country
						</p>
						<Link
							to="/contact"
							className="py-2 w-32 px-5 text-center mt-5 bg-blue-500 text-gray-950 font-semibold rounded-full shadow-md hover:text-white duration-500 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
							Fill form
						</Link>
					</div>
				</div>
			</div>

			{/* Footer */}
			<Footer />
		</Layout>
	);
};

export default Homepage;
