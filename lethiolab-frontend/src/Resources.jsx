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
      productLoad.push(<Link to={resource.resourceLink} target="_blank" className="resourceCard">
        <div className="resourceDetail">
          <div className="resourceName text-left text-3xl">{resource.resourceName}</div>
          <div className="resourceDescription text-left text-justify text-lg">{resource.resourceDescription}</div>
        </div>
        <div className="softwareImage" style={{backgroundImage: "url("+resource.resourceImage+")"}}></div>
      </Link>)
    } else {
      courseLoad.push(<Link to={resource.resourceLink} target="_blank" className="resourceCard">
      <div className="resourceDetail">
        <div className="resourceName text-left text-3xl">{resource.resourceName}</div>
        <div className="resourceDescription text-left text-justify text-lg">{resource.resourceDescription}</div>
      </div>
      <div className="softwareImage" style={{backgroundImage: "url("+resource.resourceImage+")"}}></div>
    </Link>)

    }
  })

  return (
    <div className="resourceHolder">
      <div className="resourceSoftware">
        <div className="resourceTitle text-left text-5xl">Software</div>
        <div className="resourcGeneral text-left text-justify text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu luctus leo. Nam fermentum augue interdum diam fermentum imperdiet. Pellentesque in sollicitudin enim, lacinia consectetur orci. Proin egestas, sapien sed tempus mollis, lorem ex iaculis augue, at placerat urna justo at metus. Fusce nulla mauris, congue nec dapibus et, malesuada eget ex. Proin elementum placerat ligula, non facilisis justo sagittis ut. Etiam porttitor orci auctor mollis sodales.

        Phasellus vehicula mattis porta. Praesent leo eros, euismod sed gravida sed, pretium in mauris. Pellentesque posuere neque non risus dignissim dapibus. Ut sapien nibh, posuere in est vel, euismod egestas lacus. Sed sed lorem mauris. Mauris ultricies convallis turpis eu facilisis. In sodales, turpis a feugiat maximus, dolor nisl blandit risus, a mollis felis neque non augue. Nullam non purus nec elit pulvinar rutrum. Praesent fringilla faucibus massa, non tempus odio. Suspendisse ut ligula fermentum neque venenatis finibus a ac nisi. Ut eu imperdiet lacus. Vestibulum pharetra, ipsum tristique semper efficitur, dui leo placerat nulla, sed rhoncus dolor augue vitae leo. Cras viverra commodo lectus sed porttitor. Nam laoreet augue ut tortor malesuada, vitae ornare risus euismod. Nunc neque ante, eleifend eget lobortis eu, faucibus interdum nisi.
        </div>
        <div className="resourceItems">
          {productLoad}
        </div>
      </div>
      <div className="resourceSoftware">
        <div className="resourceTitle text-left text-5xl">Courses</div>
        <div className="resourcGeneral text-left text-justify text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu luctus leo. Nam fermentum augue interdum diam fermentum imperdiet. Pellentesque in sollicitudin enim, lacinia consectetur orci. Proin egestas, sapien sed tempus mollis, lorem ex iaculis augue, at placerat urna justo at metus. Fusce nulla mauris, congue nec dapibus et, malesuada eget ex. Proin elementum placerat ligula, non facilisis justo sagittis ut. Etiam porttitor orci auctor mollis sodales.

        Phasellus vehicula mattis porta. Praesent leo eros, euismod sed gravida sed, pretium in mauris. Pellentesque posuere neque non risus dignissim dapibus. Ut sapien nibh, posuere in est vel, euismod egestas lacus. Sed sed lorem mauris. Mauris ultricies convallis turpis eu facilisis. In sodales, turpis a feugiat maximus, dolor nisl blandit risus, a mollis felis neque non augue. Nullam non purus nec elit pulvinar rutrum. Praesent fringilla faucibus massa, non tempus odio. Suspendisse ut ligula fermentum neque venenatis finibus a ac nisi. Ut eu imperdiet lacus. Vestibulum pharetra, ipsum tristique semper efficitur, dui leo placerat nulla, sed rhoncus dolor augue vitae leo. Cras viverra commodo lectus sed porttitor. Nam laoreet augue ut tortor malesuada, vitae ornare risus euismod. Nunc neque ante, eleifend eget lobortis eu, faucibus interdum nisi.
        </div>
        <div className="resourceItems">
          {courseLoad}
        </div>
      </div>
    </div>
  )
}

export default Resources