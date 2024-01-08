import React from 'react'
import style from '../component/productCard.module.css'

 const ProductCard=() =>{
  return (
    <div className={style.card}>
    <h5 className={style.h5}>Product Title</h5>
    <p className={style.p}>Category: Electronics</p>
    <p className={style.p}>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p className={style.p}>Price: $99.99</p>
    <p className={style.p}>Supplier: Supplier Name</p>
    <p className={style.p}>Username: JohnDoe</p>
</div>)
}
export default ProductCard
