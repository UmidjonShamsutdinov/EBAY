import React, { useEffect, useReducer } from 'react'
import { apiInstance } from '../../api/api'
import "./Products.scss"
import noImage from "../../assets/noImage.png"




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



// import required modules
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { CgChevronRight } from 'react-icons/cg';



const reducer = (state, action) =>{
    return action
}

const Products = () => {
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
    <div className='products-div'>
        <Swiper
            spaceBetween={30}
            slidesPerView={7}
            autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            }}            
            modules={[Autoplay]}
            className="mySwiper"
        >
            {
                state.map(product=>
                    <SwiperSlide key={product.id} className='swiper__slide'>
                        <Link to={`/single-page?id=${product.id}`}>
                            <img src={product?.image?.[0].includes("placeimg") ? noImage : product.images[0]} alt="" />
                            <div className="product__content">
                                <h3 title={product.title}>{product.title.length > 15 ? product.title.slice(0,15)+"..." : product.title}</h3>
                                <p title={product.description}>{product.description.length > 30 ? product.description.slice(0,30) + "..." : product.description}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    )
            }
        </Swiper>
        <div className="linking">
            <h2>Score these trending kicks</h2>
            <Link to="/2">See all<CgChevronRight/></Link>
        </div>
    </div>
  )
}

export default Products