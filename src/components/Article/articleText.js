import React from "react"
import classes from "./article.module.css"
import { classNames } from "../../util/functions"

const ArticleText = ({ children, smallMargin, bold }) => {
  return (
    <p
      className={
        classNames(
          classes.articleText,
          smallMargin && classes.articleTextSmallMargin,
          bold && classes.articleTextBold
        )
      }
    >
      {children}
    </p>
  )
}

export const ArticleTextSmall = (props) => <ArticleText {...props} smallMargin />

export const ArticleTextBold = (props) => <ArticleText {...props} bold />

export default ArticleText
