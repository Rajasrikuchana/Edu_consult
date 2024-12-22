import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoPersonAdd } from "react-icons/io5";
import { BsPersonFillDown } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { DiReact } from "react-icons/di";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { ImBlog } from "react-icons/im";
const Navbar = () => {
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const token = localStorage.getItem('token');
	useEffect(() => {
		const token = JSON.parse(localStorage.getItem("token"));
		if (token) {
			setIsLoggedIn(true); // If a token exists, the user is logged in
			console.log(token);
		}
	}, []);

	const handleLogout = (e) => {
		e.preventDefault();
		localStorage.removeItem("token");
		navigate("/");
	};
	
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
	};

	return (
		<nav className="static w-full rounded-t-md bg-white shadow-md z-50 cursor-pointer">
			<div className="container mx-auto px-6 py-3 flex justify-between items-center">
				<div className="font-bold text-xl text-gray-800 flex items-center cursor-pointer">
					<DiReact size={"2em"} />
					EduConsult
				</div>
				<div className="hidden md:flex space-x-6">
					<Link
						to="/"
						className="text-gray-600 hover:text-gray-900 flex items-center">
						<IoHome size={"1.5em"} />
						Home
					</Link>
					<Link
						to="/services"
						className="text-gray-600 hover:text-gray-900 flex items-center">
						<IoIosSettings size={"1.5em"} />
						Services
					</Link>
					<Link
						to="/blog"
						className="text-gray-600 hover:text-gray-900">
						<ImBlog size={"1.5em"} className="inline-block" />
						Blogs
					</Link>
					<Link
						to="/about"
						className="text-gray-600 hover:text-gray-900 flex items-center">
						<BiSolidUserDetail size={"1.5em"} />
						About
					</Link>
					<Link
						to="/contact"
						className="text-gray-600 hover:text-gray-900 flex items-center">
						<RiCustomerService2Line size={"1.5em"} /> Contact
					</Link>
					<Link
						to="/feedback"
						className="text-gray-600 hover:text-gray-900 flex items-center">
						<VscFeedback size={"1.5em"} /> Feedback
					</Link>
					{!isLoggedIn ? (
						<>
							<Link
								to="/signup"
								className="text-gray-600 hover:text-gray-900 flex items-center">
								<IoPersonAdd size={"1.5em"} />
								Sign Up
							</Link>
							<Link
								to="/signin"
								className="text-gray-600 hover:text-gray-900 flex items-center">
								<BsPersonFillDown size={"1.5em"} />
								Sign In
							</Link>
						</>
					) : (
						<div className="flex items-center">
							<div
								onClick={toggleMenu}
								className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center cursor-pointer">
								<FaBars />
							</div>

							{/* Dropdown menu (conditionally rendered) */}
							{isMenuOpen && (
								<div className="absolute bg-white shadow-md rounded-lg w-40 mt-[120px] mr-20	">
									<Link
										to="/profile"
										className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
										Profile
									</Link>
									<Link
										to="/dashboard"
										className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
										Dashboard
									</Link>
									<Link
										onClick={(e) => handleLogout(e)}
										className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
										Logout
									</Link>
								</div>
							)}
						</div>
					)}
				</div>
				<button
					onClick={toggleMenu}
					className="md:hidden text-gray-600 focus:outline-none">
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						{isMenuOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						)}
					</svg>
				</button>
			</div>
			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden bg-white shadow-md">
					<div className="flex flex-col space-y-2 px-6 py-3">
						<Link
							to="/"
							className="text-gray-600 hover:text-gray-900">
							Home
						</Link>
						<Link
							to="/services"
							className="text-gray-600 hover:text-gray-900">
							Services
						</Link>
						<Link
							to="/about"
							className="text-gray-600 hover:text-gray-900">
							About
						</Link>
						<Link
							to="/blog"
							className="text-gray-600 hover:text-gray-900">
							Blogs
						</Link>
						<Link
							to="/contact"
							className="text-gray-600 hover:text-gray-900">
							Contact
						</Link>
						{!isLoggedIn ? (
							<>
								<Link
									to="/signup"
									className="text-gray-600 hover:text-gray-900">
									Sign Up
								</Link>
								<Link
									to="/signin"
									className="text-gray-600 hover:text-gray-900">
									signin
								</Link>
							</>
						) : (
							<div className="flex items-center">
								<div className="w-8 h-8 text-white rounded-full flex items-center justify-center">
									<FaBars />
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
