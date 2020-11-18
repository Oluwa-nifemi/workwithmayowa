import React from "react"
import classes from "./article.module.css"

const ArticleHeader = ({children, ...props}) => {
  return (
    <h1 className={classes.articleHeader} {...props}>
      {children}
    </h1>
  )
}

export default ArticleHeader
