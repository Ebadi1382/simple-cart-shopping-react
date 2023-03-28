import React from 'react'
import { Link } from 'react-router-dom'
import "./ItemNav.css"

const ItemNav = ({link,children}) => {
  return (
    <li className="nav-item">
        <Link to={link}>{children}</Link>
    </li>
  )
}
export default ItemNav