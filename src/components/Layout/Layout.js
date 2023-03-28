import React from 'react'
import Wrapper from '../../hoc/Wrapper'
import Navbar from '../Navigation/Navbar/Navbar'
import "./Layout.css"

const Layout = ({children}) => {
  return (
    <Wrapper>
        <div className="title"><Navbar/></div>
        {children}
    </Wrapper>
  )
}

export default Layout