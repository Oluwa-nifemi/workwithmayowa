import React, { useMemo } from "react"
import Layout from "../../../components/Layout"
import { graphql } from "gatsby"
import classes from "./design.module.css"
import Card from "../../../components/Card"

const sections = [
  {
    title: "Logos",
    items: [
      {
        imageId: "melange",
        title: "Melange",
        to: "/logos/melange"
      },
      {
        imageId: "tinkerman",
        title: "Tinkerman",
        to: "/logos/tinkerman"
      },
      {
        imageId: "chuko",
        title: "Chuko’s Food & Spices",
        to: "/logos/chuko"
      },
    ]
  },
  {
    title: "Others",
    items: [
      {
        imageId: "flyers",
        title: "Digital Flyers",
        to: "/others/flyers"
      },
      {
        imageId: "print",
        title: "Print",
        to: "/others/print"
      },
      {
        imageId: "daily-ui",
        title: "Daily UI Challenge",
        to: "/others/daily-ui"
      }
    ]
  }
]

const Writing = ({ data }) => {
  const images = useMemo(() => {
    const nodes = data.allFile.nodes

    return nodes.reduce((images, image) => {
      return {
        ...images,
        [image.name]: image.childImageSharp.fluid
      }
    }, {})

  }, [data.allFile.nodes])

  return (
    <Layout pageTitle='Writing'>
      {
        sections.map(({ title, items }) => (
          <div className={classes.section}>
            <h3 className={classes.sectionTitle}>
              {title}
            </h3>
            <div className={classes.sectionCards}>
              {
                items.map(({ imageId, title, to }) => (
                  <Card
                    fluid={images[imageId]}
                    title={title}
                    to={to}
                  />
                ))
              }
            </div>
          </div>
        ))
      }
    </Layout>
  )
}

export default Writing

export const query = graphql`
    {
        allFile(filter: {relativeDirectory: {eq: "digital"}}){
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
