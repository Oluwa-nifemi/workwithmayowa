import React from "react"
import classes from "./article.module.css"
import { classNames } from "../../util/functions"
import TapToZoom from "../TapToZoom"

export const ArticleImage = ({ full, children }) => {
  return (
    <TapToZoom modalContent={children}>
      <div
        className={
          classNames(
            classes.articleImage,
            full ? classes.articleImageFullWidth : classes.articleImageNormalWidth
          )
        }
      >
        {children}
      </div>
    </TapToZoom>
  )
}

export const ArticleImageFull = (props) => <ArticleImage full {...props}/>

export const ArticleImageNormal = (props) => <ArticleImage full={false} {...props}/>
