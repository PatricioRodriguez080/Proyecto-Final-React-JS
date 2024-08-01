import React from 'react'

const ItemQuantitySelector = ({ decrementar, count, incrementar }) => {
    return (
        <div className="container-boton-grup d-flex mb-3">
            <i className="fa-solid fa-minus " onClick={decrementar}></i>
            <p className="mb-0 mx-2">{count}</p>
            <i className="fa-solid fa-plus" onClick={incrementar}></i>
        </div>
    )
}

export default ItemQuantitySelector