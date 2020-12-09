import React, { useState } from "react"
import left from "../../assets/images/left.svg"
import right from "../../assets/images/right.svg"
import classes from "./carousel.module.css"
import { AnimateSharedLayout, motion } from "framer-motion"
import { classNames } from "../../util/functions"

const wrap = (total, currentPage) => {
  return Math.abs(currentPage % total)
}

const variants = {
  show: {
    opacity: 1
  },
  hide: {
    opacity: 0
  }
}

const Carousel = ({ children, marginBottom = 75, className }) => {
  const childrenArray = [].concat(children)

  const [page, setPage] = useState(0)

  const imageIndex = wrap(childrenArray.length, page)

  const paginate = (newDirection) => () => {
    setPage(page + newDirection)
  }

  return (
    <div
      className={classNames(classes.carousel, className)}
      style={{
        '--margin-bottom': `${marginBottom}px`
      }}
    >
      <button
        className={classes.carouselButton}
        onClick={paginate(-1)}
      >
        <img src={left} alt="Move Carousel Backwards" />
      </button>
      <AnimateSharedLayout type='crossfade'>
        <motion.div
          key={page}
          initial='hide'
          animate='show'
          exit='hide'
          variants={variants}
          transition={{duration: 0.6}}
          className={classes.item}
        >
          {childrenArray[imageIndex]}
        </motion.div>
      </AnimateSharedLayout>
      <button
        className={classes.carouselButton}
        onClick={paginate(1)}
      >
        <img src={right} alt="Move Carousel Forwards" />
      </button>
    </div>
  )
}

export default Carousel
