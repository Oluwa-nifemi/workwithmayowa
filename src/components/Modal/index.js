import React, { useRef } from "react"
import classes from "./modal.module.css"
import { AnimatePresence, motion } from "framer-motion"
import cancelIcon from "../../assets/images/cancel.svg"
import { useHideOnClickOutside } from "../../hooks/useHideOnClickOutside"
import PropTypes from "prop-types"
import { classNames } from "../../util/functions"

const bodyVariants = {
  open: {
    opacity: 1,
    scale: 1
  },
  closed: {
    opacity: 0,
    scale: 0.5
  }
}

const wrapperVariants = {
  open: {
    opacity: 1,
    transition: {
      when: "beforeChildren"
    }
  },
  closed: {
    opacity: 0,
    transition: {
      when: "afterChildren"
    }
  }
}

const Modal = ({ isOpen, onClose, children, className }) => {
  const modalRef = useRef()

  useHideOnClickOutside({
    ref: modalRef,
    open: isOpen,
    onHide: onClose,

  })

  return (
    <AnimatePresence initial={false}>
      {
        isOpen && (
          <motion.div
            className={classes.modalBg}
            variants={wrapperVariants}
            initial='closed'
            animate='open'
            exit='closed'
          >
            <motion.div
              key='modal'
              initial='closed'
              animate='open'
              exit='closed'
              ref={modalRef}
              variants={bodyVariants}
              transition={{ duration: 0.5, type: "tween" }}
              className={classNames(className, classes.modal)}
            >
              <button
                className={classes.modalClose}
                onClick={onClose}
              >
                <img src={cancelIcon} alt="Close modal" />
              </button>
              {children}
            </motion.div>
          </motion.div>
        )
      }
    </AnimatePresence>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Modal
