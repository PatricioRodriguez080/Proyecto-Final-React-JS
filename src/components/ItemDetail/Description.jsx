import React from 'react'

const Description = ({ descripcion1, nombre }) => {
  return (
    <img src={descripcion1} className="imagen-item-detail-descripcion" alt={nombre} />
  )
}

export default Description