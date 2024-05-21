import React from 'react';

const News = () => {
    const news = [
		{date: '23.05.2024', title: 'New website launched!'}
	];
    
	const sortedNews = news.sort((a, b) => {
		const dateA = new Date(a.date.split('.').reverse().join('-'));
		const dateB = new Date(b.date.split('.').reverse().join('-'));
		return dateA - dateB;
	});
                    

  return (
    <ul className="overflow-y-auto">
        {sortedNews.map(news =>
			<li className="news-links">
				{news.date} | {news.title}
			</li>
			)}
    </ul>
  )
}

export default News