import React from 'react'
import landingBanner from './assets/img/landing-banner.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Homepage = () => {

	const images = [
        "https://i.chzbgr.com/full/9742359040/hE97724A6",
        "https://i.chzbgr.com/full/9800564736/hCC8F5078/frog-161-look-aint-he-cute-this-is-true-cuteness-nature",
        "https://i.chzbgr.com/full/9742358528/hDC138262",
        "https://i.chzbgr.com/full/9742360832/h413CC79D",
        "https://i.chzbgr.com/full/9742243584/hC192CA10",
        "https://i.chzbgr.com/full/9742359808/h1CCAD94B",
    ];
    
    const altTexts = ["Pikachu", "Frog", "Feminist", "Isis", "Shut", "Swear"];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };


	
  return (
<div style={{ position: 'relative', paddingBottom: '50%' }}>
    <div className='relative'>
        <h3 className='absolute z-10'>
            "Some cheesy quote goes here"
        </h3>
        <img
			style={{ zIndex: 9 }}
            className='w-4/5 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4'
            src={landingBanner}
            alt="banner"
        />
    </div>

    <div className='bg-[#262545] h-fit absolute top-[40%] w-full'>
		<h3 
			style={{ zIndex: 99 }}
			className='absolute z-99 top-[20%] left-1/2 -translate-x-1/2 -translate-y-[20%] text-5xl'> LehtioLab</h3>

			<Carousel 
				className='mt-80'
				responsive={responsive}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={3000}
				showDots={true}
			>
            {images.map((image, index) => (
                <div key={index} style={{padding: "10px"}}>
                    <img src={image} alt={altTexts[index]} style={{width: "100%"}} />
                </div>
            ))}
        </Carousel>

    </div>

</div>

  )
}

export default Homepage