import { Link } from 'react-router-dom';
import { apiInstance } from '../../api/api'
import { CgChevronRight } from "react-icons/cg";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import React, { useEffect, useState } from 'react'
import Navbar from '../../layout/nav/Navbar'
import "./SinglePage.scss"





// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';








const SinglePage = () => {
    const setId = new URLSearchParams(window.location.search)
    const id = setId.get("id");
    
    const [data, setData] = useState([])





    useEffect(()=>{
        try {
            apiInstance(`/products/${id}`)
            .then(res => {
                setData(res.data);
            })

            } catch (error) {
            console.log(error);
            }
        },[setId])

        
        console.log(data);
  return (
    <>
        <Navbar/>
        <div className="single__product">
            <div className="links-to-back">
                {/*Links*/}
            </div>
            <div className="single__product-information">
                <div className="sell-off">                    
                    <h2><span><RiMoneyDollarBoxFill/></span>EXTRA <span>$10</span> OFF 3+ ITEMS WITH CODE <span>10OFF2023TECH</span></h2>
                    <Link to="/">See all eligible items and terms<CgChevronRight/></Link>
                </div>
                <div className="information">
                    <div className="all-images">
                        {/*images of array*/}
                    </div>
                    <div className="product-single-photo">
                        <Swiper
                            slidesPerView={1}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {data?.images?.map((photo, index)=>
                                <SwiperSlide key={index} className='photos'>
                                    <img src={photo} alt="photograph"/>                                    
                                </SwiperSlide>
                                )}
                        </Swiper>
                    </div>
                    <div className="single-product-full-information">
                        <div className="single-product-full-information-title">
                            <h2>{data.title} - {data.description}</h2>
                        </div>
                        <div className="full-information">
                            <h3>Condition: {data.description}</h3>
                            <p>Product name: {data.title}</p>
                        </div>
                        <div className="product-price">
                            <h3>Price: <strong>US ${data.price}</strong></h3>
                        </div>            
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}

export default SinglePage