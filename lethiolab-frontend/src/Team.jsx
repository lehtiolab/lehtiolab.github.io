import React, {useState, memo} from "react";
import { members } from "./assets/data/members";
import {roleIconAssign} from "./assets/data/membersRoleIcons";
import PieChart from "./PieChart";
import sweden from './assets/img/Flag_of_Sweden.svg.png';
import './styles/team.scss';
import TeamModal from "./TeamModal";


const Team = () => {
	const [selectedCountry, setSelectedCountry] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const [currentMember, setCurrentMember] = useState(null);

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

	const openModalWithMember = (member) => {
		setCurrentMember(member);
		setIsOpen(true);
	};

	const MemberRender = memo(({member}) => (
		<div className="memberpage_person">
			<div className="memberpage_container" onClick={() => openModalWithMember(member)}>
				<div className="memberpage_container-inner">
					<img
						className="memberpage_circle"
						src={sweden}
					/>
					<img
						className="memberpage_img"
						src={member.pictureLink}
						alt={member.name}
						
					/>
				</div>
			</div>
			<span className="memberpage_icon">
                {roleIconAssign(member.role)}
            </span>

            <span 
                className="text-center"
            >
                {member.name}
            </span>
			
        </div>
	))

	return (
		<div className="bg-white">
			<PieChart data={dataArray} setSelectedCountry={setSelectedCountry}/>

			<div className="p-12 text-black">
				<h1 className="text-2xl font-bold mb-4">Members</h1>
				<div className="grid grid-cols-5 gap-8">
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

			<div className="p-12 h-18">
				<div>
					<h3 className="text-3xl"> Alumni </h3>
					<div>
						Elena Panizz, Yan Zhou, Yafeng Zhu, Taner Arslan, Nate Vacanti, Matthias Stahl, Kaveh Goudarzi, Jürgen Eirich, Hillevi Andersson-Sand, 
						Fabio Socciarelli, Elena Kunold, Sara Ståhl, Psa Perez-Bercoff, Oliver Frings, Nina Lagerquist, Mohammad Pirmoradian, Lyris Godoy, 
						Luigi de Petris, Lingie Tao, Lina Hultin-Rosenberg, Kristian Björnstad, Kie Kasuga, Kaveh Moazemi, Kannan Sampath, Johnathon Andersson, 
						Johan Lengquist, Jessie Dahlström, Hitoshi Takahashi, Hasan Bhuiyan, Hanna Kjellin, Gianluca Maddalo, Freddy Cliquet, Erik Fredlund, 
						Davide Tamburro, Anna Lindahl, Anders Nordström, Alejandro Woodbridge, Alar Aab
					</div>
				</div>
			</div>
			<TeamModal currentMember={currentMember} isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	);
};

export default Team;
