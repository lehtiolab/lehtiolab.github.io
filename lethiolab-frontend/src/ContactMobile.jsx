import React, { useState, useRef, useEffect } from "react";
import { paperAirplane } from "./assets/data/svgs";
import "./styles/contact.scss";
import emailSVG from "./assets/img/at-solid.svg";
import linkedinSVG from "./assets/img/linkedin.svg";
import facebook from "./assets/img/facebook.svg";


const ContactMobile = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		topic: "",
		message: "",
	});
	const [isSent, setIsSent] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	console.log(isSent);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSent(true);
	};

	return (
			<div className="mobile-contact-page">
				<div className="mobile-contact-page-links">
					<span className="mobile-contact-page-links-icons">
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
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d32543.224377744707!2d18.023432!3d59.350457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d9c044c1fe5%3A0xfff6f935131557c1!2sSciLifeLab!5e0!3m2!1sen!2sse!4v1698143252953!5m2!1sen!2sse"
						width={window.innerWidth}
						style={{ border: "0" }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
				<div className="mobile-contact-page-form">
					{!isSent ? 
					<form onSubmit={handleSubmit}>
						<div
							className="mobile-contact-page-form-fields"
						>
							<div>
								<h2>Send us a message!</h2>
								<input
									type="text"
									name="name"
									placeholder="Name"
									value={formData.name}
									onChange={handleChange}
									required
								/>
							</div>

							<div>
								<input
									type="email"
									name="email"
									placeholder="E-mail"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</div>

							<div>
								<select
									name="topic"
									value={formData.topic}
									onChange={handleChange}
									required
								>
									<option value="">Message topic</option>
									<option value="topic1">Topic 1</option>
									<option value="topic2">Topic 2</option>
									<option value="topic3">Topic 3</option>
								</select>
							</div>

							<div>
								<textarea
									placeholder="Message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
								></textarea>
							</div>
						</div>
						<div className="mobile-contact-page-form-submit">
							<button onClick={handleSubmit}>
								{paperAirplane}
							</button>
						</div>
					</form> :
					<div className="mobile-contact-page-form-sent">
						<h2> Message sent! </h2>
						<h2> Thank you. </h2>
					</div>}
				</div>
			</div>
	);
};

export default ContactMobile;
