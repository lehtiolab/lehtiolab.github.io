/*
The order in the list will determine the order of the position appearance

"positionType" is the type of the position, either "staff" or "academic"
"positionPostDate" is the date the position was posted in dd/mm/yyyy format (can be retrieved from position advertisement page)
"applicationDeadline" is the final day to apply for the position in dd/mm/yyyy format (can be retrieved from position advertisement page)
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
        "positionPostDate": "03/05/2024",
        "applicationDeadline": "29/05/2024",
        "positionTitle": "Research Infrastructure Specialists for Clinical Proteomics Mass Spectrometry",
        "positionKeySkills": ["Proteomics","Sample preperation","Data analysis"],
        "positionDescription": "You will be part of the Core Facility team and research group providing technological and methodological service to customers from both academic and industrial organizations. As a Research Infrastructure Specialist, you will play an active role in optimizing and applying methods and approaches for the analysis of a broad range of biological samples using our state-of-the-art MS-based proteomics platform. The work involves a combination of creative innovation and routine tasks and places a great emphasis on independence, initiative, precision, and planning.",
        "positionLink": "https://ki.varbi.com/en/what:job/jobID:725271/type:job/where:4/apply:1",
        "positionAffiliation": ["Core Facility"],
        "positionContact": "helena.backvall@ki.se",
        "active": 1,
    },
    {
        "positionType": "academic",
        "positionPostDate": "16/05/2024",
        "applicationDeadline": "06/06/2024",
        "positionTitle": "Doctoral (PhD) student position in computational network-based cancer precision medicine",
        "positionKeySkills": ["Bioinformatics","Systems biology","Machine Learning"],
        "positionDescription": "This doctoral research project aims to develop new methods to improve analysis and data interpretation of future diagnostics data on cancer precision medicine using large-scale omics data. Beyond chemotherapy, modern drug treatments now focus on targeted therapies. This approach uses genomic analysis of individual tumour samples to identify specific DNA alterations, guiding treatment choices. Despite advancements by targeted treatments, the continued occurrence of patient relapses highlights the urgent need for further developments. We have worked successfully on broadening the diagnostics toolkit to understand cancer and match effective treatments to patients based on this knowledge.",
        "positionLink": "https://kidoktorand.varbi.com/en/what:job/jobID:728452/type:job/where:4/apply:1",
        "positionAffiliation": [],
        "positionContact": "ioannis.siavelis@ki.se",
        "active": 1,
    }
]