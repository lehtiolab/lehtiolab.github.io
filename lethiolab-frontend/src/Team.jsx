import React, {useState} from "react";
import { members } from "./assets/data/members";
import PieChart from "./PieChart";

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

	return (
		<>
			<PieChart data={dataArray} setSelectedCountry={setSelectedCountry}/>

			<div className="p-12">
				<h1 className="text-2xl font-bold mb-4">Members</h1>
				<div className="grid grid-cols-5 gap-8">
				{members.map(member => {
    // Check if a country is selected
    if (selectedCountry) {
      // Render the member only if their country matches the selectedCountry
      if (member.country === selectedCountry) {
        return (
          <div key={member.name} className="flex flex-col items-center">
            <img
              src={member.picture}
              alt={member.name}
              className="w-38 h-38 rounded-full object-cover shadow-2xl"
            />
            <span className="mt-2 text-center">{member.name}</span>
          </div>
        );
      } else {
        // Skip rendering this member if their country doesn't match the selectedCountry
        return null;
      }
    } else {
      // Render all members if no country is selected
      return (
        <div key={member.name} className="flex flex-col items-center">
          <img
            src={member.picture}
            alt={member.name}
            className="w-38 h-38 rounded-full object-cover shadow-2xl"
          />
          <span className="mt-2 text-center">{member.name}</span>
        </div>
      );
    }
  })}
				</div>
			</div>

		</>
	);
};

export default Team;
