import React, { useMemo } from "react"
import Layout from "../../../components/Layout"
import { graphql } from "gatsby"
import classes from "./writing.module.css"
import Card from "../../../components/Card"

const sections = [
  {
    title: "Copywriting",
    items: [
      {
        imageId: "digital",
        title: "Digital/Print",
        to: "/work/writing/digital"
      },
      {
        imageId: "radio",
        title: "Radio/Audio",
        to: "/work/writing/radio"
      },
      {
        imageId: "digital",
        title: "Video",
        to: "/work/writing/video"
      }
    ]
  },
  {
    title: "UX Writing",
    items: [
      {
        imageId: "handshake",
        title: "Case Study: Handshake App",
        to: "/work/writing/ux/handshake"
      },
      {
        imageId: "daily",
        title: "Daily UX Writing Challenge",
        to: "/work/writing/ux/daily"
      },
      {
        imageId: "suane",
        title: "Suane Digitals Website",
        to: "/work/writing/ux/suane"
      }
    ]
  },
  {
    title: "Poetry",
    items: [
      {
        imageId: "free-verse",
        title: "Free Verse",
        to: "/work/writing/free-verse"
      },
      {
        imageId: "spoken-word",
        title: "Spoken Word",
        to: "/work/writing/spoken-word"
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
        allFile(filter: {relativeDirectory: {eq: "writing"}}){
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
