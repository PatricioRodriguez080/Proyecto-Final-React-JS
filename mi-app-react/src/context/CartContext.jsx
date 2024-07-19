import { Children, createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children, arrayProductos}) => {
    const [carrito, setCarrito] = useState([])
    const [contadorItems, setContadorItems] = useState(0)
    const [totalAPagar, setTotalAPagar] = useState(0)

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

    useEffect(() => {
        setContadorItems(carrito.length)
        let totalCarrito = carrito.reduce((acum, item) => acum + item.precioTotal, 0)
        setTotalAPagar(totalCarrito)
    },[carrito])

    return <CartContext.Provider value={{carrito, isInCart, agregarProductosCarrito, removeItem, clearCart, contadorItems, totalAPagar}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider