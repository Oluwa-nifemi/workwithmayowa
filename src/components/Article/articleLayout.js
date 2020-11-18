import React from "react"
import classes from "./article.module.css"
import { classNames } from "../../util/functions"
import Layout from "../Layout"
import { MDXProvider } from "@mdx-js/react"
import ArticleHeader from "./articleHeader"
import ArticleText, { ArticleTextSmall } from "./articleText"
import Carousel from "../Carousel"
import { ArticleList, ArticleListItem } from "./articleList"
import { ArticleImageFull, ArticleImageNormal } from "./articleImage"

const ArticleLayout = ({ children, pathContext }) => {
  const small = pathContext.frontmatter.small

  return (
    <MDXProvider
      components={{
        h1: ArticleHeader,
        h2: ArticleTextSmall,
        h3: ArticleImageFull,
        h4: ArticleImageNormal,
        p: ArticleText,
        ul: ArticleList,
        li: ArticleListItem
      }}
      shortcodes={{
        Carousel: Carousel
      }}
    >
      <Layout
        mainClassName={
          classNames(
            classes.layout,
            small && classes.layoutSmall
          )
        }
        pageTitle={pathContext.frontmatter.title}
      >
        {children}
      </Layout>
    </MDXProvider>
  )
}

export default ArticleLayout