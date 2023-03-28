import React from 'react'
import Wrapper from '../../hoc/Wrapper'
import "./Order.css"
import Button from "../Ui/Button/Button"
import { Routes, Route, Link } from "react-router-dom";

const Order = ({product,closeBackdropHandler,totalPrices,continueClickHandler}) => {
    const summary = Object.keys(product).map((item,index)=> {
        return(
            <li className="child-ul" key={index}>
                {item} : <p className="num-li">{product[item]}</p>
            </li>
        )
    })
  return (
    <Wrapper>
        <h3>order</h3>
        <p>totalPrice: {totalPrices}</p>
        <ul>
        {summary}
        </ul>
        <p>Continue ?</p>
        <Link to={"/checkOut"} className="btn btn-outline-info p-3 m-1" onClick={continueClickHandler}>Yes</Link>
        <Button className="btn btn-outline-warning p-3 m-1" onClick={closeBackdropHandler}>No</Button>
    </Wrapper>
  )
}

export default Order