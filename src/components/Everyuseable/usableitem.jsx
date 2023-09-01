import React from 'react'
import lady_img from "../../assets/images/mutipleimgs.webp"
import wave from "../../assets/images/waves.webp"
import "../Everyuseable/useableitem.css";
import kite from "../../assets/images/kite.webp"

const usableitem = (props) => {
    const {title,para,listvalue =[] } =props
  return (
    <>         
      <div className="row row1 useable-container col-md-12 m-0">
                <div className="col-md-5  firstCol useable-first mt-5 ">
                    <h1 className="aboutHeading mut-heading m-0">{title}</h1>
                    <div className="button1 mx-0 my-3">
                        <a href="">Home<i class="fa-solid fa-angle-right"></i><span>{title}</span></a>
                    </div>
                    <p className='para-para'>{para}</p>
                    <ul className='list-useable'>
                        {listvalue.map((item, index) => (
                            <li key={index}>{item.points}</li>
                        ))}
                    </ul>
                </div>
                
                <div className="col-md-6 secondCol">
        
        <img className="image img-fluid" src={lady_img} alt="oneklick-contact-img"  title='oneklick-contact-img'/>
                </div>
                <img src={kite}  alt="kite-icon" title='kite-icon' className='kite img-fluid' />
           

            </div>
          
           
    </>
  )
}

export default usableitem
