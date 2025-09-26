import React from 'react';

function parseFlexibleDate(s) {
	if (/^\d{2}\.\d{2}\.\d{4}$/.test(s)) {
		const [dd, mm, yyyy] = s.split('.').map(Number);
		return new Date(yyyy, mm - 1, dd);
	}
	if (/^\d{2}\.\d{4}$/.test(s)) {
		const [mm, yyyy] = s.split('.').map(Number);
		return new Date(yyyy, mm - 1, 1);
	}
	return new Date(s);
}

const News = () => {
	const news = [
		{ 
			date: '23.05.2024', 
			html: 'New website launched!'
		},
		{
			date: '07.2025',
			html: 'Check out our most <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12284558/" target="_blank" rel="noopener noreferrer">recent paper</a> on the analysis of tumor heterogeneity in melanoma brain metastasis.',
		},
		{
			date: '09.2025',
			html: 'The website of our <a href="https://proteomemedicine.se/" target="_blank" rel="noopener noreferrer">project ProMS</a> is ready! Check out how we will bring proteomic analysis into the clinic.',
		},
		{
			date: '10.2024',
			html: 'The <a href="https://www.testbedswedenphc.se/focuse" target="_blank" rel="noopener noreferrer">FOCU.SE</a> national cancer precision medicine trial has been approved by the European Medicines Agency (EMA) and Swedish authorities. This sets the ground for a prospective flow of patient samples through the FOCU.SE trial.',
		},
	];

	const sortedNews = [...news].sort((a, b) => parseFlexibleDate(b.date) - parseFlexibleDate(a.date));

	return (
		<ul className="news-list">
			{sortedNews.map((n, i) => (
				<li key={i} className="news-links">
					<time style={{ fontWeight: 600, color: 'var(--muted)', marginRight: 8 }}>{n.date}</time>
					<span dangerouslySetInnerHTML={{ __html: n.html }} />
				</li>
			))}
		</ul>
	);
};

export default News;
