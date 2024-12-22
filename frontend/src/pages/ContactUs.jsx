// import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Layout from "../components/Layout";
const ContactUs = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
		reset,
	} = useForm();

	const onSubmit = (data) => {
		console.log("Form Data:", data);
		const toastId = toast.loading("Loading...");
		try {
			setTimeout(() => {
				toast.dismiss(toastId);
				toast.success("Success, ");
				reset();
			}, 3000);
			reset(); // Reset form after submission
		} catch (error) {
			toast.dismiss(toastId);
			toast.error("Failed to submit form");
			console.error(error);
		}
	};

	return (
		<Layout>
			<div className="bg-gray-50 rounded-b-lg lg:h-[89vh] flex flex-col items-center justify-center px-20 p-10 lg:w-[100%]">
				<h3 className="text-3xl font-bold text-center text-gray-800 mb-5">
					Contact Us
				</h3>
				<div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
					{/* Left Section - Information */}
					<div className="bg-blue-600 text-white p-8 rounded-lg flex flex-col justify-center">
						<h1 className="text-4xl font-bold mb-4">
							Get in Touch
						</h1>
						<p className="text-lg mb-6">
							We’d love to hear from you! Whether you have a
							question about our services, need advice, or just
							want to talk about your career goals, our team is
							here to help.
						</p>
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
						<p className="text-lg font-semibold mt-4">
							Working Hours
						</p>
						<p>Monday - Friday: 9:00 AM - 6:00 PM</p>
					</div>

					{/* Right Section - Contact Form */}
					<div className="bg-white rounded-lg shadow-lg p-8">
						{isSubmitSuccessful && (
							<div className="bg-green-100 text-green-700 p-4 mb-4 rounded">
								Thank you! Your message has been sent.
							</div>
						)}

						<form onSubmit={handleSubmit(onSubmit)}>
							{/* Name Field */}
							<div className="mb-4">
								<label
									className="block text-gray-700 font-semibold mb-2"
									htmlFor="name">
									Name
								</label>
								<input
									type="text"
									id="name"
									{...register("name", {
										required: "Name is required",
									})}
									className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
								/>
								{errors.name && (
									<p className="text-red-600 text-sm mt-1">
										{errors.name.message}
									</p>
								)}
							</div>

							{/* Email Field */}
							<div className="mb-4">
								<label
									className="block text-gray-700 font-semibold mb-2"
									htmlFor="email">
									Email
								</label>
								<input
									type="email"
									id="email"
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^\S+@\S+$/i,
											message: "Invalid email address",
										},
									})}
									className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
								/>
								{errors.email && (
									<p className="text-red-600 text-sm mt-1">
										{errors.email.message}
									</p>
								)}
							</div>

							{/* Subject Field */}
							<div className="mb-4">
								<label
									className="block text-gray-700 font-semibold mb-2"
									htmlFor="subject">
									Subject
								</label>
								<input
									type="text"
									id="subject"
									{...register("subject", {
										required: "Subject is required",
									})}
									className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
								/>
								{errors.subject && (
									<p className="text-red-600 text-sm mt-1">
										{errors.subject.message}
									</p>
								)}
							</div>

							{/* Message Field */}
							<div className="mb-4">
								<label
									className="block text-gray-700 font-semibold mb-2"
									htmlFor="message">
									Message
								</label>
								<textarea
									id="message"
									{...register("message", {
										required: "Message is required",
									})}
									className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
									rows="4"></textarea>
								{errors.message && (
									<p className="text-red-600 text-sm mt-1">
										{errors.message.message}
									</p>
								)}
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 focus:outline-none">
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ContactUs;
