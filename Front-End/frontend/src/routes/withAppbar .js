import React from 'react'
import Navbar from '../layouts/appBar'



export default function withAppbar ({ children }) {
  return (
    <>
    <Navbar/>
    {children}
    
    </>
    
  )
}
