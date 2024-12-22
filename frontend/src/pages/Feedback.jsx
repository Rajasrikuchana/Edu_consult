import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";

function FeedbackForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		// Submit feedback data here
		console.log(data);
	};

	return (
		<Layout>
			<main className="h-[650px] bg-white rounded-b-xl overflow-hidden">
				<section className="flex justify-center items-center h-[35%]">
					<img
						className="text-center rounded-full"
						src="https://uwtel.co.uk/wp-content/uploads/2024/10/AdobeStock_82689014-1200x360.jpeg"
						alt="image"
						style={{
							height: "100%",
							width: "80%",
						}}
					/>
				</section>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mb-5">
					<div className="flex gap-2">
						<section>
							<label
								htmlFor="name"
								className="block text-gray-700 font-medium mb-2">
								Your Name:
							</label>
							<input
								type="text"
								{...register("name", { required: true })}
								id="name"
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							{errors.name && (
								<span className="text-red-500 text-sm">
									This field is required
								</span>
							)}
						</section>
						<section>
							<div className="mb-4">
								<label
									htmlFor="phone"
									className="block text-gray-700 font-medium mb-2">
									Phone Number :
								</label>
								<input
									type="tel"
									{...register("phone")}
									id="phone"
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>
						</section>
					</div>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-gray-700 font-medium mb-2">
							Your Email:
						</label>
						<input
							type="email"
							{...register("email", { required: true })}
							id="email"
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						{errors.email && (
							<span className="text-red-500 text-sm">
								This field is required
							</span>
						)}
						<label
							htmlFor="feedback"
							className="block text-gray-700 font-medium mb-2">
							Feedback:
						</label>
						<textarea
							{...register("feedback", { required: true })}
							id="feedback"
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						{errors.feedback && (
							<span className="text-red-500 text-sm">
								This field is required
							</span>
						)}
					</div>

					<button
						type="submit"
						className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
						Send Feedback
					</button>
				</form>
			</main>
		</Layout>
	);
}

export default FeedbackForm;
