import React from 'react';

const News = () => {
	const news = [
		{date: '09.09.2024', title: 'Had our offsite meeting & new members joined!'},
		{date: '23.05.2024', title: 'New website launched!'}
	];

	const sortedNews = news.sort((a, b) => {
		const dateA = new Date(a.date.split('.').reverse().join('-'));
		const dateB = new Date(b.date.split('.').reverse().join('-'));
		return dateB - dateA;
	});

	return (
		<ul className="overflow-y-auto">
			{sortedNews.map((n, i) => (
				<li key={i} className="news-links">
				<time style={{fontWeight: 600, color: 'var(--muted)', marginRight: 8}}>{n.date}</time>
				{n.title}
				</li>
			))}
		</ul>
	);
}

export default News;
