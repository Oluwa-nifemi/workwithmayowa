import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import classes from "./index.module.css"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"

const Index = ({ data }) => {
  const [width, setWidth] = useState({})

  useEffect(() => {
    //Delay for fonts to load
    setTimeout(() => {
      setWidth({
        width: '100%'
      })
    }, 500)
  }, [])

  return (
    <Layout
      isPageHeight
      mainClassName={classes.main}
      centerFooter={false}
    >
      <h1 className={classes.intro}>
        Hello, I’m Mayowa Adeyemi, a {' '}
        <Link
          to='/works/writer'
          className={classes.introLink}
        >
          Writer
          <motion.div
            initial={{
              width: '0'
            }}
            animate={width}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 100
            }}
            className={classes.introLinkLine}
          />
        </Link> & {' '}
        <Link
          to='/works/designer'
          className={classes.introLink}
        >
          Designer
          <motion.div
            initial={{
              width: '0'
            }}
            animate={width}
            transition={{
              delay: 0.5,
              duration: 0.3,
              type: "spring",
              stiffness: 100
            }}
            className={classes.introLinkLine}
          />
        </Link>.
      </h1>
      <div className={classes.imageContainer}>
        <div className={classes.imageBg}/>
        <motion.div
          initial='closed'
          animate='open'
          variants={{
            open: {
              height: '100%',
              x: 17,
              y: 17
            },
            closed: {
              height: '0',
              x: 17,
              y: 17
            }
          }}
          transition={{ duration: 0.5, delayChildren: 1.5 }}
          className={classes.imageWrapper}
          whileHover={{
            x: 10,
            y: 10,
          }}
        >
          <motion.div
            initial='big'
            animate='small'
            variants={{
              big: {
                scale: 1.4
              },
              small: {
                scale: 1
              }
            }}
            transition={{
              duration: 0.5
            }}
          >
          <Img
            fluid={data.file?.childImageSharp?.fluid}
            alt="Mayowa"
            className={classes.image}
          />
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  )
}

export default Index

export const query = graphql`
    {
        file(relativePath:{eq:"potrait.jpg"}){
            childImageSharp{
                fluid(quality: 80){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
