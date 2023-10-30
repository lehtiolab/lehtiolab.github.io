import React from 'react';
import { sponsors } from './assets/data/sponsors';
import './styles/sponsors.css';

const Sponsors = () => {
	return (
		<div className="sponsors-container">
		<ul>
		  {sponsors.map((sponsor, index) => (
			<li key={index}>
			  <a href={sponsor.sponsorLink} target="_blank" rel="noopener noreferrer">
				  <img src={sponsor.sponsorImage} alt={sponsor.sponsorName} />
			  </a>
			</li>
		  ))}
		</ul>
	</div>
	);
  }
  
export default Sponsors;
