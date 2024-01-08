import React from 'react'
import { Routes ,Route} from 'react-router-dom'
// import  withAppbar from './withAppbar'
import Header from '../layouts/appBar'
import ProductCard from '../component/ProductCard'


export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={
        <ProductCard/>
        }/>
        <Route path='/dashboard' element={'dashboard'}/>
    </Routes>
  )
}
