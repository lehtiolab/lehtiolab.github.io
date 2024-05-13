import React from 'react';

const News = () => {
    const news = [
		{id: 1, date: '10.10.2023', title: 'Article title number one'},
		{id: 2, date: '10.09.2023', title: 'Article title number two'},
		{id: 3, date: '02.10.2023', title: 'Article title number three'},
		{id: 4, date: '17.10.2023', title: 'Article title number four'},
		{id: 5, date: '10.05.2023', title: 'Article title number five'},
		{id: 5, date: '10.05.2023', title: 'Article title number five'},
		{id: 5, date: '10.05.2023', title: 'Article title number five'},
		{id: 5, date: '10.05.2023', title: 'Article title number five'},
		{id: 5, date: '10.05.2023', title: 'Article title number five'},
		{id: 5, date: '10.05.2023', title: 'Article title number five'},
	];
    
	const sortedNews = news.sort((a, b) => {
		const dateA = new Date(a.date.split('.').reverse().join('-'));
		const dateB = new Date(b.date.split('.').reverse().join('-'));
		return dateA - dateB;
	});
                    

  return (
    <ul className="overflow-y-auto">
        {sortedNews.map(news =>
			<li key={news.id} className="news-links">
				{news.date} | {news.title}
			</li>
			)}
    </ul>
  )
}

export default News