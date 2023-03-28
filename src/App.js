import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css"
import Account from './components/Account/Account';
import CheckOut from './components/CheckOut/CheckOut';
import Layout from './components/Layout/Layout'
import Shopping from './container/Shopping/Shopping'

function App() {
  return (
    <BrowserRouter>
    <div className="main-page">
      <Layout>
        <Routes>
        <Route path="/" element={<Shopping />} />
        <Route path="/checkOut" element={<CheckOut />} />
        <Route path="/account" element={<Account />} />
        </Routes>
      </Layout>
    </div>
    </BrowserRouter>
  )
}

export default App