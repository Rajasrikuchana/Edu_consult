import { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		firstName: "",
		lastName: "",
		confirmPassword: "",
	});

	const [errors, setErrors] = useState({}); // State to hold error messages
	const [success, setSuccess] = useState("");
	const [loading, setLoading] = useState(false); // Loading state

	const { username, email, password, confirmPassword, firstName, lastName } =
		formData;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors({}); // Reset errors
		setSuccess("");
		setLoading(true); // Set loading to true

		let validationErrors = {};
		if (!firstName) validationErrors.firstName = "First name is required.";
		if (!lastName) validationErrors.lastName = "Last name is required.";
		if (!username) validationErrors.username = "Username is required.";
		if (!email) validationErrors.email = "Email is required.";
		if (!password) validationErrors.password = "Password is required.";
		if (!confirmPassword)
			validationErrors.confirmPassword = "Confirm Password is required.";
		if (password !== confirmPassword)
			validationErrors.confirmPassword = "Passwords do not match.";

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors); // Set errors if there are any
			setLoading(false); // Reset loading state
			return;
		}
		const toastId = toast.loading("Loading......");
		try {
			// Uncomment and replace with your API call
			const userData = {
				firstName: formData.firstName,
				lastName: formData.lastName,
				username: formData.username,
				email: formData.email,
				password: formData.password,
			};
			console.log(formData, "asdfghjkl");

			const response = axios
				.post("http://localhost:8080/auth/register", userData)
				.then(() => {
					console.log(response.json);
				});
				console.log(response);
				
			setFormData({
				username: "",
				email: "",
				password: "",
				confirmPassword: "",
				firstName: "",
				lastName: "",
			});
			toast.dismiss(toastId);
			toast.success("signup success..");
		} catch (err) {
			console.log(err);
			toast.dismiss(toastId);
			toast.error("Error signing up");
			setErrors({
				general:
					err.response?.data?.message ||
					"Signup failed. Please try again.",
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<Layout>
			<div
				className="h-[84vh] flex flex-col rounded-b-xl justify-center py-12 sm:px-6 lg:px-8"
				style={{
					backgroundImage: `url('https://cdn.pixabay.com/photo/2017/05/19/06/22/desk-2325627_1280.jpg')`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				<div className="sm:mx-auto sm:w-full sm:max-w-md bg-white bg-opacity-50 rounded-lg shadow-lg">
					<h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
						Create your account
					</h2>

					<div className="mt-6">
						<div className="py-6 px-4 sm:px-8">
							<form className="space-y-4" onSubmit={handleSubmit}>
								<section className=" flex gap-5">
									{/* firstName Field */}
									<div>
										<label
											htmlFor="firstName"
											className="block text-sm font-medium text-gray-700">
											First Name
										</label>
										<div className="mt-1">
											<input
												id="firstName"
												name="firstName"
												type="text"
												required
												value={firstName}
												onChange={handleChange}
												className={`appearance-none block w-full px-3 py-2 border ${
													errors.firstName
														? "border-red-500"
														: "border-gray-300"
												} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
											/>
										</div>
										{errors.firstName && (
											<p className="mt-1 text-sm text-red-600">
												{errors.firstName}
											</p>
										)}
									</div>
									{/* lastName Field */}
									<div>
										<label
											htmlFor="lastName"
											className="block text-sm font-medium text-gray-700">
											Last Name
										</label>
										<div className="mt-1">
											<input
												id="lastName"
												name="lastName"
												type="text"
												required
												value={lastName}
												onChange={handleChange}
												className={`appearance-none block w-full px-3 py-2 border ${
													errors.lastName
														? "border-red-500"
														: "border-gray-300"
												} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
											/>
										</div>
										{errors.lastName && (
											<p className="mt-1 text-sm text-red-600">
												{errors.lastName}
											</p>
										)}
									</div>
								</section>
								{/* Username Field */}
								<div>
									<label
										htmlFor="username"
										className="block text-sm font-medium text-gray-700">
										Username
									</label>
									<div className="mt-1">
										<input
											id="username"
											name="username"
											type="text"
											required
											value={username}
											onChange={handleChange}
											className={`appearance-none block w-full px-3 py-2 border ${
												errors.username
													? "border-red-500"
													: "border-gray-300"
											} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
										/>
									</div>
									{errors.username && (
										<p className="mt-1 text-sm text-red-600">
											{errors.username}
										</p>
									)}
								</div>

								{/* Email Field */}
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700">
										Email address
									</label>
									<div className="mt-1">
										<input
											id="email"
											name="email"
											type="email"
											required
											value={email}
											onChange={handleChange}
											className={`appearance-none block w-full px-3 py-2 border ${
												errors.email
													? "border-red-500"
													: "border-gray-300"
											} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
										/>
									</div>
									{errors.email && (
										<p className="mt-1 text-sm text-red-600">
											{errors.email}
										</p>
									)}
								</div>

								<section className="flex gap-5">
									{/* Password Field */}
									<div>
										<label
											htmlFor="password"
											className="block text-sm font-medium text-gray-700">
											Password
										</label>
										<div className="mt-1">
											<input
												id="password"
												name="password"
												type="password"
												required
												value={password}
												onChange={handleChange}
												className={`appearance-none block w-full px-3 py-2 border ${
													errors.password
														? "border-red-500"
														: "border-gray-300"
												} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
											/>
										</div>
										{errors.password && (
											<p className="mt-1 text-sm text-red-600">
												{errors.password}
											</p>
										)}
									</div>

									{/* Confirm Password Field */}
									<div>
										<label
											htmlFor="confirmPassword"
											className="block text-sm font-medium text-gray-700">
											Confirm Password
										</label>
										<div className="mt-1">
											<input
												id="confirmPassword"
												name="confirmPassword"
												type="password"
												required
												value={confirmPassword}
												onChange={handleChange}
												className={`appearance-none block w-full px-3 py-2 border ${
													errors.confirmPassword
														? "border-red-500"
														: "border-gray-300"
												} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
											/>
										</div>
										{errors.confirmPassword && (
											<p className="mt-1 text-sm text-red-600">
												{errors.confirmPassword}
											</p>
										)}
									</div>
								</section>

								{/* General Error Message */}
								{errors.general && (
									<div className="rounded-md bg-red-50 p-4">
										<div className="flex">
											<div className="ml-3">
												<h3 className="text-sm font-medium text-red-800">
													{errors.general}
												</h3>
											</div>
										</div>
									</div>
								)}

								{/* Success Message */}
								{success && (
									<div className="rounded-md bg-green-50 p-4">
										<div className="flex">
											<div className="ml-3">
												<h3 className="text-sm font-medium text-green-800">
													{success}
												</h3>
											</div>
										</div>
									</div>
								)}

								{/* Submit Button */}
								<div>
									<button
										type="submit"
										className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										disabled={loading} // Disable button while loading
									>
										{loading ? "Signing up..." : "Sign up"}
									</button>
								</div>
							</form>

							{/* Sign In Link */}
							<div className="mt-6">
								<div className="relative">
									<div className="relative flex justify-center text-sm">
										<span className="px-2 bg-white text-gray-500">
											Already have an account? <br />
											<Link
												to="/signin"
												className="font-medium text-indigo-600 hover:text-indigo-500">
												Sign in
											</Link>
										</span>
										<span className="px-2 bg-white text-gray-500">
											Are you an Trainer <br />
											<Link
												to="/signin"
												className="font-medium text-indigo-600 hover:text-indigo-500">
												Sign in
											</Link>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Signup;
