import React, { useState } from 'react';
import './styles/carousel.scss';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from './assets/img/carousel/meeting-room.webp';
import img2 from './assets/img/carousel/christmas-pic.webp';
import img3 from './assets/img/carousel/team-pic.webp';
import img4 from './assets/img/carousel/travel-pic.webp';
import img5 from './assets/img/carousel/lab-pic-1.webp';
import img6 from './assets/img/carousel/lab-pic-2.webp';
import img7 from './assets/img/carousel/lab-pic-3.webp';
import Loader from './Loader';

function MyCarousel() {
    const images = [img2, img6, img3, img1, img4];
    const [loadingCount, setLoadingCount] = useState(images.length); 

    const handleImageLoad = () => {
        setLoadingCount(prevCount => prevCount - 1); 
    };

    return (
        <div>
            {loadingCount > 0 && <Loader />}
            <Carousel 
                showThumbs={true} 
                className="my-carousel"
                autoPlay={true}
                interval={3000}
                infiniteLoop={true}
            >
                {images.map((img, index) => (
                    <div key={index} className="carousel-list">
                        <img 
                            src={img} 
                            className="carousel-image" 
                            onLoad={handleImageLoad}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default MyCarousel;
