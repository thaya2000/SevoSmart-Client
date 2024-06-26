import React from 'react';
import ImageSlider from './ImageSlider';
import './learnmore.css';
import Image8 from '../../../Images/Image8.jpg';
import Image9 from '../../../Images/Image9.png';
import Image10 from '../../../Images/Image10.png';
import Image11 from '../../../Images/Image11.jpg';
import SwiperSlides from './swiperSlide';



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
                />
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
    <div className='headof-benifits'>
      <span>Let's uncover the brilliance of solar energy and explore its boundless benefits</span>
     </div>
    <div className='bottom-container'>
         <div className='cost-container'>
         <img
                src={Image9}
                alt="cost"
                className="learnmore-solar1"
               
                style={{ borderRadius: '20px' }}
               />
               <div className='eco-friently'> Eco Friendly </div>
               <div className='eco-friently-parah'>Solar panels are a highly eco-friendly energy solution. By harnessing sunlight to generate electricity, they produce zero emissions, helping combat climate change </div>
         </div>
         <div className='efficient-container'>
         <img
                src={Image11}
                alt="cost"
                className="learnmore-solar2"
                
                style={{ borderRadius: '20px' }}
             
               />
               <div className='eco-friently'>Renewable Energy Source</div>
               <div className='eco-friently-parah'>Solar panels harness energy from the sun,  providing sustainable power generation while reducing dependence on fossil fuels and mitigating climate change.</div>
         </div>
         
         <div className='longlife-container'>
        
         <img
                src={Image10}
                alt="cost"
                className="learnmore-solar4"
               
                style={{ borderRadius: '10px' }}
               />
               <div className='eco-friently'> Energy Cost Savings </div>
               <div className='eco-friently-parah'>One of the most significant financial advantages of solar panels is the potential for substantial energy cost savings. By generating your own electricity </div>
         
         </div>

    </div>

    <div className='past-project-container'>
      <div className='past-project-headA'>
        <span >
          Some of our past project
        </span>
      </div>

      <SwiperSlides/>
    </div>

     
    

    </div>
  
  )
}

export default learnmore;