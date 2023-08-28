import React from 'react'
import { Link } from 'react-router-dom';
import { publications } from "./assets/data/publications";
import { research } from "./assets/data/research";
import "./styles/research.scss"


const Research = () => {

  var researchLoad = []
  research.forEach((researchTopic) => {
    var theResearch = []
    researchTopic.researchLinks.forEach((publicationLink) => {
      publications.forEach((publication) => {
        if (publication.publicationLink === publicationLink) {
          theResearch.push(<Link to={publication.publicationLink} target="_blank">{publication.publicationTitle}</Link>)
        }
      })
    })
    researchLoad.push(<div className="researchCard">
        <div className="researchTitle text-5xl text-left">{researchTopic.researchTitle}</div>
        <div className="researchLead text-3xl text-left">{researchTopic.researchLead}</div>
        <div className="researchDescription text-justify text-lg" dangerouslySetInnerHTML={{__html: researchTopic.researchDescription}}></div>
        <div className="resarchRelevant text-3xl text-left">Relevant publications</div>
        <div className="researchLinks text-left text-lg">{theResearch}</div>
    </div>)
  })

  return (
    <div className="researchHolder">
      {researchLoad}
    </div>
  )
}

export default Research