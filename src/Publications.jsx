import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { publications } from "./assets/data/publications";
import "./styles/publications.scss";

const SmartLink = ({ to, className, children }) => {
	const isExternal = /^https?:\/\//i.test(to);
	return isExternal ? (
		<a href={to} target="_blank" rel="noopener noreferrer" className={className}>
			{children}
		</a>
	) : (
		<Link to={to} className={className}>{children}</Link>
	);
};

const parseDMY = (dmy) => {
	if (!dmy) return new Date(0);
	const [dd, mm, yyyy] = dmy.split("/").map(Number);
	return new Date(yyyy, (mm || 1) - 1, dd || 1);
};

const PublicationCard = ({ pub, flip }) => {
	const authors = pub.publicationAuthors?.map((a, i) => {
		const isLab = a.includes("*");
		const text = a.replace("*", "");
		const sep = i < pub.publicationAuthors.length - 1 ? ", " : "";
		return isLab ? (
			<span key={i} className="pub-authors__lab"><strong>{text}</strong>{sep}</span>
		) : (
			<span key={i}>{text}{sep}</span>
		);
	});

	const fullImgHref = pub.publicationImageFull || pub.publicationImage;

	return (
		<article className={`pub-card${flip ? " pub-card--flip" : ""}`}>
			<div>
				{pub.publicationImage ? (
					<a
						className="pub-thumb-link"
						href={fullImgHref}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Open figure in a new tab"
					>
						<img
							src={pub.publicationImage}
							alt=""
							loading="lazy"
							srcSet={pub.publicationImage2x ? `${pub.publicationImage2x} 2x` : undefined}
						/>
					</a>
				) : (
					<div className="pub-card__placeholder" aria-hidden="true"></div>
				)}
			</div>

			<div className="pub-card__content">
				<p className="pub-title">
					{pub.publicationTitle}
				</p>
				<div className="pub-meta">
					<em>{pub.publicationJournal}</em>, <time>{pub.publicationDate}</time>
				</div>
				<div className="pub-authors">{authors}</div>
				<SmartLink to={pub.publicationLink} className="pub-cta" aria-label="Open publication">
					Open publication
					<svg viewBox="0 0 24 24" className="pub-cta__icon">
						<path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</SmartLink>
			</div>
		</article>
	);
};

	const Publications = () => {
	const sorted = useMemo(
		() => [...publications].sort((a, b) => parseDMY(b.publicationDate) - parseDMY(a.publicationDate)),
		[]
	);

	// Group by year
	const byYear = useMemo(() => {
		return sorted.reduce((acc, p) => {
		const y = (p.publicationDate || "").split("/")[2] || "Unknown";
		(acc[y] ||= []).push(p);
		return acc;
		}, {});
	}, [sorted]);

	// Ordered years (desc, numeric first)
	const years = useMemo(
		() => Object.keys(byYear).sort((a, b) => (Number(b) || 0) - (Number(a) || 0)),
		[byYear]
	);

	// Active year tracking (for highlight)
	const [activeYear, setActiveYear] = useState(years[0] || "");
	const observerRef = useRef(null);

	useEffect(() => {
		if (!years.length) return;
		const sections = years
		.map((y) => document.getElementById(`year-${y}`))
		.filter(Boolean);

		// Observe which year block is "centered" in viewport
		observerRef.current = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const id = entry.target.getAttribute("id") || "";
				const y = id.replace("year-", "");
				setActiveYear(y);
			}
			});
		},
		{ root: null, rootMargin: "-40% 0px -55% 0px", threshold: 0 }
		);

		sections.forEach((el) => observerRef.current.observe(el));
		return () => observerRef.current?.disconnect();
	}, [years]);

	const scrollToYear = (y) => {
		const el = document.getElementById(`year-${y}`);
		if (!el) return;
		const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
	};

	return (
		<main className="pubs-wrapper">
			{/* Sticky side rail (desktop only via CSS) */}
			<aside className="year-rail" aria-label="Year timeline">
			<ul className="year-rail__list">
				{years.map((y) => (
				<li key={`rail-${y}`}>
					<button
					type="button"
					className="year-rail__link"
					onClick={() => scrollToYear(y)}
					aria-current={activeYear === y ? "true" : undefined}
					>
					<span className="dot" aria-hidden="true" />
					{y}
					</button>
				</li>
				))}
			</ul>
			</aside>

			{/* Publications content */}
			<div className="pubs-content">
			{years.map((year) => (
				<section key={year} id={`year-${year}`} className="year-block">
				<h2 className="year-heading">{year}</h2>
				<div className="year-list">
					{byYear[year].map((pub, i) => (
					<PublicationCard key={pub.publicationTitle} pub={pub} flip={i % 2 === 1} />
					))}
				</div>
				</section>
			))}
			</div>
		</main>
	);
};

export default Publications;
