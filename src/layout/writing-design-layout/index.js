import React, { useMemo } from "react"
import classes from "./writing-design-layout.module.css"
import Layout from "../../components/Layout"
import Card from "../../components/Card"
import MobileCarousel from "../../components/MobileCarousel"

const WritingDesignLayout = ({ data, sections, pageTitle, description, pageHeader }) => {
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
    <Layout
      pageTitle={pageTitle}
      description={description}
      pageHeader={pageHeader}
    >
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
            <div className={classes.sectionCarousel}>
              <MobileCarousel>
                {
                  items.map(({ imageId, title, to }) => (
                    <Card
                      fluid={images[imageId]}
                      title={title}
                      to={to}
                    />
                  ))
                }
              </MobileCarousel>
            </div>
          </div>
        ))
      }
    </Layout>
  )
}

export default WritingDesignLayout
