import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonIteDetail = () => {
  return (
    <>
      <div className="card card-item-detail mb-3">
        <div className="row row-item-detail g-0">
          <div className="col-md-5">
            <Skeleton height={696}/>
          </div>
          <div className="col-md-7">
            <div className="card-body card-body-item-detail">
              <Skeleton height={70} width={500}/>
              <Skeleton height={40} width={200}/>
              <div className="container-boton-grup d-flex mb-3">
                <Skeleton width={150}/>
              </div>
              <div>
                <Skeleton height={60}/>
              </div>
                <Skeleton height={60} width={200}/>
            </div>
          </div>
        </div>
        <div className="row row-item-detail-descripcion">
          <Skeleton height={20} width={400}/>
          <Skeleton height={600} style={{ margin: 30 }}/>
        </div>
      </div>
    </>
  )
}

export default SkeletonIteDetail