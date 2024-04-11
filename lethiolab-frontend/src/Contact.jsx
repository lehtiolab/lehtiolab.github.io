import React, { useState, useRef} from "react";
import { gsap } from "gsap";
import { githubIcon, paperAirplane, twitterIcon } from "./assets/data/svgs";
import "./styles/contact.scss";
import ContactMobile from "./ContactMobile";
import { isMobile } from "react-device-detect";
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		topic: "",
		message: "",
	});
	const [isAnimating, setIsAnimating] = useState(false);

	const isValidEmail = (email) => {
		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return emailPattern.test(email);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const paperRef = useRef(null);
	const foldRef = useRef(null);
	const foldFakeRef = useRef(null);
	const formRef = useRef(null);
	const envelopeRef = useRef(null);
	const frontRef = useRef(null);
	const buttonRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		let errors = {};
		if (!formData.name.trim()) {
			errors.name = "Name is required";
		}

		// Email validation
		if (!formData.email.trim()) {
			errors.email = "Email is required";
		} else if (!isValidEmail(formData.email)) {
			errors.email = "Invalid email format";
		}

		if (!formData.topic.trim()) {
			errors.topic = "Name is required";
		}

		// Message validation
		if (!formData.message.trim()) {
			errors.message = "Message is required";
		}

		if (errors.email) {
			alert("E-mail wrong format!");
			return;
		}
		else if (!errors.name && !errors.email && !errors.message) {
			emailjs.init('dvwMCUpmOGKSyaRru');
			emailjs.send(
					"service_myc8yse",
					"template_0nup4m5",
					formData,
				)
				.then(
					(response) => {
						console.log("SUCCESS!", response.status, response.text);
					},
					(error) => {
						console.log("FAILED...", error);
					}
				);
			// reset form data
			setFormData({
				name: "",
				email: "",
				message: "",
			});
		} else {
			alert("All fields are mandatory!");
			return;
		}

		if (isAnimating) return;
		setIsAnimating(true);

		// Animate with GSAP
		// Animate with GSAP
		const tl = gsap.timeline({
			onComplete: () => {},
		});

		gsap.set([foldRef.current], {
			transformOrigin: "50% 100%",
			opacity: 0,
			y: 0.2,
		});
		gsap.set([envelopeRef.current, buttonRef.current], {
			transformOrigin: "50% 100%",
		});

		tl.to([formRef.current, paperRef.current], {
			duration: 0.2,
			y: -20,
			ease: "power1.out",
		})
			.to([paperRef.current], {
				duration: 0.4,
				y: 150,
				scaleY: 0.3,
				ease: "power1.out",
			})
			.to(
				[formRef.current],
				{
					duration: 0.4,
					y: 330,
					scaleY: 0.5,
					ease: "power1.out",
				},
				"-=0.4"
			)
			.to(
				[envelopeRef.current, frontRef.current, buttonRef.current],
				{
					duration: 0.2,
					y: 15,
					ease: "power1.out",
				},
				"-=0.1"
			)
			.to([envelopeRef.current, frontRef.current, buttonRef.current], {
				duration: 0.6,
				y: 0,
				ease: "power1.out",
			})
			.to(
				[foldRef.current],
				{
					duration: 0.6,
					scaleY: -1,
					ease: "power2.inOut",
				},
				"-=0.4"
			)
			.to([envelopeRef.current, frontRef.current, buttonRef.current], {
				duration: 0.8,
				scaleX: -1,
				ease: "power2.inOut",
			})
			.to(
				[frontRef.current, paperRef.current, buttonRef.current],
				{
					duration: 0,
					autoAlpha: 0,
				},
				"-=0.4"
			);

		gsap.to([foldFakeRef.current], {
			duration: 0,
			opacity: 0,
			delay: 0.8,
		});
		gsap.to([foldRef.current], {
			duration: 0,
			opacity: 1,
			delay: 0.8,
		});
		gsap.to([formRef.current], {
			duration: 0,
			opacity: 0,
			delay: 0.42,
		});
	};

	return (
		<>
			{!isMobile && (
				<div className="contact">
					<h1>We'd love to hear from you!</h1>
					<h2>Here's how we can keep in touch:</h2>
					<div className="contact-page">
						<div className="contact-page-links">
							<span className="contact-page-links-icons">
								<a
									href="https://twitter.com/lehtiolab"
									target="_blank"
								>
									{twitterIcon}
								</a>
								<a
									href="https://github.com/lehtiolab"
									target="_blank"
								>
									{githubIcon}
								</a>
							</span>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25098.281494367853!2d18.02350506365473!3d59.345010439249194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d9c044c1fe5%3A0xfff6f935131557c1!2sSciLifeLab!5e0!3m2!1sen!2sse!4v1697799327295!5m2!1sen!2sse"
								width="700"
								height="450"
								style={{ border: "0" }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
						<div className="contact-page-form">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 223.62 329.65"
								width="450"
								ref={envelopeRef}
							>
								<defs>
									<linearGradient
										id="linear-gradient"
										x1="112.52"
										y1="133.33"
										x2="112.14"
										y2="167.62"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset="0" stopColor="#fbad37" />
										<stop
											offset=".86"
											stopColor="#f7901f"
										/>
										<stop offset="1" stopColor="#f78f1e" />
									</linearGradient>
									<linearGradient
										id="linear-gradient-2"
										x1="110.73"
										y1="270.63"
										x2="96.44"
										y2="359.21"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset="0" stopColor="#fbad37" />
										<stop offset="1" stopColor="#e1765e" />
									</linearGradient>
									<linearGradient
										id="linear-gradient-3"
										x1="112.73"
										y1="245.82"
										x2="111.8"
										y2="329.48"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset="0" stopColor="#ffd39a" />
										<stop offset="1" stopColor="#f9a670" />
									</linearGradient>
								</defs>
								<g id="fold" ref={foldFakeRef}>
									<path
										fill="url(#linear-gradient)"
										d="m120.25,114.81l103.37,81.52H0l103.37-81.52c4.92-3.98,11.96-3.98,16.89,0Z"
									/>
								</g>
								<g id="back">
									<rect
										fill="#f78f1e"
										y="195.33"
										width="223.62"
										height="132.52"
									/>
								</g>
								<g>
									<path d="m89.31,291.83h-.97l.48-8.08h1.27l1.37,3.91c.34,1.02.62,1.91.81,2.72h.03c.19-.84.46-1.73.77-2.72l1.31-3.91h1.27l.54,8.08h-.95l-.21-3.47c-.07-1.21-.12-2.57-.15-3.57h-.02c-.22.96-.52,2-.89,3.14l-1.24,3.85h-.75l-1.36-3.92c-.39-1.12-.71-2.12-.97-3.07h-.03c.01,1.01-.06,2.36-.11,3.49l-.19,3.55Z" />
									<path d="m82.35,289.12c-.01-.11-.03-.28-.03-.49,0-1.07.48-2.73,2.28-2.73,1.61,0,2.59,1.38,2.59,3.13s-1.01,2.93-2.71,2.93c-.88,0-1.48-.19-1.83-.36l.17-.75c.38.17.81.3,1.53.3,1,0,1.87-.59,1.89-2.02h-3.88Zm3.86-.75c-.08-.73-.52-1.71-1.54-1.71-1.13,0-1.4,1.04-1.39,1.71h2.93Z" />
									<path d="m81.46,291.55c-.39.24-.95.4-1.55.4-1.31,0-2.06-.72-2.06-1.74,0-.86.49-1.37,1.45-1.75.72-.29,1.05-.5,1.05-.98,0-.43-.33-.79-.92-.79-.51,0-.91.19-1.13.34l-.25-.77c.31-.19.8-.36,1.36-.36,1.19,0,1.9.77,1.9,1.7,0,.7-.47,1.27-1.46,1.64-.74.29-1.03.56-1.03,1.07s.34.86,1.07.86c.5,0,1.03-.22,1.32-.42l.25.8Z" />
									<path d="m76.94,291.55c-.39.24-.95.4-1.55.4-1.31,0-2.06-.72-2.06-1.74,0-.86.49-1.37,1.45-1.75.72-.29,1.05-.5,1.05-.98,0-.43-.33-.79-.92-.79-.51,0-.91.19-1.13.34l-.25-.77c.31-.19.8-.36,1.36-.36,1.19,0,1.9.77,1.9,1.7,0,.7-.47,1.27-1.46,1.64-.74.29-1.03.56-1.03,1.07s.34.86,1.07.86c.5,0,1.03-.22,1.32-.42l.25.8Z" />
									<path d="m68.08,291.83c.07-.4.09-.89.09-1.39v-2.17c0-1.16.41-2.37,2.1-2.37.7,0,1.36.2,1.81.52l-.23.7c-.39-.26-.92-.43-1.44-.43-1.13,0-1.25.86-1.25,1.34v.12c2.13-.01,3.32.76,3.32,2.16,0,.84-.57,1.67-1.69,1.67-.79,0-1.38-.41-1.69-.86h-.03l-.08.73h-.91Zm1.06-1.96c0,.11.02.23.06.34.16.49.62.97,1.33.97.51,0,.95-.32.95-1.01,0-1.13-1.24-1.33-2.34-1.31v1.01Z" />
									<path d="m62.67,286.02l.05.88h.02c.24-.48.76-1.01,1.72-1.01,1.27,0,2.48,1.12,2.48,3.08,0,1.61-.98,2.83-2.35,2.83-.85,0-1.45-.43-1.76-.97h-.02v.65c0,1.46.75,2.03,1.78,2.03.68,0,1.25-.22,1.62-.46l.25.8c-.44.31-1.17.48-1.84.48-.7,0-1.47-.17-2.01-.7-.54-.5-.79-1.32-.79-2.65v-3.37c0-.71-.02-1.17-.05-1.59h.88Zm.16,3.33c0,.18.02.38.08.56.22.67.78,1.08,1.39,1.08,1.08,0,1.63-.95,1.63-2.09,0-1.34-.68-2.2-1.64-2.2-.73,0-1.22.5-1.4,1.12-.05.14-.06.3-.06.48v1.04Z" />
									<path d="m55.74,289.12c-.01-.11-.03-.28-.03-.49,0-1.07.48-2.73,2.28-2.73,1.61,0,2.59,1.38,2.59,3.13s-1.01,2.93-2.71,2.93c-.88,0-1.48-.19-1.83-.36l.17-.75c.38.17.81.3,1.53.3,1,0,1.87-.59,1.89-2.02h-3.88Zm3.86-.75c-.08-.73-.52-1.71-1.54-1.71-1.13,0-1.4,1.04-1.39,1.71h2.93Z" />
									<path d="m52.44,291.55c-.39.24-.95.4-1.55.4-1.31,0-2.06-.72-2.06-1.74,0-.86.49-1.37,1.45-1.75.72-.29,1.05-.5,1.05-.98,0-.43-.33-.79-.92-.79-.51,0-.91.19-1.13.34l-.25-.77c.31-.19.8-.36,1.36-.36,1.19,0,1.9.77,1.9,1.7,0,.7-.47,1.27-1.46,1.64-.74.29-1.03.56-1.03,1.07s.34.86,1.07.86c.5,0,1.03-.22,1.32-.42l.25.8Z" />
									<path d="m43.11,289.12c-.01-.11-.03-.28-.03-.49,0-1.07.48-2.73,2.28-2.73,1.61,0,2.59,1.38,2.59,3.13s-1.01,2.93-2.71,2.93c-.88,0-1.48-.19-1.83-.36l.17-.75c.38.17.81.3,1.53.3,1,0,1.87-.59,1.89-2.02h-3.88Zm3.86-.75c-.08-.73-.52-1.71-1.54-1.71-1.13,0-1.4,1.04-1.39,1.71h2.93Z" />
									<path d="m41.83,291.83h-1v-3.49c0-.18-.02-.36-.07-.49-.17-.59-.68-1.08-1.35-1.08-.95,0-1.28.78-1.28,1.72v3.35h-1v-3.47c0-1.99,1.19-2.47,1.95-2.47.91,0,1.55.54,1.82,1.09h.02l.06-.96h.89c-.03.48-.05.97-.05,1.57v4.23Z" />
									<path d="m35.32,284.63v1.39h.85v.8h-.85v3.17c0,.68-.1,1.2-.39,1.51-.24.29-.62.44-1.08.44-.39,0-.7-.06-.89-.14l.05-.79c.13.04.32.07.58.07.56,0,.75-.41.75-1.13v-3.13h-1.44v-.8h1.44v-1.67l.98.28Z" />
									<path d="m31.38,291.96c-.42,0-.68-.32-.68-.76s.27-.75.67-.75.68.31.68.75-.27.76-.67.76Z" />
									<path d="m60.33,306.23h-1v-7.2h-2.35v-.89h5.69v.89h-2.34v7.2Z" />
									<path d="m56.23,306.23h-1v-3.5c0-.2-.01-.36-.07-.5-.18-.58-.7-1.06-1.35-1.06-.95,0-1.28.79-1.28,1.73v3.33h-1v-3.45c0-2,1.19-2.48,1.93-2.48.38,0,.73.12,1.03.3.31.18.56.44.72.74h.02v-3.62h1v8.52Z" />
									<path d="m45.94,306.23c.07-.4.09-.89.09-1.39v-2.17c0-1.16.41-2.37,2.1-2.37.7,0,1.36.2,1.81.52l-.23.7c-.39-.26-.92-.43-1.44-.43-1.13,0-1.25.86-1.25,1.34v.12c2.13-.01,3.32.76,3.32,2.16,0,.84-.57,1.67-1.69,1.67-.79,0-1.38-.41-1.69-.86h-.03l-.08.73h-.91Zm1.06-1.96c0,.11.02.23.06.34.16.49.62.97,1.33.97.51,0,.95-.32.95-1.01,0-1.13-1.24-1.33-2.34-1.31v1.01Z" />
									<path d="m44.42,306.23h-1v-3.49c0-.18-.02-.36-.07-.49-.17-.59-.68-1.08-1.35-1.08-.95,0-1.28.78-1.28,1.72v3.35h-1v-3.47c0-1.99,1.19-2.47,1.95-2.47.91,0,1.55.54,1.82,1.09h.02l.06-.96h.89c-.03.48-.05.97-.05,1.57v4.23Z" />
									<path d="m37.1,297.71h.99v8.52h-.99v-2.18l-.51-.6-1.9,2.78h-1.22l2.43-3.42-2.13-2.39h1.21l1.62,2c.16.2.35.46.49.66h.02v-5.37Z" />
									<path d="m31.06,300.42l-2.04,5.35c-.05.13-.07.22-.07.28s.03.14.08.25c.23.54.57.95.84,1.17.3.26.63.43.88.52l-.25.89c-.25-.05-.74-.23-1.23-.68-.68-.62-1.17-1.64-1.89-3.63l-1.5-4.14h1.06l1.09,3.41c.14.42.25.86.35,1.21h.02c.09-.35.23-.8.35-1.19l1.21-3.43h1.09Z" />
									<path d="m22.74,300.29c1.53,0,2.74,1.14,2.74,3.08,0,1.83-1.15,2.99-2.64,2.99-1.33,0-2.75-.94-2.75-3.08,0-1.78,1.07-2.99,2.66-2.99Zm.02.79c-1.19,0-1.65,1.25-1.65,2.23,0,1.31.72,2.25,1.68,2.25s1.68-.96,1.68-2.23c0-1.1-.51-2.25-1.7-2.25Z" />
									<path d="m14.2,300.42h1v3.56c0,.19.03.38.09.54.18.47.65.96,1.32.96.91,0,1.23-.74,1.23-1.85v-3.21h1v3.39c0,2.04-1.04,2.54-1.9,2.54-.98,0-1.56-.61-1.82-1.08h-.02l-.06.95h-.89c.03-.46.05-.98.05-1.58v-4.22Z" />
									<path d="m12.06,306.36c-.41,0-.67-.32-.67-.74s.26-.74.67-.74c.39,0,.67.31.67.74s-.27.74-.67.74Zm-.39-2.46l-.16-5.76h1.09l-.16,5.76h-.77Z" />
								</g>
								<g id="paper" ref={paperRef}>
									<rect
										fill="#fff"
										stroke="#5EB4CB"
										strokeWidth=".25px"
										x="18.1"
										y="52"
										width="187.43"
										height="230.05"
										rx="9.02"
										ry="9.02"
									></rect>
								</g>
							</svg>

							<form onSubmit={handleSubmit}>
								<div
									className="contact-page-form-fields clip-path"
									ref={formRef}
								>
									<div>
										<h2>Send us a message:</h2>
										<input
											type="text"
											name="name"
											placeholder="Name"
											value={formData.name}
											onChange={handleChange}
											required
											disabled={isAnimating}
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
											disabled={isAnimating}
										/>
									</div>

									<div>
										<input
											type="topic"
											name="topic"
											placeholder="Subject"
											value={formData.topic}
											onChange={handleChange}
											required
											disabled={isAnimating}
										/>
									</div>

									<div>
										<textarea
											placeholder="Message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											required
											disabled={isAnimating}
										></textarea>
									</div>
								</div>
								<div
									className="contact-page-form-submit"
									ref={buttonRef}
								>
									<button onClick={handleSubmit}>
										{paperAirplane}
									</button>
								</div>
							</form>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 223.62 329.65"
								width="450"
								className="front-svg"
								ref={frontRef}
							>
								<defs>
									<linearGradient
										id="linear-gradient-2"
										x1="110.73"
										y1="270.63"
										x2="96.44"
										y2="359.21"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset="0" stopColor="#fbad37" />
										<stop offset="1" stopColor="#e1765e" />
									</linearGradient>
									<linearGradient
										id="linear-gradient-3"
										x1="112.73"
										y1="245.82"
										x2="111.8"
										y2="329.48"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset="0" stopColor="#ffd39a" />
										<stop offset="1" stopColor="#f9a670" />
									</linearGradient>
								</defs>
								<g id="body">
									<polygon
										fill="url(#linear-gradient-2)"
										points="223.62 329.65 0 329.65 0 198.22 111.81 263.93 223.62 198.22 223.62 329.65"
									/>
								</g>
								<g id="front">
									<path
										fill="url(#linear-gradient-3)"
										d="m104.19,248.41L1.84,328.25h219.94l-102.1-79.75c-4.54-3.56-10.91-3.59-15.49-.09Z"
									/>
								</g>
								<g
									id="fold"
									ref={foldRef}
									style={{ opacity: 0 }}
								>
									<path
										fill="url(#linear-gradient)"
										d="m120.25,115.81l103.37,81.52H0l103.37-81.52c4.92-3.98,11.96-3.98,16.89,0Z"
									/>
								</g>
							</svg>
						</div>
					</div>
				</div>
			)}
			{isMobile && <ContactMobile />}
		</>
	);
};

export default Contact;
