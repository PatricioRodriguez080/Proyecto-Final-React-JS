import { Children, createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children, arrayProductos}) => {
    const [carrito, setCarrito] = useState([])

    const isInCart = (id) => {
        return carrito.some(producto => producto.id === id)
    }

    const agregarProductosCarrito = (id, cantidad) => {
        const producto = arrayProductos.find(prod => prod.id === id)

        const nuevoProducto = {
            ...producto,
            cantidad,
            precioTotal: producto.precio * cantidad
        }

        if (isInCart(id)) {
            setCarrito(carrito.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        cantidad: item.cantidad + cantidad,
                        precioTotal: item.precioTotal + (producto.precio * cantidad)
                    }
                } else {
                    return item
                }
            }))
        } else {
            setCarrito([...carrito, nuevoProducto])
        }
    }

    const removeItem = (id) => {
        setCarrito(carrito.filter((producto) => producto.id !== id))
    }

    const clearCart = () => {
        setCarrito([])
    }

    return <CartContext.Provider value={{carrito, isInCart, agregarProductosCarrito, removeItem, clearCart}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider