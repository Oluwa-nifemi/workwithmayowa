import React from "react"
import classes from "./article.module.css"
import Img from "gatsby-image"
import TapToZoom from "../TapToZoom"

const ArticleCarouselItem = ({ fluid, name, maxWidth = "100%" }) => {
  return (
    <TapToZoom
      modalContent={(
        <Img
          fluid={fluid}
          alt={name}
        />
      )}
    >
      <div
        className={classes.articleCarouselItem}
        style={{
          maxWidth: maxWidth
        }}
      >
        <Img
          fluid={fluid}
          alt={name}
        />
        {
          name && (
            <p className={classes.articleCarouselItemText}>
              {name}
            </p>
          )
        }
      </div>
    </TapToZoom>
  )
}

export default ArticleCarouselItem
