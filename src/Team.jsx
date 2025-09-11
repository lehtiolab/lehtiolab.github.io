import React, {useState, useEffect} from "react";
import { members } from "./assets/data/members";
import {roleIconAssign} from "./assets/data/membersRoleIcons";
import PieChart from "./PieChart";
import { sections } from "./assets/data/membersRoleIcons";
import './styles/team.scss';
import emailSVG from './assets/img/at-solid.svg';
import linkedinSVG from './assets/img/linkedin.svg';
import kisvg from './assets/img/ki.svg';
import githubSVG from './assets/img/github.svg';
import googleScholar from './assets/img/googleScholar.svg';
import orcid from './assets/img/orcid.svg';
import { isMobile } from "react-device-detect";
import ImageLoader from "./ImageLoader";
import { TEAM_META } from "./assets/data/membersRoleIcons";


const Team = () => {
	const [selectedTeam, setSelectedTeam] = useState(null);

	const teamCounts = {};
	const countsByBg = members.reduce((acc, m) => {
    if (!m.bg) return acc;
    acc[m.bg] = (acc[m.bg] || 0) + 1;
    return acc;
  }, {});

	// calculate how many members are from each country
	members.forEach((member) => {
	  const team = member.team;
	  if (!teamCounts[team]) {
		teamCounts[team] = 1;
	  } else {
		teamCounts[team] += 1;
	  }
	});

	
	const dataArray = Object.entries(countsByBg).map(([bg, count]) => {
    const meta = TEAM_META[bg] || {};
    return {
      bg,
      label: meta.label || bg,
      value: count,
      color: meta.color || '#cccccc',
    };
  }).sort((a, b) => a.label.localeCompare(b.label));

  const selectedLabel = selectedTeam ? (TEAM_META[selectedTeam]?.label || selectedTeam) : '';

	//23d160 - breast cancer
	//ff7c4b -mtbp
	//6493ff - admin/ClinProt
	//ff1536 - plasma proteomics
	//ffdd57 - childhood cancer
	//82135f - core facility
	//ffa5c7 - proteomics method
	//23f3d9 - lung cancer
	const colors = ['#6493ff', '#23d160', '#ffdd57', '#82135f', '#23f3d9', '#ff7c4b', '#ff1536', '#ffa5c7',];
	// Team.jsx (top-level, keep labels exactly as in member.team)
const TEAM_COLORS = {
  'admin/clinprot': '#6493ff',
  'breast cancer': '#23d160',
  'childhood cancer': '#ffdd57',
  'core facility': '#82135f',
  'lung cancer': '#23f3d9',
  'mtbp': '#ff7c4b',
  'plasma proteomics': '#ff1536',
  'proteomics method': '#ffa5c7',
};



	
	const MemberRenderMobile = ({member}) => {
		return (
			<div className="member-card">
				<div className="member-card_container-front" >
					<img
						className="member-card_circle"
						src={sections[member.bg]}
					/>
					<ImageLoader
						className="member-card_img"
						src={member.pictureLink}
						alt={member.name}
						
					/>
				</div>
				<div className="member-card_info">
					<b><span>{member.name}</span></b>
					<span>{member.title}</span>
				</div>
				<div className="member-card_links">
					{member.email &&
						<a  href={`mailto: ${member.email}`} onClick={(e) => e.stopPropagation()}>
							<img src={emailSVG} width="35px" alt="Email icon" className="transition hover:scale-110"/> 
						</a>
					}
					{member.github &&
						<a href={member.github} target="_blank" onClick={(e) => e.stopPropagation()}>
							<img src={githubSVG} width="35px" alt="Github icon" className="transition hover:scale-110"/> 
						</a>
					}
					{member.kiLink &&
						<a href={member.kiLink} target="_blank" onClick={(e) => e.stopPropagation()}>
							<img src={kisvg} width="30px" alt="KI icon" className="transition hover:scale-110"/> 
						</a>
					}
					{member.linkedIn &&
						<a href={member.linkedIn} target="_blank" onClick={(e) => e.stopPropagation()}>
							<img src={linkedinSVG} width="30px" alt="LinkedIn icon" className="transition hover:scale-110"/> 
						</a>
					}
					{member.googleScholar &&
						<a href={member.googleScholar} target="_blank" onClick={(e) => e.stopPropagation()}>
							<img src={googleScholar} width="30px" alt="Google Scholar icon" className="transition hover:scale-110"/> 
						</a>
					}
					{member.orcid &&
						<a href={member.orcid} target="_blank" onClick={(e) => e.stopPropagation()}>
							<img src={orcid} width="30px" alt="Orcid icon" className="transition hover:scale-110"/> 
						</a>
					}
				</div>
			</div>
		)
	}

	const MemberRender = ({member}) => {
		const [isFlipped, setIsFlipped] = useState(false);

		return (
			<div className="member-card">
				<div className={`member-card_container ${isFlipped ? 'flipped' : ''} `} onClick={() => setIsFlipped(!isFlipped)}>
					<div className="member-card_container-inner">
						<div className="member-card_container-front" >
							<img
								className="member-card_circle"
								src={sections[member.bg]}
							/>
							<ImageLoader
								className="member-card_img"
								src={member.pictureLink}
								alt={member.name}
								
							/>
						</div>
						<div className="member-card_container-back">
							{member.email &&
								<a  href={`mailto: ${member.email}`} onClick={(e) => e.stopPropagation()}>
									<img src={emailSVG} width="35px" alt="Email icon" className="transition hover:scale-110"/> 
								</a>
							}
							{member.github &&
								<a href={member.github} target="_blank" onClick={(e) => e.stopPropagation()}>
									<img src={githubSVG} width="35px" alt="Github icon" className="transition hover:scale-110"/> 
								</a>
							}
							{member.kiLink &&
								<a href={member.kiLink} target="_blank" onClick={(e) => e.stopPropagation()}>
									<img src={kisvg} width="30px" alt="KI icon" className="transition hover:scale-110"/> 
								</a>
							}
							{member.linkedIn &&
								<a href={member.linkedIn} target="_blank" onClick={(e) => e.stopPropagation()}>
									<img src={linkedinSVG} width="30px" alt="LinkedIn icon" className="transition hover:scale-110"/> 
								</a>
							}
							{member.googleScholar &&
								<a href={member.googleScholar} target="_blank" onClick={(e) => e.stopPropagation()}>
									<img src={googleScholar} width="30px" alt="Google Scholar icon" className="transition hover:scale-110"/> 
								</a>
							}
							{member.orcid &&
								<a href={member.orcid} target="_blank" onClick={(e) => e.stopPropagation()}>
									<img src={orcid} width="30px" alt="Orcid icon" className="transition hover:scale-110"/> 
								</a>
							}
						</div>
					</div>
					
				</div>
				<div className="member-card_icon">
						{roleIconAssign(member.role)}
				</div>
				<div className="member-card_info">
					<b><span>{member.name}</span></b><br/>
					<span>{member.title}</span> <br/>
					{member.yearStarted && <span>Member since {member.yearStarted}</span>}
				</div>
			</div>
		)
	}


	return (
		<div>
			{isMobile ?
				<div className="mobile members-list">
					<div className="researchCard text-xs bg-white rounded p-2 pr-10 pl-5 pb-5 pt-5 mb-4">
							At the heart of our ethos lies a deep commitment to acknowledging and fostering the unique qualities and strengths of each 
							individual, a principle that underlines our belief in the importance of every voice being not only heard but also genuinely 
							valued. With open arms, we invite you to get acquainted with our diverse team, a remarkable assembly of individuals hailing 
							from all corners of the globe. Together, we celebrate the rich tapestry of perspectives and experiences that this global 
							diversity brings to our group.
					</div>
					{members
						.sort((a, b) => {
							const lastNameA = a.name.split(' ').pop();
							const lastNameB = b.name.split(' ').pop();
							if (lastNameA < lastNameB) return -1;
							if (lastNameA > lastNameB) return 1;
							return 0;
						})
						.map(member => {
							return <MemberRenderMobile key={member.name} member={member} />;
						})}
				</div>
				:
				<>
					<div className="members-pie">

						<PieChart
							data={dataArray}
							setSelectedTeam={setSelectedTeam}
						/>

						<div className="researchCard bg-white rounded p-2 pr-10 pl-10 pb-5 pt-5 ml-12">
							At the heart of our ethos lies a deep commitment to acknowledging and fostering the unique qualities and strengths of each 
							individual, a principle that underlines our belief in the importance of every voice being not only heard but also genuinely 
							valued. With open arms, we invite you to get acquainted with our diverse team, a remarkable assembly of individuals hailing 
							from all corners of the globe. Together, we celebrate the rich tapestry of perspectives and experiences that this global 
							diversity brings to our group.
						</div>
					</div>
					<div>
						<div className="members-list">
							{members
								.sort((a,b) => {
								const A = a.name.split(' ').pop();
								const B = b.name.split(' ').pop();
								return A.localeCompare(B);
								})
												.map(member => {
								if (selectedTeam) {
									return member.bg === selectedTeam ? (
									<MemberRender key={member.name} member={member} />
									) : null;
								}
								return <MemberRender key={member.name} member={member} />;
							})}
						</div>
					</div>
				</>
			}

			<div className="alumni">
				<h3 className="text-3xl"> Alumni </h3>
				<div>
					Elena Panizz, Yan Zhou, Yafeng Zhu, Taner Arslan, Nate Vacanti, Matthias Stahl, Kaveh Goudarzi, Jürgen Eirich, Hillevi Andersson-Sand, 
					Fabio Socciarelli, Elena Kunold, Sara Ståhl, Psa Perez-Bercoff, Oliver Frings, Nina Lagerquist, Mohammad Pirmoradian, Lyris Godoy, 
					Luigi de Petris, Lingie Tao, Lina Hultin-Rosenberg, Kristian Björnstad, Kie Kasuga, Kaveh Moazemi, Kannan Sampath, Johnathon Andersson, 
					Johan Lengquist, Jessie Dahlström, Hitoshi Takahashi, Hasan Bhuiyan, Hanna Kjellin, Gianluca Maddalo, Freddy Cliquet, Erik Fredlund, 
					Davide Tamburro, Anna Lindahl, Anders Nordström, Alejandro Woodbridge, Alar Aab, Konstantin Barylyuk, Maria Pernemalm, Nidhi Sharma
				</div>
			</div>
		</div>
	);
};

export default Team;
