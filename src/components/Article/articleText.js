import React from "react"
import classes from "./article.module.css"

const ArticleText = ({children}) => {
  return (
    <p className={classes.articleText}>
      {children}
    </p>
  )
}

export default ArticleText
