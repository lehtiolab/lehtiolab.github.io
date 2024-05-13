import React from 'react';
import emailSVG from './assets/img/at-solid.svg';
import webSVG from './assets/img/web.svg';
import linkedinSVG from './assets/img/linkedin.svg';
import kisvg from './assets/img/ki.svg';
import githubSVG from './assets/img/github.svg';

const TeamModal = ({isOpen, setIsOpen, member}) => {
	const modalClass = isOpen ? 'modal-open' : 'modal-closed';

  return (
		<div className={modalClass}>
			<div
				className="fixed inset-0 bg-black opacity-50 overflow-hidden"
				onClick={() => setIsOpen(false)}
			></div>
			{member && <div className="fixed inset-0 flex items-center justify-center z-50">
			<div className="bg-white text-black p-8 rounded shadow-lg w-1/3">
				<h2 className="text-2xl mb-4">{member.name}</h2>
				<p>{member.title} since {member.yearStarted}</p>
				<h4 className="text-2xl mt-4">Contact information</h4>
				<div className="m-4 flex justify-evenly">
					{member.email &&
						<a  href={`mailto: ${member.website}`}>
							<img src={emailSVG} width="35px" alt="Email icon" className="transition hover:scale-110"/> 
						</a>
					}
					{member.website &&
						<a href={member.website} target="_blank">
							<img src={webSVG} width="35px" alt="Website icon" className="transition hover:scale-110"/> 
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
				</div>
				<button
					onClick={() => setIsOpen(false)}
					className="mt-4 p-2 bg-red-500 text-white rounded"
				>
					Close
				</button>
			</div>
		</div>}
	</div>
  )
}

export default TeamModal