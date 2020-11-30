import React from "react"
import classes from "./article.module.css"
import Img from "gatsby-image"

const ArticleCarouselItem = ({ fluid, name, maxWidth = "100%" }) => {
  return (
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
  )
}

export default ArticleCarouselItem
