import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { dummyData } from '../data/suggestProduct'

export default function SuggestProduct() {
  return (
    <div className="d-flex flex-column shadow-lg p-3 m-auto mt-5" style={{ maxWidth: '1200px' }}>
      <h1 className="text-center">Suggest Product</h1>
      {dummyData.map((product) => (
        <div className="d-flex align-items-center mt-4">
          <img src={product.image} alt="product" />
          <div className="d-flex flex-column" style={{ marginLeft: '16px' }}>
            <h2>{product.name}</h2>
            <h4>{product.price} $</h4>
            <p>Category: {product.type}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
