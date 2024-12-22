/* eslint-disable no-unused-vars */
import React from "react";

const AboutUs = () => {
	return (
		<section id="about" className="py-10 px-20 bg-gray-100">
			<div className="container mx-auto px-3">
				<h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
					About Us
				</h2>
				<div className="flex flex-col md:flex-row items-center">
					<div className="md:w-1/2 mb-8 md:mb-0">
						<p className="text-gray-600 leading-relaxed">
							We are dedicated to helping students achieve their
							educational goals through expert guidance and
							personalized consulting services. With years of
							experience, our team ensures your academic success.
						</p>
					</div>
					<div className="md:w-1/2 grid grid-cols-3 gap-4">
						<div className="text-center">
							<h3 className="text-3xl font-bold text-blue-600">
								1000+
							</h3>
							<p className="text-gray-600">Students Guided</p>
						</div>
						<div className="text-center">
							<h3 className="text-3xl font-bold text-blue-600">
								50+
							</h3>
							<p className="text-gray-600">
								Partner Universities
							</p>
						</div>
						<div className="text-center">
							<h3 className="text-3xl font-bold text-blue-600">
								95%
							</h3>
							<p className="text-gray-600">Success Rate</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
