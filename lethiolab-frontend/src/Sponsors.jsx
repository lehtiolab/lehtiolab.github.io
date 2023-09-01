import React from 'react'

const Sponsors = () => {
    const sponsors = [{id: 1, img: 'https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/311985147_5524487010919891_3127154407027418739_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=ob2AaSa71fEAX90utvJ&_nc_ht=scontent-arn2-1.xx&oh=00_AfBo0IPtYhDd68ZtgvxvooJobEeYwVPfOKf6KOO_Bj9eaA&oe=64F7C28E', link: 'https://ki.se/'},
    					{id: 2, img: 'https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/311985147_5524487010919891_3127154407027418739_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=ob2AaSa71fEAX90utvJ&_nc_ht=scontent-arn2-1.xx&oh=00_AfBo0IPtYhDd68ZtgvxvooJobEeYwVPfOKf6KOO_Bj9eaA&oe=64F7C28E', link: 'https://ki.se/'},
						{id: 3, img: 'https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/311985147_5524487010919891_3127154407027418739_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=ob2AaSa71fEAX90utvJ&_nc_ht=scontent-arn2-1.xx&oh=00_AfBo0IPtYhDd68ZtgvxvooJobEeYwVPfOKf6KOO_Bj9eaA&oe=64F7C28E', link: 'https://ki.se/'},
						{id: 4, img: 'https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/311985147_5524487010919891_3127154407027418739_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=ob2AaSa71fEAX90utvJ&_nc_ht=scontent-arn2-1.xx&oh=00_AfBo0IPtYhDd68ZtgvxvooJobEeYwVPfOKf6KOO_Bj9eaA&oe=64F7C28E', link: 'https://ki.se/'},
                    ]
	return (
		<ul className='flex gap-5'>
			{sponsors.map(sponsor => (
				<li key={sponsor.id}>
					<a href={sponsor.link} target="_blank" rel="noopener noreferrer">
						<img src={sponsor.img} alt={`Sponsor ${sponsor.id}`}
							 className="w-24 transition duration-300 hover:opacity-70"  />
					</a>
				</li>
			))}
		</ul>
	);
}

export default Sponsors