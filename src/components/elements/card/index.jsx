import './card.css'
import { addProductsBasket } from '../../../store/reducers/products';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { Link } from "react-router-dom";

function Card({id, img, title, description, price, weight, click}) {
  const dispatch = useDispatch();

  const addProduct = () => {
    const item = {
      id: id,
      idx: uuid(),
      title: title,
      img: img,
      price: price
    }

    dispatch(addProductsBasket(item));
  }

  return (
    <div className="card">
      <div className='card-wrapper'>
        <Link to={'/description'} className='card-product-container'>
          <img className='card-image' src={img} alt="foodImage" />
          <h1 className='card-title'>{title}</h1>
          <p className='card-subtitle'>{description}</p>
        </Link>
        <div className='card-price'>
          <p>{price} ₽ <span className='card-price-weight'>/ {weight} г.</span></p>
          {/* <button onClick={click} className='card-btn'>+</button>  до homework_06 без redux делала так */}
          <button onClick={addProduct} className='card-btn'>+</button>
        </div>
      </div>
    </div>
  )
}

export default Card;