import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Total = () => {
    const { totalAPagar } = useContext(CartContext)

    return (
        <div>
            <h2>Total: {totalAPagar}</h2>
        </div>
    )
}

export default Total