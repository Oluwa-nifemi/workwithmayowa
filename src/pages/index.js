import React from 'react';
import Layout from '../components/Layout';
import classes from './index.module.css';
import {graphql, Link} from 'gatsby';
import Img from 'gatsby-image';

const Index = ({ data }) => {
  return (
    <Layout
      isPageHeight
      mainClassName={classes.main}
    >
      <h1 className={classes.intro}>
        Hello, I’m Mayowa Adeyemi, a {' '}
        <Link
          to='/works/writer'
          className={classes.introLink}
        >Writer
        </Link> & {' '}
        <Link
          to='/works/designer'
          className={classes.introLink}
        >Designer.
        </Link>
      </h1>
      <div className={classes.imageContainer}>
        <div className={classes.imageBg}/>
        <Img
          fluid={data.file?.childImageSharp?.fluid}
          alt="Mayowa"
          className={classes.image}
        />
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
