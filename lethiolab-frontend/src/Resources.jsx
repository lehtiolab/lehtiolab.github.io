import React from 'react'
import { Link } from 'react-router-dom';
import { resources } from "./assets/data/resources";
import "./styles/resource.scss"


const Resources = () => {

  var productLoad = []
  var courseLoad = []
  resources.forEach((resource) => {
    console.log(resource)
    if (resource.resourceType === "product") {
      productLoad.push(<Link to={resource.resourceLink} target="_blank" className="resourceCard gap-2 flex flex-row rounded w-1/3 p-2 bg-white pl-6 pr-6">
        <div className="resourceDetail w-1/2">
          <div className="resourceName text-left text-3xl">{resource.resourceName}</div>
          <div className="resourceDescription text-left text-left text-lg">{resource.resourceDescription}</div>
        </div>
        <div className="softwareImage w-1/2" style={{backgroundImage: "url("+resource.resourceImage+")"}}></div>
      </Link>)
    } else {
      courseLoad.push(<Link to={resource.resourceLink} target="_blank" className="resourceCard gap-2 flex flex-row rounded w-full p-2 bg-white pl-6 pr-6">
      <div className="resourceDetail w-1/2">
        <div className="resourceName text-left text-3xl">{resource.resourceName}</div>
        <div className="resourceDescription text-left text-left text-lg">{resource.resourceDescription}</div>
      </div>
      <div className="softwareImage w-1/2 h-auto text-center"><img src={resource.resourceImage} style={{height:"250px",width:"auto", marginLeft:"auto", marginRight:"auto"}}></img></div>
    </Link>)

    }
  })

  return (
    <div className="resourceHolder w-8/12 h-fit mt-2 mr-auto ml-auto mb-2 flex flex-col pb-20 gap-5 pt-14">
      <div className="flex flex-col gap-3">
        <div className="resourceTitle text-left text-5xl">Software</div>
        <div className="resourcGeneral text-left text-justify text-lg text-black p-4 rounded bg-white pl-10 pr-10">A collection of software dedicated to supporting oncology decision-making and research built here at the Lehtio Lab. Our user-friendly software offers valuable tools to assist healthcare professionals in their critical work against cancer. With a focus on simplifying access to the latest research and medical insights, we aim to empower oncologists, researchers, and healthcare teams. We're here to provide the resources you need to make informed decisions and enhance patient care. Join us as we work together to make a difference in the fight against cancer.
        </div>
        <div className="flex flex-row gap-5">
          {productLoad}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="resourceTitle text-left text-5xl">Courses</div>
        <div className="resourcGeneral text-left text-justify text-lg text-black p-4 rounded bg-white pl-10 pr-10">Our team is also responsble for overseeing a selection of courses at Karolinska Instituet. They are designed to explore the profound significance of proteins, the fundamental elements of life. With a focus on understanding the essential role of proteins in health and disease, as well as demystifying proteomic techniques, our offerings aim to inspire a deep appreciation for this vital field of study. Whether you're a budding scientist, a healthcare professional, or simply someone with a curious spirit, our courses provide an unassuming platform for learning and personal growth. We invite you to explore our humble catalog and embark on a journey of discovery in the captivating realm of proteomics.
        </div>
        <div className="flex flex-col gap-5">
          {courseLoad}
        </div>
      </div>
    </div>
  )
}

export default Resources