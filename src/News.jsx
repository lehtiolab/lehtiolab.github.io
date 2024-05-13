import React from 'react';

const News = () => {
    const news = [
		{date: '10.10.2023', title: 'Article title number one'},
		{date: '10.09.2023', title: 'Article title number two'},
		{date: '02.10.2023', title: 'Article title number three'},
		{date: '17.10.2023', title: 'Article title number four'},
		{date: '10.05.2023', title: 'Article title number five'},
		{date: '10.05.2023', title: 'Article title number five'},
		{date: '10.05.2023', title: 'Article title number five'},
		{date: '10.05.2023', title: 'Article title number five'},
		{date: '10.05.2023', title: 'Article title number five'},
		{date: '10.05.2023', title: 'Article title number five'},
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