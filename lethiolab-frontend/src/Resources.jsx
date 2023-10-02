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
      productLoad.push(<Link to={resource.resourceLink} target="_blank" className="resourceCard gap-2 flex flex-row rounded w-1/3 p-2 bg-white">
        <div className="resourceDetail w-1/2">
          <div className="resourceName text-left text-3xl">{resource.resourceName}</div>
          <div className="resourceDescription text-left text-justify text-lg">{resource.resourceDescription}</div>
        </div>
        <div className="softwareImage w-1/2" style={{backgroundImage: "url("+resource.resourceImage+")"}}></div>
      </Link>)
    } else {
      courseLoad.push(<Link to={resource.resourceLink} target="_blank" className="resourceCard gap-2 flex flex-row rounded w-1/3 p-2 bg-white">
      <div className="resourceDetail w-1/2">
        <div className="resourceName text-left text-3xl">{resource.resourceName}</div>
        <div className="resourceDescription text-left text-justify text-lg">{resource.resourceDescription}</div>
      </div>
      <div className="softwareImage w-1/2" style={{backgroundImage: "url("+resource.resourceImage+")"}}></div>
    </Link>)

    }
  })

  return (
    <div className="resourceHolder w-11/12 h-fit mt-2 mr-auto ml-auto mb-2 flex flex-col pb-20 gap-5">
      <div className="flex flex-col gap-3">
        <div className="resourceTitle text-left text-5xl">Software</div>
        <div className="resourcGeneral text-left text-justify text-lg text-black p-2 rounded bg-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu luctus leo. Nam fermentum augue interdum diam fermentum imperdiet. Pellentesque in sollicitudin enim, lacinia consectetur orci. Proin egestas, sapien sed tempus mollis, lorem ex iaculis augue, at placerat urna justo at metus. Fusce nulla mauris, congue nec dapibus et, malesuada eget ex. Proin elementum placerat ligula, non facilisis justo sagittis ut. Etiam porttitor orci auctor mollis sodales.

        Phasellus vehicula mattis porta. Praesent leo eros, euismod sed gravida sed, pretium in mauris. Pellentesque posuere neque non risus dignissim dapibus. Ut sapien nibh, posuere in est vel, euismod egestas lacus. Sed sed lorem mauris. Mauris ultricies convallis turpis eu facilisis. In sodales, turpis a feugiat maximus, dolor nisl blandit risus, a mollis felis neque non augue. Nullam non purus nec elit pulvinar rutrum. Praesent fringilla faucibus massa, non tempus odio. Suspendisse ut ligula fermentum neque venenatis finibus a ac nisi. Ut eu imperdiet lacus. Vestibulum pharetra, ipsum tristique semper efficitur, dui leo placerat nulla, sed rhoncus dolor augue vitae leo. Cras viverra commodo lectus sed porttitor. Nam laoreet augue ut tortor malesuada, vitae ornare risus euismod. Nunc neque ante, eleifend eget lobortis eu, faucibus interdum nisi.
        </div>
        <div className="flex flex-row gap-5">
          {productLoad}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="resourceTitle text-left text-5xl">Courses</div>
        <div className="resourcGeneral text-left text-justify text-lg text-black p-2 rounded bg-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu luctus leo. Nam fermentum augue interdum diam fermentum imperdiet. Pellentesque in sollicitudin enim, lacinia consectetur orci. Proin egestas, sapien sed tempus mollis, lorem ex iaculis augue, at placerat urna justo at metus. Fusce nulla mauris, congue nec dapibus et, malesuada eget ex. Proin elementum placerat ligula, non facilisis justo sagittis ut. Etiam porttitor orci auctor mollis sodales.

        Phasellus vehicula mattis porta. Praesent leo eros, euismod sed gravida sed, pretium in mauris. Pellentesque posuere neque non risus dignissim dapibus. Ut sapien nibh, posuere in est vel, euismod egestas lacus. Sed sed lorem mauris. Mauris ultricies convallis turpis eu facilisis. In sodales, turpis a feugiat maximus, dolor nisl blandit risus, a mollis felis neque non augue. Nullam non purus nec elit pulvinar rutrum. Praesent fringilla faucibus massa, non tempus odio. Suspendisse ut ligula fermentum neque venenatis finibus a ac nisi. Ut eu imperdiet lacus. Vestibulum pharetra, ipsum tristique semper efficitur, dui leo placerat nulla, sed rhoncus dolor augue vitae leo. Cras viverra commodo lectus sed porttitor. Nam laoreet augue ut tortor malesuada, vitae ornare risus euismod. Nunc neque ante, eleifend eget lobortis eu, faucibus interdum nisi.
        </div>
        <div className="flex flex-row gap-5">
          {courseLoad}
        </div>
      </div>
    </div>
  )
}

export default Resources