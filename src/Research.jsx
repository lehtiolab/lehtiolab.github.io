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
    researchLoad.push(<div className="researchCard bg-white rounded p-2 pr-10 pl-10 pb-5 pt-5">
        <div className="researchTitle text-left">{researchTopic.researchTitle}</div>
        <div className="researchLead text-black text-left">{researchTopic.researchLead}</div>
        <div className="researchDescImg flex gap-5 items-center">
          <div className="researchDescription text-black text-justify" dangerouslySetInnerHTML={{__html: researchTopic.researchDescription}}></div>
          <div className="researchImageHolder"><img src={researchTopic.researchImage}/></div>
        </div>
        <div className="resarchRelevant text-black text-left">Relevant publications</div>
        <div className="researchLinks flex flex-col text-left">{theResearch}</div>
    </div>)
  })

  return (
    <div className="researchHolder w-8/12 h-fit mt-12 ml-auto mr-auto mb-20 flex flex-col gap-5 pt-14">
      {researchLoad}
    </div>
  )
}

export default Research