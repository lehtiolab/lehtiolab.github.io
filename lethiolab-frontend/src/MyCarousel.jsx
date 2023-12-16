import React from 'react';
import './styles/carousel.scss';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from './assets/img/carousel/meeting-room.png';
import img2 from './assets/img/carousel/christmas-pic.png';
import img3 from './assets/img/carousel/team-pic.png';
import img4 from './assets/img/carousel/travel-pic.png';
import img5 from './assets/img/carousel/photo5.png';



function MyCarousel() {
    const images = [
        img1, img2, img3, img4, img5
    ];
    
    const altTexts = ["Meeting Room", "Christmas Potluck", "Team Selfie", "Travel excursion", "pic5"];

  return (

    <Carousel 
    showThumbs={true} 
    className="my-carousel"
    autoPlay={true}
    interval={5000}
    infiniteLoop={true}
>
            {images.map((img, index) => (
                <div key={index} className="carousel-list">
                     <img src={img} className="carousel-image" />
                </div>
            ))}
        </Carousel>
  )
}

export default MyCarousel