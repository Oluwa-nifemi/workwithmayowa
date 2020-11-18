import React from "react"
import classes from "./article.module.css"
import { classNames } from "../../util/functions"

export const ArticleImage = ({ full, children }) => {
  return (
    <div
      className={
        classNames(
          full ? classes.articleImageFullWidth : classes.articleImageNormalWidth
        )
      }
    >
      {children}
    </div>
  )
}

export const ArticleImageFull = (props) => <ArticleImage full {...props}/>

export const ArticleImageNormal = (props) => <ArticleImage full={false} {...props}/>
