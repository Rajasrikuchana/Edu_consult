import React from "react";
import TeamSection from "../components/TeamSection";
import Layout from '../components/Layout'
import Footer from "../components/Footer";
const AboutUs = () => {
	return (
		<Layout>
			{/* Header Section */}
			<section className="bg-blue-600 text-white py-16">
				<div className="container mx-auto px-6 text-center">
					<h1 className="text-4xl font-bold mb-4">About Us</h1>
					<p className="text-lg">
						Empowering students to reach their highest potential
						through dedicated guidance, resources, and personalized
						support.
					</p>
				</div>
			</section>

			{/* Mission, Vision, and Values Section */}
			<section className="p-16 bg-white">
				<div className="container mx-auto px-6 ">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
						<div className="shadow-lg rounded-lg hover:shadow-2xl p-6">
							<h2 className="text-2xl font-semibold text-blue-600 mb-4">
								Our Mission
							</h2>
							<p className="text-gray-700">
								To guide students in making informed choices
								about their education, enabling them to succeed
								in academic and professional pursuits.
							</p>
						</div>
						<div className="shadow-lg rounded-lg hover:shadow-2xl p-6">
							<h2 className="text-2xl font-semibold text-blue-600 mb-4">
								Our Vision
							</h2>
							<p className="text-gray-700">
								To be a globally recognized leader in
								educational consultancy, renowned for helping
								students unlock opportunities worldwide.
							</p>
						</div>
						<div className="shadow-lg rounded-lg hover:shadow-2xl p-6">
							<h2 className="text-2xl font-semibold text-blue-600 mb-4">
								Our Values
							</h2>
							<p className="text-gray-700">
								Integrity, excellence, and a commitment to
								student success are the pillars that define our
								approach and services.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Services Highlights */}
			<section className="bg-gray-100 p-16">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-3xl font-bold text-gray-800 mb-8">
						What We Offer
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-white shadow-lg rounded-lg p-6">
							<h3 className="text-xl font-semibold text-blue-600 mb-2">
								Personalized Academic Advising
							</h3>
							<p className="text-gray-700">
								Tailored academic and career guidance that
								aligns with each student's unique goals and
								strengths.
							</p>
						</div>
						<div className="bg-white shadow-lg rounded-lg p-6">
							<h3 className="text-xl font-semibold text-blue-600 mb-2">
								Application Assistance
							</h3>
							<p className="text-gray-700">
								Expert support in crafting compelling
								applications, résumés, and personal statements
								for universities.
							</p>
						</div>
						<div className="bg-white shadow-lg rounded-lg p-6">
							<h3 className="text-xl font-semibold text-blue-600 mb-2">
								Scholarships and Financial Aid
							</h3>
							<p className="text-gray-700">
								Guidance on securing scholarships and financial
								aid to make education more accessible.
							</p>
						</div>
						<div className="bg-white shadow-lg rounded-lg p-6">
							<h3 className="text-xl font-semibold text-blue-600 mb-2">
								Visa and Pre-departure Support
							</h3>
							<p className="text-gray-700">
								Comprehensive visa assistance and cultural
								orientation to prepare students for life abroad.
							</p>
						</div>
						<div className="bg-white shadow-lg rounded-lg p-6">
							<h3 className="text-xl font-semibold text-blue-600 mb-2">
								Test Preparation
							</h3>
							<p className="text-gray-700">
								Resources and coaching for standardized tests
								like SAT, GRE, and IELTS.
							</p>
						</div>
						<div className="bg-white shadow-lg rounded-lg p-6">
							<h3 className="text-xl font-semibold text-blue-600 mb-2">
								Interview Coaching
							</h3>
							<p className="text-gray-700">
								Personalized interview preparation for
								admissions and scholarship opportunities.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<TeamSection />

			{/* Testimonials Section */}
			<section className="bg-gray-100 p-16">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-3xl font-bold text-gray-800 mb-8">
						What Our Clients Say
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Testimonial 1 */}
						<div className="bg-white shadow-lg rounded-lg p-6">
							<p className="text-gray-700 italic">
								"Thanks to their guidance, I got accepted into
								my dream university!"
							</p>
							<h4 className="text-blue-600 font-semibold mt-4">
								- Jane Smith
							</h4>
						</div>
						{/* Testimonial 2 */}
						<div className="bg-white shadow-lg rounded-lg p-6">
							<p className="text-gray-700 italic">
								"Their scholarship advisors helped me secure
								funding, making my education more affordable."
							</p>
							<h4 className="text-blue-600 font-semibold mt-4">
								- Michael Johnson
							</h4>
						</div>
						{/* Testimonial 3 */}
						<div className="bg-white shadow-lg rounded-lg p-6">
							<p className="text-gray-700 italic">
								"From test prep to application advice, the team
								made the entire process so much easier."
							</p>
							<h4 className="text-blue-600 font-semibold mt-4">
								- Sarah Lee
							</h4>
						</div>
						{/* Testimonial 4 */}
						<div className="bg-white shadow-lg rounded-lg p-6">
							<p className="text-gray-700 italic">
								"With their personalized approach, I felt
								confident in every step of my application
								journey."
							</p>
							<h4 className="text-blue-600 font-semibold mt-4">
								- David Kim
							</h4>
						</div>
						{/* Testimonial 5 */}
						<div className="bg-white shadow-lg rounded-lg p-6">
							<p className="text-gray-700 italic">
								"The visa assistance and pre-departure support
								were invaluable for my move abroad."
							</p>
							<h4 className="text-blue-600 font-semibold mt-4">
								- Emily Carter
							</h4>
						</div>
						{/* Testimonial 6 */}
						<div className="bg-white shadow-lg rounded-lg p-6">
							<p className="text-gray-700 italic">
								"I couldn’t have achieved my goals without their
								expert guidance and unwavering support."
							</p>
							<h4 className="text-blue-600 font-semibold mt-4">
								- Daniel Green
							</h4>
						</div>
					</div>
				</div>
			</section>
			<Footer/>
		</Layout>
	);
};

export default AboutUs;
