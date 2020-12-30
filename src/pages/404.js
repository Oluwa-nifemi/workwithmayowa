import React, { useEffect, useRef, useState } from "react"
import Layout from "../components/Layout"
import { getRandomInt } from "../util/functions"
import classes from "./404.module.css"
import { Link } from "gatsby"

const Lost = () => {
  const [gif, setGif] = useState(null)
  const videoRef = useRef()

  useEffect(() => {
    const number = getRandomInt(1, 5)

    import(`../assets/images/404/${number}.gif`).then(({default: gif}) => setGif(gif))
  }, [])

  return (
    <Layout
      mainClassName={classes.lost}
    >
      <h1 className={classes.pageTitle}>
        You’ve Unlocked My Secret <span className={classes.strikethrough}>Broken</span> Page
      </h1>
      {
        gif && (
          <img
            src={gif}
            ref={videoRef}
            alt='404 Gif'
            className={classes.image}
          />
        )
      }
      <p className={classes.text}>
        The truth is, there’s nothing to see here. Were you looking for my <Link to='/work/writing'>writing</Link> or <Link to='/work/design'>design</Link> works? Trying to learn more <Link to='/about'>about me</Link>? You can also head back <Link to='/'>home</Link> and start afresh.
      </p>
    </Layout>
  )
}

export default Lost
