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
			date: '11.2025',
			html: 'The <a href="https://www.testbedswedenphc.se/focuse" target="_blank" rel="noopener noreferrer">FOCU.SE national cancer precision medicine trial</a> has been approved by the European Medicines Agency (EMA) and Swedish authorities. This sets the ground for a prospective flow of patient samples through the FOCU.SE trial.',
		},
		{
			date: '10.2025',
			html: 'We’re proud to share that our PI, Henrik Johansson, has been awarded a 10 MSEK SSF grant for the project <a href="https://strategiska.se/en/press-release/they-receive-120-million-for-instrument-technology-and-method-development/" target="_blank" rel="noopener noreferrer">“Proteoform Elucidation And Knowledge-graph System (PEAKS)” </a>, advancing instrument and method development in proteomics — congratulations to the entire team! 🎉',
		},
		{
			date: '01.2026',
			html: 'Check out our new <a href="https://www.biorxiv.org/content/10.64898/2026.01.20.700495v1" target="_blank" rel="noopener noreferrer">preprint</a> about proteomics of single-slide FFPE cancer biopsies!',
		}
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
