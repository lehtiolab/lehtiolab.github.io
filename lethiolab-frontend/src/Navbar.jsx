import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "./assets/img/logo.png";
import emailSVG from "./assets/img/at-solid.svg";
import linkedinSVG from "./assets/img/linkedin.svg";
import facebook from "./assets/img/facebook.svg";
import "./styles/navbar.css";
import { isMobile } from "react-device-detect";
import { teamIcon, publicationsIcon, researchIcon, resourcesIcon, contactIcon, opportunitiesIcon } from "./assets/data/svgs";

const Navbar = () => {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);

	const renderFirstLinks = () => (
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
		</>
	);

	const renderSecondLinks = () => (
		<>
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
			<span className="navbar-contact-links">
				<a>
					<img
						src={emailSVG}
						width="35px"
						alt="Email icon"
						className="transition hover:scale-110"
					/>
				</a>
				<a>
					<img
						src={facebook}
						width="35px"
						alt="Email icon"
						className="transition hover:scale-110"
					/>
				</a>
				<a>
					<img
						src={linkedinSVG}
						width="35px"
						alt="Email icon"
						className="transition hover:scale-110"
					/>
				</a>
			</span>
		</>
	);

	const renderLinks = () => (
		<>
			{renderFirstLinks()}
			{renderSecondLinks()}
		</>
	);

	return (
		<>
			{isMobile ? (
				<nav>
					<div className="flex space-x-4">
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
							isOpen ? "block" : "hidden"
						} grid grid-cols-2`}
					>
						{renderLinks()}
					</div>
				</nav>
			) : (
				<nav className="w-full shadow-md fixed top-0 left-0 h-14 z-50">
					<div className="grid content-center grid-cols-layout items-center h-[50px]">
						<div className="flex space-x-4 justify-around">
							{renderFirstLinks()}
						</div>
						<div className="logoCont flex justify-center bg-white rounded-full w-32 h-36 items-center">
							<NavLink to="/">
								<img
									src={logo}
									alt="Website Logo"
									className="h-20 mt-9"
								/>
							</NavLink>
						</div>
						<div className="flex space-x-4 justify-around navbar-second-links">
							{renderSecondLinks()}
						</div>
					</div>
				</nav>
			)}
		</>
	);
};

export default Navbar;
