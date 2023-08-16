import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import logo from './assets/img/logo.png';
import './Navbar.css';

const Navbar = () => {
	const location = useLocation();
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const renderFirstLinks = () => (
		<>
			<NavLink 
				to="/publications" 
				className={location.pathname === "/publications" ? "navlinks active" : "navlinks"}
			>
				Publications
			</NavLink>
			<NavLink 
				to="/research" 
				className={location.pathname === "/research" ? "navlinks active" : "navlinks"}
			>
				Research
			</NavLink>
		</>
	);

	const renderSecondLinks = () => (
		<>
			<NavLink 
				to="/team" 
				className={location.pathname === "/team" ? "navlinks active" : "navlinks"}
			>
				Team
			</NavLink>
			<NavLink 
				to="/contact" 
				className={location.pathname === "/contact" ? "navlinks active" : "navlinks"}
			>
				Contact
			</NavLink>
			<NavLink 
				to="/opportunities" 
				className={location.pathname === "/opportunities" ? "navlinks active" : "navlinks"}
			>
				Opportunities
			</NavLink>
		</>
	)

	const renderLinks = () => (
		<>
			{renderFirstLinks()}
			{renderSecondLinks()}
		</>
	)

	return (
		<nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
			{isMobile ? (
				<>
					<div className="flex space-x-4">
						<button onClick={toggleMenu} className="text-3xl">&#9776;</button>
					</div>
					{menuOpen && (
						<div className="flex flex-col space-y-2 p-4">
							{renderLinks()}
						</div>
					)}
				</>
			) : (
				<div className="grid content-center grid-cols-layout items-center h-[50px]">
					<div className="flex space-x-4 justify-around">
						{renderFirstLinks()}
					</div>
					<div className="flex justify-center bg-white rounded-full w-32 h-36 items-center">
						<NavLink to="/">
							<img src={logo} alt="Website Logo" className="h-20 mt-9" />
						</NavLink>
					</div>
					<div className="flex space-x-4 justify-around">
						{renderSecondLinks()}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;