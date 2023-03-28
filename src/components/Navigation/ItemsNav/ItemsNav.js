import React from 'react'
import ItemNav from '../ItemNav/ItemNav'
import "./ItemsNav.css"

const ItemsNav = () => {
  return (
    <ul className="nav-Items">
        <ItemNav link="/">shopping</ItemNav>
        <ItemNav link="/account">My Account</ItemNav>
    </ul>
  )
}

export default ItemsNav