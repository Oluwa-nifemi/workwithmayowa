import React, { useState } from "react"
import classes from "./header.module.css"
import { Link } from "gatsby"
import logo from "../../assets/images/logo.svg"
import cancel from "../../assets/images/cancel.svg"
import { motion } from "framer-motion"

const SideNav = ({ showNav, toggleShowNav }) => {
  return (
    <motion.aside
      className={classes.sideNav}
      initial={false}
      animate={showNav ? "show" : "hide"}
      variants={{
        show: {
          x: 0
        },
        hide: {
          x: "100%"
        }
      }}
      transition={{ duration: 0.3 }}
    >
      <div className={classes.sideNavTop}>
        <Link
          to={"/"}
        >
          <img
            src={logo}
            alt="Logo"
            className={classes.navLogo}
          />
        </Link>
        <button className={classes.navToggle} onClick={toggleShowNav}>
          <img src={cancel} alt="Close Side Nav" />
        </button>
      </div>
      <div className={classes.sideNavLinks}>
        <Link
          to={"/"}
          className={classes.navLink}
          activeClassName={classes.navLinkActive}
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className={classes.navLink}
          activeClassName={classes.navLinkActive}
        >
          About
        </Link>
        <WorkDropdown />
        <Link
          to={"/contact"}
          className={classes.navLink}
          activeClassName={classes.navLinkActive}
        >
          Contact
        </Link>
      </div>
    </motion.aside>
  )
}

const dropdownVariants = {
  show: {
    x: 0,
    opacity: 1
  },
  hide: {
    x: -20,
    opacity: 0
  }
}

const WorkDropdown = () => {
  const [show, setShow] = useState(false)

  const toggleShow = () => setShow(prev => !prev)

  const transition = show ?
    {
      duration: 0.3,
      delayChildren: 0.5
    } : {
      duration: 0.3,
      delay: 0.3
    }

  return (
    <div>
      <button
        className={classes.navDropdownButton}
        onClick={toggleShow}
      >
        Work
      </button>
      <motion.div
        className={classes.sideNavDropdownItems}
        initial='closed'
        animate={show ? "open" : "closed"}
        variants={{
          open: {
            height: "auto",
            opacity: 1
          },
          closed: {
            height: 0,
            opacity: 0
          }
        }}
        transition={transition}
      >
        <motion.div
          animate={show ? "show" : "hide"}
          variants={dropdownVariants}
          transition={{ duration: 0.3 }}
        >
          <Link
            to={"/work/writing"}
            className={classes.navDropdownItem}
          >
            Writing
          </Link>
        </motion.div>
        <motion.div
          animate={show ? "show" : "hide"}
          variants={dropdownVariants}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Link
            to={"/work/design"}
            className={classes.navDropdownItem}
          >
            Design
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SideNav
