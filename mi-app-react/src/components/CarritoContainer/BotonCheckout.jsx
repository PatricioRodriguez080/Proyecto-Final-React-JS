import React from 'react'
import { Link } from 'react-router-dom'

const BotonCheckout = () => {
  return (
    <button type="button" className="btn btn-item-detail me-2">
        <Link className="boton-checkout" to="/carrito/checkout">Checkout</Link>
    </button>
  )
}

export default BotonCheckout