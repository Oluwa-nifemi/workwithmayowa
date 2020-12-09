import React from "react"
import Flickity from "react-flickity-component"
import "./flickity.min.css"
import classes from "./mobileCarousel.module.css"

const MobileCarousel = ({children}) => {
  const childrenArray = [].concat(children)

  return (
    <Flickity
      options={{
        cellAlign: "left",
        prevNextButtons: false,
        resize: true
      }}
      reloadOnUpdate
    >
      {
        childrenArray.map(child => (
          <div className={classes.carouselItem}>
            {child}
          </div>
        ))
      }
    </Flickity>
  )
}

export default MobileCarousel
