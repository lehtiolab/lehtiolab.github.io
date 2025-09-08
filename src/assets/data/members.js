import unknown from './../img/team/unknown.webp'
import aliRazzak from './../img/team/aliRazzak.webp';
import eduardoAraujo from './../img/team/eduardoAraujo.webp';
import olenaBerkovska from './../img/team/olenaBerkovska.webp';
import rozbehJafar from './../img/team/rozbehJafar.webp';
import isabelleLeo from './../img/team/isabelleLeo.png';
import davidTamborero from './../img/team/davidTamborero.webp';
import nooraSissala from './../img/team/nooraSissala.webp';
import xiaofangCao from './../img/team/xiaofangCao.webp';
import ruiBranca from './../img/team/ruiBranca.webp';
import lukasOrre from './../img/team/lukasOrre.webp';
import akramEmdadi from './../img/team/akramEmdadi.webp';
import ioannisSiavelis from './../img/team/ioannisSiavelis.webp';
import ireneSanz from './../img/team/ireneSanz.webp';
import xuekangQi from './../img/team/xuekangQi.webp';
import henrikJohansson from './../img/team/henrikJohansson.webp';
import mahshidZarrineh from './../img/team/mahshidZarrineh.webp';
import yanboPan from './../img/team/yanboPan.webp';
import markusJonsson from './../img/team/markusJonsson.webp';
import janneLehtio from './../img/team/janneLehtio.webp';
import harisBabacic from './../img/team/harisBabacic.webp';
import soumitraMarathe from './../img/team/soumitraMarathe.webp';
import lauraGheorghe from './../img/team/lauraGheorghe.webp';
import xeniaVillalobos from './../img/team/xeniaVillalobos.webp'
import yaroslavKaminskiy from './../img/team/yaroslavKaminskiy.webp';
import georgiosMermelekas from './../img/team/georgiosMermelekas.webp';
import mahnazNikpour from './../img/team/mahnazNikpour.webp';
import lauraLevi from './../img/team/lauraLevi.webp';
import ghazalehAssadi from './../img/team/ghazalehAssadi.webp';
import dmitriiRudakovskii from './../img/team/dmitriiRudakovskii.webp';
import amareWolide from './../img/team/amareWolide.webp';
import koviGovindarajan from './../img/team/koviGovindarajan.webp';
import lucaGaessler from './../img/team/lucaGaessler.webp';
import ritaHutyraGram from './../img/team/ritaHutyraGram.webp';
import barbaraMahler from './../img/team/barbaraMahler.webp';
import georgeField from './../img/team/georgeField.webp';
import nazliOzkan from './../img/team/nazliOzkan.webp'
import owenHovey from './../img/team/owenHovey.webp'

/*
The role of a member determines their appearance, followed by who has been the longest, & then finally alphabetically

name is the members first and last name
role is the type of role can be: "leader", "principal investigator", "postdoc", "staff", "phd", "student"
	Note: The role can also determine the icon (given we implemented it)
title is their actual job title
email is their prefered email (ideally collected from https://docs.google.com/spreadsheets/d/185U2WFq2y5yZaBxg6mahq8_zeGod9okXH0BbNoy_lbM/edit#gid=0)
	If not provided default to their ki email
"website" is their personal website (ideally collected from https://docs.google.com/spreadsheets/d/185U2WFq2y5yZaBxg6mahq8_zeGod9okXH0BbNoy_lbM/edit#gid=0)
github is their personal github (ideally collected from https://docs.google.com/spreadsheets/d/185U2WFq2y5yZaBxg6mahq8_zeGod9okXH0BbNoy_lbM/edit#gid=0)
kiLink is their ki link (ideally collected from https://docs.google.com/spreadsheets/d/185U2WFq2y5yZaBxg6mahq8_zeGod9okXH0BbNoy_lbM/edit#gid=0)
	Note: this can easily be extracted via google
linkedIn is their personal linkedin (ideally collected from https://docs.google.com/spreadsheets/d/185U2WFq2y5yZaBxg6mahq8_zeGod9okXH0BbNoy_lbM/edit#gid=0)
yearStarted is the the year they began work in the group
active determines if their alumni or not (0 for alumni, 1 for currently employed)
country is their country of origin ISO2 (ideally collected from https://docs.google.com/spreadsheets/d/185U2WFq2y5yZaBxg6mahq8_zeGod9okXH0BbNoy_lbM/edit#gid=0)
pictureLink is their prefered picture link, default take from existing page but probably need to update by asking individuals
googleScholar is their google scholar link
*/


//23d160 - breast cancer
//ff7c4b - mtbp
//a71eff - proteomics platform
//6493ff - admin
//ff1536 - applied proteomics
//ffdd57 - childhood cancer
//82135f - core facility
//ffa5c7 - proteomics method
//23f3d9 - lung cancer

export const members = [
	{
		name: "Igor Schliemann",
		role: "student",
		title: "PhD Student",
		email: "Igor.schliemann@ki.se",
		github: "https://github.com/justinseby",
		kiLink: "https://ki.se/en/people/igor-schliemann",
		linkedIn: "http://linkedin.com/in/igor-schliemann-4724409a",
		yearStarted: "2023",
		active: 1,
		team: "Lung cancer",
		bg: "lungCancer",
		pictureLink : unknown,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Justin Seby",
		role: "student",
		title: "PhD Student",
		email: "justin.seby@ki.se",
		github: "https://github.com/justinseby",
		kiLink: "https://ki.se/en/people/justin-seby",
		linkedIn: "https://www.linkedin.com/in/justinseby/",
		yearStarted: "2024",
		active: 1,
		team: "Applied proteomics",
		bg: "appliedProteomics",
		pictureLink : unknown,
		googleScholar: "https://scholar.google.com/citations?user=mxMVQXgAAAAJ&hl=en&authuser=2",
		orcid:""
	},
	{
		name: "Jenny Forshed",
		role: "staff",
		title: "Principal Researcher",
		email: "jenny.forshed@ki.se",
		github: "",
		kiLink: "https://ki.se/people/jenny-forshed",
		linkedIn: "https://www.linkedin.com/in/jenny-forshed-26911716",
		yearStarted: "2006",
		active: 1,
		team: "Applied proteomics",
		bg: "appliedProteomics",
		pictureLink : unknown,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Akram Embadi",
		role: "postdoc",
		title: "Post-Doctoral Fellow",
		email: "akram.emdadi@ki.se",
		github: "",
		kiLink: "https://ki.se/people/akram-emdadi",
		linkedIn: "https://www.linkedin.com/in/akram-emdadi-0b48762a/",
		yearStarted: "2022",
		active: 1,
		team: "Breast cancer",
		bg: "breastCancer",
		pictureLink : akramEmdadi,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Ali Razzak",
		role: "programmer",
		title: "System Developer",
		email: "alirazzak@ki.se",
		github: "https://github.com/AHTARazzak",
		kiLink: "https://ki.se/people/ali-razzak",
		linkedIn: "https://linkedin.com/in/ali-razzak-datasci",
		yearStarted: "2021",
		active: 1,
		team: "Molecular tumor board portal",
		bg: "mtbp",
		pictureLink :  aliRazzak,
		googleScholar: "",
		orcid:""
	},
	{
		name: "David Tamborero",
		role: "research",
		title: "Senior Research Specialist",
		email: "david.tamborero@ki.se",
		github: "",
		kiLink: "https://medarbetare.ki.se/people/david-tamborero",
		linkedIn: "",
		yearStarted: "2018",
		active: 1,
		team: "Molecular tumor board portal",
		bg: "mtbp",
		pictureLink :  davidTamborero,
		googleScholar: "https://scholar.google.com/citations?user=4jbj37AAAAAJ&hl=en",
		orcid:""
	},
	{
		name: "Eduardo Araújo",
		role: "research",
		title: "Research Enginner",
		email: "eduardo.araujo@ki.se",
		github: "",
		kiLink: "https://medarbetare.ki.se/people/eduardo-araujo",
		linkedIn: "https://www.linkedin.com/in/eduardo-ara%C3%BAjo-87897980/",
		yearStarted: "2019",
		active: 1,
		team: "Core Facility",
		bg: "coreFacility",
		pictureLink :  eduardoAraujo,
		googleScholar: "",
		orcid:"http://orcid.org/0000-0001-6208-0868"
	},
	{
		name: "Georgios Mermelekas",
		role: "staff",
		title: "Senior staff scientist",
		email: "georgios.mermelekas@ki.se",
		github: "",
		kiLink: "https://medarbetare.ki.se/people/georgios-mermelekas",
		linkedIn: "https://www.linkedin.com/in/george-mermelekas-318a0640/",
		yearStarted: "2017",
		active: 1,
		team: "Core Facility",
		bg: "coreFacility",
		pictureLink :  georgiosMermelekas,
		googleScholar: "https://scholar.google.com/citations?user=r8OKg80AAAAJ&hl=en&oi=ao",
		orcid:"https://orcid.org/0009-0002-1736-9114"
	},
	{
		name: "Ghazaleh Assadi",
		role: "staff",
		title: "Research engineer",
		email: "",
		github: "",
		kiLink: "",
		linkedIn: "",
		yearStarted: "",
		active: 1,
		team: "Admin/ClinProt",
		bg: "admin",
		pictureLink :  ghazalehAssadi,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Haris Babacic",
		role: "postdoc",
		title: "Postdoctoral researcher",
		email: "haris.babacic@ki.se",
		github: "",
		kiLink: "https://ki.se/people/haris-babacic",
		linkedIn: "https://www.linkedin.com/in/harisbabacic/",
		yearStarted: "2018",
		active: 1,
		team: "Applied proteomics",
		bg: "appliedProteomics",
		pictureLink :  harisBabacic,
		googleScholar: "https://scholar.google.com/citations?user=1Y0NWRkAAAAJ&hl=en",
		orcid:""
	},
	{
		name: "Helena Bäckvall",
		role: "staff",
		title: "Scientific coordinator",
		email: "Helena.backvall@ki.se",
		github: "",
		kiLink: "https://ki.se/people/helena-backvall",
		linkedIn: "https://www.linkedin.com/in/helena-bäckvall-94743950/",
		yearStarted: "2006",
		active: 1,
		team: "Admin/ClinProt",
		bg: "admin",
		pictureLink :  unknown,
		googleScholar: "",
		orcid:"https://orcid.org/0000-0002-1531-9271"
	},
	{
		name: "Henrik Johansson",
		role: "staff",
		title: "Senior Research Specialist",
		email: "henrik.johansson@ki.se",
		github: "",
		kiLink: "https://medarbetare.ki.se/people/henrik-johansson",
		linkedIn: "https://www.linkedin.com/in/henrik-johansson-4025a38b/",
		yearStarted: "2008",
		active: 1,
		team: "Breast cancer",
		bg: "breastCancer",
		pictureLink :  henrikJohansson,
		googleScholar: "",
		orcid:"https://orcid.org/0000-0003-4729-4205"
	},
	{
		name: "Ioannis Siavelis",
		role: "postdoc",
		title: "Post-Doctoral Fellow",
		email: "ioannis.siavelis@ki.se",
		github: "",
		kiLink: "https://medarbetare.ki.se/people/ioannis-siavelis",
		linkedIn: "",
		yearStarted: "2016",
		active: 1,
		team: "Applied proteomics",
		bg: "appliedProteomics",
		pictureLink :  ioannisSiavelis,
		googleScholar: "",
		orcid:"https://orcid.org/0009-0000-0758-8140"
	},
	{
		name: "Isabelle Leo",
		role: "student",
		title: "PhD Student",
		email: "isabelle.leo@ki.se",
		github: "",
		kiLink: "",
		linkedIn: "",
		yearStarted: "2021",
		active: 1,
		team: "Childhood cancer",
		bg: "childhoodCancer",
		pictureLink :  isabelleLeo,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Janne Lehtiö",
		role: "leader",
		title: "Professor",
		email: "janne.lehtio@ki.se",
		github: "",
		kiLink: "Janne Lehtiö | Staff Portal (ki.se)",
		linkedIn: "https://se.linkedin.com/in/janne-lehtiö-6531712",
		yearStarted: "2003",
		active: 1,
		team: "Applied proteomics",
		bg: "appliedProteomics",
		pictureLink :  janneLehtio,
		googleScholar: "https://scholar.google.com/citations?hl=en&user=NPJWeVIAAAAJ",
		orcid:"https://orcid.org/0000-0002-8100-9562"
	},
	{
		name: "Jorrit Boekel",
		role: "programmer",
		title: "Software developer",
		email: "",
		github: "",
		kiLink: "",
		linkedIn: "",
		yearStarted: "",
		active: 1,
		team: "Proteomics methods",
		bg: "proteomicsMethod",
		pictureLink :  unknown,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Laura Gheorghe",
		role: "programmer",
		title: "Software developer",
		email: "",
		github: "",
		kiLink: "https://medarbetare.ki.se/people/laura-gheorghe",
		linkedIn: "",
		yearStarted: "2023",
		active: 1,
		team: "Molecular tumor board portal",
		bg: "mtbp",
		pictureLink :  lauraGheorghe,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Laura Levi",
		role: "staff",
		title: "Lab manager",
		email: "laura.levi@ki.se",
		github: "",
		kiLink: "https://medarbetare.ki.se/people/laura-levi",
		linkedIn: "",
		yearStarted: "2023",
		active: 1,
		team: "Admin/ClinProt",
		bg: "admin",
		pictureLink :  lauraLevi,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Luay Aswad",
		role: "postdoc",
		title: "Research fellow",
		email: "",
		github: "",
		kiLink: "",
		linkedIn: "",
		yearStarted: "",
		active: 1,
		team: "Childhood cancer",
		bg: "childhoodCancer",
		pictureLink :  unknown,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Luca Gaessler",
		role: "student",
		title: "PhD student",
		email: "luca.gaessler@ki.se",
		github: "",
		kiLink: "https://ki.se/en/people/luca-gaessler",
		linkedIn: "https://www.linkedin.com/in/luca-gaessler",
		yearStarted: "2023",
		active: 1,
		team: "Breast cancer",
		bg: "breastCancer",
		pictureLink :  lucaGaessler,
		googleScholar: "",
		orcid:"https://orcid.org/0009-0008-4748-2605"
	},
	{
		name: "Lukas Orre",
		role: "research",
		title: "Principal Researcher",
		email: "lukas.orre@ki.se",
		github: "",
		kiLink: "https://medarbetare.ki.se/people/lukas-orre",
		linkedIn: "https://www.linkedin.com/in/lukas-orre-70699781/",
		yearStarted: "2003",
		active: 1,
		team: "Lung cancer",
		bg: "lungCancer",
		pictureLink :  lukasOrre,
		googleScholar: "https://scholar.google.com/citations?user=6ojfH4YAAAAJ&hl=en",
		orcid:"https://orcid.org/0000-0002-0384-1003"
	},
	{
		name: "Markus Jonsson",
		role: "programmer",
		title: "Software developer",
		email: "markus.jonsson@scilifelab.se",
		github: "",
		kiLink: "https://medarbetare.ki.se/people/markus-jonsson",
		linkedIn: "",
		yearStarted: "2021",
		active: 1,
		team: "Molecular tumor board portal",
		bg: "mtbp",
		pictureLink :  markusJonsson,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Mahshid Zarrineh",
		role: "staff",
		title: "Research Engineer",
		email: "mahshid.zarrineh@ki.se",
		github: "",
		kiLink: "https://ki.se/people/mahnaz-nikpour",
		linkedIn: "linkedin.com/in/mahnaz-nikpour-b93a9477",
		yearStarted: "2022",
		active: 1,
		team: "Breast cancer",
		bg: "breastCancer",
		pictureLink :  mahshidZarrineh,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Mahnaz Nikpour",
		role: "postdoc",
		title: "Research Engineer",
		email: "mahnaz.nikpour@ki.se",
		github: "",
		kiLink: "https://ki.se/people/mahnaz-nikpour",
		linkedIn: "",
		yearStarted: "2022",
		active: 1,
		team: "Core Facility",
		bg: "coreFacility",
		pictureLink :  mahnazNikpour,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Noora Sissala",
		role: "student",
		title: "PhD Student",
		email: "noora.sissala@ki.se",
		github: "",
		kiLink: "https://ki.se/people/noora-sissala",
		linkedIn: "https://www.linkedin.com/in/noorasissala/",
		yearStarted: "2022",
		active: 1,
		team: "Applied proteomics",	
		bg: "appliedProteomics",
		pictureLink :  nooraSissala,
		googleScholar: "https://scholar.google.com/citations?user=KJLnI6sAAAAJ&hl=en",
		orcid:""
	},
	{
		name: "Olena Berkovska",
		role: "student",
		title: "PhD Student",
		email: "olena.berkovska@ki.se",
		github: "",
		kiLink: "https://ki.se/people/olena-berkovska",
		linkedIn: "www.linkedin.com/in/olena-berkovska",
		yearStarted: "2020",
		active: 1,
		team: "Lung cancer",
		bg: "lungCancer",
		pictureLink :  olenaBerkovska,
		googleScholar: "https://scholar.google.com/citations?user=HWRPAwIAAAAJ&hl",
		orcid:"https://orcid.org/0000-0002-8811-0591"
	},
	{
		name: "Rozbeh Jafari",
		role: "research",
		title: "Principal Researcher",
		email: "rozbeh.jafari@ki.se",
		github: "",
		kiLink: "https://ki.se/people/rozbeh-jafari",
		linkedIn: "https://www.linkedin.com/in/rozbehjafari/",
		yearStarted: "2015",
		active: 1,
		team: "Childhood cancer",
		bg: "childhoodCancer",
		pictureLink :  rozbehJafar,
		googleScholar: "",
		orcid:"https://orcid.org/0000-0002-3396-4709"
	},
	{
		name: "Rui Branca",
		role: "research",
		title: "Senior Researcher",
		email: "rui.mamede-branca@ki.se",
		github: "",
		kiLink: "https://ki.se/people/rui-mamede-branca",
		linkedIn: "",
		yearStarted: "2009",
		active: 1,
		team: "Proteomics methods",
		bg: "proteomicsMethod",
		pictureLink :  ruiBranca,
		googleScholar: "https://scholar.google.com/citations?user=SMSGfEcAAAAJ&hl=en",
		orcid:"https://orcid.org/0000-0003-3890-6476"
	},
	{
		name: "Santeri Kiviluoto",
		role: "staff",
		title: "Affiliated to research",
		email: "santeri.kiviluoto@ki.s",
		github: "",
		kiLink: "",
		linkedIn: "https://www.linkedin.com/in/santerikiviluoto/",
		yearStarted: "2019",
		active: 1,
		team: "Admin/ClinProt",
		bg: "admin",
		pictureLink :  unknown,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Simon Rapple",
		role: "staff",
		title: "Coordinator",
		email: "simon.rapple@ki.se",
		github: "",
		kiLink: "",
		linkedIn: "",
		yearStarted: "2023",
		active: 1,
		team: "Admin/ClinProt",
		bg: "admin",
		pictureLink :  unknown,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Xenia Villalobos",
		role: "research",
		title: "Research Coordinator",
		email: "xenia.villalobos.alberu@ke.se",
		github: "",
		kiLink: "https://ki.se/people/xenia-villalobos-alberu",
		linkedIn: "https://es.linkedin.com/in/xenia-villalobos-alber%C3%BA-71495512",
		yearStarted: "2023",
		active: 1,
		team: "Admin/ClinProt",
		bg: "admin",
		pictureLink :  xeniaVillalobos,
		googleScholar: "",
		orcid:"https://orcid.org/0000-0003-1232-980X"
	},
	{
		name: "Xiaofang Cao",
		role: "research",
		title: "Research Engineer",
		email: "xiaofang.cao@ki.se",
		github: "",
		kiLink: "https://ki.se/people/xiaofang-cao",
		linkedIn: "https://www.linkedin.com/in/xiaofang-cao-0598bb28/",
		yearStarted: "2018",
		active: 1,
		team: "Core Facility",
		bg: "coreFacility",
		pictureLink :  xiaofangCao,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Xue-Kang Qi",
		role: "postdoc",
		title: "Post-Doctoral Fellow",
		email: "xuekang.qi@ki.se",
		github: "",
		kiLink: "https://ki.se/people/xuekang-qi",
		linkedIn: "https://www.linkedin.com/in/xuekang1024/",
		yearStarted: "2022",
		active: 1,
		team: "Childhood cancer",
		bg: "childhoodCancer",
		pictureLink :  xuekangQi,
		googleScholar: "https://scholar.google.com/citations?user=-DqD3dkAAAAJ&hl=zh-CN",
		orcid:""
	},
	{
		name: "Yanbo Pan",
		role: "research",
		title: "Senior research specialist",
		email: "yanbo.pan@ki.se",
		github: "",
		kiLink: "https://ki.se/people/yanbo-pan",
		linkedIn: "",
		yearStarted: "2015",
		active: 1,
		team: "Lung cancer",
		bg: "lungCancer",
		pictureLink :  yanboPan,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Yaroslav Kaminskiy",
		role: "student",
		title: "PhD Student",
		email: "yaroslav.kaminskiy@ki.se",
		github: "",
		kiLink: "https://medarbetare.ki.se/people/yaroslav-kaminskiy",
		linkedIn: "",
		yearStarted: "2022",
		active: 1,
		team: "Proteomics methods",
		bg: "proteomicsMethod",
		pictureLink :  yaroslavKaminskiy,
		googleScholar: "https://scholar.google.com/citations?user=6qRFIvEAAAAJ&hl=ru",
		orcid:""
	},
	{
		name: "Soumitra Marathe",
		role: "postdoc",
		title: "Post-Doctoral Fellow",
		email: "soumitra.marathe@ki.se",
		github: "",
		kiLink: "https://ki.se/people/soumitra-marathe",
		linkedIn: "https://www.linkedin.com/in/soumitra-marathe-immuno/",
		yearStarted: "2023",
		active: 1,
		team: "Lung cancer",
		bg: "lungCancer",
		pictureLink :  soumitraMarathe,
		googleScholar: "https://scholar.google.com/citations?user=4llQS7sAAAAJ&hl=en",
		orcid:"https://orcid.org/0000-0002-7712-6061"
	},
	{
		name: "Irene Villanueva Sanz",
		role: "student",
		title: "PhD Student",
		email: "irene.villanueva.sanz@scilifelab.se",
		github: "",
		kiLink: "https://ki.se/people/irene-villanueva-sanz",
		linkedIn: "https://www.linkedin.com/in/irene-villanueva-sanz-606476161/",
		yearStarted: "2022",
		active: 1,
		team: "Lung cancer",
		bg: "lungCancer",
		pictureLink :  ireneSanz,
		googleScholar: ""
	},
	{
		name: "Amare Wolide",
		role: "postdoc",
		title: "Post-Doctoral Fellow",
		email: "amare.wolide@scilifelab.se",
		github: "",
		kiLink: "https://ki.se/en/onkpat/janne-lehtios-group",
		linkedIn: "https://www.linkedin.com/in/amare-wolide-5319681b4/",
		yearStarted: "2023",
		active: 1,
		team: "Lung cancer",
		bg: "lungCancer",
		pictureLink :  amareWolide,
		googleScholar: ""
	},
	{
		name: "Dmitrii Rudakovskii",
		role: "programmer",
		title: "System Developer",
		email: "dmitrii.rudakovskii@ki.se",
		github: "https://github.com/cryint",
		kiLink: "",
		linkedIn: "https://www.linkedin.com/in/cryint/",
		yearStarted: "2024",
		active: 1,
		team: "Molecular tumor board portal",
		bg: "mtbp",
		pictureLink : dmitriiRudakovskii,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Kovi Govindarajan",
		role: "student",
		title: "PhD Student",
		email: "rishyashrung@gmail.com",
		github: "",
		kiLink: "",
		linkedIn: "",
		yearStarted: "2024",
		active: 1,
		team: "Proteomics methods",
		bg: "proteomicsMethod",
		pictureLink : koviGovindarajan,
		googleScholar: "",
		orcid:"https://orcid.org/0000-0002-0233-2071"
	},
	{
		name: "Rita Hutyra-gram",
		role: "",
		title: "Research Engineer",
		email: "rita.hutyragram@ki.se",
		github: "",
		kiLink: "https://ki.se/personer/rita-hutyragram",
		linkedIn: "https://www.linkedin.com/in/rita-ötvös-hutyra-gram-b7982658/",
		yearStarted: "2024",
		active: 1,
		team: "Core Facility",
		bg: "coreFacility",
		pictureLink : ritaHutyraGram,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Barbara Mahler",
		role: "research",
		title: "Researcher",
		email: "rita.hutyragram@ki.se",
		github: "",
		kiLink: "",
		linkedIn: "",
		yearStarted: "2024",
		active: 1,
		team: "Applied proteomics",
		bg: "appliedProteomics",
		pictureLink : barbaraMahler,
		googleScholar: "",
		orcid:""
	},
	{
		name: "George Field",
		role: "student",
		title: "PhD Student",
		email: "george.field@ki.se",
		github: "",
		kiLink: "",
		linkedIn: "",
		yearStarted: "2024",
		active: 1,
		team: "Lung Cancer",
		bg: "lungCancer",
		pictureLink : georgeField,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Nazli Ezgi Özkan",
		role: "research",
		title: "Research Infrastructure Specialists",
		email: "",
		github: "",
		kiLink: "https://ki.se/en/people/nazli-ezgi-ozkan",
		linkedIn: "",
		yearStarted: "2025",
		active: 1,
		team: "Core Facility",
		bg: "coreFacility",
		pictureLink : nazliOzkan,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Owen Hovey",
		role: "postdoc",
		title: "Post-Doctoral Fellow",
		email: "owen.hovey@ki.se",
		github: "",
		kiLink: "https://ki.se/en/people/owen-hovey",
		linkedIn: "",
		yearStarted: "2025",
		active: 1,
		team: "Breast cancer",
		bg: "breastCancer",
		pictureLink : owenHovey,
		googleScholar: "",
		orcid:""
	},
		{
		name: "Krishnatej Nishtala",
		role: "research",
		title: "Research Infrastructure Specialist",
		email: "krishnatej.nishtala@ki.se",
		github: "",
		kiLink: "https://ki.se/en/people/krishnatej-nishtala",
		linkedIn: "",
		yearStarted: "2025",
		active: 1,
		team: "Core Facility",
		bg: "coreFacility",
		pictureLink : unknown,
		googleScholar: "",
		orcid:""
	},
]
