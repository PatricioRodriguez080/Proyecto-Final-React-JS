import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonNuevosProductos = () => {
  return (
    <>
      {Array(4).fill().map((_, index) => (
        <div className="col col-nuevos-productos" key={index}>
          <div className="card" style={{ width: '18rem' }}>
            <Skeleton height={288} />
            <div className="card-body card-body-nuevos-productos">
              <Skeleton count={1} height={20} style={{ marginBottom: 10 }} />
              <Skeleton width={`60%`} height={30} />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default SkeletonNuevosProductos