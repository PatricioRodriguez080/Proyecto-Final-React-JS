import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Total = () => {
    const { totalAPagar } = useContext(CartContext)

    return (
        <div className="pb-4">
            <h2 className="text-center">Total: ${totalAPagar.toFixed(2)}</h2>
        </div>
    )
}

export default Total