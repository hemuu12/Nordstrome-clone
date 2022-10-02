import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: 'https://n.nordstrommedia.com/id/72f8e166-8da0-4103-8b13-2629617b5ba9.jpeg?h=700&w=1608',
  
  }, 
  {
    url: 'https://n.nordstrommedia.com/id/d3b10906-7d01-47f3-adc2-2098e4ac6600.jpeg?h=700&w=1608',
   

  },
  {
    url: 'https://n.nordstrommedia.com/id/72f8e166-8da0-4103-8b13-2629617b5ba9.jpeg?h=700&w=1608',
    
},
];

const Slideshow2 = () => {
    return (
      <div className="slide-container" style={{backgroundColor:"lightgrey",marginTop:"60px"}}>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div 
             style={{display:"flex",gap:"none"}} key={index}>
              <div style={{backgroundColor:"lightgrey"}}><img style={{backgroundColor:"lightgrey",width:"100%",height:"500px",marginLeft:"20px"}} src={slideImage.url} alt=""/></div>             
             
           
             
                
             
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow2