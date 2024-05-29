import React from 'react'
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import './App.css'
import Navbar from './Navbar'
import Homepage from './Homepage';
import Publications from './Publications';
import Team from './Team';
import Research from './Research';
import Resources from './Resources'
import Contact from './Contact';
import Opportunities from './Opportunities'
import ReactGA from 'react-ga4';

ReactGA.initialize('G-SQHQTBJNLB');

function App() {
	React.useEffect(() => {
	  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
	}, [window.location.pathname]);
	return (
    <HashRouter>
			<Navbar />
			<div className="app-page">
				<Routes>
					<Route exact path="/" element={<Homepage />} />
					<Route path="/publications" element={<Publications />} />
					<Route path="/research" element={<Research />} />
					<Route path="/resources" element={<Resources />} />
					<Route path="/team" element={<Team />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/opportunities" element={<Opportunities />} />
				</Routes>
			</div>
  	</HashRouter>
  )
}

export default App
