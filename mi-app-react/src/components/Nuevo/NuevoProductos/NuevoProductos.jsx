import React, { useEffect, useState } from 'react'

export const NuevoProductos = ({ propGrupo }) => {
    const [arrayProductosNuevos, setArrayProductosNuevos] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/productosNuevos.json")
                const data = await response.json()
                setArrayProductosNuevos(data)
            } catch (error) {
                console.log("Error al traer productos nuevos")
            }
        }
        fetchData()
    }, [])

    return (
        <>
            {arrayProductosNuevos
                .filter(producto => producto.grupo === propGrupo)
                .map(({ id, grupo, nombre, imagen }) => (
                    <div key={id} className="card" style={{ width: '18rem' }}>
                        <img src={imagen} className="card-img-top" alt={grupo} />
                        <div className="card-body">
                            <p className="card-text">{nombre}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
