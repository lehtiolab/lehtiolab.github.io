import React from 'react'
import Carousel from './Carousel'

const Homepage = () => {


  return (
    <div style={{paddingBottom: '50%', paddingTop: '55px' }}>
        <div class="flex h-screen">
  
            <div class="flex flex-col w-2/5 flex-1">
                <div class="bg-blue-500 h-1/2">Div 1</div>
                <div class="bg-red-500 h-1/2">Div 2</div>
            </div>

  			<div className="flex flex-1 flex-col w-3/5 bg-green-500">
				<Carousel />
			</div>
		</div>
    

    </div>

  )
}

export default Homepage