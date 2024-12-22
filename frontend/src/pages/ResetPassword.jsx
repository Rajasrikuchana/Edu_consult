/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Layout from "../components/Layout";
import resetPasswordImage from "../assets/resetpassword.jpg";
import { useNavigate } from "react-router-dom";
const BACKEND_URL = import.meta.env.VITE_API__BACKEND_URL;

const ResetPassword = () => {
	const navigate = useNavigate();
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [token, setToken] = useState(""); // Assume the token is passed via URL or another method

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(newPassword, "  ", confirmPassword);

		if (newPassword !== confirmPassword) {
			setMessage("Passwords do not match");
			return;
		}
		if (newPassword.length < 6) {
			setMessage("Password must be at least 6 characters long");
			return;
		}
		setIsSubmitting(true);
		const url = `${BACKEND_URL}/api/resetPassword`;
		let toastid ;
		try {
			// const res = await axios.post(url, { token, newPassword });
			// setMessage(res.data.message);
			// if (res.data.success) {
			// Redirect or inform the user they can now login
			// }
			toastid = toast.loading(
				"Please wait, your password has been reset"
			);
			setTimeout(() => {
				toast.dismiss(toastid);
				toast.success("Your password has been reset successfully");
				setMessage("Password reset successful! You can now login.");
				navigate("/signin");
			}, 2000);
		} catch (err) {
			toast.dismiss(toastid);
			toast.error("Error resetting password");
			setMessage("Something went wrong. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Layout>
			<div className="flex items-center justify-center gap-10 h-[84vh] bg-[#acb5b6]">
				<img
					src={resetPasswordImage}
					style={{
						objectFit: "cover",
						height: "500px",
					}}
					alt=""
				/>
				<div className="bg-white p-8 rounded-lg shadow-md w-96">
					<h2 className="text-2xl font-bold mb-6 text-center">
						Reset Your Password
					</h2>

					{message && (
						<p className="text-center text-red-500 mb-4">
							{message}
						</p>
					)}

					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label
								className="block text-gray-700"
								htmlFor="newPassword">
								New Password
							</label>
							<input
								type="password"
								id="newPassword"
								className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
								required
								minLength="6"
							/>
						</div>

						<div className="mb-4">
							<label
								className="block text-gray-700"
								htmlFor="confirmPassword">
								Confirm New Password
							</label>
							<input
								type="password"
								id="confirmPassword"
								className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
								value={confirmPassword}
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}
								required
								minLength="6"
							/>
						</div>

						<button
							type="submit"
							className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
							disabled={isSubmitting}>
							{isSubmitting ? "Resetting..." : "Reset Password"}
						</button>
					</form>
				</div>
			</div>
		</Layout>
	);
};

export default ResetPassword;

// style={{
// 					backgroundImage:
// 						"url(https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg?t=st=1731240829~exp=1731244429~hmac=fdb8bed608af55771f27c8098f4c1ed38afabea9ad89bde2fe1346c8de03db98&w=740)",
// 				}}
