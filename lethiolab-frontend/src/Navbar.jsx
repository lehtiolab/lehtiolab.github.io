import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "./assets/img/logo_big.png";
import "./styles/navbar.css";
import { isMobile } from "react-device-detect";
import { teamIcon, publicationsIcon, researchIcon, resourcesIcon, contactIcon, opportunitiesIcon, githubIcon, twitterIcon } from "./assets/data/svgs";

const Navbar = () => {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);

	const renderLinks = () => (
		<>
			<NavLink
				to="/publications"
				className={
					location.pathname === "/publications"
						? "navlinks active"
						: "navlinks"
				}
			>
				{publicationsIcon}
				Publications
			</NavLink>
			<NavLink
				to="/research"
				className={
					location.pathname === "/research"
						? "navlinks active"
						: "navlinks"
				}
			>
				{researchIcon}
				Research
			</NavLink>
			<NavLink
				to="/resources"
				className={
					location.pathname === "/resources"
						? "navlinks active"
						: "navlinks"
				}
			>
				{resourcesIcon}
				Resources
			</NavLink>
			<NavLink
				to="/team"
				className={
					location.pathname === "/team"
						? "navlinks active"
						: "navlinks"
				}
			>
				{teamIcon}
				Team
			</NavLink>
			<NavLink
				to="/contact"
				className={
					location.pathname === "/contact"
						? "navlinks active"
						: "navlinks"
				}
			>
				{contactIcon}
				Contact
			</NavLink>
			<NavLink
				to="/opportunities"
				className={
					location.pathname === "/opportunities"
						? "navlinks active"
						: "navlinks"
				}
			>
				{opportunitiesIcon}
				Opportunities
			</NavLink>
			{!isMobile &&
				<span className="navbar-contact-links">
				<a href="https://twitter.com/lehtiolab" target="_blank">
					{twitterIcon}
				</a>
				<a href="https://github.com/lehtiolab" target="_blank">
					{githubIcon}
				</a>
			</span>}
		</>
	);

	return (
		<>
			{isMobile ? (
				<nav>
					<div className="flex space-x-4 justify-between">
						<img
							src={logo}
							alt="Website Logo"
							className="h-10 mt-1 ml-2"
						/>
						<button
							className="h-12 w-12 border-2 border-black rounded flex flex-col justify-center items-center group gap-1"
							onClick={() => setIsOpen(!isOpen)}
						>
							<div
								className={`burgermenu ${!isOpen ? "hiddenBurgermenu" : ""}`}
							></div>
							<div className="burgermenu"></div>
							<div
								className={`burgermenu ${!isOpen ? "hiddenBurgermenu" : ""}`}
							></div>
						</button>
					</div>
					<div
						className={`${
							isOpen ? "fixed" : "hidden"
						} grid bg-[#0f4255] w-full`}
					>
						{renderLinks()}
					</div>
				</nav>
			) : (
				<nav className="w-full shadow-md fixed top-0 left-0 h-14 z-50">
					<div className="navbar-list">
							<NavLink to="/">
								<img
									src={logo}
									alt="Website Logo"
									className="h-10 "
								/>
							</NavLink>
						<div className="flex space-x-4 justify-around navbar-second-links">
							{renderLinks()}
						</div>
					</div>
				</nav>
			)}
		</>
	);
};

export default Navbar;
