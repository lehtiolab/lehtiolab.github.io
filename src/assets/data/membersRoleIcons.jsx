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
import CATALONIA from './../img/flags/catalonia.png'
import MACEDONIA from './../img/flags/macedonia.png'
import ROMANIA from './../img/flags/romania.png'
import NETHERLANDS from './../img/flags/netherlands.png'
import FINLAND from './../img/flags/finland.png'
import ITALY from './../img/flags/italy.png'
import MEXICO from './../img/flags/mexico.png'
import IRELAND from './../img/flags/ireland.png'
import UNITEDSTATES from './../img/flags/unitedstates.png'

import breastCancer from './../img/team-themes/breast-cancer.png'
import lungCancer from './../img/team-themes/lung-cancer.png'
import childhoodCancer from './../img/team-themes/childhood-cancer.png'
import appliedProteomics from './../img/team-themes/plasma-proteomics.png'
import mtbp from './../img/team-themes/mtbp.png'
import admin from './../img/team-themes/admin.png'
import proteomicsPlatform from './../img/team-themes/proteomics-platform.png'
import proteomicsMethod from './../img/team-themes/proteomics-method.png'
import coreFacility from './../img/team-themes/coreFacility.png'

export const roleIconAssign = (role) => {
    switch (role) {
        case 'leader':
          return (
			<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 543.15 431.61">
			  <path strokeWidth="0px" d="m33.84,275.48c-5.05-5.95-9.43-10.83-13.51-15.95C7.27,243.09,1.47,223.93.34,203.32c-.61-11.14-.23-22.34-.08-33.51.2-15.14,7.22-21.78,22.62-21.73,3.85.01,7.69,0,12.67,0-1.04-4.94-1.92-9.22-2.85-13.49-4.78-21.84-1.43-42.65,8.65-62.33,5.63-10.99,11.95-21.65,18.28-32.27,7.85-13.17,18.88-15.96,31.13-6.82,10.05,7.5,18.98,16.5,28.73,25.13.67-1.22,1.88-2.89,2.55-4.75C133.2,22.24,155.14,4.75,188.38,1.94,199.79.97,211.24.24,222.68,0c10.9-.22,19.58,5.69,19.28,16.17-.71,25.09,1.25,51.05-13.47,73.65-13.51,20.75-33.12,31.69-57.53,32.37-15.32.43-25.46,5.03-32.26,19.87-24.72,53.96-24.98,106.71,8.57,156.59,30.05,44.68,73.72,67.02,127.58,66.64,42.02-.3,81.27,8.73,118.32,28.18,9.83,5.16,13.88,11.9,12.62,20.76-2.21,15.46-15.02,21.25-30.73,14.77-16.93-6.99-33.71-15.63-51.44-19.15-50.98-10.13-101.38-8.56-149.12,15.55-4.53,2.29-9.29,4.52-14.2,5.59-10.1,2.2-18.67-2.57-22.05-11.39-3.81-9.96-.55-19.41,9.06-24.7,9.11-5.02,18.49-9.56,28.26-14.58-6.87-7.24-12.43-9.81-21.39-5.12-43.76,22.93-96.14,8.19-122.62-33.96-5.93-9.44-11.46-19.15-16.98-28.85-8.57-15.07-5.62-24.24,10.06-32.13,2.67-1.34,5.29-2.77,9.17-4.8Zm46.26-21.77c6.99-23.79-17.02-58.35-38.99-61.05-7.23,24.77,11.98,55.22,38.99,61.05Zm-19.41,56.91c6.8,25.11,41.97,43.02,64.29,33.28-4.09-21.45-41.76-41.21-64.29-33.28Zm26.37-157.73c17.3-19.78,12.91-59.92-3.68-72.11-18.62,18.02-16.62,57.23,3.68,72.11Zm78.75-69.61c20.93-.43,35.04-14.91,35.59-35.03.17-6.18-2.11-7.62-7.9-7.34-20.6,1-31.78,11.35-35.22,32.64-1.17,7.22-.09,11.41,7.53,9.73Z"/>
			  <path strokeWidth="0px" d="m423.97,58.55c8.2-7.77,15.6-15.78,24-22.54,16.06-12.92,27.33-10.44,37.26,7.44,6.58,11.86,13.57,23.54,19.27,35.82,9.4,20.26,9.79,41.42,3.86,62.8-.47,1.68-.78,3.4-1.37,6.05,6.22,0,11.8-.22,17.37.05,9.17.44,16.35,5.81,17.1,14.44,2.18,25.02,4.02,50.5-6.24,74.09-6,13.79-15.86,25.91-24.45,39.5,2.72,1.43,6.96,3.44,11.01,5.8,9.94,5.79,14.14,14.82,9.19,24.39-10.79,20.84-21.14,42.18-39.65,57.81-16.8,14.18-36.23,21.29-58.16,21.43-2.49.02-5.92-.52-7.33-2.15-15.54-18.11-37.93-23.8-58.56-32.61-5.75-2.45-11.91-3.92-17.83-5.82,9.75-8.41,19.81-16.09,28.7-24.94,49.28-49.02,57.67-129.12,20.65-187.84-5.89-9.34-14.16-9.24-22.65-9.46-17.82-.47-33.9-5.44-47.64-16.93-15.35-12.84-23.7-29.44-25.27-49.36-.99-12.63-2.08-25.27-2.36-37.93-.23-10.27,6.42-19,15.96-18.47,20.04,1.12,40.57,1.91,59.8,7.01,21.88,5.8,35.56,22.91,43.42,44.16.73,1.97,1.42,3.96,2.25,5.89.2.47.88.74,1.69,1.39Zm31.82,94.59c21.19-17.94,22.97-54.21,4.04-72.85-18.35,15.41-20.58,51.79-4.04,72.85Zm45.97,39.31c-23.69,4.55-46.79,41.33-38.56,60.67,24.34-3.31,42.98-32.24,38.56-60.67Zm-19.88,117.77c-29.53-6.11-61.01,15.82-63.92,33.96,24.5,8.78,59.09-9.27,63.92-33.96ZM342.28,41.99c-.86,29.25,16.13,45.46,41.5,40.16,2.91-26.93-15.06-44.61-41.5-40.16Z"/>
			</svg>
			);
        case 'student':
          return (
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 448 512">
				<path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
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
        case 'staff':
          return (
			<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 384 512">
				<path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM128 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM80 432c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16z"/>
			</svg>
		  );
        case 'research':
          return (
			<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 512 512">
				<path d="M160 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM32 448H320c70.7 0 128-57.3 128-128s-57.3-128-128-128V128c106 0 192 86 192 192c0 49.2-18.5 94-48.9 128H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm80-64H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
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
	CATALONIA,
	MACEDONIA,
	ROMANIA,
	FINLAND,
	NETHERLANDS,
	ITALY,
	MEXICO,
	IRELAND,
	UNITEDSTATES
};

export const sections = {
	breastCancer,
	lungCancer,
	childhoodCancer,
	appliedProteomics,
	proteomicsMethod,
	proteomicsPlatform,
	mtbp,
	admin,
	coreFacility
}

