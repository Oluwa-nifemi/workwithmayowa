import React from "react"
import { Link } from "gatsby"
import classes from "./backLink.module.css"
import arrow from "../../assets/images/arrow.svg"
import { classNames } from "../../util/functions"

const BackLink = ({ to, children, className }) => {
  return (
    <Link to={to} className={classNames(classes.backLink, className)}>
      <img src={arrow} alt="Arrow" className={classes.backLinkImg}/>
      <span className={classes.backLinkText}>
        {children}
      </span>
    </Link>
  )
}

export default BackLink
