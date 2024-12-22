import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Layout from "../components/Layout";

const SignIn = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [errors, setErrors] = useState({});
	const [success, setSuccess] = useState("");
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: "" });
	};

	const { email, password } = formData;

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors({});
		setSuccess("");
		setLoading(true);

		let validationErrors = {};
		if (!email) {
			validationErrors.email = "Email is required.";
			toast.error("Email is required.");
		}
		if (!password) {
			validationErrors.password = "Password is required.";
			toast.error("Password is required.");
		}
		if (password.length < 8) {
			validationErrors.password =
				"Password must be at least 8 characters long.";
			toast.error("Password must be at least 8 characters long.");
			setLoading(false);
		}
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			setLoading(false);
			return;
		}

		const toastId = toast.loading("Please wait...");
		try {
			// Uncomment and replace with your API call
			const response = await axios.post(
				"http://localhost:8080/auth/login",
				formData
			);
			// let config = {
			// 	method: "get",
			// 	maxBodyLength: Infinity,
			// 	url: "http://localhost:8080/profile",
			// 	headers: {
			// 		Authorization: `Bearer ${''}`,
			// 	},
			// };
			// axios
			// 	.request(config)
			// 	.then((response) => {
			// 		console.log(response.data, "user details");
			// 	})
			// 	.catch((error) => {
			// 		console.log(error);
			// 	});
			console.log(response?.data);
			toast.dismiss(toastId);
			setSuccess("🥳🥳Login successful🥳🥳");
			localStorage.setItem("token", JSON.stringify(response));
			setTimeout(() => {
				navigate("/dashboard");
			}, 200);
		} catch (err) {
			console.log(err);
			toast.dismiss(toastId);
			toast.error("😞😞Error😞😞");
			setErrors({
				general:
					err.response?.data?.message ||
					"Login failed. Please try again.",
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<Layout>
			<div
				className="h-[84vh] rounded-b-lg flex flex-col justify-center py-12 sm:px-6 lg:px-8"
				style={{
					backgroundImage: `url('https://cdn.pixabay.com/photo/2017/05/19/06/22/desk-2325627_1280.jpg')`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				<div className="sm:mx-auto sm:w-full sm:max-w-md bg-white bg-opacity-50 rounded-lg shadow-lg">
					<h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
						Sign in to your account
					</h2>

					<div className="mt-8">
						<div className="py-6 px-4 sm:px-8">
							<form className="space-y-4" onSubmit={handleSubmit}>
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
									<span className="px-2 bg-white text-gray-500">
										forgot password ?{" "}
										<Link
											to="/forgotpassword"
											className="font-medium text-indigo-600 hover:text-indigo-500">
											Reset Password
										</Link>
									</span>
								</div>
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

								<div>
									<button
										type="submit"
										className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										disabled={loading}>
										{loading ? "Signing in..." : "Sign in"}
									</button>
								</div>
							</form>
							<div className="mt-6">
								<div className="relative">
									<div className="relative flex justify-center text-sm">
										<span className="px-2 bg-white text-gray-500">
											Don&apos;t have an account?{" "}
											<br />
											<Link
												to="/signup"
												className="font-medium text-indigo-600 hover:text-indigo-500">
												Sign up
											</Link>
										</span>
										<span className="px-2 bg-white text-gray-500">
											If you are Trainer? <br />
											<Link
												to="/admin/signin"
												className="font-medium text-indigo-600 hover:text-indigo-500">
												Login Here
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

export default SignIn;
