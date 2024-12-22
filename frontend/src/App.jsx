import React from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import ResetPassword from "./pages/ResetPassword";
import UserDashboard from "./pages/UserDashboard";
import FeedbackForm from "./pages/Feedback";
import Course from "./pages/Course";
import Blogs from "./pages/Blogs";
import AdminSignin from "./pages/admin/AdminSignin";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/admin/signin" element={<AdminSignin />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/forgotpassword" element={<ForgotPassword />} />
			<Route path="/services" element={<Services />} />
			<Route path="/blog" element={<Blogs />} />
			<Route path="/services/:id" element={<Course />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<ContactUs />} />
			<Route path="/resetpassword" element={<ResetPassword />} />
			<Route path="/dashboard" element={<UserDashboard />} />
			<Route path="/feedback" element={<FeedbackForm />} />
		</Routes>
	);
};

export default App;
