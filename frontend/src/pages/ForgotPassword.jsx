/* eslint-disable no-unused-vars */
import { React } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import toast from "react-hot-toast";

const BACKEND_URL = import.meta.env.VITE_API__BACKEND_URL;

const ForgotPassword = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [otp, setOtp] = useState(""); // OTP state
	const [isOtpSent, setIsOtpSent] = useState(false); // Track if OTP was sent
	const [isSubmittingOtp, setIsSubmittingOtp] = useState(false); // For disabling the OTP submit button

	const handleSubmit = async (e) => {
		e.preventDefault();
		const url = BACKEND_URL + "/api/forgotPassword";
		try {
			// const res = await axios.post(url, { email: email });
			// setMessage(res.data.message);
			const toastId = toast.loading("Sending OTP...");
			setTimeout(() => {
				toast.dismiss(toastId);
				toast.success("sent otp");
				setIsOtpSent(true);
				setMessage("OTP sent to your email");
			}, 2000);
			// if (res.data.success) {
			// setIsOtpSent(true); // Enable OTP input after email submission
			// }
		} catch (err) {
			setMessage("Something went wrong. Please try again.");
		}
	};

	const handleOTPSubmit = async (e) => {
		e.preventDefault();
		setIsSubmittingOtp(true); // Disable OTP button while submitting
		const url = BACKEND_URL + "/api/verifyOtp";
		try {
			// const res = await axios.post(url, { email: email, otp: otp });
			const toastId = toast.loading("Verifying OTP...");
			// if (true) {
			setTimeout(() => {
				toast.dismiss(toastId);
				toast.success("OTP verified");
				setMessage("ok");
				setIsSubmittingOtp(false); // Re-enable button after response
				// if (true) {
				navigate("/resetpassword");
				// Handle further actions after successful OTP verification, e.g., redirecting to password reset page
				// }
			}, 3000);
			// Handle further actions after successful OTP verification, e.g., redirecting to password reset page
			// }
		} catch (err) {
			toast.error("Some thing went wrong.");
			setMessage("Invalid OTP. Please try again.");
			setIsSubmittingOtp(false); // Re-enable button in case of error
		}
	};

	return (
		<Layout>
			<div className="flex items-center justify-center h-[84vh] bg-white gap-20">
				<img
					src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg?t=st=1731240829~exp=1731244429~hmac=fdb8bed608af55771f27c8098f4c1ed38afabea9ad89bde2fe1346c8de03db98&w=740"
					style={{
						objectFit: "cover",
						height: "500px",
					}}
					alt=""
				/>
				<div className="bg-white p-8 rounded-lg shadow-md w-96">
					<h2 className="text-2xl font-bold mb-6 text-center">
						Forgot Password
					</h2>

					{message && (
						<p className="text-center text-red-500 mb-4">
							{message}
						</p>
					)}

					<form onSubmit={isOtpSent ? handleOTPSubmit : handleSubmit}>
						<div className="mb-4">
							<label
								className="block text-gray-700"
								htmlFor="email">
								Email Address
							</label>
							<input
								type="email"
								id="email"
								className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								disabled={isOtpSent} // Disable email field if OTP has been sent
							/>
						</div>

						{isOtpSent && (
							<div className="mb-4">
								<label
									className="block text-gray-700"
									htmlFor="otp">
									Enter OTP
								</label>
								<input
									type="text"
									id="otp"
									className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
									value={otp}
									onChange={(e) => setOtp(e.target.value)}
									required
								/>
							</div>
						)}

						<button
							type="submit"
							className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
							disabled={isSubmittingOtp}>
							{isOtpSent
								? isSubmittingOtp
									? "Submitting OTP..."
									: "Submit OTP"
								: "Reset Password"}
						</button>
					</form>
				</div>
			</div>
		</Layout>
	);
};

export default ForgotPassword;
