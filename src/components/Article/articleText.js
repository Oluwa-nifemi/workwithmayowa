import React from "react"
import classes from "./article.module.css"
import { classNames } from "../../util/functions"

const ArticleText = ({children, smallMargin}) => {
  return (
    <p className={classNames(classes.articleText, smallMargin && classes.articleTextSmallMargin)}>
      {children}
    </p>
  )
}

export const ArticleTextSmall = (props) => <ArticleText {...props} smallMargin/>

export default ArticleText
