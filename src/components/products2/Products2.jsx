import React, { useEffect, useReducer } from 'react'
import "./Products2.scss"
import { Link } from 'react-router-dom'
import { CgChevronRight } from 'react-icons/cg'




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



// import required modules
import { Autoplay } from 'swiper/modules';
import { apiInstance } from '../../api/api';



const reducer = (state, action) =>{
    return action
}


const Products2 = () => {
    const [state, dispatch] = useReducer(reducer,[])


    useEffect(()=>{
        try {
            apiInstance("/products")
            .then(res => {
                dispatch(res.data);
            })

            } catch (error) {
            console.log(error);
            }
        },[])
        // console.log(state);
  return (
    <div className='products2'>
        <div className="linking2">
            <h2>Today's Deals – All With Free Shipping</h2>
            <Link to="/1">See all<CgChevronRight/></Link>
        </div>
        <div className="products2-swiper">
            <Swiper
                spaceBetween={21}
                slidesPerView={6}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper swiperrr"
            >
                {
                    state.map(product=>
                            <SwiperSlide className='swiper_slide2' key={product.id}>
                                <Link to={`/single-page?id=${product.id}`}>
                                    <div>
                                        <img src={product.images[0]} alt=""/>
                                        <div className="product__content2">
                                            <h3>${product.price}</h3>
                                            <p>${product.price + product.price} <span>-50% OFF</span></p>
                                        </div>
                                    </div>
                                </Link>                        
                            </SwiperSlide>                        
                        )
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Products2