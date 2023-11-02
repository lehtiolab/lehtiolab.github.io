import React from 'react';
import MyCarousel from './MyCarousel';
import News from './News';
import './styles/homepage.scss';
import Sponsors from './Sponsors';

const Homepage = () => {

  return (
    <div>
        <div className="flex welcome-page">
			<div className="w-1/2 welcome-page-left">
                <div className="welcome-page-first">
					<h1> 
						Welcome to the Lehtiolab website!
					</h1>
					<br/>
					<p>
						Esse nostrud sit ut et ipsum qui incididunt. Laborum reprehenderit culpa deserunt est et voluptate irure pariatur irure 
						commodo aliqua ut voluptate. Officia mollit qui sit culpa sunt amet ea. Duis duis commodo incididunt exercitation quis qui 
						consectetur consequat dolor pariatur. 
						<br/><br/>
						Lorem magna cupidatat ullamco Lorem irure do 
						sunt minim consectetur qui cillum consequat reprehenderit. Ad consequat exercitation elit pariatur id amet nulla laborum Lorem
						 est occaecat dolor. </p>
                </div>
                <div className="p-6 text-left welcome-page-second">
					<h1> 
							News
					</h1>
					<br/>
					<News />
				</div>
				<div className="p-6 text-left welcome-page-third">
					<Sponsors />
					<News />
				</div>
            </div>

			<div className="w-1/2 carousel-div">
				<MyCarousel />
			</div>
		</div>

    </div>

  )
}

export default Homepage