import React, {useState, useEffect} from 'react';
import './styles/carousel.scss';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function MyCarousel() {
    const images = [
        "https://i.chzbgr.com/full/9742359040/hE97724A6",
        "https://i.chzbgr.com/full/9800564736/hCC8F5078/frog-161-look-aint-he-cute-this-is-true-cuteness-nature",
        "https://i.chzbgr.com/full/9742358528/hDC138262",
        "https://i.chzbgr.com/full/9742243584/hC192CA10",
        "https://i.chzbgr.com/full/9742359808/h1CCAD94B",
    ];
    
    const altTexts = ["Pikachu", "Frog", "Feminist", "Shut", "Swear"];


  return (

		<Carousel showThumbs={true} className="my-carousel">
            {images.map((img, index) => (
                <div key={index}>
                     <img src={img} className="carousel-image" />
                </div>
            ))}
        </Carousel>
  )
}

export default MyCarousel