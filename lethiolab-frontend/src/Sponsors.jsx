import React from 'react';
import { sponsors } from './assets/data/sponsors';
import './styles/sponsors.css';

const Sponsors = () => {
	return (
		<div className="sponsors-container">
		  {sponsors.map((sponsor, index) => (
			  <a key={index} href={sponsor.sponsorLink} className="sponsor-logo" target="_blank" rel="noopener noreferrer">
				  <img src={sponsor.sponsorImage} alt={sponsor.sponsorName} />
			  </a>
		  ))}
	</div>
	);
  }
  
export default Sponsors;
