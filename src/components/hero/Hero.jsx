import React, { useEffect, useReducer, useState } from 'react'
import "./Hero.scss"
import { apiInstance } from '../../api/api'
import { FaArrowRight } from "react-icons/fa";
import { CiPause1, CiPlay1 } from "react-icons/ci"; 
import noImage from "../../assets/noImage.png"                    




/*Swiper*/

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



// import required modules
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';




const reducer = (state, action) =>{
    return action
}

const Hero = () => {
    const [state, dispatch] = useReducer(reducer,[])
    const [playSwiper, setPlaySwiper] = useState(true)
    const [errorPlaceholder, setErrorPlaceholder] = useState(false)


    useEffect(()=>{
        try {
            apiInstance("/categories")
            .then(res => {
                dispatch(res.data);
            })

            } catch (error) {
            console.log(error);
            }
        },[])


    const handleSwiperPlay = () => {
        setPlaySwiper(!playSwiper)
    }

console.log(state);


  return (
    <div className='hero'>
        <div>
            {/*Routes*/}
        </div>
        <div className="hero__wrapper">
            <div className="hero__content">
                <h2>Super savings at the Brand Outlet</h2>
                <p>Up to 60% off the brands you love.</p>
                <Link to="/1">Shop now <span><FaArrowRight/></span></Link>
            </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}                
                modules={[Autoplay]}
                className="mySwiper">
                {
                    state.map(category=>
                        <SwiperSlide key={category.id} className='swiper-card'>
                            <Link to={`/${category.id}`}>
                                <h2>{category.name.toUpperCase()} <span><FaArrowRight/></span></h2>
                                <img src={category.image.includes("placeimg") ? noImage : category.image} alt="" />
                            </Link>
                        </SwiperSlide>                       
                        )
                }
            </Swiper>
            <button className='play-btn' onClick={handleSwiperPlay}>{playSwiper ? <CiPause1/> : <CiPlay1/>}</button>
        </div>
    </div>
  )
}

export default Hero