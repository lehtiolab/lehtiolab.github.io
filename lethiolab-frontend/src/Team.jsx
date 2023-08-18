import React, {useState} from "react";
import { members } from "./assets/data/members";
import {roleIconAssign} from "./assets/data/membersRoleIcons";
import PieChart from "./PieChart";
import marble from "./assets/img/marble.png"


const Team = () => {
	const [selectedCountry, setSelectedCountry] = useState(null);
	const [showEnlargedImage, setShowEnlargedImage] = useState(false);

	const marbleTexture = {
		height: '50px',
		padding: '20px',
		background: `#eeeef8 url(${marble})`
	}

	const marbleStyle = {
		color: 'transparent',
		textShadow: '1px 1px 1px hsla(0,0%,255%,0.5)',
		textTransform: 'uppercase'
	  };

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



	const MemberRender = ({member}) => (
		<div key={member.name} className="flex flex-col items-center relative">
            <img
                src={member.picture}
                alt={member.name}
                className="w-38 h-38 rounded-full object-cover shadow-xl"
            />

            <span className="absolute bottom-8 left-0 w-8 h-8">
                {roleIconAssign(member.icon)}
            </span>

            <span 
                className="mt-2 text-center cursor-pointer"
            >
                {member.name}
            </span>

            
        </div>
	)

	return (
		<>
			<PieChart data={dataArray} setSelectedCountry={setSelectedCountry}/>

			<div className="p-12">
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
							<MemberRender member={member} />
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

		</>
	);
};

export default Team;
