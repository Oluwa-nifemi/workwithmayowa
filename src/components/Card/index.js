import React from "react"
import classes from './card.module.css'
import Img from "gatsby-image"
import { classNames } from "../../util/functions"
import { Link } from "gatsby"
import ReactPlayer from "react-player"

const Card = (
  {
    fluid,
    title,
    alt,
    heightUnset = false,
    to,
    noBorderRadius = false,
    videoUrl
  }
) => {
  const content = (
    <>
      {
        fluid ? (
          <Img
            fluid={fluid}
            alt={alt || title}
            className={
              classNames(
                classes.cardImage,
                heightUnset && classes.cardImageHeightUnset,
                noBorderRadius && classes.cardImageNoRadius
              )
            }
          />
        ) : (
          <ReactPlayer
            url={videoUrl}
            light
            width='unset'
          />
        )
      }

      {
        title && (
          <p className={classes.cardTitle}>
            {title}
          </p>
        )
      }
    </>
  )

  if(!to){
    return (
      <div className={classes.card}>
        {content}
      </div>
    )
  }

  return (
    <Link
      className={classes.card}
      to={to}
    >
      {content}
    </Link>
  )
}

export default Card
