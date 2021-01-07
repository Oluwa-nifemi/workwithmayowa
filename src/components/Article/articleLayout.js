import React from "react"
import classes from "./article.module.css"
import Layout from "../Layout"
import { MDXProvider } from "@mdx-js/react"
import ArticleHeader from "./articleHeader"
import ArticleText, { ArticleTextBold, ArticleTextSmall } from "./articleText"
import Carousel from "../Carousel"
import { ArticleList, ArticleListItem } from "./articleList"
import { ArticleImageFull, ArticleImageNormal } from "./articleImage"
import BackLink from "../BackLink"

const ArticleLayout = ({ children, pageContext }) => {
  const marginTop = pageContext.frontmatter.marginTop
  const type = pageContext.frontmatter.type

  const { title, header, description } = pageContext.frontmatter

  return (
    <MDXProvider
      components={{
        h1: ArticleHeader,
        h2: ArticleTextSmall,
        h3: ArticleImageFull,
        h4: ArticleImageNormal,
        h5: ArticleTextBold,
        p: ArticleText,
        ul: ArticleList,
        li: ArticleListItem
      }}
      shortcodes={{
        Carousel: Carousel
      }}
    >
      <Layout
        mainClassName={classes.layout}
        pageTitle={title}
        pageHeader={header}
        description={description}
      >
        {children}
        <BackLink
          to={`/work/${type.toLowerCase()}`}
          className={classes.articleBackLink}
          style={{
            marginTop: `${marginTop}px`
          }}
        >
          Back to {type}
        </BackLink>
      </Layout>
    </MDXProvider>
  )
}

export default ArticleLayout
