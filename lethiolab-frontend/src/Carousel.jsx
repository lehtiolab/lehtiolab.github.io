import React, {useState, useEffect} from 'react';
import './styles/carousel.scss';
import { Transition } from 'react-transition-group';


function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleThumbnailClick = (index) => {
        setActiveIndex(index);
    };

    const images = [
        "https://i.chzbgr.com/full/9742359040/hE97724A6",
        "https://i.chzbgr.com/full/9800564736/hCC8F5078/frog-161-look-aint-he-cute-this-is-true-cuteness-nature",
        "https://i.chzbgr.com/full/9742358528/hDC138262",
        "https://i.chzbgr.com/full/9742243584/hC192CA10",
        "https://i.chzbgr.com/full/9742359808/h1CCAD94B",
    ];
    
    const altTexts = ["Pikachu", "Frog", "Feminist", "Shut", "Swear"];

	const moveLeft = () => {
		if (activeIndex === 0) {
		  setActiveIndex(images.length - 1);
		} else {
		  setActiveIndex(activeIndex - 1);
		}
	  };
	  
	  const moveRight = () => {
		setActiveIndex((activeIndex + 1) % images.length);
	  };

	  const getThumbnails = () => {
		let thumbnails = [];
		
		if (activeIndex === 0) {
			thumbnails = [images[images.length - 1], images[0], images[1], images[2]];
		} 
		else if (activeIndex === 1) {
			thumbnails = [images[images.length - 1], images[0], images[1], images[2]];
		} 
		else if (activeIndex === images.length - 1) {
			thumbnails = [images[images.length - 3], images[images.length - 2], images[images.length - 1], images[0]];
		} 
		else if (activeIndex === images.length - 2) {
			thumbnails = [images[images.length - 2], images[images.length - 1], images[0], images[1]];
		} 
		else {
			thumbnails = [images[activeIndex - 2], images[activeIndex - 1], images[activeIndex], images[activeIndex + 1]];
		}
		
		return thumbnails;
	};

	useEffect(() => {
		const interval = setInterval(moveRight, 5000); // advance every 5 seconds
	
		// Cleanup interval on component unmount
		return () => clearInterval(interval);
	}, [activeIndex]);
	

  return (
    <div>
		   <div className="carousel-container">
			<button onClick={moveLeft} className="arrow left-arrow">←</button>
			<Transition in={true} timeout={500} key={images[activeIndex]}>
				{state => (
					<div className={`main-image-container ${state}`}>
						<img src={images[activeIndex]} alt="Main" className="main-image"/>
					</div>
				)}
			</Transition>

			<button onClick={moveRight} className="arrow right-arrow">→</button>

			<div className="thumbnail-container">
				{getThumbnails().map((img, index) => {
				const imgIndex = images.indexOf(img);
				return (
					<img
					key={img}
					src={img}
					alt="Thumbnail"
					onClick={() => handleThumbnailClick(imgIndex)}
					className="thumbnail-image"
					/>
				);
				})}
        <ul className="bullet-points">
          {images.map((_, index) => (
            <li key={index} className={activeIndex === index ? 'active' : ''}></li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Carousel