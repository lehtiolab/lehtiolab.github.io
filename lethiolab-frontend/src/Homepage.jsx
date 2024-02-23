import React from 'react';
import MyCarousel from './MyCarousel';
import News from './News';
import './styles/homepage.scss';
import Sponsors from './Sponsors';

const Homepage = () => {

  return (
    <div>
        <div className="flex welcome-page">
			<div className="welcome-page-left">
                <div className="welcome-page-first">
					<h1> 
						Welcome to the Lehtiolab website!
					</h1>
					<br/>
					<p className="text-xl">
					We are Lehtiö lab. We engage in developing mass spectrometry based methods to improve the depth of proteome analysis. Additionally, we apply multilayer bioinformatic analyses to examine the proteome in the context of the genome and transcriptome. Interpreting multilevel “omics” data provides an understanding of how genome aberrations impact the proteome. We apply this understanding to identify biomarkers which aid in selecting the most effective therapies for cancer patients. </p>
                </div>
                <div className="text-left welcome-page-second">
					<h1> 
							News
					</h1>
					<br/>
					<News />
				</div>
				<div className="text-left welcome-page-third">
					<Sponsors />
				</div>
            </div>

			<div className="carousel-div">
				<MyCarousel />
			</div>
		</div>

    </div>

  )
}

export default Homepage