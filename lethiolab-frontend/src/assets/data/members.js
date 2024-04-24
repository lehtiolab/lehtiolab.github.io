import unknown from './../img/team/unknown.png'
import mariaPernemalm from './../img/team/mariaPernemalm.png';
import aliRazzak from './../img/team/aliRazzak.png';
import eduardoAraujo from './../img/team/eduardoAraujo.png';
import santeriKiviluot from './../img/team/santeriKiviluot.png';
import olenaBerkovska from './../img/team/olenaBerkovska.png';
import rozbehJafar from './../img/team/rozbehJafar.png';
import isabelleLeo from './../img/team/isabelleLeo.png';
import davidTamborero from './../img/team/davidTamborero.png';
import nooraSissala from './../img/team/nooraSissala.png';
import xiaofangCao from './../img/team/xiaofangCao.png';
import ruiBranca from './../img/team/ruiBranca.png';
import lukasOrre from './../img/team/lukasOrre.png';
import nidhiSharma from './../img/team/nidhiSharma.png';
import akramEmdadi from './../img/team/akramEmdadi.png';
import ioannisSiavelis from './../img/team/ioannisSiavelis.png';
import ireneSanz from './../img/team/ireneSanz.png';
import xuekangQi from './../img/team/xuekangQi.png';
import henrikJohansson from './../img/team/henrikJohansson.png';
import mahshidZarrineh from './../img/team/mahshidZarrineh.png';
import yanboPan from './../img/team/yanboPan.png';
import markusJonsson from './../img/team/markusJonsson.png';
import janneLehtio from './../img/team/janneLehtio.png';
import harisBabacic from './../img/team/harisBabacic.png';
import konstantinBarylyuk from './../img/team/konstantinBarylyuk.png';
import soumitraMarathe from './../img/team/soumitraMarathe.png';
import lauraGheorghe from './../img/team/lauraGheorghe.png';
import xeniaVillalobos from './../img/team/xeniaVillalobos.png'
import yaroslavKaminskiy from './../img/team/yaroslavKaminskiy.png';
import georgiosMermelekas from './../img/team/georgiosMermelekas.png';
import mahnazNikpour from './../img/team/mahnazNikpour.png';
import lauraLevi from './../img/team/lauraLevi.png';
import ghazalehAssadi from './../img/team/ghazalehAssadi.png'
import dmitriiRudakovskii from './../img/team/dmitriiRudakovskii.png'
import amareWolide from './../img/team/amareWolide.png'

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

export const members = [
	{
		name: "Akram Embadi",
		role: "postdoc",
		title: "Post-Doctoral Fellow",
		email: "akram.emdadi@ki.se",
		github: "",
		kiLink: "https://staff.ki.se/people/akram-emdadi",
		linkedIn: "https://www.linkedin.com/in/akram-emdadi-0b48762a/",
		yearStarted: "2022",
		active: 1,
		country: "IRAN",
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
		kiLink: "https://staff.ki.se/people/ali-razzak",
		linkedIn: "https://linkedin.com/in/ali-razzak-datasci",
		yearStarted: "2021",
		active: 1,
		country: "NEWZEALAND",
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
		country: "CATALONIA",
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
		country: "PORTUGAL",
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
		country: "GREECE",
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
		country: "IRAN",
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
		kiLink: "https://staff.ki.se/people/haris-babacic",
		linkedIn: "https://www.linkedin.com/in/harisbabacic/",
		yearStarted: "2018",
		active: 1,
		country: "MACEDONIA",
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
		kiLink: "https://staff.ki.se/people/helena-backvall",
		linkedIn: "https://www.linkedin.com/in/helena-bäckvall-94743950/",
		yearStarted: "2006",
		active: 1,
		country: "SWEDEN",
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
		country: "SWEDEN",
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
		country: "GREECE",
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
		country: "UNITEDSTATES",
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
		country: "FINLAND",
		pictureLink :  janneLehtio,
		googleScholar: "https://scholar.google.com/citations?hl=en&user=NPJWeVIAAAAJ",
		orcid:"https://orcid.org/0000-0002-8100-9562"
	},
	{
		name: "Jenny Forshed",
		role: "staff",
		title: "Associate professor",
		email: "",
		github: "",
		kiLink: "",
		linkedIn: "",
		yearStarted: "",
		active: 1,
		country: "SWEDEN",
		pictureLink :  unknown,
		googleScholar: "",
		orcid:""
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
		country: "NETHERLANDS",
		pictureLink :  unknown,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Konstantin Barylyuk",
		role: "research",
		title: "Research specialist",
		email: "konstantin.barylyuk@ki.se",
		github: "",
		kiLink: "https://medarbetare.ki.se/people/konstantin-barylyuk",
		linkedIn: "https://www.linkedin.com/in/kbarylyuk",
		yearStarted: "2022",
		active: 1,
		country: "UNKNOWN",
		pictureLink :  konstantinBarylyuk,
		googleScholar: "https://scholar.google.com/citations?user=iV2j9ZkAAAAJ",
		orcid:"https://orcid.org/0000-0002-3580-0345"
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
		country: "ROMANIA",
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
		country: "ITALY",
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
		country: "UNKNOWN",
		pictureLink :  unknown,
		googleScholar: "",
		orcid:""
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
		country: "SWEDEN",
		pictureLink :  lukasOrre,
		googleScholar: "https://scholar.google.com/citations?user=6ojfH4YAAAAJ&hl=en",
		orcid:"https://orcid.org/0000-0002-0384-1003"
	},
	{
		name: "Maria Pernemalm",
		role: "research",
		title: "Principal researcher",
		email: "maria.pernemalm@ki.se",
		github: "",
		kiLink: "https://staff.ki.se/people/maria-pernemalm",
		linkedIn: "https://www.linkedin.com/in/maria-pernemalm-09a02810/",
		yearStarted: "2005",
		active: 1,
		country: "SWEDEN",
		pictureLink :  mariaPernemalm,
		googleScholar: "https://orcid.org/0000-0003-4624-031X",
		orcid:""
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
		country: "SWEDEN",
		pictureLink :  markusJonsson,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Mahshid Zarrineh",
		role: "postdoc",
		title: "Research Engineer",
		email: "mahshid.zarrineh@ki.se",
		github: "",
		kiLink: "https://staff.ki.se/people/mahnaz-nikpour",
		linkedIn: "linkedin.com/in/mahnaz-nikpour-b93a9477",
		yearStarted: "2022",
		active: 1,
		country: "IRAN",
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
		kiLink: "https://staff.ki.se/people/mahnaz-nikpour",
		linkedIn: "",
		yearStarted: "2022",
		active: 1,
		country: "IRAN",
		pictureLink :  mahnazNikpour,
		googleScholar: "",
		orcid:""
	},
	{
		name: "Nidhi Sharma",
		role: "postdoc",
		title: "Postdoctoral Fellow",
		email: "nidhi.sharma@ki.se",
		github: "",
		kiLink: "https://staff.ki.se/people/nidhi-sharma",
		linkedIn: "https://www.linkedin.com/in/neuro-nsharma/",
		yearStarted: "2019",
		active: 1,
		country: "INDIA",
		pictureLink :  nidhiSharma,
		googleScholar: "https://scholar.google.com/citations?user=2v7QCVgAAAAJ",
		orcid:"https://orcid.org/0000-0002-2475-9340"
	},
	{
		name: "Noora Sissala",
		role: "student",
		title: "PhD Student",
		email: "noora.sissala@ki.se",
		github: "",
		kiLink: "https://staff.ki.se/people/noora-sissala",
		linkedIn: "https://www.linkedin.com/in/noorasissala/",
		yearStarted: "2022",
		active: 1,
		country: "FINLAND",
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
		kiLink: "https://staff.ki.se/people/olena-berkovska",
		linkedIn: "www.linkedin.com/in/olena-berkovska",
		yearStarted: "2020",
		active: 1,
		country: "UKRAINE",
		pictureLink :  olenaBerkovska,
		googleScholar: "https://scholar.google.com/citations?user=HWRPAwIAAAAJ&hl",
		orcid:"https://orcid.org/0000-0002-8811-0591"
	},
	{
		name: "Rozbeh Jafari",
		role: "research",
		title: "Senior Research Specialist",
		email: "rozbeh.jafari@ki.se",
		github: "",
		kiLink: "https://staff.ki.se/people/rozbeh-jafari",
		linkedIn: "https://www.linkedin.com/in/rozbehjafari/",
		yearStarted: "2015",
		active: 1,
		country: "IRAN",
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
		kiLink: "https://staff.ki.se/people/rui-mamede-branca",
		linkedIn: "",
		yearStarted: "2009",
		active: 1,
		country: "PORTUGAL",
		pictureLink :  ruiBranca,
		googleScholar: "https://scholar.google.com/citations?user=SMSGfEcAAAAJ&hl=en",
		orcid:"https://orcid.org/0000-0003-3890-6476"
	},
	{
		name: "Santeri Kiviluoto",
		role: "staff",
		title: "Hospital Chemist",
		email: "santeri.kiviluoto@ki.s",
		github: "",
		kiLink: "",
		linkedIn: "https://www.linkedin.com/in/santerikiviluoto/",
		yearStarted: "2019",
		active: 1,
		country: "FINLAND",
		pictureLink :  santeriKiviluot,
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
		country: "IRELAND",
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
		kiLink: "https://staff.ki.se/people/xenia-villalobos-alberu",
		linkedIn: "https://es.linkedin.com/in/xenia-villalobos-alber%C3%BA-71495512",
		yearStarted: "2023",
		active: 1,
		country: "MEXICO",
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
		kiLink: "https://staff.ki.se/people/xiaofang-cao",
		linkedIn: "https://www.linkedin.com/in/xiaofang-cao-0598bb28/",
		yearStarted: "2018",
		active: 1,
		country: "CHINA",
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
		kiLink: "https://staff.ki.se/people/xuekang-qi",
		linkedIn: "https://www.linkedin.com/in/xuekang1024/",
		yearStarted: "2022",
		active: 1,
		country: "CHINA",
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
		kiLink: "https://staff.ki.se/people/yanbo-pan",
		linkedIn: "",
		yearStarted: "2015",
		active: 1,
		country: "CHINA",
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
		country: "RUSSIA",
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
		kiLink: "https://staff.ki.se/people/soumitra-marathe",
		linkedIn: "https://www.linkedin.com/in/soumitra-marathe-immuno/",
		yearStarted: "2023",
		active: 1,
		country: "INDIA",
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
		kiLink: "https://staff.ki.se/people/irene-villanueva-sanz",
		linkedIn: "https://www.linkedin.com/in/irene-villanueva-sanz-606476161/",
		yearStarted: "2022",
		active: 1,
		country: "SPAIN",
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
		country: "ETHIOPIA",
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
		country: "RUSSIA",
		pictureLink : dmitriiRudakovskii,
		googleScholar: "",
		orcid:""
	},
]
