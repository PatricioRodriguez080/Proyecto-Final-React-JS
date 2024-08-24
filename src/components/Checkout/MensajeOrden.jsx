import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const MensajeOrden = () => {
    const { orderId, setOrderId } = useContext(CartContext)
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            setOrderId("")
            navigate('/')
        }, 4000)

        return () => clearTimeout(timer)
    }, [navigate, setOrderId])

    return (
        <div className="container-custom">
            <div className="container-alert-checkout">
                <div className="alert alert-checkout alert-light text-center" role="alert">
                    <h2>Gracias por su compra!!</h2>
                    <p>Su orden de compra es: <b>{orderId}</b></p>
                    <p>Volviendo al inicio...</p>
                </div>
            </div>
        </div>
    )
}

export default MensajeOrden