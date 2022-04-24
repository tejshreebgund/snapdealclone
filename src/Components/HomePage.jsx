import React from 'react'
import '../Style/home.css'

  import ImageList from '@mui/material/ImageList';
  import ImageListItem from '@mui/material/ImageListItem';
  import Slideshow from './Slideshow';
  import itemData from '../Style/img'
  function srcset(image, size, rows = 1, cols = 1) {
	return {
	  src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
	  srcSet: `${image}?w=${size * cols}&h=${
		size * rows
	  }&fit=crop&auto=format&dpr=2 2x`,
	};
  }
  
  export  function HomePage() {
	return (

		<>
		<div style={{marginLeft:'0px',display:'flex'}}>
		
	
		
		<div className="w-4/5 ml-28">
			<img src="https://n3.sdlcdn.com/imgs/j/t/w/large/Aks-Couture-Rayon-Grey-Fit-SDL379776764-1-381a0.webp
" alt="" />
		</div>
		<div className="w-4/5 ml-28">
			<img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTPhRiF6qOuO0xytTi9XTeEjAAmzBheDnDfkoN9lAyfQeCjAjPrHy3aYGeVX1rrEuUcjeW4RWZmCQ&usqp=CAc
" alt="" />
		</div>
		<div className="w-4/5 ml-28">
			<img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQLOJJIiaMkulKdghQrTvL0W5g2HmIVsCO6dM09c0e4QOsj4Szh-DppPXK4U6AaPfvVANL8JwRaDtI1&usqp=CAc

" alt="" />
		</div>
		</div>
		
	  </>
	);
  }

  
 
  