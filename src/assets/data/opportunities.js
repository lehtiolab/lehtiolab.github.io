/*
The order in the list will determine the order of the position appearance

"positionType" is the type of the position, either "staff" or "academic"
"positionPostDate" is the date the position was posted in dd/mm/yyyy format (can be retrieved from position advertisement page)
"positionTitle" is the title of the role (can be retrieved from position advertisement page)
"positionKeySkills" are the positions key skills (can be retrieved from position advertisement page)
"positionDescription" is a description of the position (can be retrieved from position advertisement page)
"positionLink" is the link to the position page
"positionAffiliation" is the projects the position is affilitated with but can also be all or something entirely unique
"positionContact" is the person to be contacted regarding the position
"active" is a boolean value determining if the position is active or not
*/
export const opportunities = 
[
    {
        "positionType": "staff",
        "positionPostDate": "01/01/2990",
        "positionTitle": "nice guy",
        "positionKeySkills": ["live","love","laugh"],
        "positionDescription": "Does work well",
        "positionLink": "https://www.google.com/",
        "positionAffiliation": ["MTNP","ALL"],
        "positionContact": "ali.aht.razzak@gmail.com",
        "active": 1,
    },
    {
        "positionType": "academic",
        "positionPostDate": "01/01/2990",
        "positionTitle": "nice guy",
        "positionKeySkills": ["live","love","laugh"],
        "positionDescription": "Does work well",
        "positionLink": "https://www.google.com/",
        "positionAffiliation": ["MTNP","ALL"],
        "positionContact": "ali.aht.razzak@gmail.com",
        "active": 1,
    }
]