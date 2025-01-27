import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router'

const NavBar = () => {
const [action,setAction]=useState(false)
  return (
    <div className='MiBox'>
      <Link to="/" className='NavBox' ><h3>Home </h3> </Link>
      <Link to="/AddData" className='NavBox'><h3>Add Data</h3> </Link>
      <Link to="/UpdateData" className='NavBox ' ><h3>Updata Data</h3> </Link>
      <Link to='https://www.linkedin.com/in/akshat-singhai-727bb5302/'
       target='block' className='NavBox ' >
      <h3 className='h3box' > Create By AKSHAT-SINGHAI </h3></Link>
    </div>
  )
}

export default NavBar
