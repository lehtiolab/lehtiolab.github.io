import React from "react";
import { Link } from "react-router-dom";
import { resources } from "./assets/data/resources";
import "./styles/resource.scss";

/** decides whether to render an <a> or <Link> based on URL */
const SmartLink = ({ to, children, className }) => {
	const isExternal = /^https?:\/\//i.test(to);
	if (isExternal) {
		return (
			<a
				href={to}
				target="_blank"
				rel="noopener noreferrer"
				className={className}
			>
				{children}
			</a>
		);
	}
	return (
		<Link to={to} className={className}>
			{children}
		</Link>
	);
	};

	const ResourceCard = ({ name, description, image, link }) => (
		<SmartLink to={link} className="resource-card" aria-label={name}>
			<div className="resource-card__content">
				<h3 className="resource-card__title">{name}</h3>
				<p className="resource-card__desc">{description}</p>
				<span className="resource-card__cta" aria-hidden="true">
					View resource
					<svg viewBox="0 0 24 24" className="resource-card__chev">
						<path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</span>
			</div>
			<div className="resource-card__media">
				<img src={image} alt="" loading="lazy" />
			</div>
		</SmartLink>
	);

	const Section = ({ title, intro, items }) => (
		<section className="resource-section" aria-labelledby={`${title}-heading`}>
			<h1 id={`${title}-heading`} className="resource-title">{title}</h1>
			<p className="resource-intro">{intro}</p>

			<div className="resource-grid">
			{items.map((r) => (
				<ResourceCard
					key={r.resourceName}
					name={r.resourceName}
					description={r.resourceDescription}
					image={r.resourceImage}
					link={r.resourceLink}
				/>
			))}
			</div>
		</section>
	);

	const Resources = () => {
	const products = resources.filter((r) => r.resourceType === "product");
	const courses  = resources.filter((r) => r.resourceType !== "product");

	return (
		<main className="resources-wrapper">
		<Section
			title="Software"
			intro="A collection of software dedicated to supporting oncology decision-making and research built here at the Lehtiö Lab. Our user-friendly tools simplify access to the latest research and medical insights for clinicians and scientists, helping teams make informed decisions and enhance patient care."
			items={products}
		/>

		<Section
			title="Courses"
			intro="We also oversee a selection of courses at Karolinska Institutet focused on the role of proteins in health and disease and on practical proteomics. Whether you're a student, healthcare professional, or researcher, explore our catalog to deepen your understanding and skills."
			items={courses}
		/>
		</main>
	);
};

export default Resources;
