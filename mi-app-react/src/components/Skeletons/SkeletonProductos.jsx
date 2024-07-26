import React from 'react'
import { Link } from "react-router-dom"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonProductos = () => {
  return (
    <>
      <div className="row row-item-list-container">
        {Array(8).fill().map((_, index) => (
          <div className="col col-item-list-container" key={index}>
            <div className="card" style={{ width: '18rem' }}>
              <Skeleton height={288} />
              <div className="card-body card-body-nuevos-productos">
                <Skeleton count={1} height={20} style={{ marginBottom: 10 }} />
                <Skeleton width={`60%`} height={30} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SkeletonProductos