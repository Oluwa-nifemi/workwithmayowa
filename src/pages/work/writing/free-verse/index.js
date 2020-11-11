import React, { useMemo } from "react"
import Layout from "../../../../components/Layout"
import classes from "../gridLayout.module.css"
import Card from "../../../../components/Card"
import BackLink from "../../../../components/BackLink"
import { graphql } from "gatsby"

const items = [
  {
    title: 'Work of Art',
    images: ['work-of-art'],
  },
  {
    title: 'Waiting',
    images: ['waiting'],
  },
  {
    title: 'Love Your Fro',
    images: ['love-your-fro']
  }
]

const FreeVerse = ({ data }) => {
  const fluidImages = useMemo(() => {
    const nodes = data.allFile.nodes

    return nodes.reduce((images, image) => {
      return {
        ...images,
        [image.name]: image.childImageSharp.fluid
      }
    }, {})

  }, [data.allFile.nodes])

  return (
    <Layout
      pageTitle='Free Verse'
      mainClassName={classes.layout}
    >
      <div>
        {
          items.map(({title, images}) => (
            <div className={classes.item}>
              <div className={classes.itemImages}>
                {
                  images.map(imageId => (
                    <Card
                      fluid={fluidImages[imageId]}
                      heightUnset
                      noBorderRadius
                    />
                  ))
                }
              </div>
              <div>
                <h3 className={classes.itemName}>
                  {title}
                </h3>
              </div>
            </div>
          ))
        }
      </div>
      <div className={classes.backLinkWrapper}>
        <BackLink to='/work/writing'>
          Back To Writing
        </BackLink>
      </div>
    </Layout>
  )
}

export default FreeVerse

export const query = graphql`
    {
        allFile(filter: {relativeDirectory: {eq: "writing/free-verse"}}){
            nodes{
                childImageSharp{
                    fluid(quality: 90){
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
                name
            }
        }
    }
`
