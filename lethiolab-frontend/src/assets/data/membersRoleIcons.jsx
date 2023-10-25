import React from 'react';
import SWEDEN from './../img/flags/sweden.png'
import IRAN from './../img/flags/iran.png'
import CHINA from './../img/flags/china.png'
import GREECE from './../img/flags/greece.png'
import INDIA from './../img/flags/india.png'
import NEWZEALAND from './../img/flags/newzealand.png'
import ETHIOPIA from './../img/flags/ethiopia.png'
import UKRAINE from './../img/flags/ukraine.png'
import RUSSIA from './../img/flags/russia.png'
import PORTUGAL from './../img/flags/portugal.png'
import SPAIN from './../img/flags/spain.png'
import MACEDONIA from './../img/flags/macedonia.png'
import ROMANIA from './../img/flags/romania.png'
import NETHERLANDS from './../img/flags/netherlands.png'
import FINLAND from './../img/flags/finland.png'
import ITALY from './../img/flags/italy.png'
import MEXICO from './../img/flags/mexico.png'
import IRELAND from './../img/flags/ireland.png'

export const roleIconAssign = (role) => {
    switch (role) {
        case 'leader':
          return (
				<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 448 512" style={{ display: 'block', margin: '0 auto' }}>
					<defs>
						<linearGradient id="gold-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
							<stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: '1' }} />
							<stop offset="37%" style={{ stopColor: '#FFCC00', stopOpacity: '1' }} />
							<stop offset="80%" style={{ stopColor: '#FFA500', stopOpacity: '1' }} />
							<stop offset="100%" style={{ stopColor: '#FFD700', stopOpacity: '1' }} />
						</linearGradient>
					</defs>
					<path d="M224 0c17.7 0 32 14.3 32 32V48h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H256v48H408c22.1 0 40 17.9 40 40c0 5.3-1 10.5-3.1 15.4L368 400H80L3.1 215.4C1 210.5 0 205.3 0 200c0-22.1 17.9-40 40-40H192V112H176c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V32c0-17.7 14.3-32 32-32zM38.6 473.4L80 432H368l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H54.6C42.1 512 32 501.9 32 489.4c0-6 2.4-11.8 6.6-16z" fill="url(#gold-gradient)" />
				</svg>
			);
        case 'postdoc':
          return (
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 640 512">
                <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 
                    28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 
                    7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 
                    49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 
                    23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 
                    408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/>
            </svg>
        );
        case 'programmer':
          return (
			<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 640 512">
				<path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 
					32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3
					0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 
					256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
    		</svg>
		  );
        case 'bioinfo':
          return (
			<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 576 512">
				<path d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 
					15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 
					55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"/>
    		</svg>
		  );
        case 'professor':
          return (
			<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 448 512">
				<path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 
					24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 
					1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z"/>
				</svg>
		  );
        default:
          break;
      }
}

export const flags = {
	SWEDEN,
	CHINA,
	IRAN,
	GREECE,
	INDIA,
	NEWZEALAND,
	UKRAINE,
	ETHIOPIA,
	RUSSIA,
	PORTUGAL,
	SPAIN,
	MACEDONIA,
	ROMANIA,
	FINLAND,
	NETHERLANDS,
	ITALY,
	MEXICO,
	IRELAND
  };

