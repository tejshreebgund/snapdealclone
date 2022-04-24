import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import '../Style/slide.css'

  const fadeImages = [
	
  ];
  const properties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <div style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
    nextArrow: <div style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
  };

const Slideshow = () => {
    return (
		<div>
		
		<div className="slide-container">
		  <Fade {...properties}>
			<div className="each-fade">
			  <div>
				<img src={fadeImages[0]} />
			  </div>
		
			</div>
			<div className="each-fade">
		
			  <div>
				<img src={fadeImages[1]} />
			  </div>
			</div>
			<div className="each-fade">
			  <div>
				<img src={fadeImages[2]} />
			  </div>
			
			</div>
		  </Fade>
		</div>
	  </div>
    )
}

export default Slideshow