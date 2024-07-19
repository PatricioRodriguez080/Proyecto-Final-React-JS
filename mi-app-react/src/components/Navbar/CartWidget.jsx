import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {
  const { contadorItems } = useContext(CartContext)

  return (
    <Link to="/carrito" className='text-black'>
        <i className="fa-solid fa-cart-shopping"></i>
        <strong className='contador-elementos-carrito'>{contadorItems}</strong>
    </Link>
  )
}
