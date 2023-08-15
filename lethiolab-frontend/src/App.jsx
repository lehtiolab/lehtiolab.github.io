import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Navbar'
import Homepage from './Homepage';
import Publications from './Publications';
import Team from './Team';
import Research from './Research';
import Contact from './Contact';
import Opportunities from './Opportunities'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="mt-20">
	  <Routes>
	  	<Route exact path="/" element={<Homepage />} />
		<Route path="/publications" element={<Publications />} />
		<Route path="/research" element={<Research />} />
		<Route path="/team" element={<Team />} />
		<Route path="/contact" element={<Contact />} />
		<Route path="/opportunities" element={<Opportunities />} />
	</Routes>
      </div>
    </div>
  </Router>
  )
}

export default App
