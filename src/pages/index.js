import React from 'react';
import Layout from '../components/Layout';
import classes from './index.module.css';
import {Link} from 'gatsby';
import potrait from '../assets/images/potrait.jpg';

const Index = () => {
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
        <img
          src={potrait}
          alt="Mayowa"
          className={classes.image}
        />
      </div>
    </Layout>
  )
}

export default Index
