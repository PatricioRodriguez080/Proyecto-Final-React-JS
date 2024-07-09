import React, { useEffect, useState } from 'react'

export const NuevoProductos = ({propGrupo, filtrarPorGrupo}) => {
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
        <div className="container-nuevo">
            <div className="container-nuevos-productos">
                <div className="container-titulo-nuevos-productos d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img src={`./images/logo${propGrupo}.png`} className="imagen-nuevos-productos" alt={propGrupo} />
                        <h3 className="ms-3 mb-0">{propGrupo}</h3>
                    </div>
                    <h4 className="titulo-ver-todo mb-0" onClick={() => filtrarPorGrupo(propGrupo)}>Ver todo</h4>
                </div>
                <div className="row container-cards-nuevos-productos">
                    {arrayProductosNuevos
                        .filter(producto => producto.grupo === propGrupo)
                        .map(({ id, grupo, nombre, imagen, precio }) => (
                            <div key={id} className="col col-nuevos-productos">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={imagen} className="card-img-top" alt={grupo} />
                                    <div className="card-body card-body-nuevos-productos">
                                        <p className="card-text">{nombre}</p>
                                        <h4 className="mt-1">${precio}</h4>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}