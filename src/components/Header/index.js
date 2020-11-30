import React, { useRef, useState } from "react"
import classes from "./header.module.css"
import logo from "../../assets/images/logo.svg"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { useHideOnClickOutside } from "../../hooks/useHideOnClickOutside"

const Header = () => {
  return (
    <nav className={classes.header}>
      <Link
        to={'/'}
      >
        <img
          src={logo}
          alt="Logo"
          className={classes.navLogo}
        />
      </Link>
      <div className={classes.navLinks}>
        <Link
          to={'/'}
          className={classes.navLink}
          activeClassName={classes.navLinkActive}
        >
          Home
        </Link>
        <Link
          to={'/about'}
          className={classes.navLink}
          activeClassName={classes.navLinkActive}
        >
          About
        </Link>
        <WorkDropdown/>
        <Link
          to={'/contact'}
          className={classes.navLink}
          activeClassName={classes.navLinkActive}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

const WorkDropdown = () => {
  const [show, setShow] = useState(false)

  const toggleShow = () => setShow(prev => !prev)

  const dropdownRef = useRef()

  useHideOnClickOutside({
    open: show,
    onHide: toggleShow,
    ref: dropdownRef
  })

  return (
    <div
      className={classes.navLink}
      ref={dropdownRef}
    >
      <button
        className={classes.navDropdownButton}
        onClick={toggleShow}
      >
        Work
      </button>
      <motion.div
        className={classes.navDropdownItems}
        initial='closed'
        animate={show ? 'open' : 'closed'}
        variants={{
          open: {
            height: 'auto',
            opacity: 1
          },
          closed: {
            height: 0,
            opacity: 0
          }
        }}
      >
        <Link
          to={'/work/writing'}
          className={classes.navDropdownItem}
        >
          Writing
        </Link>
        <Link
          to={'/work/design'}
          className={classes.navDropdownItem}
        >
          Design
        </Link>
      </motion.div>
    </div>
  );
};

export default Header;
