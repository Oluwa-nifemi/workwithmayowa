import React from "react"
import classes from "./layout.module.css"
import Header from "../Header"
import Footer from "../Footer"
import { classNames } from "../../util/functions"
import SEO from "../SEO"

const Layout = ({ children, isPageHeight = false, mainClassName, centerFooter = true, pageTitle, titleTemplate = true, description }) => {
  return (
    <div className={classNames(classes.layout, isPageHeight && classes.layoutPageHeight)}>
      <SEO
        title={pageTitle}
        titleTemplate={titleTemplate}
        description={description}
      />
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
