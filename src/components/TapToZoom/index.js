import React, { useState } from "react"
import Modal from "../Modal"
import classes from "./tapToZoom.module.css"

const TapToZoom = ({children, modalContent = children}) => {
  const [zoomed, setZoomed] = useState(false)

  const toggleZoom = () => setZoomed(prevState => !prevState)

  return (
    <div onClick={toggleZoom} className={classes.zoom} style={{width: '100%'}}>
      <small className={classes.zoomText}>Tap image to zoom</small>
      <div
        onClick={e => e.stopPropagation()}
      >
        <Modal isOpen={zoomed} onClose={toggleZoom}>
          {modalContent}
        </Modal>
      </div>
      {children}
    </div>
  )
}

export default TapToZoom
