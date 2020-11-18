import React from "react"
import classes from "./article.module.css"
import { classNames } from "../../util/functions"
import Layout from "../Layout"
import { MDXProvider } from "@mdx-js/react"
import ArticleHeader from "./articleHeader"
import ArticleText from "./articleText"
import Carousel from "../Carousel"

const ArticleLayout = ({ children, pathContext }) => {
  const small = pathContext.frontmatter.small

  console.log(pathContext)

  return (
    <MDXProvider
      components={{
        h1: ArticleHeader,
        p: ArticleText
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
