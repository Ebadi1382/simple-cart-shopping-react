import React from 'react'
import "./BackDrop.css"

const BackDrop = ({show,closeBackdropHandler}) => {
  return show? <div className="backdrop" onClick={closeBackdropHandler}></div>:null
}

export default BackDrop