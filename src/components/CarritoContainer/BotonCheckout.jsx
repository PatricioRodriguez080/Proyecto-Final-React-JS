import React from 'react'
import { Link } from 'react-router-dom'

const BotonCheckout = () => {
  return (
    <Link className="boton-checkout" to="/carrito/checkout">
      <button type="button" className="btn boton-custom-primario me-2">Checkout</button>
    </Link>
  )
}

export default BotonCheckout
