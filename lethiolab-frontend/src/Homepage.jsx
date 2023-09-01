import React from 'react';
import Carousel from './Carousel';
import News from './News';
import './styles/homepage.scss';
import Sponsors from './Sponsors';

const Homepage = () => {

  return (
    <div>
        <div className="flex custom-height">
            <div className="flex flex-col">
                <div className="bg-blue-500 h-2/5 p-6">
					<h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl pb-8"> 
						Welcome to the Lehtiolab website!
					</h1>
					<p className="text-xxxs sm:text-xxs md:text-xs lg:text-ms xl:text-base 2xl:text-md">
						Esse nostrud sit ut et ipsum qui incididunt. Laborum reprehenderit culpa deserunt est et voluptate irure pariatur irure 
						commodo aliqua ut voluptate. Officia mollit qui sit culpa sunt amet ea. Duis duis commodo incididunt exercitation quis qui 
						consectetur consequat dolor pariatur. 
						<br/><br/>
						Lorem magna cupidatat ullamco Lorem irure do 
						sunt minim consectetur qui cillum consequat reprehenderit. Ad consequat exercitation elit pariatur id amet nulla laborum Lorem
						 est occaecat dolor. </p>
                </div>
                <div className="bg-red-500 h-2/5 p-6 text-left">
					<h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl pb-8"> 
							News
					</h1>
					<News />
				</div>
				<div className="bg-purple-500 h-1/5 p-6">
					<Sponsors />
				</div>
            </div>

  			<div className="flex flex-1 flex-col bg-green-500">
				<Carousel />
			</div>
		</div>
    

    </div>

  )
}

export default Homepage