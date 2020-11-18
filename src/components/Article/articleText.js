import React from "react"
import classes from "./article.module.css"
import { classNames } from "../../util/functions"

const ArticleText = ({ children, smallMargin, underlined }) => {
  return (
    <p
      className={
        classNames(
          classes.articleText,
          smallMargin && classes.articleTextSmallMargin,
          underlined && classes.articleTextUnderlined
        )
      }
    >
      {children}
    </p>
  )
}

export const ArticleTextSmall = (props) => <ArticleText {...props} smallMargin />

export const ArticleTextUnderlined = (props) => <ArticleText {...props} underlined />

export default ArticleText
