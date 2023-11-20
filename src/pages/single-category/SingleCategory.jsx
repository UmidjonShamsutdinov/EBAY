import React, { useEffect, useState } from 'react'
import "./SingleCategory.scss"
import Navbar from '../../layout/nav/Navbar'
import { apiInstance } from '../../api/api'
import { SingleCategoryContainer } from '../../utils/Utils'
import { Link } from 'react-router-dom'




const SingleCategory = () => {
    const [id, setId] = useState(window.location.pathname)
    const [hero, setHero] = useState([])
    const [data, setData] = useState([])
    

    useEffect(()=>{
        try {
            apiInstance(`/categories${id}`)
            .then(res => {
                setHero(res.data);
            })

            } catch (error) {
            console.log(error);
            }
        },[])
        console.log(hero);

    useEffect(()=>{
        try {
            apiInstance(`/categories${id}/products`)
            .then(res => {
                setData(res.data);
            })

            } catch (error) {
            console.log(error);
            }
        },[])
        console.log(data);


    
  return (
    <div>
        <Navbar/>
        <SingleCategoryContainer>
            <div className="single__category">
                <div className="single__category-wrapper">
                    <h2>{hero.name}</h2>
                    <div className="single__category-content">
                        <img src={hero.image} alt="" />
                        <h3>Up to 60% off {hero.name}</h3>
                        <p>Save on AirPods, iPhones, and more.</p>
                    </div>
                    <div className="single__category-cards">
                        {
                            data.map(product=>
                                <div className="single__category-card" key={product.id}>
                                    <Link to={`/single-page?id=${product.id}`}>
                                        <img src={product.images[0]} alt="" />
                                        <div>
                                            <h3 title={product.description}>{product.title}{` "`}{product.description.length > 30 ? product.description.slice(0, 30) + "..." : product.description}{`"`}</h3>
                                            <strong>${product.price}</strong>
                                            <p>SPONSORED</p>
                                        </div>
                                    </Link>
                                </div>                                
                                )
                        }
                    </div>
                </div>
            </div>     
        </SingleCategoryContainer>     
    </div>
  )
}

export default SingleCategory