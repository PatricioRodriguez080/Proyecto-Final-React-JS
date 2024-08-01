import './ItemDetail.css'
import { useCount } from '../../hooks/useCount'
import AddItemButton from './AddItemButton'
import Description from './Description'
import ItemQuantitySelector from './ItemQuantitySelector'

const ItemDetail = ({ id, nombre, precio, imagen, descripcion1 }) => {
  const { count, incrementar, decrementar } = useCount(1,1,10)

  return (
      <div className="card card-item-detail mb-3">
        <div className="row row-item-detail g-0">
          <div className="col-md-5">
            <img src={imagen} className="img-fluid rounded-start" alt={nombre} />
          </div>
          <div className="col-md-7">
            <div className="card-body card-body-item-detail">
              <h5 className="card-title card-title-item-detail mb-3">{nombre}</h5>
              <p className="card-text card-text-item-detail mb-3">${precio}</p>
              <ItemQuantitySelector decrementar={decrementar} count={count} incrementar={incrementar} />
              <div className="alert alert-dark d-flex align-items-center mb-4" role="alert">
                <i className="fa-solid fa-info-circle me-2"></i>
                <div>
                  Scheduled Delivery Date is subject to product and logistics issues and may face delays. If the schedule is changed, customers will be notified individually.
                </div>
              </div>
              <AddItemButton id={id} count={count} />
            </div>
          </div>
        </div>
        <div className="row row-item-detail-descripcion">
          <h2 className="text-center mb-4">Description</h2>
          <Description descripcion1={descripcion1} nombre={nombre} />
        </div>
      </div>
  )
}

export default ItemDetail
