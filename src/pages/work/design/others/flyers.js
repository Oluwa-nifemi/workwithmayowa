import React, { useMemo } from "react"
import ArticleLayout from "../../../../components/Article/articleLayout"
import ArticleHeader from "../../../../components/Article/articleHeader"
import { ArticleTextSmall } from "../../../../components/Article/articleText"
import { graphql } from "gatsby"
import Card from "../../../../components/Card"
import classes from "./others.module.css"

const Flyers = ({ data }) => {
  const fluidImages = useMemo(() => {
    const nodes = data.allFile.nodes

    return nodes.reduce((images, image) => {
      return {
        ...images,
        [image.name]: image.childImageSharp.fluid
      }
    }, {})
  }, [data])

  return (
    <ArticleLayout
      pageContext={{
        frontmatter: {
          small: true,
          type: "Design",
          title: 'Digital/Flyers'
        }
      }}
    >
      <ArticleHeader>
        SWAY
      </ArticleHeader>
      <ArticleTextSmall>
        Spoken Word Academy for Youths (SWAY) does workshops to teach young adults spoken word and they needed some
        flyers for publicity. I wrote the copy and did the designs for the flyer.
      </ArticleTextSmall>
      <div className={classes.cards}>
        {
          Array.from({length: 2}).map((_, idx) => (
            <Card
              fluid={fluidImages[`1.${idx + 1}`]}
              heightUnset
              noBorderRadius
            />
          ))
        }
      </div>
      <ArticleHeader>
        Ones&Twos
      </ArticleHeader>
      <ArticleTextSmall>
        Ones&Twos is an entertainment and media company that managed some radio shows. I was in charge of making social media designs to promote new episodes of the different radio shows they handled.
      </ArticleTextSmall>
      <div className={classes.cards}>
        {
          Array.from({length: 6}).map((_, idx) => (
            <Card
              fluid={fluidImages[`2.${idx + 1}`]}
              heightUnset
              noBorderRadius
            />
          ))
        }
      </div>
    </ArticleLayout>
  )
}

export default Flyers

export const query = graphql`
    {
        allFile(filter: {relativeDirectory: {eq: "digital/flyers"}}){
            nodes{
                childImageSharp{
                    fluid(quality: 90, maxWidth: 3000){
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
                name
            }
        }
    }
`
