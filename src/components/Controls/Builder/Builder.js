import React from 'react'
import "./Builder.css"

const Builder = ({title,addProduct,removeProduct}) => {
  return (
    <div className="builder">
        <div>{title}</div>
        <div>
        <button onClick={addProduct} className="btn btn-outline-success p-3 me-2">Add</button>
        <button onClick={removeProduct} className="btn btn-outline-danger p-3 ms-2">Remove</button>
        </div>
    </div>
  )
}

export default Builder