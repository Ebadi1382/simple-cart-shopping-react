import React from 'react'
import Builder from './Builder/Builder'
import "./Controls.css"

const products = [
    {title:"product 1",type:"product1"},
    {title:"product 2",type:"product2"},
    {title:"product 3",type:"product3"},
    {title:"product 4",type:"product4"},
    {title:"product 5",type:"product5"},
]
const Controls = ({addProduct,removeProduct,totalPrices,orderShow}) => {
  return (
    <div className="controls">
        <p>total Price : {totalPrices}</p>
        {products.map((item,index)=> {
            return <Builder
            addProduct={()=>addProduct(item.type)}
            removeProduct={()=>removeProduct(item.type)}
            title={item.title}
            key={index}
            />
        })}
        <button onClick={orderShow} style={{zIndex:200}} className="btn btn-outline-warning p-2 mt-3">Order</button>
    </div>
  )
}

export default Controls