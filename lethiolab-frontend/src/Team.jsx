import React, {useState, useEffect} from "react";
import { members } from "./assets/data/members";
import {roleIconAssign} from "./assets/data/membersRoleIcons";
import PieChart from "./PieChart";
import { flags } from "./assets/data/membersRoleIcons";
import './styles/team.scss';
import emailSVG from './assets/img/at-solid.svg';
import linkedinSVG from './assets/img/linkedin.svg';
import kisvg from './assets/img/ki.svg';
import githubSVG from './assets/img/github.svg';
import googleScholar from './assets/img/googleScholar.svg'
import orcid from './assets/img/orcid.svg'


const Team = () => {
	const [selectedCountry, setSelectedCountry] = useState(null);

	const countryCounts = {};

	// calculate how many members are from each country
	members.forEach((member) => {
	  const country = member.country;
	  if (!countryCounts[country]) {
		countryCounts[country] = 1;
	  } else {
		countryCounts[country] += 1;
	  }
	});
	
	const dataArray = Object.entries(countryCounts).map(([country, count]) => {
	  return [country, count];
	});
	
	dataArray.splice(0, 0, ['Country', 'Members']);

	const MemberRender = ({member}) => {
		const [isFlipped, setIsFlipped] = useState(false);
		const [isAnimating, setisAnimating] = useState(false);

		console.log(isAnimating)

		useEffect(() => {
			setisAnimating(true);
			const timeout = setTimeout(() => {
				setisAnimating(false);
			}, 250);
			return () => clearTimeout(timeout);
		}, [isFlipped]);
		
		return (
			<div className="member-card">
				<div className={`member-card_container ${isFlipped ? 'flipped' : ''} `} onClick={() => setIsFlipped(!isFlipped)}>
					<div className="member-card_container-inner">
						<div className="member-card_container-front" disabled>
								<img
									className="member-card_circle"
									src={flags[member.country]}
								/>
								<img
									className="member-card_img"
									src={member.pictureLink}
									alt={member.name}
									
								/>
						</div>
						<div className="member-card_container-back">
							{member.email &&
								<a  href={`mailto: ${member.website}`}>
									<img src={emailSVG} width="35px" alt="Email icon" className="transition hover:scale-110"/> 
								</a>
							}
							{member.github &&
								<a href={member.github} target="_blank">
									<img src={githubSVG} width="35px" alt="Github icon" className="transition hover:scale-110"/> 
								</a>
							}
							{member.kiLink &&
								<a href={member.kiLink} target="_blank">
									<img src={kisvg} width="30px" alt="KI icon" className="transition hover:scale-110"/> 
								</a>
							}
							{member.linkedIn &&
								<a href={member.linkedIn} target="_blank">
									<img src={linkedinSVG} width="30px" alt="LinkedIn icon" className="transition hover:scale-110"/> 
								</a>
							}
							{member.googleScholar &&
								<a href={member.googleScholar} target="_blank">
									<img src={googleScholar} width="30px" alt="Google Scholar icon" className="transition hover:scale-110"/> 
								</a>
							}
							{member.orcid &&
								<a href={member.orcid} target="_blank">
									<img src={orcid} width="30px" alt="Orcid icon" className="transition hover:scale-110"/> 
								</a>
							}
						</div>
					</div>
					
				</div>
				<div className="member-card_icon">
						{roleIconAssign(member.role)}
				</div>
				<span
				>
					{member.name}
				</span>
			</div>
		)
	}

	console.log('render')

	return (
		<div className="bg-white">
			<PieChart data={dataArray} setSelectedCountry={setSelectedCountry}/>

			<div className="text-black">
				<h1 className="text-2xl font-bold">Members</h1>
				<div className="members-list">
					{members.map(member => {
						// check if a country is selected
						if (selectedCountry) {
						// render the member only if their country matches the selectedCountry
						if (member.country === selectedCountry) {
							return (
								<MemberRender member={member} />
							);
						} else {
							// skip rendering this member if their country doesn't match the selectedCountry
							return null;
						}
						} else {
						// render all members if no country is selected
						return (
							<MemberRender key={member.name} member={member} />
						);
						}
				})}
				</div>
			</div>

			<div className="p-12 h-18 text-black">
				<div>
					<h3 className="text-3xl "> Alumni </h3>
					<div>
						Elena Panizz, Yan Zhou, Yafeng Zhu, Taner Arslan, Nate Vacanti, Matthias Stahl, Kaveh Goudarzi, Jürgen Eirich, Hillevi Andersson-Sand, 
						Fabio Socciarelli, Elena Kunold, Sara Ståhl, Psa Perez-Bercoff, Oliver Frings, Nina Lagerquist, Mohammad Pirmoradian, Lyris Godoy, 
						Luigi de Petris, Lingie Tao, Lina Hultin-Rosenberg, Kristian Björnstad, Kie Kasuga, Kaveh Moazemi, Kannan Sampath, Johnathon Andersson, 
						Johan Lengquist, Jessie Dahlström, Hitoshi Takahashi, Hasan Bhuiyan, Hanna Kjellin, Gianluca Maddalo, Freddy Cliquet, Erik Fredlund, 
						Davide Tamburro, Anna Lindahl, Anders Nordström, Alejandro Woodbridge, Alar Aab
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
