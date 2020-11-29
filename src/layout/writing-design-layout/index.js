import React, { useMemo } from "react"
import classes from "./writing-design-layout.module.css"
import Layout from "../../components/Layout"
import Card from "../../components/Card"

const WritingDesignLayout = ({ data, sections, pageTitle }) => {
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
    <Layout pageTitle={pageTitle}>
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

export default WritingDesignLayout
