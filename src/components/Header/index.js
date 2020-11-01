import React, {useState} from 'react';
import classes from './header.module.css';
import logo from '../../assets/images/logo.svg';
import {Link} from 'gatsby';
import {classNames} from '../../util/functions';
import {motion} from 'framer-motion';

const Header = () => {
  return (
    <nav className={classes.header}>
      <Link
        to={'/'}
      >
        <img
          src={logo}
          alt="Logo"
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

  return (
    <div className={classes.navLink}>
      <button
        className={classes.navDropdownButton}
        onClick={toggleShow}
      >
        Work
      </button>
      <motion.div
        className={
          classNames(
            classes.navDropdownItems,
            show && classes.navDropdownItemsActive
          )
        }
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
