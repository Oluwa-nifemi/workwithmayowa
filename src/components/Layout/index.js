import React from 'react';
import classes from './layout.module.css';
import Header from '../Header';
import Footer from '../Footer';
import {classNames} from '../../util/functions';

const Layout = ({ children, isPageHeight = false, mainClassName, centerFooter = true, pageTitle }) => {
  return (
    <div className={classNames(classes.layout, isPageHeight && classes.layoutPageHeight)}>
      <Header/>
      {
        pageTitle && (
          <h1 className={classes.pageTitle}>
            {pageTitle}
          </h1>
        )
      }
      <main className={classNames(mainClassName, classes.main)}>
        {children}
      </main>
      <Footer centerFooter={centerFooter}/>
    </div>
  );
};

export default Layout;
