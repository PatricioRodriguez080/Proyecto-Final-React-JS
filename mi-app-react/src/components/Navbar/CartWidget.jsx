import React from 'react'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
  return (
    <Link to="/carrito" className='text-black'>
        <i className="fa-solid fa-cart-shopping"></i>
        <strong className='contador-elementos-carrito'>0</strong>
    </Link>
  )
}
