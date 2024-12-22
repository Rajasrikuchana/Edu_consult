/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div className="font-sans m-5 rounded-md">
			<Navbar />
			{children}
		</div>
	);
};

export default Layout; 