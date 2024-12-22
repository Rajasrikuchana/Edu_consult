import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import plans from "../data/data";
import { toast } from "react-hot-toast";

const Course = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [item, setItem] = useState(null);
	const [token, setToken] = useState(null);
	const [amount, setamount] = useState(100);

	useEffect(() => {
		const token = localStorage.getItem("token");
		setItem(
			plans.filter((d, i) => {
				return d.id == id;
			})
		);
		console.log(item);
	}, [id]);

	// handlePayment Function
	const handlePayment = async () => {
		try {
			const res = await fetch(
				`${import.meta.env.VITE_BACKEND_HOST_URL}/api/payment/order`,
				{
					method: "POST",
					headers: {
						"content-type": "application/json",
						Authorization: `token ${token}`,
					},
					body: JSON.stringify({
						amount,
					}),
				}
			);

			const data = await res.json();
			console.log(data);
			handlePaymentVerify(data.data);
		} catch (error) {
			console.log(error);
		}
	};

	// handlePaymentVerify Function
	const handlePaymentVerify = async (data) => {
		const options = {
			key: import.meta.env.RAZORPAY_KEY_ID,
			amount: data.amount,
			currency: data.currency,
			name: "Edu Consultency",
			description: "Test Mode",
			order_id: data.id,
			handler: async (response) => {
				console.log("response", response);
				try {
					const res = await fetch(
						`${
							import.meta.env.VITE_BACKEND_HOST_URL
						}/api/payment/verify`,
						{
							method: "POST",
							headers: {
								"content-type": "application/json",
							},
							body: JSON.stringify({
								razorpay_order_id: response.razorpay_order_id,
								razorpay_payment_id:
									response.razorpay_payment_id,
								razorpay_signature: response.razorpay_signature,
							}),
						}
					);

					const verifyData = await res.json();

					if (verifyData.message) {
						toast.success(verifyData.message);
						navigate("/");
					}
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#5f63b8",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	return (
		<div className=" w-full bg-white flex items-center justify-center h-screen">
			<div className="card lg:card-side bg-base-100 shadow-xl">
				<figure>
					<img
						src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
						alt="Album"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">New album is released!</h2>
					<p>Click the button to listen on Spotiwhy app.</p>
					<div className="card-actions justify-end">
						<button
							onClick={() => handlePayment()}
							className="btn btn-primary">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Course;
