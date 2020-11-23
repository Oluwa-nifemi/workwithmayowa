import React from "react"
import classes from "./article.module.css"
import { classNames } from "../../util/functions"

export const ArticleList = ({children}) => {
  return (
    <ul className={classes.articleList}>
      {children}
    </ul>
  )
}

export const ArticleListItem = ({children}) => (
  <li className={classNames(classes.articleListItem, classes.articleText)}>
    {children}
  </li>
)
