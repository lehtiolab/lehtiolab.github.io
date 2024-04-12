import React from 'react'
import "./styles/opportunities.scss"
import { opportunities } from "./assets/data/opportunities";

const Opportunities = () => {
  return (
    <div className="opportunitiesHolder w-8/12 h-fit mt-2 mr-auto ml-auto mb-2 flex pb-20 gap-5 pt-14">
      <div className="flex flex-col gap-3">
        <div className="resourceTitle text-center">Staff</div>
        <div className="resourcGeneral text-left texzt-justify text-black p-4 rounded bg-white pl-10 pr-10">Join our dynamic and passionate oncology research group as we embark on a mission to make a difference. We offer the opportunity to become an integral part of our dedicated team. Whether you're a seasoned researcher, a fresh graduate eager to learn, or a professional seeking a new challenge, we invite you to explore these openings. Your expertise and commitment can contribute significantly to the advancement of cancer research, and we welcome candidates from diverse backgrounds and experiences. Join us in our journey to drive progress in oncology, and let's work together to make a meaningful impact. Check out our available positions and be a part of something truly inspiring.
        </div>
        <div className="flex flex-row gap-5">
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="resourceTitle text-center">Research</div>
        <div className="resourcGeneral text-left text-justify text-black p-4 rounded bg-white pl-10 pr-10">Embrace the world of academia and become an essential part of our oncology research group. Our academic positions offer the chance to be at the forefront of groundbreaking research. Whether you're an accomplished academic looking to further your career or a fresh academic talent, we encourage you to explore these opportunities. Your expertise, innovative thinking, and dedication can play a pivotal role in advancing our understanding of cancer and shaping the future of oncology research. Join us on this exciting academic journey and be a part of a community committed to making significant contributions to the field. Discover our available academic positions and help us create a brighter future in oncology research.
        </div>
        <div className="flex flex-row gap-5">
        </div>
      </div>
    </div>
  )
}

export default Opportunities