import React from "react"
import classes from './card.module.css'
import Img from "gatsby-image"
import { classNames } from "../../util/functions"
import { Link } from "gatsby"

const Card = ({fluid, title, alt, heightUnset = false, to}) => {
  return (
    <Link
      className={classes.card}
      to={to}
    >
      <Img
        fluid={fluid}
        alt={alt || title}
        className={
          classNames(
            classes.cardImage,
            heightUnset && classes.cardImageHeightUnset
          )
        }
      />
      {
        title && (
          <p className={classes.cardTitle}>
            {title}
          </p>
        )
      }
    </Link>
  )
}

export default Card
