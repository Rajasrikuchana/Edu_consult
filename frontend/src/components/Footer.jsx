/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-gray-800 rounded-b-md text-white py-10 pt-20">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between">
					<div className="mb-4 md:mb-0">
						<h4 className="text-xl font-bold mb-2">EduConsult</h4>
						<p>Your trusted partner in education</p>
					</div>
					<div className="mb-4 md:mb-0">
						<h4 className="text-xl font-bold mb-2">Contact Info</h4>
						<p>Email: info@educonsult.com</p>
						<p>Phone: +1 234 567 890</p>
					</div>
					<div>
						<h4 className="text-xl font-bold mb-2">Follow Us</h4>
						<div className="flex space-x-4">
							<Link to="#" className="hover:text-blue-400">
								Facebook
							</Link>
							<Link to="#" className="hover:text-blue-400">
								Twitter
							</Link>
							<Link to="#" className="hover:text-blue-400">
								LinkedIn
							</Link>
							<Link to="#" className="hover:text-blue-400">
								Instagram
							</Link>
						</div>
					</div>
				</div>
				<div className="text-center mt-6">
					<p>&copy; 2023 EduConsult. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
