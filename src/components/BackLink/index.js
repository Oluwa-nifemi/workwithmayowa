import React from "react"
import { Link } from "gatsby"
import classes from "./backLink.module.css"
import arrow from "../../assets/images/arrow.svg"

const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className={classes.backLink}>
      <img src={arrow} alt="Arrow" />
      <span className={classes.backLinkText}>
        {children}
      </span>
    </Link>
  )
}

export default BackLink
