import React from 'react'
import "./Utils.scss"

const Utils = () => {
  return (
    <div>Utils</div>
  )
}

const Container = ({children}) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}


const SingleCategoryContainer = ({children}) => {
    return (
        <div className="single__category-container">
            {children}
        </div>
    )
}


export {Container, Utils, SingleCategoryContainer}