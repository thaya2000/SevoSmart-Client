import React from 'react'
import './ConstructionsLearnmore.css'
import Constructionimg01 from '../../images/ConstructionImage01.webp'
import Constructionimg02 from '../../images/ConstructionImage02.jpg'
import Constructionimg03 from '../../images/ConstructionImage03.jpeg'

const ConstructionsLearnmore = () => {
    return (
        <div className='ConstructionLearnmore'>
            <div className="Ccontent01">
                <div className="Construction-title">
                    <span>Construction</span>
                    <button>Book now</button>
                </div>
                <div className="Construction-images">
                    <div className="C01">
                        <img src={Constructionimg02} alt="" /> 
                    </div>
                    <img src={Constructionimg01} alt="" />
                    
                    <img src={Constructionimg03} alt="" />
                </div> 
            </div>
            <div className="Ccontent02" style={{ backgroundImage: `url(${Constructionimg01})` }}>
                <div className="Ccontent02-discription">
                    <span>Havana construction:</span>
                    <span>A leading firm in the 
                        industry, excels in 
                        delivering high-quality 
                        and innovative construction 
                        solutions.
                    </span>
                </div>
                
            </div>
            <div className="Ccontent02" style={{ backgroundImage: `url(${Constructionimg02})` }}>
                
                
                <div className="Ccontent03-discription">
                    <span>Quality of work:</span>
                    <span>A premier construction 
                        company, recognized for 
                        its unwavering commitment 
                        to quality, safety, and 
                        timely project delivery.
                    </span>
                </div>
            </div>
            <div className="Ccontent02" style={{ backgroundImage: `url(${Constructionimg03})` }}>
                <div className="Ccontent02-discription">
                    <span>Client satisfaction:</span>
                    <span>Renowned for innovative design, 
                        skilled craftsmanship, and 
                        client-centric approach, our 
                        company sets industry standards.
                    </span>
                </div>
                
            </div>
        </div>
      )
}

export default ConstructionsLearnmore