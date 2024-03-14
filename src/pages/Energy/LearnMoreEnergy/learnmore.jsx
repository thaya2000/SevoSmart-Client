import React from 'react';
import ImageSlider from './ImageSlider';
import './learnmore.css';
import Image8 from '../../../Images/Image8.jpg';





function learnmore() {


    
  return (


    
    <div>
        <ImageSlider/>
     
     
     <div className="middle-container">
      <div className="ImageA-conainer">
      <img
                src={Image8}
                alt="3 Kw Solar System Off Grid"
                className="learnmore-solar"
                style={{ width: '400px', height: '350px' }}/>
      </div>
      <div className="textA-container">
        <div>
      <span className='experienceA'>Experience top-quality solar solutions tailored<br/> to your needs with us</span>
     </div>
     <div >
      <span className='experienceB'>Your trusted partner in solar energy solutions. We specialize in residential and commercial solar installations, providing seamless integration and cost-effective solutions tailored to your needs. Our services include expert installation, maintenance, and energy management, ensuring optimal performance and sustainability. Experience the power of the sun and embrace a brighter, greener future today.</span>
     </div>
     </div>
    </div>

    <div className='bottom-container'>
         <div className='cost-container'>
        
         </div>
         <div className='efficient-container'>
         
         </div>
         
         <div className='longlife-container'>
        
        
         </div>

    </div>

     
    

    </div>
  
  )
}

export default learnmore;